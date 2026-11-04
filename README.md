# Trópico concept coffee · sitio web 3D

Sitio de una sola página para **Trópico, café de especialidad** (Güemes 330, Resistencia, Chaco).
El home es un recorrido 3D hecho con [Three.js](https://threejs.org/) (r128) que se maneja con el scroll:

1. **Vereda**: la fachada con la marquesina terracota y el logo.
2. **Entrada**: "Un espacio donde pasan cosas".
3. **Vitrina**: vitrina refrigerada con productos etiquetados.
4. **Concept store**: la isla con indumentaria, tazas, libros y la lluvia de tubos de cerámica.
5. **Salón**: sillón largo, nichos con aros de luz, lámparas de cobre.
6. **Patio**: mapamundi calado, plantas tropicales y mesas naranjas.
7. **Visitanos**: dirección e Instagram.

Incluye una carta completa en un panel lateral.

## Cómo verlo

Online: **https://rikochet87.github.io/tropico-cafe/**


Es un único archivo, sin compilación: abrí `index.html` en el navegador o publicalo en cualquier hosting estático
(GitHub Pages, Netlify, Vercel). Three.js y las fuentes se cargan desde CDN.

## Estructura

```
index.html                      página completa (HTML + CSS + JS, logo embebido)
assets/logo-tropico.png         logo recortado (blanco con transparencia)
assets/logo-tropico-wordmark.png  solo la palabra "TRÓPICO"
tools/generar-mapa.js           genera los contornos de países del mapamundi (Natural Earth vía world-atlas)
```

Para regenerar el mapa: `npm i world-atlas@2.0.2 topojson-client@3.1.0 && node tools/generar-mapa.js`.

## Pendiente

- Carta, precios y horarios reales del local (la carta actual es de referencia).
- Logo en alta resolución (SVG).
- Afinar el salón con más fotos.
