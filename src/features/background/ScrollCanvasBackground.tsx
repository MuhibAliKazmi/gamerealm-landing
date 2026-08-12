import { useEffect, useRef } from 'react';

function createImageLoader(frameCount: number): {
  images: HTMLImageElement[];
  load: () => Promise<void>;
} {
  const images: HTMLImageElement[] = [];

  const load = async () => {
    const loadPromises = Array.from({ length: frameCount }, (_, i) => {
      return new Promise<void>((resolve) => {
        const image = new Image();
        image.src = `/frames/frame_${String(i).padStart(4, '0')}.jpg`;
        images.push(image);
        image.onload = () => resolve();
        image.onerror = () => resolve();
      });
    });

    await Promise.all(loadPromises);
  };

  return { images, load };
}

function drawScaled(
  img: HTMLImageElement,
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  const scale = Math.max(width / img.width, height / img.height);
  const x = (width / 2 - (img.width / 2) * scale);
  const y = (height / 2 - (img.height / 2) * scale);
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}

export function ScrollCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameCount = 240;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const { images, load } = createImageLoader(frameCount);

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    load().then(() => {
      imagesRef.current = images;
      if (images[0]?.complete) {
        drawScaled(images[0], context, canvas.width, canvas.height);
      }
    });

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(scrollFraction * frameCount))
      );

      requestAnimationFrame(() => {
        const imageToDraw = imagesRef.current[frameIndex];
        if (imageToDraw?.complete) {
          drawScaled(imageToDraw, context, canvas.width, canvas.height);
        }
      });
    };

    const handleResize = () => {
      setCanvasSize();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-50 bg-black">
      <canvas ref={canvasRef} className="block w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-zinc-950/40" />
    </div>
  );
}
