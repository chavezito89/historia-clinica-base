// A content block can be a simple string (paragraph) or a list of strings.
type ContentItem = string | { type: 'list'; items: (string | { title: string; text: string; sublist?: string[] })[] };

export interface ConsentSection {
  title: string;
  content: ContentItem[];
}

export interface ConsentFormContent {
  slug: string;
  title: string;
  authorizedAct?: string;
  sections: ConsentSection[];
}

export const consentFormsData: ConsentFormContent[] = [
  {
    slug: 'paciente-menor-de-edad',
    title: 'Consentimiento Informado para Paciente Menor de Edad',
    authorizedAct: 'Atención del paciente menor de edad',
    sections: [
      {
        title: 'Acerca del tratamiento propuesto',
        content: [
          'Declaro que el Dr. [*] y su equipo de ayudantes, después de haber llenado completamente la historia clínica para conocer el estado de salud y realizado la evaluación bucodental del menor de edad , de quien soy padre (tutor), me explicaron claramente sus padecimientos bucodentales y que requiere los tratamientos marcados en los cuadros siguientes:',
          {
            type: 'list',
            items: [
                'Profilaxis dental, que consiste en la eliminación del sarro pegado a mis dientes mediante la aplicación de instrumentos manuales o ultrasónicos,seguido del pulido de sus superficies.',
                'Aplicación de flúor para ayudar a proteger mis dientes contra la acción de las bacterias que producen la caries dental.',
                'Selladores, que se aplican para rellenar los espacios en las fosetas y fisuras de la superficie del diente, evitando la acumulación de restos de alimento, la formación de cavidades por caries y así conservar los dientes sanos.',
                'Resinas fluidas,que consisten en la eliminación de las líneas obscuras o descalcificadas de los dientes y no se han formado cavidades, los pequeños surcos formados se rellenan inyectando una resina, con lo que se restablece el contorno del diente.',
                'Restauraciones con composite o amalgama, que consisten en eliminar todo el tejido dañado de mis dientes con cavidades producidas por caries o fracturas, se coloca una capa aislante, un adhesivo y después se rellenan con composite o amalgama para reponer el tejido faltante. Los composites o las amalgamas también se usan para el cambio de restauraciones defectuosas o rotas que ya tenía en mis dientes.',
                'Coronas preformadas metálicas, que consiste en eliminar todo el tejido dañado de un diente muy destruido, rellenar la cavidad con un material restaurativo y después la aplicación de una corona metálica preformada que se adapta al diente para sellarla.',
                'Pulpotomía y Pulpectomía. Este tratamiento es necesario cuando las cavidades o la destrucción de los dientes primarios son muy grandes y afectan el tejido nervioso (pulpa dental) localizado en su interior. Consiste en la eliminación parcial (pulpotomía) o total (pulpectomía) de la pulpa dental. Después de la limpieza con agentes desinfectantes, se rellena la cavidad con un material especial, que permite mantener el diente hasta que se caiga por la erupción del diente permanente.',
                'Extracción de dientes primarios. Este tratamiento es necesario cuando la destrucción de los dientes primarios es tan grande que ya no puede aplicarse ningún tipo de restauración. Consiste en la eliminación de los restos del diente primario junto con su raíz, quedará un espacio para la erupción del diente permanente. Puede ser necesaria la colocación de un aparato llamado mantenedor de espacio.',
                'El plan de tratamiento propuesto se indica en el presupuesto que me entregaron. Me informaron que puede haber cambios en el tratamiento dependiendo de los daños de los dientes, que se encuentren durante la atención, y de la evolución de los padecimientos bucodentales particulares del menor. Me informaron también que los tratamientos como las extracciones de dientes permanentes o los tratamientos de especialidad tienen consentimientos independientes con información más detallada y debo leerlos antes de que me realicen cualquiera de ellos.',
            ]
          }
        ],
      },
      {
        title: 'Beneficios y alternativas',
        content: [
            {
                type: 'list',
                items: [
                    'La eliminación de sarro mediante la profilaxis ayudará a mejorar la salud bucodental del menor, siempre y cuando mantenga el cuidado de su boca con cepillado y uso de hilo dental.No existen alternativas a la profilaxis.',
                    'La aplicación de flúor refuerza la superficie externa (esmalte) sana del diente.Ayuda a prevenir la formación de cavidades por caries.No existen alternativas a este procedimiento.Para que la aplicación de flúor sea efectiva el menor no debe tomar agua al menos durante una hora después de la aplicación de flúor. Es conveniente tener una alimentación con menos azúcar y carbohidratos, mantener una buena higiene bucal mediante cepillado dental con pasta fluorada, uso de hilo dental que controlan las bacterias deteniendo el avance de la caries.',
                    'Los selladores ayudan a eliminar el avance de la caries en los dientes que no tienen cavidades y evitar el corte tejido dental sano para hacer una cavidad. No hay alternativa a los selladores. Después del tratamiento se recomienda una alimentación con menos azúcar y carbohidratos, mantener una buena higiene mediante cepillado dental con pasta fluorada,uso de hilo dental.Se sugieren visitas de control cada seis meses para evaluar que no se hayan formado cavidades.',
                    'La restauración de los dientes del menor con cavidades debidas a caries, con fracturas o con restauraciones defectuosas devuelven la integridad de los dientes y ayudan a mejorar su salud bucodental. Las restauraciones con composite tienen un tono similar a los dientes dando un aspecto natural. Las alternativas a las restauraciones con composite en cavidades grandes o dientes muy destruidos son las restauraciones con amalgama o con coronas preformadas metálicas.',
                    'Las coronas preformadas metálicas devuelven la integridad de los dientes muy dañados y ayudan a mejorar la salud bucodental. Mantienen el espacio necesario para la erupción de los dientes permanentes que se encuentran debajo. La alternativa es la extracción de los dientes primarios.',
                    'La pulpotomía y la pulpectomía permiten que los dientes primarios continúen en la boca del menor hasta el momento de su exfoliación normal ayudando a mantener el espacio para la erupción de los dientes permanentes. La pulpotomía y la pulpectomía suelen estar asociadas a los tratamientos con coronas preformadas metálicas. La única alternativa es la extracción de los dientes primarios.',
                    'La extracción de los dientes primarios ayuda a prevenir o resolver infecciones cuando estos dientes están muy dañados o destruidos y no puede colocarse ninguna restauración ayudando a mejorar la salud bucodental del menor. No existen alternativas a este tratamiento. Después de la extracción, puede ser necesario colocar un aparato llamado mantenedor de espacio o, en el caso de todos los dientes anteriores, de una prótesis que reponga los dientes extraídos para mantener la estética y función del menor.'
                ]
            }
        ],
      },
      {
        title: 'Riesgos',
        content: [
            'Declaro que me han sido explicados verbalmente los posibles riesgos y complicaciones, siendo los más comunes:',
            {
                type: 'list',
                items: [
                    { title: '1. Aplicación de flúor.', text: 'El flúor en gel se coloca en la boca del menor mediante unos pequeños aplicadores en forma de herradura que se amoldan a los dientes. Como el flúor permanece varios minutos en la boca, la presencia de agentes extraños en la boca o la ingestión de pequeñas cantidades del gel podrían causar el reflejo de vómito.' },
                    { title: '2. Radiografías:', text: 'Aunque se usan radiografías de tamaño pequeño, el menor puede presentar el reflejo de vómito al tener un cuerpo extraño en su boca.' },
                    { title: '3. Sangrado de encías:', text: 'Los instrumentos que se usan durante las limpiezas tocan el diente y las encías. Las encías que están inflamadas pueden sangrar ligeramente de forma pasajera en pacientes sanos.' },
                    { title: '4. Extracción de dientes.', text: 'Sangrado, inflamación, molestia e infección: Después del tratamiento el menor puede experimentar sangrado, el cual se controla haciendo presión al morder una gasa sobre la zona de extracción. Si no informé que el menor usa medicamentos que afectan la coagulación o tomó aspirina antes o después de la extracción hay riesgo de que el sangrado no se detenga y requiera la atención en un hospital. El menor puede tener dolor, inflamación y molestia durante varios días, los cuales pueden ser tratados con analgésicos sin aspirina. También puede producirse una infección después del tratamiento, la cual será tratada con antibióticos. Siempre debo notificar inmediatamente al doctor en caso de que el menor presente cualquiera de estas situaciones.' },
                    { title: '5. Reacción a la anestesia:', text: 'Para mantener cómodo al menor mientras se realizan los tratamientos, puede ser necesaria la aplicación de anestesia local. En ocasiones poco frecuentes, los pacientes tienen una reacción alérgica a la anestesia local, la cual puede requerir de atención médica de emergencia, o quizá reduzca la capacidad de controlar su deglución temporalmente, lo cual aumenta los riesgos de tragar objetos extraños durante el tratamiento. Después de que el efecto de la anestesia local ha pasado, pueden presentarse molestias pasajeras en la zona donde se aplicó la inyección y el menor puede referirlo como dolor para abrir la boca. así como mordeduras que él mismo se ocasionó al perder la sensación por la anestesia.' },
                    { title: '6. Aplicación de aislantes:', text: 'Los tratamientos en menores de edad requieren de un plástico aislante llamado dique de hule para controlar la contaminación por saliva, el cual limita el habla. En raras ocasiones puede presentarse alergia al látex.' },
                    { title: '7. Mandíbula con contractura o adolorida:', text: 'Mantener la boca abierta durante el tratamiento puede provocar que el menor tenga molestias y rigidez temporal de la mandíbula, y puede resultarle difícil abrir la boca ampliamente hasta varios días posteriores al tratamiento. El tratamiento también puede provocar que sus comisuras y labios queden rojos o partidos durante varios días.' },
                    { title: '8. Fractura de los dientes.', text: 'Los dientes con cavidades grandes o que tienen amalgamas o resinas pueden estar debilitados.Al remover la parte dañada del diente y la restauración mediante la fresa dental, las zonas debilitadas pueden romperse y tendrían que hacerse restauraciones más grandes o aplicar coronas metálicas para reponer las partes del diente. Si esto ocurre, pueden requerirse cambios en el plan de tratamiento propuesto.' },
                    { title: '9. Irritación del nervio del diente:', text: 'Para reparar los dientes es necesario eliminar sus partes dañadas. Esto puede irritar el tejido nervioso (pulpa dental) que se encuentra en el centro de éste, provocando sensibilidad al calor, al frío o a la presión o dolor. Para tratar la sensibilidad o dolor puede ser necesario aplicar materiales intermedios y continuar en una cita posterior para conocer la respuesta del diente. En ocasiones debe hacerse el tratamiento la pulpa (pulpotomía u otro tratamiento de endodoncia). Si esto ocurre pueden requerirse cambios en el plan de tratamiento propuesto.' },
                    { title: '10. Cambios en la mordida:', text: 'Cualquier restauración (amalgamas, resinas, coronas, etc.) puede alterar la mordida del menor o hacer que su mandíbula se sienta adolorida y causar confusión con dolor de los dientes tratados. Esto puede requerir el ajuste de la mordida,rebajando la superficie de la restauración o dientes adyacentes.' },
                    { title: '11. Ansiedad infantil:', text: 'Los menores de edad calmados y cooperadores permiten que los tratamientos sean más rápidos y efectivos. El menor puede presentar ansiedad como manifestación de padres preocupados, sobreprotectores o que lo amenazan con ir al dentista si no se porta bien. El manejo del menor ansioso puede requerir una o varias de las técnicas siguientes:', sublist: ['Decir-Mostrar-Hacer. Antes de iniciar se le explica al menor con palabras sencillas lo que se hará durante el tratamiento.', 'Control de voz. Cuando empiezan a presentarse conductas negativas se le habla al menor con autoridad. Se hace para lograr la atención del menor.', 'Mano sobre boca. Cuando el menor llora o hace berrinches se le tapa boca y se le habla con autoridad. Esto se hace para lograr su silencio y atención a las indicaciones del Odontopediatra tratante.', 'Restricción física. Sólo se hace para poder atender a menores inmanejables, que pueden requerir un tratamiento de urgencia.'] },
                ]
            },
            'Entiendo que estas técnicas ayudan a controlar al menor y en ningún momento le causan daño. También entiendo que el Doctor tiene mayor control tratando solo al menor, pero que puedo solicitar estar presente durante su tratamiento. Sin embargo, esto puede aumentar la ansiedad del menor y no permita que le hagan ningún tratamiento.'
        ],
      },
      {
        title: 'Consecuencias de no realizar el tratamiento',
        content: [
            'Si no se realizan los procedimientos propuestos en el plan de tratamiento, los problemas existentes podrían ocasionar molestias futuras y posibles daños en el hueso y encías del menor, requiriendo de tratamientos posteriores más complicados y costosos. Los dientes cariados, quebrados o con restauraciones inadecuadas previas podrían continuar deteriorándose, provocando dolor, más caries, infección y abscesos, daño del hueso alrededor del diente y, eventualmente, la pérdida prematura del mismo. Los daños en los dientes primarios no tratados pueden afectar a los dientes permanentes que están por debajo de ellos.',
        ]
      },
      {
        title: 'Aceptación del tratamiento',
        content: [
            'Acepto y me comprometo a seguir responsablemente las recomendaciones recibidas, antes y después de la intervención, así como, acudir a las citas para las revisiones postoperatorias durante el tiempo indicado.',
            'A pesar de que no es posible garantizar resultados perfectos, se realizará todo esfuerzo razonable por asegurar que su afección sea tratada adecuadamente.',
            'Autorizo a mi odontólogo tratante a la atención de contingencias y urgencias que puedan derivarse del tratamiento que va a realizarme.',
            'Reconozco que esta carta de consentimiento puede ser revocable siempre y cuando no haya iniciado el tratamiento. Reconozco también que el Dr. puede negarse a realizar el tratamiento si encuentra que hay mayor riesgo que beneficios para mi salud.',
            'Al firmar esta carta de consentimiento reconozco que he recibido y comprendido la información adecuada acerca del tratamiento propuesto y que han respondido todas mis preguntas.',
        ]
      }
    ],
  },
];
