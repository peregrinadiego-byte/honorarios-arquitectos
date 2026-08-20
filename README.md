# Calculadora de honorarios profesionales FCARM

Aplicación web estática para estimar honorarios profesionales con base en las fórmulas y factores constructivos del documento de aranceles FCARM 2022 proporcionado para el proyecto.

## Funciones principales

- Diseño arquitectónico, diseño urbano y consultoría / DRO.
- Identificación del profesionista mediante nombre completo y cédula opcional.
- Géneros constructivos organizados por categoría y tipo de proyecto para facilitar la consulta de los 181 factores incorporados.
- Factor Regional mediante selección **Región → Colegio / zona → FR**.
- Selección inicial: **Región V · Colegio de Arquitectos de Sinaloa, A.C. · FR 0.95**.
- Tabla compacta con los valores de FR presentes en cada una de las siete regiones.
- Mapa regional de México colocado junto al selector de FR.
- Alcances y servicios adicionales seleccionables.
- Impresión / guardado como PDF.
- Descarga de una cotización editable en formato HTML autónomo, con la misma línea visual de la calculadora.
- Asistente local Chai, sin API ni costo por consulta.

## Publicar o actualizar en GitHub Pages

1. Sube `index.html` a la raíz del repositorio.
2. Si GitHub Pages ya está configurado en `main / (root)`, solo realiza un nuevo commit.
3. GitHub Pages conservará la misma dirección pública y desplegará la nueva versión.

## Uso local

Abre `index.html` directamente en un navegador. No necesita instalación ni servidor. El mapa usa una geometría GeoJSON pública y requiere conexión para visualizarse; los cálculos y selectores continúan funcionando aunque el mapa no cargue.

## Factor Regional

Los valores FR incorporados proceden de la tabla de colegios y factores proporcionada para esta versión. El FR no se trata como un valor único por región: algunas regiones contienen colegios con factores diferentes. Por ello la interfaz exige seleccionar el colegio o zona concreta después de seleccionar la región.

## Parámetros de referencia

El documento fuente indica CBM = $8,025 y SMD = $172.87. Ambos permanecen editables y se presentan como valores de referencia del documento 2022, no como afirmación de vigencia actual.

La calculadora estima honorarios. No sustituye un presupuesto de obra por catálogo de conceptos y análisis de precios unitarios.

## Autoría

**Idea y desarrollo por el Arq. Diego Peregrina**

## Chai

Chai es un asistente local integrado en la calculadora. Sus respuestas se generan mediante reglas y una base de conocimiento incluida en `index.html`; no utiliza API, backend ni servicios externos de inteligencia artificial de pago. Si una consulta queda fuera de su dominio, lo indica expresamente.
