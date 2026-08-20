# Calculadora de honorarios FCARM 2022

Aplicación web estática basada en el archivo `Formula-Aranceles-FCARM-2022.xlsx`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `fcarm-honorarios`.
2. Sube `index.html` a la raíz del repositorio.
3. En **Settings → Pages**, selecciona **Deploy from a branch**.
4. Elige la rama `main` y la carpeta `/ (root)`.
5. Guarda. GitHub mostrará la URL pública del sitio.

## Uso local

Abre `index.html` directamente en un navegador. No necesita instalación ni servidor.

## Fuente y cautela

El archivo fuente indica CBM = $8,025 y SMD = $172.87. Son parámetros de referencia contenidos en el libro y permanecen editables en la aplicación. El libro identifica el CBM como aprobado por Asamblea FCARM Campeche, noviembre de 2021, vigente 2022.

La aplicación calcula honorarios a partir de las fórmulas del archivo fuente. No sustituye un presupuesto de obra por catálogo de conceptos y análisis de precios unitarios.


## Ajustes de identificación y FR
La aplicación incluye nombre completo del profesionista, cédula profesional opcional y una explicación ampliada del Factor Regional (FR). El mapa regional queda preparado como módulo de referencia, pero no asigna factores automáticamente porque la tabla I-C no está incluida en el archivo Excel FCARM 2022 proporcionado.
