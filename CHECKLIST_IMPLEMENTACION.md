# ✅ Checklist de Implementación

## FASE 1: Validación (Semana 1-2)

### Revisar ejemplo .docx
- [ ] Descargar `propuesta_ejemplo.docx`
- [ ] Abrir en Microsoft Word
- [ ] Revisar portada y encabezados
- [ ] Verificar tablas de cálculo
- [ ] Revisar tabla de alcance
- [ ] Leer notas y pie de página
- [ ] Hacer nota de personalizaciones deseadas

### Validar estructura
- [ ] ¿Contenido corresponde a tu metodología?
- [ ] ¿Orden de secciones es lógico?
- [ ] ¿Fórmulas están claramente explicadas?
- [ ] ¿Se incluyen todas las notas legales necesarias?

### Personalización inicial (opcional)
- [ ] Cambiar fuentes si lo deseas
- [ ] Ajustar colores corporativos
- [ ] Agregar logo (si aplica)
- [ ] Modificar pie de página
- [ ] Guardar como `propuesta_template_personalizado.docx`

### Validación con cliente
- [ ] Mostrar documento a cliente real
- [ ] Recopilar feedback
- [ ] Hacer ajustes necesarios
- [ ] Obtener aprobación

---

## FASE 2: Uso Manual (Inmediato)

