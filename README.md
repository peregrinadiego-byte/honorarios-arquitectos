# Calculadora de Honorarios FCARM 2022
## + Exportación a Propuestas Profesionales

[![Versión](https://img.shields.io/badge/versión-2.0-blue)](https://github.com/peregrinadiego-byte/honorarios-arquitectos/releases)
[![FCARM](https://img.shields.io/badge/FCARM-2022-orange)](https://www.fcarm.org.mx/)
[![Licencia](https://img.shields.io/badge/licencia-MIT-green)](LICENSE)

Aplicación web estática basada en las **fórmulas de aranceles FCARM 2022**, con nuevas capacidades de exportación a propuestas profesionales en formato Word.

## ✨ Novedades v2.0

- ✅ **Exportación a .docx** — Genera propuestas profesionales editables
- ✅ **Vista previa** — Visualiza propuesta antes de exportar
- ✅ **Generador automático** — Script Node.js para producción
- ✅ **100% retrocompatible** — Versión original intacta

## 🚀 Inicio rápido

### Opción 1: Web (sin instalación)

```bash
# Descarga y abre en navegador
1. Abre index.html (calculadora original)
2. O abre honorarios-arquitectos-mejorado.html (con exportación)
```

### Opción 2: Generar propuestas

```bash
npm install
npm run generate -- datos.json propuesta.docx
```

Ver [INSTALACION.md](INSTALACION.md) para detalles.

### Opción 3: Servidor (automatizado)

Ver [ANALISIS_MEJORAS.md](ANALISIS_MEJORAS.md#código-de-ejemplo-para-servidor)

---

## 📚 Documentación

| Documento | Descripción |
|-----------|---|
| [README_MEJORAS.md](README_MEJORAS.md) | Visión general y comparativa antes/después |
| [ANALISIS_MEJORAS.md](ANALISIS_MEJORAS.md) | Detalles técnicos, stack y arquitectura |
| [CHECKLIST_IMPLEMENTACION.md](CHECKLIST_IMPLEMENTACION.md) | Guía paso a paso, 3 fases |
| [INSTALACION.md](INSTALACION.md) | Instrucciones de instalación |
| [CONTRIBUIR.md](CONTRIBUIR.md) | Cómo contribuir al proyecto |

---

## 📋 Funcionalidades

### Calculadora Original (v1)
- ✅ Cálculos FCARM 2022 rigurosos
- ✅ Parámetros editables (CBM, SMD, FR)
- ✅ Mapa regional interactivo
- ✅ Asistente Chai local (sin API)
- ✅ Interfaz responsiva

### Nuevas en v2
- ✅ Exportación a documentos .docx
- ✅ Propuestas profesionales estructuradas
- ✅ Vista previa interactiva
- ✅ Generador automático (Node.js)
- ✅ Completamente editable en Word

---

## 🛠️ Tecnología

```
Frontend:
├── HTML 5
├── CSS 3
└── JavaScript vanilla

Backend (opcional):
├── Node.js
├── Express.js
└── docx-js

Formato:
└── Open XML (.docx)
```

---

## 📁 Estructura del proyecto

```
.
├── index.html                          (Calculadora original)
├── honorarios-arquitectos-mejorado.html (v2 con exportación)
├── create_proposal.js                  (Generador .docx)
├── propuesta_ejemplo.docx              (Documento de ejemplo)
├── README_MEJORAS.md                   (Visión general)
├── ANALISIS_MEJORAS.md                 (Detalles técnicos)
├── CHECKLIST_IMPLEMENTACION.md         (Guía de implementación)
├── INSTALACION.md                      (Instrucciones)
├── CONTRIBUIR.md                       (Cómo contribuir)
├── EJEMPLO_DATOS.json                  (Datos de ejemplo)
├── package.json                        (Dependencias Node.js)
└── README.md                           (Este archivo)
```

---

## 📊 Ejemplo de propuesta generada

```
PROPUESTA DE HONORARIOS PROFESIONALES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Profesionista: Arq. Diego Peregrina López
Cédula: 12345-PEMEX-2020

DATOS DEL PROYECTO
Género: Casa-Habitación Residencial
Superficie: 1,732 m²
CBM: $8,025
FR: 0.95

CÁLCULO DE HONORARIOS
Costo directo (CO):        $13,922,700
Factor de superficie (FS): 11.42
Honorario base (H):        $1,512,571

ALCANCE DEL SERVICIO
• Diseño Conceptual:          11%
• Anteproyecto:               20%
• Diseño Ejecutivo:           35%
• Estructura:                 12%
• Instalaciones:              22%
```

Documento completamente editable en Microsoft Word, Google Docs o LibreOffice.

---

## 🔧 Uso local

### 1. Clonar repositorio
```bash
git clone https://github.com/peregrinadiego-byte/honorarios-arquitectos.git
cd honorarios-arquitectos
```

### 2. Abrir calculadora en navegador
```bash
# Simplemente abre cualquier archivo .html en navegador
open index.html
```

### 3. Generar propuestas (si usas Node.js)
```bash
npm install
node create_proposal.js EJEMPLO_DATOS.json propuesta.docx
```

---

## 📝 Parámetros FCARM 2022

La aplicación utiliza los siguientes valores base:
- **CBM** (Costo Base por m²): $8,025
- **SMD** (Salario Mínimo Diario): $172.87

Ambos parámetros son editables en la interfaz para adaptarse a valores vigentes.

**Nota:** Verifica vigencia antes de usar en ejercicios profesionales formales.

---

## 🗺️ Factor Regional (FR)

La aplicación incluye tabla de FR por colegio/zona en las 7 regiones FCARM:

| Región | FR Presentes |
|--------|---|
| I | 0.95, 1.00, 1.05 |
| II | 0.95 |
| III | 0.95, 1.00 |
| IV | 0.95, 1.00, 1.05, 1.10 |
| V | 0.95, 1.00, 1.05 |
| VI | 1.00, 1.05 |
| VII | 1.05 |

---

## ❓ Preguntas frecuentes

**¿Necesito servidor para usarlo?**  
No. Funciona completamente en navegador (versión web) o localmente (Node.js).

**¿Es seguro? ¿Se envían datos a internet?**  
Completamente. Todo se procesa localmente. No se conecta a servidores externos.

**¿Puedo personalizar la propuesta?**  
Sí. El .docx se abre en Word y es 100% editable.

**¿Qué pasa si cambian los parámetros FCARM?**  
Edita los valores en la interfaz. La herramienta los usa automáticamente.

Más preguntas: ver [README_MEJORAS.md](README_MEJORAS.md#faq)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Ver [CONTRIBUIR.md](CONTRIBUIR.md)

---

## 📜 Licencia

MIT © 2026 [Diego Peregrina](https://github.com/peregrinadiego-byte)

Ver [LICENSE](LICENSE) para detalles.

---

## ✍️ Autoría

**Idea y desarrollo original por:** Arq. Diego Peregrina

**Mejoras v2 (exportación y propuestas):** Desarrolladas con enfoque en accesibilidad urbana y investigación de tipo mixta.

**Basado en:** Formula-Aranceles-FCARM-2022.xlsx

---

## 🔗 Enlaces útiles

- [FCARM](https://www.fcarm.org.mx/) — Federación de Colegios de Arquitectos de México
- [Documentación completa](README_MEJORAS.md)
- [Guía de implementación](CHECKLIST_IMPLEMENTACION.md)
- [Análisis técnico](ANALISIS_MEJORAS.md)

---

## 📞 Soporte

Para dudas, bugs o sugerencias:
1. Abre una [Issue](https://github.com/peregrinadiego-byte/honorarios-arquitectos/issues)
2. Consulta la [documentación](README_MEJORAS.md#faq)
3. Lee [CONTRIBUIR.md](CONTRIBUIR.md)

---

**Versión 2.0 · Última actualización: 2026-08-20**
