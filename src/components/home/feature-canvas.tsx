'use client';

import { useRef, useEffect, useState } from 'react';
import { useSettings } from '@/components/theme-provider';

interface FeatureCanvasProps {
  title: string;
}

export function FeatureCanvas({ title }: FeatureCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme, accentColor, isMounted } = useSettings();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!isMounted || dimensions.width === 0 || dimensions.height === 0) return;

    const { width, height } = dimensions;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const style = getComputedStyle(document.documentElement);
    const backgroundHsl = style.getPropertyValue('--background').trim();
    const foregroundHsl = style.getPropertyValue('--foreground').trim();
    const mutedHsl = style.getPropertyValue('--muted').trim();
    const primaryHsl = style.getPropertyValue('--primary').trim();
    
    const bgColor = `hsl(${backgroundHsl})`;
    const foregroundColor = `hsl(${foregroundHsl})`;
    const mutedColor = `hsl(${mutedHsl})`;
    const primaryColor = `hsl(${primaryHsl})`;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);
    
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, mutedColor);
    gradient.addColorStop(1, bgColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = primaryColor;
    ctx.globalAlpha = 0.2;
    ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * width,
        Math.random() * height,
        Math.random() * (width / 12.5) + (width / 25), // Responsive radius
        0,
        Math.PI * 2
      );
      ctx.stroke();
    }
    ctx.globalAlpha = 1.0;

    ctx.fillStyle = foregroundColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    let fontSize = Math.max(20, Math.floor(width / 12));
    do {
      fontSize--;
      ctx.font = `bold ${fontSize}px "Space Grotesk", sans-serif`;
    } while (ctx.measureText(title).width > width - (width / 5) && fontSize > 20);

    ctx.fillText(title, width / 2, height / 2);

  }, [title, dimensions, theme, accentColor, isMounted]);

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full">
      <canvas ref={canvasRef} />
    </div>
  );
}
