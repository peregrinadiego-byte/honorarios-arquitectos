# Calculadora de honorarios FCARM 2022

Aplicación web estática basada en el archivo `Formula-Aranceles-FCARM-2022.xlsx`.

## Fuente y cautela

El archivo fuente indica CBM = $8,025 y SMD = $172.87. Son parámetros de referencia contenidos en el libro y permanecen editables en la aplicación. El libro identifica el CBM como aprobado por Asamblea FCARM Campeche, noviembre de 2021, vigente 2022.

La aplicación calcula honorarios a partir de las fórmulas del archivo fuente. No sustituye un presupuesto de obra por catálogo de conceptos y análisis de precios unitarios.

## Autoría
**Idea y desarrollo por el Arq. Diego Peregrina**.

## Asistente Chai

La aplicación incorpora **Chai**, un asistente local integrado en la propia calculadora. No utiliza API, backend, cuenta externa ni servicios de inteligencia artificial de pago. Sus respuestas se generan mediante reglas y una base de conocimiento incluida en `index.html`.

Chai puede explicar FR, FC, CBM, SMD, FS, fórmulas, alcances, mapa regional, género constructivo y los resultados visibles en el módulo activo. Si una consulta está fuera de ese dominio, lo indica expresamente en lugar de generar una respuesta abierta.

Todo el procesamiento de Chai se ejecuta en el navegador y no genera costo por consulta.
