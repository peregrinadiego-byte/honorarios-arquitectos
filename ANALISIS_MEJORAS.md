# Análisis y Propuesta de Mejora
## Calculadora de Honorarios FCARM 2022

---

## I. Evaluación de la herramienta actual

### Fortalezas

1. **Cálculos rigurosos** — Las fórmulas FCARM están correctamente implementadas:
   - CO = S × CBM × FC (Costo directo estimado)
   - FS = 15 − 2.5 × log₁₀(S) (Factor de superficie)
   - H = CO × FS × FR / 100 (Honorario base)

2. **Arquitectura escalable** — Aplicación web estática sin dependencias de backend, lo cual:
   - Garantiza velocidad (todo procesa localmente)
   - Elimina costos de servidor
   - Funciona sin conexión después de cargar

3. **Parámetros editables** — CBM, SMD y FR son modificables, permitiendo:
   - Actualizar valores cuando cambien los aranceles
   - Comparar escenarios rápidamente
   - Adaptarse a diferentes colegios/regiones

4. **Asistente Chai integrado** — Explica conceptos sin API externa, reduciendo costos y manteniendo privacidad.

5. **Interfaz clara** — Diseño limpio, responsive, sin exceso de complejidad visual.

---

### Limitaciones identificadas

| Limitación | Impacto | Severidad |
|---|---|---|
| **Sin exportación estructurada** | El usuario solo puede imprimir HTML o guardar PDF manual. No hay formato profesional pre-diseñado. | Alta |
| **Propuesta débil para cliente** | Los resultados calculados no forman un documento atractivo para presentar. Cliente recibe solo números sin contexto visual. | Alta |
| **Sin historial o guardado** | Cada sesión es independiente. No se pueden recuperar cálculos anteriores. | Media |
| **Interfaz única** | Un solo layout. No hay vistas resumidas o detalladas para diferentes audiencias. | Media |
| **Datos del profesionista opcionales** | Aunque hay campos, no se integran en los resultados. | Baja |

---

## II. Propuesta de mejora

He desarrollado **dos funcionalidades nuevas**:

### 1. Exportación profesional a .docx

Genera un documento editable con estructura completa:

```
PROPUESTA DE HONORARIOS PROFESIONALES
├─ Portada corporativa
├─ Datos del profesionista (nombre, cédula)
├─ Datos del proyecto (género, superficie, CBM, FR)
├─ Tabla de cálculo
│  ├─ Costo directo estimado (CO)
│  ├─ Factor de superficie (FS)
│  ├─ Honorario base (H)
│  └─ Comparativas
├─ Tabla de alcance (desglose porcentual de servicios)
├─ Notas legales y vigencia
└─ Pie de página con autoría
```

**Beneficios:**
- Documento completamente editable en Word
- Formato profesional listo para enviar al cliente
- Tablas estructuradas con estilos corporativos
- Incluye todas las fórmulas y parámetros de cálculo
- Puede modificarse sin perder estructura

### 2. Panel de vista previa profesional

Antes de exportar, el usuario ve una maqueta HTML con:
- Diseño corporativo coherente
- Estilos tipográficos profesionales
- Tablas con formato visual
- Secciones claramente diferenciadas

**Beneficios:**
- Visualización exacta de cómo se verá el documento
- Ediciones rápidas sin regenerar archivo
- Feedback inmediato antes de exportar
- Interface intuitiva

---

## III. Archivos entregados

### 1. `propuesta_ejemplo.docx`
Ejemplo completamente funcional con datos reales:
- Profesionista: Arq. Diego Peregrina López
- Proyecto: Casa-habitación residencial, 1,732 m²
- Honorario calculado: $1,512,571

**Uso:** Abre en Word y edita directamente.

### 2. `create_proposal.js`
Script Node.js que genera documentos .docx dinámicamente.

**Uso en la calculadora:**
```javascript
// El usuario ingresa datos en HTML
// Al hacer clic en "Descargar propuesta"
fetch('/api/generate-proposal', {
  method: 'POST',
  body: JSON.stringify(proposalData)
}).then(r => r.blob()).then(blob => {
  // Descarga automática del .docx
});
```

**Instalación en servidor:**
1. Copiar `create_proposal.js` al servidor
2. Instalar dependencia: `npm install docx`
3. Crear endpoint `/api/generate-proposal` que ejecute el script
4. El endpoint recibe JSON con datos y retorna el archivo .docx