### Preparar ambiente local
- [ ] Instalar Node.js (https://nodejs.org)
- [ ] Instalar dependencia: `npm install docx`
- [ ] Copiar `create_proposal.js` a carpeta de trabajo

### Generar primera propuesta
- [ ] Crear archivo JSON con tus datos (ver ejemplo abajo)
- [ ] Ejecutar: `node create_proposal.js datos.json propuesta.docx`
- [ ] Verificar que se genere sin errores
- [ ] Abrir archivo `propuesta.docx` resultante
- [ ] Validar que contenido sea correcto
- [ ] Editar en Word si es necesario
- [ ] Guardar con nombre descriptivo: `Propuesta_[Cliente]_[Fecha].docx`

### Ejemplo de datos.json
```json
{
  "professionalName": "Tu Nombre Completo",
  "license": "Tu Cédula Profesional",
  "surface": 1500,
  "cbm": 8025,
  "constructiveType": "J-8 · Casa-Habitación Residencial",
  "fr": 0.95,
  "co": 12037500,
  "fs": 11.68,
  "baseHonorario": 1342050,
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

### Workflow manual
1. Calcula en calculadora original (tu versión actual)
2. Copia valores a datos.json
3. Ejecuta script Node.js
4. Abre .docx generado
5. Edita si es necesario (agregar términos, condiciones, etc.)
6. Envía al cliente

**Tiempo por propuesta:** ~5 minutos

---

## FASE 3: Automatización (Opcional, Semana 3-4)

### Preparar servidor (si existe)
- [ ] Verificar acceso al servidor (SSH)
- [ ] Confirmar Node.js instalado en servidor
- [ ] Verificar permisos de carpeta temporal

### Instalar dependencias en servidor
- [ ] Conectar por SSH: `ssh usuario@servidor.com`
- [ ] Instalar npm si no existe: `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`
- [ ] Instalar docx: `npm install -g docx`

### Crear endpoint en servidor
- [ ] Usar código proporcionado en `ANALISIS_MEJORAS.md`
- [ ] Crear archivo `servidor.js` con Express
- [ ] Instalar Express: `npm install express`
- [ ] Probar localmente primero: `node servidor.js`
- [ ] Verificar que responda en `http://localhost:3000`

### Configurar servidor en producción
- [ ] Subir archivos a servidor
- [ ] Usar PM2 para ejecutar en background: `npm install -g pm2`
- [ ] Iniciar: `pm2 start servidor.js`
- [ ] Configurar para reinicio automático: `pm2 startup`
- [ ] Guardar configuración: `pm2 save`

### Reemplazar HTML de calculadora
- [ ] Hacer backup de `index.html` original
- [ ] Usar `honorarios-arquitectos-mejorado.html` como nuevo index
- [ ] Verificar que calculadora siga funcionando
- [ ] Probar botones de preview y exportación
- [ ] Verificar descarga automática de .docx

### Testing end-to-end
- [ ] Abrir en Chrome
  - [ ] Ingresar datos
  - [ ] Ver cálculos
  - [ ] Ver preview
  - [ ] Descargar .docx
  - [ ] Abrir en Word (verificar contenido)
  
- [ ] Abrir en Firefox
  - [ ] Repetir pasos anteriores
  
- [ ] Abrir en Safari
  - [ ] Repetir pasos anteriores
  
- [ ] Abrir en Mobile (responsivo)
  - [ ] Verificar interfaz
  - [ ] Probar exportación

### Documentación para usuarios
- [ ] Crear guía de uso para profesionistas
- [ ] Incluir pasos: calcular → preview → exportar
- [ ] Agregar ejemplos de propuestas generadas
- [ ] Crear FAQ básico
- [ ] Incluir soporte técnico (email/teléfono)

---

## Validación de funcionalidad

### Calculadora
- [ ] Fórmula CO = S × CBM × FC está correcta
- [ ] Fórmula FS = 15 − 2.5 × log₁₀(S) está correcta
- [ ] Fórmula H = CO × FS × FR / 100 está correcta
- [ ] FR se actualiza correctamente según selección
- [ ] Valores editables (CBM, SMD, FR) funcionan

### Vista previa
- [ ] Se actualiza en tiempo real
- [ ] Muestra todos los datos del proyecto
- [ ] Tabla de cálculo es legible
- [ ] Tabla de alcance muestra servicios correctos
- [ ] Notas legales se ven completas

### Exportación
- [ ] Descarga automática de .docx
- [ ] Archivo se abre en Word
- [ ] Contenido es idéntico a preview
- [ ] Documento es editable
- [ ] Tablas tienen estilos correctos
- [ ] No hay errores de formato

---

## Troubleshooting

### El script Node.js no corre
```bash
# Verificar Node.js instalado
node --version

# Verificar docx instalado
npm list docx

# Si falta, instalar
npm install docx
```

### El archivo .docx no se abre
- [ ] Verificar que no esté dañado: `file propuesta.docx`
- [ ] Intentar con LibreOffice (compatible)
- [ ] Si error persiste, revisar JSON de entrada

### La descarga no funciona en servidor
- [ ] Verificar permisos de carpeta `/tmp`
- [ ] Revisar logs de Express: `pm2 logs`
- [ ] Verificar que endpoint responde: `curl http://localhost:3000/api/generate-proposal`

### Estilos del .docx se ven diferentes en Word
- [ ] Esto es normal (Word renderiza ligeramente diferente)
- [ ] Abrir > Guardar en Word para normalizar
- [ ] No afecta funcionalidad del documento

---

## Métricas de éxito

### Fase 1
- ✅ Documento validado con cliente
- ✅ Estructura aprobada
- ✅ Personalizaciones realizadas

### Fase 2
- ✅ Primera propuesta generada exitosamente
- ✅ Cliente satisfecho con presentación
- ✅ Proceso manual documentado

### Fase 3
- ✅ Exportación automática funcionando
- ✅ Usuarios (profesionistas) sin errores
- ✅ Tiempo de generación < 5 segundos
- ✅ Propuestas generadas por mes aumentando

---

## Próximos pasos después de implementar

### Corto plazo (1-3 meses)
- [ ] Recopilar feedback de usuarios
- [ ] Hacer ajustes de UX si es necesario
- [ ] Documentar casos de uso comunes

### Mediano plazo (3-6 meses)
- [ ] Agregar histórico de propuestas (base de datos)
- [ ] Implementar búsqueda y filtrado
- [ ] Crear dashboard de actividad

### Largo plazo (6+ meses)
- [ ] Agregar más géneros constructivos
- [ ] Múltiples formatos de exportación (PDF, Excel)
- [ ] Sistema de versiones de FCARM
- [ ] Integración con CRM

---

## Notas importantes

- **Seguridad:** Los datos se procesan localmente (en navegador o servidor privado). No se envían a terceros.
- **Privacidad:** No se registran propuestas ni datos de clientes a menos que lo configures.
- **Vigencia:** Recuerda actualizar parámetros FCARM cuando cambien. El documento incluye nota de vigencia.
- **Backup:** Guarda `create_proposal.js` y `propuesta_template_personalizado.docx` en control de versiones.

---

## Soporte técnico

Si encuentras problemas:

1. Consulta el archivo `ANALISIS_MEJORAS.md`
2. Revisa `guia_implementacion.html`
3. Verifica los ejemplos de código incluidos
4. Si persiste, contacta a soporte técnico

---

**Última actualización:** 2026-08-20  
**Versión:** 1.0
