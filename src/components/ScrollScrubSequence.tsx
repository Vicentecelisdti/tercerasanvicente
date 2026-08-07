import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 59;

const getFramePath = (index: number) => {
  const paddedIndex = String(index + 1).padStart(4, '0');
  return `/frames/frame_${paddedIndex}.webp`;
};

export const ScrollScrubSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [currentFrameSrc, setCurrentFrameSrc] = useState<string>(getFramePath(0));
  const [debugInfo, setDebugInfo] = useState<string>('');

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
        setLoadedCount(successCount);
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
      const path = getFramePath(frameIndex);
      setCurrentFrameSrc(path);

      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let img = imagesRef.current[frameIndex];

      // Si la imagen actual no está lista, buscar alternativa cargada cercana
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let j = frameIndex - 1; j >= 0; j--) {
          const fallback = imagesRef.current[j];
          if (fallback && fallback.complete && fallback.naturalWidth > 0) {
            img = fallback;
            break;
          }
        }
        if (!img || !img.complete || img.naturalWidth === 0) {
          for (let j = frameIndex + 1; j < TOTAL_FRAMES; j++) {
            const fallback = imagesRef.current[j];
            if (fallback && fallback.complete && fallback.naturalWidth > 0) {
              img = fallback;
              break;
            }
          }
        }
      }

      if (img && img.complete && img.naturalWidth > 0) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const cw = window.innerWidth;
        const ch = window.innerHeight;
        const targetWidth = Math.floor(cw * dpr);
        const targetHeight = Math.floor(ch * dpr);

        if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
          canvas.width = targetWidth;
          canvas.height = targetHeight;
        }

        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        const scale = Math.max(targetWidth / iw, targetHeight / ih);
        const nw = iw * scale;
        const nh = ih * scale;
        const cx = (targetWidth - nw) / 2;
        const cy = (targetHeight - nh) / 2;

        ctx.clearRect(0, 0, targetWidth, targetHeight);
        ctx.drawImage(img, cx, cy, nw, nh);
      }
    };

    const textBlocks = [text1Ref, text2Ref, text3Ref, text4Ref];

    const updateTextBlocks = (p: number) => {
      let activeIndex = 1;
      if (p >= 0 && p < 0.25) activeIndex = 1;
      else if (p >= 0.25 && p < 0.50) activeIndex = 2;
      else if (p >= 0.50 && p < 0.75) activeIndex = 3;
      else if (p >= 0.75 && p <= 1.0) activeIndex = 4;

      textBlocks.forEach((ref, index) => {
        const blockIndex = index + 1;
        if (!ref.current) return;

        if (blockIndex === activeIndex) {
          ref.current.classList.add('active');
          ref.current.classList.remove('exit-up');
        } else if (blockIndex < activeIndex) {
          ref.current.classList.remove('active');
          ref.current.classList.add('exit-up');
        } else {
          ref.current.classList.remove('active');
          ref.current.classList.remove('exit-up');
        }
      });
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const totalScrollable = rect.height - viewportHeight;
        if (totalScrollable <= 0) return;

        const currentScroll = -rect.top;
        const currentProgress = Math.min(1, Math.max(0, currentScroll / totalScrollable));

        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(currentProgress * TOTAL_FRAMES))
        );

        setDebugInfo(`Frame: ${frameIndex + 1}/${TOTAL_FRAMES} | Progreso: ${(currentProgress * 100).toFixed(0)}%`);

        drawFrame(frameIndex);
        updateTextBlocks(currentProgress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const progressPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <section ref={containerRef} className="scrub-section">
      <div className="scrub-sticky">
        {/* Canvas de renderizado principal */}
        <canvas ref={canvasRef} className="scrub-canvas" />

        {/* Fallback de imagen por si el canvas no renderiza en algún browser */}
        <img
          src={currentFrameSrc}
          alt="Fotograma de la secuencia"
          className="scrub-canvas-fallback"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            display: 'block'
          }}
        />

        {/* Indicador de Carga mientras se precargan fotogramas */}
        {loadedCount < TOTAL_FRAMES && (
          <div className="scrub-loader">
            <div className="scrub-spinner"></div>
            <span>Cargando secuencia ({progressPercent}%)</span>
          </div>
        )}

        <div className="scrub-overlay">
          {/* Parte 1 */}
          <div ref={text1Ref} className="scrub-text-block active">
            <span className="scrub-tag">EN LA TERCERA COMPAÑÍA</span>
            <h3 className="scrub-title">ESTAMOS SIEMPRE LISTOS</h3>
          </div>

          {/* Parte 2 */}
          <div ref={text2Ref} className="scrub-text-block">
            <span className="scrub-tag">SIN IMPORTAR LA EMERGENCIA</span>
            <h3 className="scrub-title">DAREMOS NUESTRO 100%</h3>
          </div>

          {/* Parte 3 */}
          <div ref={text3Ref} className="scrub-text-block">
            <span className="scrub-tag">A TODA HORA Y EN TODO MOMENTO</span>
            <h3 className="scrub-title">CUENTA CON NOSOTROS</h3>
          </div>

          {/* Parte 4 */}
          <div ref={text4Ref} className="scrub-text-block">
            <span className="scrub-tag">PORQUE DESDE 1959 SERVIMOS</span>
            <h3 className="scrub-title">A NUESTRA COMUNIDAD</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