### 3. `honorarios-arquitectos-mejorado.html`
Versión mejorada de la calculadora que integra:
- Todos los campos originales (sin cambios)
- Nueva sección "Vista previa"
- Botón "Ver propuesta" para preview en tiempo real
- Botón "Descargar propuesta .docx" para exportar

**Características:**
- Mantiene compatibilidad con FCARM 2022
- UI/UX coherente
- Validación de datos antes de exportar
- Indicadores visuales de estado

---

## IV. Implementación técnica

### Stack utilizado

| Componente | Tecnología | Razón |
|---|---|---|
| Generación .docx | `docx-js` (npm) | Estándar de facto, soporte completo para tables y estilos |
| Documento | Open XML (OOXML) | Estándar Microsoft, compatible con Word/Google Docs/LibreOffice |
| Servidor (opcional) | Node.js + Express | Integración simple con el script existente |
| Frontend | HTML vanilla + JS | Sin dependencias, compatible con versión actual |

### Configuración mínima de servidor

```javascript
const express = require('express');
const { exec } = require('child_process');
const app = express();

app.post('/api/generate-proposal', express.json(), (req, res) => {
  const data = req.body;
  
  // Escribir JSON temporal
  fs.writeFileSync('/tmp/proposal_input.json', JSON.stringify(data));
  
  // Ejecutar script
  exec('node create_proposal.js /tmp/proposal_input.json /tmp/output.docx', (err) => {
    if (err) return res.status(500).send(err);
    
    // Enviar archivo al cliente
    res.download('/tmp/output.docx');
  });
});

app.listen(3000, () => console.log('Servidor escuchando en :3000'));
```

---

## V. Propuesta de implementación

### Fase 1: Validación (Corto plazo)
1. Revisar ejemplo `propuesta_ejemplo.docx` en Word
2. Verificar que estructura y formato sean adecuados
3. Ajustar estilos según marca/preferencia personal
4. Validar con cliente real

### Fase 2: Integración (Mediano plazo)
1. Copiar `create_proposal.js` al servidor actual (si existe)
2. Crear endpoint `/api/generate-proposal`
3. Reemplazar `index.html` con `honorarios-arquitectos-mejorado.html`
4. Probar flujo completo: calculadora → preview → descarga

### Fase 3: Enhancements (Largo plazo)
- Guardar histórico de propuestas en base de datos
- Agregar logos/personalización corporativa
- Múltiples formatos: PDF nativo, Excel con desglose
- QR de validación de propuesta
- Versionado de cambios en parámetros FCARM

---

## VI. Consideraciones de UX

### Flujo actual (sin mejoras)
```
Usuario calcula → Imprime HTML → Envía PDF → Cliente recibe documento genérico
```

### Flujo con mejoras
```
Usuario calcula → Ve preview → Exporta .docx → Edita en Word → Envía propuesta profesional
```

### Ventajas para el profesionista
1. Presenta propuesta con branding profesional
2. Documento completamente editable (agrega términos, condiciones, etc.)
3. Genera confianza en el cliente
4. Diferencia con competencia que solo usa PDF

### Ventajas para el cliente
1. Documento formal y estructurado
2. Fácil de compartir y archivar
3. Posibilidad de hacer comentarios en Word
4. Apariencia profesional

---

## VII. Estimación de esfuerzo

| Tarea | Horas | Notas |
|---|---|---|
| Revisión de propuesta .docx | 1 | Validar estructura y estilos |
| Configuración servidor Node.js | 2 | Instalación y endpoint básico |
| Integración HTML mejorado | 1 | Reemplazar archivo, probar funcionalidad |
| Testing end-to-end | 3 | Diferentes navegadores, casos de error |
| Documentación para usuario | 1 | Instrucciones de uso |
| **Total** | **8 horas** | Puede ajustarse según requisitos adicionales |

---

## VIII. Conclusión

La herramienta actual es sólida en cálculos pero débil en presentación. Estas mejoras transforman la calculadora en una **solución integral de propuestas profesionales**, diferenciando el servicio del profesionista y facilitando la venta.

**Recomendación:** Implementar en dos fases:
1. Usar documentos .docx generados como plantilla (sin backend)
2. Integrar exportación automática cuando esté disponible servidor

Esto permite empezar a usar inmediatamente mientras se planifica integración técnica completa.
