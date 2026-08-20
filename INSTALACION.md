# 🚀 Instalación y uso

## Opción 1: Web (sin instalación)

1. Abre `index.html` en navegador (original)
2. O abre `honorarios-arquitectos-mejorado.html` para versión con exportación

## Opción 2: Generar propuestas con Node.js

### Requisitos
- Node.js 14+ (descargar desde https://nodejs.org)

### Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/peregrinadiego-byte/honorarios-arquitectos.git
cd honorarios-arquitectos

# 2. Instalar dependencias
npm install

# 3. Crear archivo de datos (datos.json)
# Ver ejemplo en EJEMPLO_DATOS.json
```

### Generar propuesta

```bash
node create_proposal.js datos.json propuesta.docx
```

**Entrada:** archivo JSON con parámetros  
**Salida:** documento .docx profesional

### Ejemplo de datos.json

```json
{
  "professionalName": "Arq. Tu Nombre",
  "license": "Tu Cédula",
  "surface": 1732,
  "cbm": 8025,
  "constructiveType": "J-8 · Casa-Habitación Residencial",
  "fr": 0.95,
  "co": 13922700,
  "fs": 11.42,
  "baseHonorario": 1512571,
  "scopes": [
    {"name": "I.1- DISEÑO CONCEPTUAL", "pct": 11.0},
    {"name": "I.2.-ANTEPROYECTO", "pct": 20.0},
    {"name": "I.3.- DISEÑO EJECUTIVO", "pct": 35.0},
    {"name": "I.4.- ESTRUCTURA", "pct": 12.0},
    {"name": "I.5.- INSTALACIÓN ELÉCTRICA", "pct": 10.0},
    {"name": "I.6.- INSTALACIÓN HIDROSANITARIA", "pct": 8.0}
  ]
}
```

## Opción 3: Servidor Node.js (automatizado)

Ver `ANALISIS_MEJORAS.md` sección "Código de ejemplo para servidor"

---

## Archivos principales

| Archivo | Descripción |
|---------|---|
| `index.html` | Calculadora original FCARM 2022 |
| `honorarios-arquitectos-mejorado.html` | Versión v2 con exportación |
| `create_proposal.js` | Generador de propuestas .docx |
| `propuesta_ejemplo.docx` | Documento de ejemplo |

---

## Documentación

- **README_MEJORAS.md** — Visión general
- **ANALISIS_MEJORAS.md** — Detalles técnicos
- **CHECKLIST_IMPLEMENTACION.md** — Guía paso a paso

---

¿Preguntas? Ver FAQ en `README_MEJORAS.md`
