'use client';

import { useRef, useEffect } from 'react';
import { useSettings } from '@/components/theme-provider';

interface FeatureCanvasProps {
  title: string;
  width: number;
  height: number;
  className?: string;
}

export function FeatureCanvas({ title, width, height, className }: FeatureCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme, accentColor, isMounted } = useSettings();

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // It's safer to get computed style to ensure we have the final values
    const style = getComputedStyle(document.documentElement);
    const backgroundHsl = style.getPropertyValue('--background').trim();
    const foregroundHsl = style.getPropertyValue('--foreground').trim();
    const mutedHsl = style.getPropertyValue('--muted').trim();
    const primaryHsl = style.getPropertyValue('--primary').trim();
    
    const bgColor = `hsl(${backgroundHsl})`;
    const foregroundColor = `hsl(${foregroundHsl})`;
    const mutedColor = `hsl(${mutedHsl})`;
    const primaryColor = `hsl(${primaryHsl})`;

    // Handle High-DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, mutedColor);
    gradient.addColorStop(1, bgColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Aesthetic shapes
    ctx.strokeStyle = primaryColor;
    ctx.globalAlpha = 0.2;
    ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 40 + 20,
        0,
        Math.PI * 2
      );
      ctx.stroke();
    }
    ctx.globalAlpha = 1.0;

    // Text styling
    ctx.fillStyle = foregroundColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Auto-adjust font size
    let fontSize = 52;
    do {
      fontSize--;
      ctx.font = `bold ${fontSize}px "Space Grotesk", sans-serif`;
    } while (ctx.measureText(title).width > width - 80 && fontSize > 20);

    // Draw text
    ctx.fillText(title, width / 2, height / 2);

  }, [title, width, height, theme, accentColor, isMounted]);

  return <canvas ref={canvasRef} className={className} />;
}
