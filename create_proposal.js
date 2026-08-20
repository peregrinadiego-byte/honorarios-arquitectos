const { Document, Packer, Paragraph, Table, TableRow, TableCell, TextRun, HeadingLevel, WidthType, AlignmentType, ShadingType } = require('docx');
const fs = require('fs');

function createProposal(data) {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margins: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      children: [
        new Paragraph({
          text: '',
          spacing: { line: 720 }
        }),
        new Paragraph({
          text: 'PROPUESTA DE HONORARIOS PROFESIONALES',
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          spacing: { line: 480, after: 120 },
          shading: { type: ShadingType.CLEAR, color: 'F0F4F8' }
        }),
        new Paragraph({
          text: 'Servicios de arquitectura',
          alignment: AlignmentType.CENTER,
          spacing: { line: 240, after: 480 }
        }),
        new Paragraph({
          text: '',
          spacing: { line: 720 }
        }),
        new Paragraph({
          text: 'Profesionista',
          heading: HeadingLevel.HEADING_2,
          spacing: { line: 240, after: 120 }
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Nombre: ',
              bold: true
            }),
            new TextRun({
              text: data.professionalName || '(Sin especificar)'
            })
          ],
          spacing: { line: 240, after: 60 }
        }),
        data.license ? new Paragraph({
          children: [
            new TextRun({
              text: 'Cédula profesional: ',
              bold: true
            }),
            new TextRun({
              text: data.license
            })
          ],
          spacing: { line: 240, after: 240 }
        }) : new Paragraph({ text: '' }),
        new Paragraph({
          text: 'Datos del proyecto',
          heading: HeadingLevel.HEADING_2,
          spacing: { line: 240, after: 120 }
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Género constructivo: ',
              bold: true
            }),
            new TextRun({
              text: data.constructiveType || '(No especificado)'
            })
          ],
          spacing: { line: 240, after: 60 }
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Superficie construida: ',
              bold: true
            }),
            new TextRun({
              text: (data.surface || 0).toLocaleString('es-MX') + ' m²'
            })
          ],
          spacing: { line: 240, after: 60 }
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Costo base por m² (CBM): ',
              bold: true
            }),
            new TextRun({
              text: '$' + (data.cbm || 0).toLocaleString('es-MX')
            })
          ],
          spacing: { line: 240, after: 60 }
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Factor regional (FR): ',
              bold: true
            }),
            new TextRun({
              text: (data.fr || 0).toFixed(2)
            })
          ],
          spacing: { line: 240, after: 240 }
        }),
        new Paragraph({
          text: 'Cálculo de honorarios',
          heading: HeadingLevel.HEADING_2,
          spacing: { line: 240, after: 120 }
        }),
        new Table({
          columnWidths: [3600, 2400],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph({ text: 'Concepto', bold: true })],
                  width: { size: 3600, type: WidthType.DXA },
                  shading: { type: ShadingType.CLEAR, color: 'E8EFF5' }
                }),
                new TableCell({
                  children: [new Paragraph({ text: 'Valor', bold: true, alignment: AlignmentType.RIGHT })],
                  width: { size: 2400, type: WidthType.DXA },
                  shading: { type: ShadingType.CLEAR, color: 'E8EFF5' }
                })
              ]
            }),
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph({ text: 'Costo directo estimado (CO)' })],
                  width: { size: 3600, type: WidthType.DXA }
                }),
                new TableCell({
                  children: [new Paragraph({ text: '$' + (data.co || 0).toLocaleString('es-MX'), alignment: AlignmentType.RIGHT })],
                  width: { size: 2400, type: WidthType.DXA }
                })
              ]
            }),
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph({ text: 'Factor de superficie (FS)' })],
                  width: { size: 3600, type: WidthType.DXA }
                }),
                new TableCell({
                  children: [new Paragraph({ text: (data.fs || 0).toFixed(2), alignment: AlignmentType.RIGHT })],
                  width: { size: 2400, type: WidthType.DXA }
                })
              ]
            }),
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph({ text: 'Honorario base (H)', bold: true })],
                  width: { size: 3600, type: WidthType.DXA },
                  shading: { type: ShadingType.CLEAR, color: 'F0F4F8' }
                }),
                new TableCell({
                  children: [new Paragraph({ text: '$' + (data.baseHonorario || 0).toLocaleString('es-MX'), bold: true, alignment: AlignmentType.RIGHT })],
                  width: { size: 2400, type: WidthType.DXA },
                  shading: { type: ShadingType.CLEAR, color: 'F0F4F8' }
                })
              ]
            })
          ],
          width: { size: 6000, type: WidthType.DXA }
        }),
        new Paragraph({ text: '', spacing: { line: 240 } }),
        new Paragraph({
          text: 'Alcance del servicio',
          heading: HeadingLevel.HEADING_2,
          spacing: { line: 240, after: 120 }
        }),
        new Table({
          columnWidths: [4200, 1400],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph({ text: 'Concepto', bold: true })],
                  width: { size: 4200, type: WidthType.DXA },
                  shading: { type: ShadingType.CLEAR, color: 'E8EFF5' }
                }),
                new TableCell({
                  children: [new Paragraph({ text: '% incluido', bold: true, alignment: AlignmentType.CENTER })],
                  width: { size: 1400, type: WidthType.DXA },
                  shading: { type: ShadingType.CLEAR, color: 'E8EFF5' }
                })
              ]
            }),
            ...(data.scopes || []).map(scope =>
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ text: scope.name })],
                    width: { size: 4200, type: WidthType.DXA }
                  }),
                  new TableCell({
                    children: [new Paragraph({ text: scope.pct + '%', alignment: AlignmentType.CENTER })],
                    width: { size: 1400, type: WidthType.DXA }
                  })
                ]
              })
            )
          ],
          width: { size: 5600, type: WidthType.DXA }
        }),
        new Paragraph({ text: '', spacing: { line: 480 } }),
        new Paragraph({
          text: 'Notas importantes',
          heading: HeadingLevel.HEADING_2,
          spacing: { line: 240, after: 120 }
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Vigencia: ',
              bold: true
            }),
            new TextRun({
              text: 'Esta propuesta se basa en los parámetros FCARM 2022. Se recomienda verificar la vigencia de los valores (CBM, SMD, FR) antes de la contratación.'
            })
          ],
          spacing: { line: 240, after: 120 },
          alignment: AlignmentType.JUSTIFIED
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Alcance: ',
              bold: true
            }),
            new TextRun({
              text: 'El honorario corresponde únicamente a los servicios de arquitectura especificados. No incluye gastos de supervisión, análisis de precios unitarios, presupuestos, permisos o trámites administrativos.'
            })
          ],
          spacing: { line: 240, after: 120 },
          alignment: AlignmentType.JUSTIFIED
        }),
        new Paragraph({
          text: 'Generado con la Calculadora de Honorarios FCARM',
          alignment: AlignmentType.CENTER,
          spacing: { line: 240, before: 480 }
        }),
        new Paragraph({
          text: 'Idea y desarrollo por el Arq. Diego Peregrina',
          alignment: AlignmentType.CENTER
        })
      ]
    }]
  });

  return doc;
}

const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Uso: node create_proposal.js <archivo_json_datos> [archivo_salida.docx]');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
const outputFile = process.argv[3] || 'propuesta_honorarios.docx';

const doc = createProposal(data);

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputFile, buffer);
  console.log(`✓ Documento generado: ${outputFile}`);
}).catch(err => {
  console.error('Error al generar documento:', err);
  process.exit(1);
});
