# Directrices de Diseño y Sistema Visual: Tercera Compañía de Bomberos

## 1. Reglas Estrictas y Elementos Prohibidos (Anti-Slop & Anti-IA)
- ❌ **Prohibido el uso de Badges, Pills, Tags o Kicker Badges:** Bloqueados completamente en todo el proyecto. No utilizar contenedores tipo cápsula, bordes decorativos translúcidos, puntos brillantes indicadores ni cajas flotantes tipo tag. Lucen genéricos y con estética artificial de IA.
- ❌ **Sin elementos frontend innecesarios:** Evitar elementos decorativos recargados, gradientes estrambóticos, tarjetas concéntricas o animaciones excesivas.
- ❌ **Sin controles superiores innecesarios:** Se eliminan el indicador de idioma "ES" y el botón de menú hamburguesa.
- ❌ **Sin la palabra "Institucional":** No se utiliza la palabra "institucional" en ningún titular o sección.
- ❌ **Sin comentarios de texto innecesarios:** El código fuente debe mantenerse limpio, directo y libre de comentarios redundantes o explicaciones obvias.

## 2. Tipografía y Estructura Visual (Hero Principal)
- **Logo Principal:** Prominente y de gran tamaño (`110px` de alto) en la parte superior izquierda.
- **Titular Principal:** `TERCERA COMPAÑÍA` (mayúsculas limpias y potentes).
- **Subtítulo / Lema:** `Lealtad y Disciplina` (directamente debajo del titular).
- **Acción Principal:** Botón pequeño y limpio `Conócenos` (rojo sólido corporativo).

## 3. Navbar Lateral Vertical (Réplica Estilo Jacinto / Iturri)
- **Estructura:** Navbar ubicado en la franja derecha de la pantalla (~38% de ancho) dividido en 5 columnas verticales:
  1. `NOSOTROS`
  2. `MATERIAL MAYOR`
  3. `SER BOMBERO`
  4. `CONVENIOS`
  5. `CONTACTO`
- **Comportamiento en Hover:**
  - **Zoom interior:** Acercamiento sutil (`scale(1.12)`) a la fotografía de fondo.
  - **Sombra colindante:** Elevación en capa (`z-index: 10`) con una sombra suave (`box-shadow`) proyectada sobre las columnas adyacentes.

## 4. Despliegues y Entorno
- ❌ **Sin despliegues a GitHub:** El proyecto no se despliega en repositorios remotos ni entornos GitHub Pages.
- **Validación Local:** Toda verificación se realiza mediante servidor local de desarrollo y build de producción (`npm run build`).
