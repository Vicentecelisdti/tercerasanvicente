import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 59;

const getFramePath = (index: number) => {
  const paddedIndex = String(index + 1).padStart(4, '0');
  return `/frames/frame_${paddedIndex}.webp`;
};

export const ScrollScrubSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Refs directos para los 4 bloques de texto
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);

  const lastLoggedFrame = useRef<number>(-1);
  const lastLoggedText = useRef<number>(-1);

  useEffect(() => {
    console.log(`[ScrubSequence] 🚀 Iniciando pre-carga de ${TOTAL_FRAMES} fotogramas...`);
    
    const loadedImages: HTMLImageElement[] = [];
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const path = getFramePath(i);
      img.src = path;

      img.onload = () => {
        successCount++;
        if (i === 0 || i === 29 || i === 58) {
          console.log(`[ScrubSequence] 🟢 Fotograma ${i + 1}/${TOTAL_FRAMES} cargado (${path}). Total cargados: ${successCount}`);
        }
        if (successCount + errorCount === TOTAL_FRAMES) {
          console.log(`[ScrubSequence] ✅ Carga completa. Éxitos: ${successCount}, Errores: ${errorCount}`);
        }
        handleScroll();
      };

      img.onerror = () => {
        errorCount++;
        console.error(`[ScrubSequence] 🔴 Error cargando fotograma ${i + 1}/${TOTAL_FRAMES}: ${path}`);
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    let animationFrameId: number;

    const drawFrame = (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let img = imagesRef.current[frameIndex];
      let usedFallback = false;

      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let j = frameIndex - 1; j >= 0; j--) {
          const fallback = imagesRef.current[j];
          if (fallback && fallback.complete && fallback.naturalWidth > 0) {
            img = fallback;
            usedFallback = true;
            break;
          }
        }
      }

      if (img && img.complete && img.naturalWidth > 0) {
        const cw = window.innerWidth;
        const ch = window.innerHeight;

        if (canvas.width !== cw || canvas.height !== ch) {
          canvas.width = cw;
          canvas.height = ch;
        }

        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        const scale = Math.max(cw / iw, ch / ih);
        const nw = iw * scale;
        const nh = ih * scale;
        const cx = (cw - nw) / 2;
        const cy = (ch - nh) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, cx, cy, nw, nh);

        if (lastLoggedFrame.current !== frameIndex) {
          lastLoggedFrame.current = frameIndex;
          if (usedFallback) {
            console.warn(`[ScrubSequence] ⚠️ Renderizando fotograma ${frameIndex + 1} usando fallback.`);
          } else {
            console.log(`[ScrubSequence] 🎬 Dibujando fotograma ${frameIndex + 1}/${TOTAL_FRAMES}`);
          }
        }
      }
    };

    const updateTextBlocks = (p: number) => {
      let activeIndex = 1;
      if (p >= 0 && p < 0.25) activeIndex = 1;
      else if (p >= 0.25 && p < 0.50) activeIndex = 2;
      else if (p >= 0.50 && p < 0.75) activeIndex = 3;
      else if (p >= 0.75 && p <= 1.0) activeIndex = 4;

      if (text1Ref.current) text1Ref.current.classList.toggle('active', activeIndex === 1);
      if (text2Ref.current) text2Ref.current.classList.toggle('active', activeIndex === 2);
      if (text3Ref.current) text3Ref.current.classList.toggle('active', activeIndex === 3);
      if (text4Ref.current) text4Ref.current.classList.toggle('active', activeIndex === 4);

      if (lastLoggedText.current !== activeIndex) {
        lastLoggedText.current = activeIndex;
        console.log(`[ScrubSequence] 💬 Frase activa -> Frase ${activeIndex} (Progreso: ${(p * 100).toFixed(1)}%)`);
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const viewportHeight = window.innerHeight;

        // Calcular posición absoluta de scroll independiente del bounding box
        let elementTop = 0;
        let obj: HTMLElement | null = container;
        while (obj) {
          elementTop += obj.offsetTop;
          obj = obj.offsetParent as HTMLElement;
        }

        const elementHeight = container.offsetHeight;
        const totalScrollable = elementHeight - viewportHeight;

        if (totalScrollable <= 0) return;

        const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
        const currentScroll = scrollY - elementTop;
        const currentProgress = Math.min(1, Math.max(0, currentScroll / totalScrollable));

        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(currentProgress * TOTAL_FRAMES))
        );

        drawFrame(frameIndex);
        updateTextBlocks(currentProgress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={containerRef} className="scrub-section">
      <div className="scrub-sticky">
        <canvas ref={canvasRef} className="scrub-canvas" />

        <div className="scrub-overlay">
          {/* Parte 1 */}
          <div ref={text1Ref} className="scrub-text-block active">
            <span className="scrub-tag">TERCERA COMPAÑÍA</span>
            <h3 className="scrub-title">ESTAMOS SIEMPRE LISTOS.</h3>
          </div>

          {/* Parte 2 */}
          <div ref={text2Ref} className="scrub-text-block">
            <span className="scrub-tag">VOCACIÓN Y COMPROMISO</span>
            <h3 className="scrub-title">PARA CUALQUIER EMERGENCIA</h3>
          </div>

          {/* Parte 3 */}
          <div ref={text3Ref} className="scrub-text-block">
            <span className="scrub-tag">RESPUESTA 24/7</span>
            <h3 className="scrub-title">A CUALQUIER HORA</h3>
          </div>

          {/* Parte 4 */}
          <div ref={text4Ref} className="scrub-text-block">
            <span className="scrub-tag">AL SERVICIO DE LA COMUNIDAD</span>
            <h3 className="scrub-title">EN CUALQUIER LUGAR</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
