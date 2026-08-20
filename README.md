# Calculadora de honorarios FCARM 2022

Aplicación web estática basada en el archivo `Formula-Aranceles-FCARM-2022.xlsx`.

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz del repositorio.
2. En **Settings → Pages**, selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`.
4. Guarda. GitHub conservará la URL pública del sitio.

## Uso local

Abre `index.html` directamente en un navegador. No necesita instalación ni servidor.

## Factor Regional (FR)

La aplicación incorpora una tabla de colegios/zonas agrupada en las siete regiones FCARM. El FR se selecciona por **colegio o zona**, porque dentro de una misma región pueden existir factores diferentes.

La selección inicial es:

- **Región V**
- **Colegio de Arquitectos de Sinaloa, A.C.**
- **FR = 0.95**

Junto al selector se muestra una tabla compacta con los valores de FR presentes en cada región. El mapa identifica la región territorial de cada estado, pero el FR aplicado al cálculo proviene siempre del colegio/zona seleccionado.

## Fuente y cautela

El archivo fuente indica CBM = $8,025 y SMD = $172.87. Son parámetros de referencia contenidos en el libro y permanecen editables en la aplicación. El libro identifica el CBM como aprobado por Asamblea FCARM Campeche, noviembre de 2021, vigente 2022.

La tabla de FR se incorporó a partir de la información proporcionada para esta versión de la herramienta. Conviene verificar su vigencia antes de utilizarla en un ejercicio profesional formal.

La aplicación calcula honorarios a partir de las fórmulas del archivo fuente. No sustituye un presupuesto de obra por catálogo de conceptos y análisis de precios unitarios.

## Autoría

**Idea y desarrollo por el Arq. Diego Peregrina**.

## Asistente Chai

La aplicación incorpora **Chai**, un asistente local integrado en la propia calculadora. No utiliza API, backend, cuenta externa ni servicios de inteligencia artificial de pago. Sus respuestas se generan mediante reglas y una base de conocimiento incluida en `index.html`.

Chai puede explicar FR, FC, CBM, SMD, FS, fórmulas, alcances, mapa regional, género constructivo y los resultados visibles en el módulo activo. Si una consulta está fuera de ese dominio, lo indica expresamente.

Todo el procesamiento de Chai se ejecuta en el navegador y no genera costo por consulta.
