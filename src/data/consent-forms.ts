// A content block can be a simple string (paragraph) or a list of strings.
type ContentItem = string | { type: 'list'; items: (string | { title: string; text: string; sublist?: string[] })[] } | { type: 'textarea'; placeholder: string };

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
  {
    slug: 'blanqueamiento',
    title: 'Blanqueamiento',
    authorizedAct: 'Blanqueamiento dental en consultorio',
    sections: [
        {
            title: 'Tratamiento propuesto',
            content: [
                'Declaro que el Dr. [*] y su equipo de ayudantes me ha informado satisfactoriamente que el blanqueamiento dental está diseñado para aclarar el color de los dientes. Este tratamiento puede realizarse en una o varias visitas dependiendo de cómo respondan mis dientes al gel blanqueador. Cada cita toma como una hora y durante este tiempo se aplica una protección a las encías, se aplica el gel blanqueador y se puede usar o no una luz especial.'
            ]
        },
        {
            title: 'Beneficios y Alternativas',
            content: [
                'El blanqueamiento es un tratamiento de elección para conseguir un tono más claro de mis dientes. Este cambio de tono se puede lograr en la mayor parte de los casos, pero los resultados no pueden garantizarse. Los dientes amarillo oscuro o amarillo-café tienden a tener mejores resultados que personas con dientes grises o azul grisáceos. Cuando un blanqueamiento se hace apropiadamente, no va a dañar mis dientes, encías o tejidos blandos.',
                'Los dientes con muchos colores, especialmente si se han manchado con tetraciclinas (grupo de antibióticos), no se blanquean muy bien. Los dientes que tienen muchas obturaciones (tapaduras de caries), caries, despostilladuras, etc. es mejor tratarlos con restauraciones como resinas, carillas o coronas. El blanqueamiento dental puede ayudar a uniformar el tono de todos los dientes antes de hacer las restauraciones.',
                'Los inconvenientes son que deberá tener la boca abierta durante el procedimiento.'
            ]
        },
        {
            title: 'Riesgos',
            content: [
                'Declaro que me han sido explicados verbalmente los posibles riesgos y complicaciones que incluyen, pero no están limitadas a lo siguiente:',
                {
                    type: 'list',
                    items: [
                        { title: '1. Sensibilidad / Dolor en los Dientes.', text: 'Durante las primeras 24 horas después del blanqueamiento, puedo experimentar sensibilidad o dolor pasajero, que es usualmente leve si los dientes no son normalmente sensibles. Esta sensibilidad o dolor generalmente va a quitarse en los siguientes uno o dos días. Si los dientes son sensibles, el blanqueamiento puede hacerlos más sensibles por un periodo largo de tiempo. Si esto ocurre, se puede posponer el blanqueamiento hasta que el doctor termine el tratamiento de dessensibilización de los mismos (si esto es posible). Si mis dientes están sensibles después del blanqueamiento, pueden recetarme algún analgésico, lo cual generalmente es efectivo para estar más cómodo hasta que la sensibilidad de los dientes regrese a su normalidad.' },
                        { title: '2. Irritación de encías/ cachetes (carillos) / labios.', text: 'Es posible que durante el procedimiento haya contacto del material blanqueador con la encía, labios o cachetes (carrillos) produciendo áreas blancas y ardor. Esto suele desaparecer en poco tiempo.' },
                        { title: '3. Efecto en caries o restauraciones dentales (obturaciones).', text: 'Las restauraciones dentales existentes no se blanquean por lo que habrá diferencias de tonos entre las resinas y los dientes. Después del blanqueamiento se deben sustituir las resinas por otras con el tono apropiado. Realizar una nueva restauración dental puede implicar retirar parte de diente sano. Si la restauración es extensa o algo profunda, el poner una nueva resina podría provocar la necesidad de una endodoncia y un onlay o corona. Si hay caries expuestas o restauraciones desajustadas, el material de blanqueamiento puede penetrar al diente produciendo dolor considerable. En estos casos se deberán eliminar las caries o volver a hacer las restauraciones dentales con filtración antes del blanqueamiento.' },
                        { title: '4. Labios secos o partidos.', text: 'El tratamiento de blanqueamiento requiere de tarda una hora en promedio que la boca debe mantenerse abierta continuamente. Esto provoca resequedad en los labios, cachetes (carrillos) o labios partidos, Se deberá aplicar bálsamo labial, vaselina o crema con vitamina E.' },
                        { title: '5. Sensibilidad en dientes con Abrasión / erosión cervical.', text: 'Esta es una condición en la que la línea de la encía se ha retraído, exponiendo la raíz del diente que es más oscura por la falta de esmalte. Estas áreas expuestas dejan que el gel utilizado penetre al diente y cause sensibilidad. Si los dientes tienen abrasión o erosión cervical, estas áreas serán protegidas con una barrera protectora antes del blanqueamiento por lo cual podrá observarse una diferencia en el tono.' },
                        { title: '6. Resorción de la raíz.', text: 'Consiste en la pérdida relativamente lenta de una porción de la raíz de un diente (y posible pérdida del diente). Esta condición sucede más frecuentemente en pacientes que han recibido un blanqueamiento después del tratamiento de endodoncia.' },
                        { title: '7. Recaída.', text: 'Después del tratamiento de blanqueamiento, los pigmentos que se encuentran en los alimentos y bebidas van a volver a manchar los dientes. A esto se le llama recaída de un blanqueamiento. Podemos ayudar a reducir la recaída cepillando los dientes con pasta dental todos los días después de cada comida.' },
                        { title: '8. Inconformidad en el resultado del tratamiento - Nivel de blanqueamiento.', text: 'No hay un método para saber qué tan blancos quedarán los dientes después del blanqueamiento. Usualmente una sesión en el consultorio dental blanquea los dientes, pero se pueden requerir sesiones adicionales.' },
                    ]
                }
            ]
        },
        {
            title: 'Consecuencias de no realizar el tratamiento',
            content: [
                'Este tratamiento tiene fines estéticos y me ayudará a que los dientes se vean más claros. Si no me hacen el tratamiento o si lo interrumpo y no lo termino, los dientes continuarán estando en un tono más obscuro.',
                'Si me colocan restauraciones color diente y posteriormente decido hacerme el blanqueamiento, deberán cambiarse de acuerdo con el nuevo tono de los dientes.'
            ]
        },
        {
            title: 'Aceptación del tratamiento',
            content: [
                'Acepto y me comprometo a seguir responsablemente las recomendaciones recibidas, antes y después de la intervención, así como, acudir a las citas para las revisiones postoperatorias durante el tiempo indicado.',
                'A pesar de que no es posible garantizar resultados perfectos, se realizará todo esfuerzo razonable por asegurar que su afección sea tratada adecuadamente.',
                'Autorizo a mi odontólogo tratante a la atención de contingencias y urgencias que puedan derivarse del tratamiento que va a realizarme.',
                'Reconozco que esta carta de consentimiento puede ser revocable siempre y cuando no haya iniciado el tratamiento. Reconozco también que el Dr. puede negarse a realizar el tratamiento si encuentra que hay mayor riesgo que beneficios para mi salud.',
                'Al firmar esta carta de consentimiento reconozco que he recibido y comprendido la información adecuada acerca del tratamiento propuesto y que han respondido todas mis preguntas.'
            ]
        }
    ]
  },
  {
    slug: 'carillas',
    title: 'Carillas',
    authorizedAct: 'Carillas',
    sections: [
        {
            title: 'Tratamiento propuesto',
            content: [
                'Declaro que el Dr. [*] y su equipo de ayudantes me ha informado satisfactoriamente que las carillas se usan para restaurar o mejorar la apariencia de dientes dañados, manchados, deformes o separados.',
                'El tratamiento de carillas se hace en varias citas. Después de desgastar ligeramente la superficie anterior de los dientes con instrumentos abrasivos rotatorios y tomar la impresión (molde) de los mismos, pueden o no colocarse carillas temporales (o provisionales) mientras se fabrican las carillas finales. Debo regresar para que me pongan las carillas finales tan pronto estén listas. Los provisionales de carillas pueden caerse fácilmente, por lo que debo tener mucho cuidado al comer, morder y cepillarme los dientes. Si no regreso tan pronto me indiquen a colocarme las carillas finales, se podría deteriorar el provisional, provocando caries, fractura del diente, enfermedad de las encías (periodontal), infecciones y problemas con mí mordida, siendo necesaria la fabricación de nuevas carillas o coronas.',
                'Las carillas se colocan de manera definitiva en una cita posterior usando un cemento especial, una vez que se haya verificado el tamaño, forma y color.'
            ]
        },
        {
            title: 'Beneficios y alternativas',
            content: [
                'El tratamiento propuesto tiene la intención de restaurar o mejorar la apariencia de mis dientes, así como ajustar mi mordida. Dependiendo de mis necesidades, los tratamientos alternos incluyen blanquear los dientes y/o colocar resinas compuestas directas sobre los dientes, corregir mi mordida con tratamiento de ortodoncia. Si mi caso no permite los tratamientos anteriores, no hay tratamiento alternativo.'
            ]
        },
        {
            title: 'Riesgos',
            content: [
                'Declaro que me han sido explicados verbalmente los posibles riesgos y complicaciones, siendo los más comunes:',
                {
                    type: 'list',
                    items: [
                        { title: '1. Reacción a la anestesia y/o a los sedantes:', text: 'Aunque el diente ya tiene endodoncia, puede ser necesario que me apliquen una anestesia local y, en caso de estar muy nervioso, posiblemente deba tomar un sedante (tranquilizante) para estar cómodo durante el tratamiento. Los anestésicos que me aplicarán son muy seguros, pero en ocasiones poco frecuentes puede haber una reacción alérgica a la anestesia, la cual puede requerir de atención médica de emergencia. El efecto de la anestesia puede reducir mi capacidad para deglutir, lo cual aumenta los riesgos de tragar objetos extraños durante el tratamiento. Una vez que ha terminado el efecto de la anestesia, puedo tener una molestia pasajera en el lugar donde se me aplicó la anestesia. Si me dan un sedante puedo tener mareo temporal o reducir mi coordinación, por lo que debo asistir con un acompañante y no debo manejar ningún vehículo.' },
                        { title: '2. Sensibilidad de los dientes:', text: 'Aunque con las carillas es poco frecuente, preparar mis dientes puede irritar el tejido nervioso (pulpa dental) que se encuentra en el centro de estos, provocando sensibilidad al calor, al frío o a la presión. Tratar dicha sensibilidad puede implicar el uso de pastas de dientes especiales o posiblemente tratar la pulpa misma si no hay mejoría (tratamiento de endodoncia).' },
                        { title: '3. Mandíbula con contractura o adolorida:', text: 'Al mantener la boca abierta durante el tratamiento puede provocarme dolor y contractura temporal de la mandíbula, y puede ser difícil abrir la boca de manera normal varios días posteriores al tratamiento. Puede ser necesario jalar los labios para realizar el tratamiento, lo que puede provocar que mis comisuras de la boca queden rojas o partidas durante varios días.' },
                        { title: '4. Cambios en la mordida:', text: 'Una carilla puede alterar mi mordida y hacer que los dientes queden adoloridos. Esto puede requerir el ajuste de mi mordida, rebajando una pequeña área de la carilla o del diente antagonista (con el que choca la carilla).' },
                        { title: '5. Enfermedad periodontal:', text: 'La orilla inferior de una carilla está usualmente diseñada para colocarse por debajo de la encía, lo cual puede aumentar los riesgos de irritación de la misma, infección o caries. El cepillado adecuado y el uso de hilo dental en casa, una dieta saludable y limpiezas profesionales regulares son esenciales para ayudar a prevenir estos problemas.' },
                        { title: '6. Desgaste o fractura.', text: 'Si tengo apretamiento o rechinamiento (bruxismo) de mis dientes, es posible que haya desgaste o fractura de las carillas o de mis dientes. Debo usar un aparato llamado guarda oclusal para disminuir la posibilidad que esto me ocurra.' }
                    ]
                }
            ]
        },
        {
            title: 'Consecuencias de no realizar el tratamiento',
            content: [
                'Al ser un tratamiento en su mayoría estético, los problemas existentes causados por la forma o posición de sus dientes podrían ocasionar molestias futuras. Si los dientes están encimados, podría formarse más fácilmente caries entre ellos. Los dientes ya cariados, quebrados o rotos con restauraciones previas inadecuadas podrían continuar deteriorándose, provocando dolor, más caries y requerir de tratamientos más extensos..'
            ]
        },
        {
            title: 'Aceptación del tratamiento',
            content: [
                'Acepto y me comprometo a seguir responsablemente las recomendaciones recibidas, antes y después de la intervención, así como, acudir a las citas para las revisiones postoperatorias durante el tiempo indicado.',
                'A pesar de que no es posible garantizar resultados perfectos, se realizará todo esfuerzo razonable por asegurar que su afección sea tratada adecuadamente.',
                'Autorizo a mi odontólogo tratante a la atención de contingencias y urgencias que puedan derivarse del tratamiento que va a realizarme.',
                'Reconozco que esta carta de consentimiento puede ser revocable siempre y cuando no haya iniciado el tratamiento. Reconozco también que el Dr. puede negarse a realizar el tratamiento si encuentra que hay mayor riesgo que beneficios para mi salud.',
                'Al firmar esta carta de consentimiento reconozco que he recibido y comprendido la información adecuada acerca del tratamiento propuesto y que han respondido todas mis preguntas.'
            ]
        }
    ]
  },
  {
    slug: 'coronas-y-puentes-fijos',
    title: 'Coronas y puentes fijos',
    authorizedAct: 'Coronas y puentes fijos.',
    sections: [
      {
        title: 'Tratamiento propuesto',
        content: [
          'Declaro que el Dr. [*] y su equipo de ayudantes me ha informado satisfactoriamente que el propósito de una corona es recubrir y fortalecer un diente dañado por caries o restauraciones previas, proteger un diente al que se le hizo tratamiento de endodoncia o mejorar la posición de la mordida. Que los puentes fijos reponen uno o varios dientes perdidos y son soportados por coronas que van en los dientes ubicados a los lados de la zona sin dientes. Las coronas y puentes fijos también se usan para restaurar o mejorar la apariencia (estética) de dientes dañados, manchados, deformes o separados que no pueden corregirse con blanqueamiento dental, resinas o carillas.',
          'El tratamiento consta de varias citas:',
          {
            type: 'list',
            items: [
              'La preparación del diente consiste en rebajarlo un poco con fresa y pieza de mano por encima o debajo de la línea de la encía para crear una base para la corona.',
              'Se toma la impresión (molde) de los dientes preparados, se coloca una prótesis temporal (o provisional) y se fija con cemento temporal, mientras en el laboratorio dental fabrican la corona o puente fijo. Una vez que se ha colocado el provisional, es esencial regresar para colocar la corona o puente definitivo en cuanto estén listos. Como un provisional no dura mucho tiempo, al no regresar inmediatamente, se deteriora, permitiendo la formación de caries, enfermedad de las encías (periodontal), infecciones, problemas con mi mordida y cambios en la posición de los dientes, que impiden colocar la corona, siendo necesario reiniciar con el tratamiento.',
              'La corona o puente fijo se colocan solo después de que yo haya aprobado el tamaño, la forma y el color y se fijan (pegan) de manera definitiva con un cemento especial Una vez cementada la corona o el puente, no es posible hacer modificaciones.',
            ],
          },
        ],
      },
      {
        title: 'Beneficios y alternativas',
        content: [
          'El tratamiento propuesto tiene la intención de restaurar los dientes dañados, mejorar su apariencia y fortaleza y también ayudar a corregir la mordida. La alternativa de tratamiento para los dientes dañados consiste en extraerlos y colocar un puente removible. Para los dientes con mala posición o mordida, el tratamiento alterno es la ortodoncia. Los dientes posteriores con tratamiento de endodoncia se vuelven frágiles, por lo que las amalgamas y resinas no son alternativas de tratamiento. Si tienen poca destrucción pueden tratarse con restauraciones más conservadoras llamadas onlays.',
          'No hay alternativas para una corona cuando se trata de proteger un diente débil y destruido al que se le ha hecho tratamiento de endodoncia. En estos casos, puede ser necesario hacer una reconstrucción o colocar un poste (endoposte) dentro de la raíz del diente antes de la preparación y colocación de la corona o puente fijo.',
        ],
      },
      {
        title: 'Riesgos',
        content: [
          'Declaro que me han sido explicados verbalmente los posibles riesgos y complicaciones, siendo los más comunes:',
          {
            type: 'list',
            items: [
              {
                title: '1. Reacción a la anestesia y/o a los sedantes:',
                text: 'Se me aplicará una anestesia local y en caso de estar muy nervioso, posiblemente deba tomar un sedante (tranquilizante) para estar cómodo durante el tratamiento. Los anestésicos que me aplicarán son muy seguros, pero en ocasiones poco frecuentes puede haber una reacción alérgica a la anestesia, la cual puede requerir de atención médica de emergencia. El efecto de la anestesia puede reducir mi capacidad para deglutir, lo cual aumenta los riesgos de tragar objetos extraños durante el tratamiento. Una vez que ha terminado el efecto de la anestesia, puedo tener una molestia pasajera en el lugar donde se me aplicó la anestesia. Si me dan un sedante puedo tener mareo temporal o reducir mi coordinación, por lo que debo asistir con un acompañante y no debo manejar ningún vehículo.',
              },
              {
                title: '2. Irritación del nervio del diente:',
                text: 'La preparación o desgaste de un diente puede irritar el nervio del diente (pulpa dental) que se encuentra en el centro de éste, provocando sensibilidad al calor, al frío, a la presión o los alimentos. Para tratar esta sensibilidad se usan pastas de dientes especiales. En casos de dolor o dientes muy destruidos, posiblemente deba tratarse la pulpa (tratamiento de endodoncia).',
              },
              {
                title: '3. Mandíbula con contractura o adolorida:',
                text: 'Al mantener la boca abierta durante el tratamiento puede provocarme dolor y contractura temporal de la mandíbula, y puede ser difícil abrir la boca de manera normal durante varios días posteriores al tratamiento. Puede ser necesario jalar los labios para realizar el tratamiento, lo que puede provocar que mis comisuras de la boca queden rojas o partidas durante varios días.',
              },
              {
                title: '4. Cambios en la mordida:',
                text: 'La corona o puente pueden alterar la mordida, dando la sensación de que choca antes que los otros dientes o hacer que la mandíbula se sienta adolorida. Esto puede requerir el ajuste de la mordida,rebajando la superficie de la corona, puente o de los dientes adyacentes.',
              },
              {
                title: '5. Enfermedad de las encías (periodontal):',
                text: 'Si el borde de la corona está diseñado para colocarse por debajo de la encía, puede aumentar los riesgos de irritación de la misma, infección o caries. El cepillado adecuado y el uso de hilo dental en casa, una dieta saludable y limpiezas profesionales regulares son esenciales para ayudar a prevenir estos problemas.',
              },
              {
                title: '6. Desgaste o fractura.',
                text: 'Si tengo apretamiento o rechinamiento (bruxismo) de mis dientes, es posible que haya desgaste o fractura de las coronas, puentes o de mis dientes. Debo usar un aparato llamado guarda oclusal para disminuir la posibilidad que esto me ocurra.',
              },
            ],
          },
        ],
      },
      {
        title: 'Consecuencias de no realizar el tratamiento',
        content: [
          'Los dientes cariados, quebrados o rotos con previas restauraciones inadecuadas continuarán deteriorándose, provocando dolor, más caries, infección, daño del hueso alrededor del diente y, eventualmente, la pérdida prematura del mismo. Para los dientes que tuvieron tratamiento de endodoncia, el no colocar una corona o puente, produce contaminación y podría provocar dolor, infección, fractura y pérdida del diente. En los casos de problemas existentes, causados por la forma o posición de los dientes, puede haber desajustes mayores en la mordida causando molestias futuras al masticar y posible daño a la mandíbula.',
        ],
      },
      {
        title: 'Aceptación del tratamiento',
        content: [
          'Acepto y me comprometo a seguir responsablemente las recomendaciones recibidas, antes y después de la intervención, así como, acudir a las citas para las revisiones postoperatorias durante el tiempo indicado.',
          'A pesar de que no es posible garantizar resultados perfectos, se realizará todo esfuerzo razonable por asegurar que su afección sea tratada adecuadamente.',
          'Autorizo a mi odontólogo tratante a la atención de contingencias y urgencias que puedan derivarse del tratamiento que va a realizarme.',
          'Reconozco que esta carta de consentimiento puede ser revocable siempre y cuando no haya iniciado el tratamiento. Reconozco también que el Dr. puede negarse a realizar el tratamiento si encuentra que hay mayor riesgo que beneficios para mi salud.',
          'Al firmar esta carta de consentimiento reconozco que he recibido y comprendido la información adecuada acerca del tratamiento propuesto y que han respondido todas mis preguntas.',
        ],
      },
    ],
  },
  {
    slug: 'extraccion-dental',
    title: 'Extracción dental',
    authorizedAct: 'Extracción Dental.',
    sections: [
      {
        title: 'Tratamiento propuesto',
        content: [
          'Declaro que el Dr. [*] y su equipo de ayudantes (en adelante y de manera conjunta referidos como el “Odontólogo”) me ha informado satisfactoriamente que la extracción dental consiste en remover uno o más dientes del hueso en que se encuentra(n) alojado(s). Dependiendo de la afección que tengo, puede requerir seccionar el diente o cortar las encías y remover hueso antes de extraer el diente. Después de la extracción, puede colocar una sutura para cerrar las encías. Si ocurre cualquier dificultad durante el tratamiento, quizá pueda ser necesario acudir con un Cirujano Maxilofacial (dentista especializado en cirugías de la boca y cara y en la extracción de dientes).',
        ],
      },
      {
        title: 'Beneficios y alternativas',
        content: [
          'El tratamiento propuesto ayudará a aliviar los síntomas que tengo y quizá también pueda permitirme proceder con un tratamiento futuro, en caso de ser necesario. En opinión del Odontólogo, no hay ninguna otra alternativa de tratamiento razonable que ayude a aliviar mis síntomas y corregir los daños que tiene(n) el(los) diente(s) que me van a extraer.',
        ],
      },
      {
        title: 'Riesgos',
        content: [
          'Declaro que me han sido explicados verbalmente los posibles riesgos y complicaciones, siendo los más comunes:',
          {
            type: 'list',
            items: [
              { title: '1. Reacción a la anestesia y/o a los sedantes:', text: 'Se me aplicará una anestesia local, seleccionada de acuerdo con mi historia clínica. En caso de estar muy nervioso, posiblemente deba tomar un sedante (tranquilizante) para estar cómodo durante el tratamiento. Los anestésicos que me aplicarán son muy seguros, pero en ocasiones poco frecuentes puede haber una reacción alérgica a la anestesia, la cual puede requerir de atención médica de emergencia. El efecto de la anestesia puede reducir mi capacidad para deglutir, lo cual aumenta los riesgos de tragar objetos extraños durante el tratamiento. Una vez que ha terminado el efecto de la anestesia, puedo tener una molestia pasajera en el lugar donde se me aplicó la anestesia. En raras ocasiones, dependiendo de la zona de aplicación y tipo de anestesia, de adormecimiento (parestesia) que puede durar un período variable. Si me dan un sedante puedo tener mareo temporal o reducir mi coordinación, por lo que debo asistir con un acompañante y no debo manejar ningún vehículo.' },
              { title: '2. Fragmentos la raíz del diente:', text: 'Dependiendo de la condición y posición del diente o dientes que serán extraídos, algunos fragmentos de la raíz del diente pueden quedar en el lugar de la extracción después del tratamiento. Generalmente esto no causa problemas, pero en ocasiones poco comunes estos fragmentos de raíz del diente se infectan y deben ser removidos posteriormente.' },
              { title: '3. Alvéolo seco:', text: 'Debo tener especial cuidado con el coágulo que se forma en el espacio donde se alojaba el diente (alveolo dental), ya que puede desintegrarse o aflojarse por sí solo o como resultado de hacer esfuerzos físicos, fumar, tomar líquidos con popote, hacer succión o introducir objetos (para higiene bucal, algodón o gasas, etc.). Esta dolorosa afección, llamada alveolitis, puede durar una semana o más y es tratada colocando medicamento en el alvéolo del diente para ayudar a su curación.' },
              { title: '4. Fractura del hueso:', text: 'Dependiendo de la ubicación del diente o los dientes que serán extraídos, el tratamiento puede provocar fractura del hueso. En ocasiones poco comunes, el diente o dientes que serán extraídos pueden estar anquilosados (pegados al hueso) lo cual es difícil de identificar en la revisión física y en radiografías y pueden presentarse fracturas del hueso. Estas fracturas pueden dejar bordes irregulares de hueso y dar la sensación de que hay fragmentos de diente en la zona de la extracción. En ambas situaciones se puede requerir un tratamiento posterior.' },
              { title: '5. Daños a dientes adyacentes:', text: 'En algunos casos, los instrumentos utilizados para la extracción dental pueden dañar o hasta fracturar los dientes cercanos al diente que se va a extraer, lo cual puede requerir un tratamiento o restauración posterior para repararlo.' },
              { title: '6. Sangrado, inflamación, molestia e infección:', text: 'Después del tratamiento puede haber dolor, inflamación y molestia durante varios días, los cuales pueden ser tratados con analgésicos que no contienen aspirina. Puedo experimentar sangrado, el cual debo controlar haciendo presión al morder una gasa sobre la zona de extracción y avisar inmediatamente al Odontólogo. Si no informé que uso medicamentos o padezco una enfermedad que afectan la coagulación o tomé aspirina antes o después de la extracción hay riesgo de que el sangrado no se detenga y requiera la atención en un hospital. También puede producirse una infección después del tratamiento, la cual será tratada con antibióticos. De no controlarse, la infección puede convertirse en un absceso que puede extenderse a otras áreas de la cara y requiera cuidados mayores. Siempre debo notificar inmediatamente al doctor en caso de presentar cualquiera de estas situaciones. Tanto el sangrado como la infección no controlada puede requerir tratamientos no cubiertos por los seguros médicos, motivo por el cual le sugerimos revisar las condiciones generales de su póliza de seguros para confirmar si dichos tratamientos están o no cubiertos.' },
              { title: '7. Labios y mejillas adoloridos.', text: 'Puede ser necesario jalar los labios y mejillas para realizar el tratamiento, lo que puede provocar que mis comisuras de la boca queden rojas o partidas durante varios días. Debido a la dificultad en la ubicación del diente que se va a extraer, en ocasiones el uso de instrumentos rotarios, necesarios para cortar el hueso y el diente, puede generar irritaciones o quemaduras en los tejidos blandos de mi boca y mejillas.' },
              { title: '8. Mandíbula con contractura o adolorida:', text: 'Al mantener la boca abierta durante el tratamiento puede provocarme dolor y contractura temporal de la mandíbula, y puede ser difícil abrir la boca de manera normal durante varios días posteriores al tratamiento. Para hacer la extracción, puede requerirse mayor presión o movimientos de la mandíbula y tener dolor en la zona de la articulación de la mandíbula, que está por delante de los oídos. Puede haber tronidos y dolor que duren cierto tiempo.' },
              { title: '9. Perforación de los senos paranasales:', text: 'En los dientes y muelas superiores, a veces las raíces se extienden más allá del hueso y entran a los senos paranasales (las cavidades naturales en el hueso a los lados de la nariz y detrás de las mejillas). Al extraer estos dientes o muelas puede quedar un pequeño agujero temporal en los senos paranasales. Puede ser necesario el uso de antibióticos para prevenir o controlar una infección y un tratamiento adicional para ayudar al cierre de la del agujero del seno paranasal.' },
              { title: '10. Cambios en las sensaciones nerviosas:', text: 'Los nervios que controlan las sensaciones en los dientes, encías, y labios inferiores, así como lengua y mentón pasan por dentro de la mandíbula. Dependiendo del diente o dientes a ser extraídos (en particular dientes inferiores o terceros molares), en ocasiones quizá sea imposible evitar tocar, mover, estirar, lesionar o cortar un nervio. Esto podría cambiar la sensación normal en cualquiera de estas áreas, provocando hormigueo, adormecimiento o comezón (parestesia) o pérdida de toda sensación (anestesia). Estos cambios podrán durar desde varias semanas hasta varios meses o, en algunos casos, indefinidamente.' },
              { title: '11. Sinusitis.', text: 'Se me ha explicado que, si tengo sinusitis previa, aunque no esté manifiesta, ésta puede activarse o agravarse después de la extracción de dientes superiores. En caso de tener sinusitis previa, es preferible que ésta sea controlada por mi médico antes de la extracción, a menos que sea necesaria por una urgencia.' },
            ],
          },
          'El Odontólogo me ha explicado que mi caso en particular puede presentar estos riesgos:',
          { 
            type: 'textarea', 
            placeholder: 'Especifique aquí los riesgos particulares del caso...' 
          }
        ],
      },
      {
        title: 'Consecuencias de no realizar el tratamiento',
        content: [
          'Si el tratamiento no es realizado, continuaré teniendo síntomas, que pueden incluir dolor y/o infección, deterioro del hueso, cambios en la mordida, molestia en la articulación de la mandíbula y posiblemente la pérdida prematura de otros dientes. Si se presenta infección pueden formarse abscesos, que en ocasiones se extienden a otras áreas de la boca, cara o cuello y del cuerpo, que pueden causar la muerte si no se atienden.',
        ],
      },
      {
        title: 'Aceptación del tratamiento',
        content: [
          'Acepto y me comprometo a seguir responsablemente las recomendaciones recibidas, antes y después de la intervención, mantener la zona de la extracción lo más aseada posible mediante limpiezas bucales regulares tres veces por día, así como acudir a las citas para las revisiones postoperatorias durante el tiempo indicado.',
          'Autorizo a mi Odontólogo la atención de contingencias y urgencias que puedan derivarse del tratamiento que va a realizarme.',
          'Reconozco que esta carta de consentimiento puede ser revocable siempre y cuando no haya iniciado el procedimiento. Así mismo, reconozco que el Odontólogo puede negarse a realizar el tratamiento cuando ello implique mayor riesgo que beneficio para mi salud.',
          'Al firmar esta carta de consentimiento reconozco que he recibido y comprendido la información acerca del tratamiento propuesto y que han respondido todas mis preguntas.',
        ],
      },
    ],
  },
  {
    slug: 'extraccion-de-terceros-molares-y-dientes-retenidos',
    title: 'Extracción de terceros molares y dientes retenidos',
    authorizedAct: 'Extracción Dental de Terceros Molares y Dientes Retenidos.',
    sections: [
      {
        title: 'Tratamiento propuesto',
        content: [
            'Declaro que el Dr. [*] y su equipo de ayudantes (en adelante y de manera conjunta referidos como el “Odontólogo”) me ha informado satisfactoriamente que la extracción dental consiste en remover uno o más dientes del hueso en que se encuentra(n) alojado(s) o sumergido(s). Dependiendo de la afección que tengo, puede requerir cortar y separar las encías y remover hueso que recubre el diente y seccionar el diente antes de su extracción. Después de la extracción, puede colocar una sutura para cerrar las encías. Por la posición del diente es posible tocar algún nervio, como el dentario inferior o mentoniano al extraer un diente de la mandíbula o una zona importante como la base de los senos paranasales al extraer un diente superior.'
        ]
      },
      {
        title: 'Beneficios y alternativas',
        content: [
            'El tratamiento propuesto ayudará a aliviar los síntomas que tengo y quizá también pueda permitirme proceder con un tratamiento futuro, en caso de ser necesario. No hay ninguna otra alternativa de tratamiento razonable que ayude a aliviar mis síntomas y corregir los daños que tiene(n) el(los) diente(s) que me van a extraer.'
        ]
      },
      {
        title: 'Riesgos',
        content: [
          'Declaro que me han sido explicados verbalmente los posibles riesgos y complicaciones, siendo los más comunes:',
          {
            type: 'list',
            items: [
              { title: '1. Reacción a la anestesia y/o a los sedantes:', text: 'Se me aplicará una anestesia local, seleccionada de acuerdo con mi historia clínica. En caso de estar muy nervioso, posiblemente deba tomar un sedante (tranquilizante) para estar cómodo durante el tratamiento. Los anestésicos que me aplicarán son muy seguros, pero en ocasiones poco frecuentes puede haber una reacción alérgica a la anestesia, la cual puede requerir de atención médica de emergencia. El efecto de la anestesia puede reducir mi capacidad para deglutir, lo cual aumenta los riesgos de tragar objetos extraños durante el tratamiento. Una vez que ha terminado el efecto de la anestesia, puedo tener una molestia pasajera en el lugar donde se me aplicó la anestesia. En raras ocasiones, dependiendo de la zona de aplicación y el tipo de anestesia, podría tener una respuesta de adormecimiento (parestesia) que puede durar un período variable. Si me dan un sedante puedo tener mareo temporal o reducir mi coordinación, por lo que debo asistir con un acompañante y no debo manejar ningún vehículo.' },
              { title: '2. Fractura del diente.', text: 'Durante el proceso de extracción, el diente puede romperse debido a las fuerzas y movimientos aplicados con los instrumentos usados. Esto puede generar que sea necesario eliminar más porciones de hueso alrededor del diente para lograr su extracción, aumentando la posibilidad de inflamación o infección.' },
              { title: '3. Fragmentos de la raíz del diente:', text: 'Dependiendo de la condición y posición del diente o dientes que serán extraídos, algunos fragmentos de la raíz del diente pueden quedar en el lugar de la extracción después del tratamiento. Generalmente esto no causa problemas, pero en ocasiones poco comunes estos fragmentos de raíz del diente se infectan y deben ser removidos posteriormente.' },
              { title: '4. Alvéolo seco:', text: 'Debo tener especial cuidado con el coágulo que se forma en el espacio donde se alojaba el diente (alveolo dental), ya que puede desintegrarse o aflojarse por sí solo o como resultado de hacer esfuerzos físicos, fumar, tomar líquidos con popote, hacer succión o introducir objetos (para higiene bucal, algodón o gasas, etc.). Esta dolorosa afección, llamada alveolitis, puede durar una semana o más y es tratada colocando medicamento en el alvéolo del diente para ayudar a su curación.' },
              { title: '5. Fractura del hueso:', text: 'Dependiendo de la ubicación del diente o los dientes que serán extraídos, el tratamiento puede provocar fractura del hueso. En ocasiones poco comunes, el diente o dientes que serán extraídos pueden estar anquilosados (pegados al hueso) lo cual es difícil de identificar en la revisión física y en radiografías y pueden presentarse fracturas del hueso. Estas fracturas pueden dejar bordes irregulares de hueso y dar la sensación de que hay fragmentos de diente en la zona de la extracción. En ambas situaciones se puede requerir un tratamiento posterior.' },
              { title: '6. Daños a dientes adyacentes:', text: 'En algunos casos, los instrumentos utilizados para la extracción dental pueden dañar o hasta fracturar los dientes cercanos al diente que se va a extraer, lo cual puede requerir un tratamiento o restauración posterior para repararlo.' },
              { title: '7. Inflamación, molestia, sangrado e infección:', text: 'Después del tratamiento puede haber dolor, inflamación y molestia durante varios días,los cuales pueden sertratados con analgésicos que no contienen aspirina. Puedo experimentar sangrado, el cual debo controlar haciendo presión al morder una gasa sobre la zona de extracción y avisar inmediatamente al Odontólogo. Si no informé que uso medicamentos o padezco una enfermedad que afectan la coagulación o tomé aspirina antes o después de la extracción hay riesgo de que el sangrado no se detenga y requiera la atención en un hospital. También puede producirse una infección después del tratamiento, la cual será tratada con antibióticos. De no controlarse, la infección puede convertirse en un absceso que puede extenderse a otras áreas de la cara y requiera cuidados mayores. Siempre debo notificar inmediatamente al doctor en caso de presentar cualquiera de estas situaciones. Tanto el sangrado como la infección no controlada puede requerir tratamientos no cubiertos por los seguros médicos, motivo por el cual le sugerimos revisar las condiciones generales de su póliza de seguros para confirmar si dichos tratamientos están o no cubiertos' },
              { title: '8. Labios y mejillas adoloridos.', text: 'Puede ser necesario jalar los labios y mejillas para realizar el tratamiento, lo que puede provocar que mis comisuras de la boca queden rojas o partidas durante varios días. Debido a la dificultad en la ubicación del diente que se va a extraer, en ocasiones el uso de instrumentos rotarios, necesarios para cortar el hueso y el diente, puede generar irritaciones o quemaduras en los tejidos blandos de mi boca y mejillas.' },
              { title: '9. Mandíbula con contractura o adolorida:', text: 'Al mantener la boca abierta durante el tratamiento puede provocarme dolor y contractura temporal de la mandíbula, y puede ser difícil abrir la boca de manera normal durante varios días posteriores al tratamiento. Para hacer la extracción, puede requerirse mayor presión o movimientos de la mandíbula y tener dolor en la zona de la articulación de la mandíbula, que está por delante de los oídos. Puede haber tronidos y dolor que duren cierto tiempo.' },
              { title: '10. Perforación de los senos paranasales:', text: 'En los dientes y muelas superiores, a veces las raíces se extienden más allá del hueso y entran a los senos paranasales (las cavidades naturales en el hueso a los lados de la nariz y detrás de las mejillas). Al extraer estos dientes o muelas puede quedar un pequeño agujero temporal en los senos paranasales. Puede ser necesario el uso de antibióticos para prevenir o controlar una infección y un tratamiento adicional para ayudar al cierre de la del agujero del seno paranasal.' },
              { title: '11. Cambios en las sensaciones nerviosas:', text: 'Los nervios que controlan las sensaciones en los dientes, encías, y labios inferiores, así como lengua y mentón pasan por dentro de la mandíbula. Dependiendo del diente o dientes a ser extraídos (en particular dientes inferiores o terceros molares), en ocasiones quizá sea imposible evitar tocar, mover, estirar, lesionar o cortar un nervio. Esto podría cambiar la sensación normal en cualquiera de estas áreas, provocando hormigueo, adormecimiento o comezón (parestesia) o pérdida de toda sensación (anestesia). Estos cambios podrán durar desde varias semanas hasta varios meses o, en algunos casos, indefinidamente. Los tratamientos y medicamentos que pueden aplicarse para recuperar la sensibilidad pueden estar excluidos de los seguros médicos.' },
              { title: '12. Sinusitis.', text: 'Se me ha explicado que después de la extracción de dientes superiores es posible que se presente o agrave la infección de senos para nasales (sinusitis). En caso de tener sinusitis previa, ésta debe ser controlada por mi médico antes de la extracción, a menos que el retiro del diente sea necesario por una urgencia.' },
            ]
          },
          'El Dr. me ha explicado que mi caso en particular puede presentar estos riesgos:',
          { 
            type: 'textarea', 
            placeholder: 'Especifique aquí los riesgos particulares del caso...' 
          }
        ],
      },
      {
        title: 'Consecuencias de no realizar el tratamiento',
        content: [
            'Si el tratamiento no es realizado, continuaré teniendo síntomas, que pueden incluir dolor y/o infección, deterioro del hueso, cambios en la mordida, molestia en la articulación de la mandíbula y posiblemente la pérdida prematura de otros dientes. Si se presenta infección pueden formarse abscesos, que en ocasiones se extienden a otras áreas de la boca, cara o cuello y del cuerpo, que pueden causar la muerte si no se atienden.'
        ]
      },
      {
        title: 'Aceptación del tratamiento',
        content: [
            'Acepto y me comprometo a seguir responsablemente las recomendaciones recibidas, antes y después de la intervención, mantener la zona de la extracción lo más aseada posible mediante limpiezas bucales regulares tres veces por día, así como acudir a las citas para las revisiones postoperatorias durante el tiempo indicado.',
            'Autorizo a mi Odontólogo la atención de contingencias y urgencias que puedan derivarse del tratamiento que va a realizarme.',
            'Reconozco que esta carta de consentimiento puede ser revocable siempre y cuando no haya iniciado el procedimiento. Así mismo, reconozco que el Odontólogo puede negarse a realizar el tratamiento cuando ello implique mayor riesgo que beneficio para mi salud.',
            'Al firmar esta carta de consentimiento reconozco que he recibido y comprendido la información acerca del tratamiento propuesto y que han respondido todas mis preguntas.'
        ]
      }
    ]
  },
  {
    slug: 'endodoncia',
    title: 'Endodoncia',
    authorizedAct: 'Endodoncia',
    sections: [
        {
            title: 'Tratamiento propuesto',
            content: [
                'Declaro que el Dr. [*] y su equipo de ayudantes me ha informado satisfactoriamente que el tratamiento de endodoncia implica aliviar el dolor y la incomodidad al remover el tejido nervioso (pulpa dental) localizado en el centro del diente, y su raíz o raíces (conducto radicular). Dependiendo el caso, el tratamiento se lleva a cabo en una o varias citas. Después de la aplicación de anestesia, consiste en perforar la superficie del diente para exponer la pulpa dental, la cual se retira con instrumentos muy finos. Puede utilizarse medicamento para esterilizar el interior del diente y prevenir infecciones futuras. Cada conducto radicular se limpia y se rellena con gutapercha (material parecido a la goma) y un cemento. Pueden ser necesarias una o varias radiografías en cada uno de los pasos del tratamiento. La cavidad del diente se tapa con una curación temporal. Puede ser necesaria la medicación con antibióticos y/o analgésicos.',
                'Una vez terminado el tratamiento de endodoncia, debo regresar inmediatamente para completar el tratamiento restaurativo. La curación temporal dura corto tiempo, y si no regreso como se me indica, para sellar el diente con una restauración definitiva o corona, podría provocar el deterioro de la curación, resultando en caries, fractura, infección, enfermedad periodontal y la posible pérdida prematura del diente.',
                'No está recomendado restaurar los dientes posteriores con amalgama o resina porque pueden fracturarse, la restauración definitiva más frecuente para protegerlos es una corona o un onlay (restauración parcial que cubre la cara masticatoria del diente). Si la endodoncia fue en un diente anterior (de enfrente), donde las fuerzas masticatorias son menores y el daño en el diente es pequeño, entonces podrían colocarme una resina. Si mi diente con endodoncia está muy destruido, debe hacerse una reconstrucción o se inserta un perno de metal o fibra de vidrio (endoposte) en el conducto para ayudar a restaurar el diente. En una cita posterior se coloca una corona o una restauración para fortalecer y restaurar el diente.'
            ]
        },
        {
            title: 'Beneficios y alternativas',
            content: [
                'El tratamiento de endodoncia tiene la finalidad de permitirme conservar mi diente más tiempo, lo cual me ayudará a mantener mi mordida natural y el sano funcionamiento de mis mandíbulas. La alternativa de tratamiento es la extracción de mi diente. Esta alternativa requiere reemplazar el diente extraído con un puente fijo o uno removible, o con un diente artificial fijado al hueso mediante un implante. Si no me hago el reemplazo del diente extraído, los dientes pueden cambiar de posición, modificando mi mordida.'
            ]
        },
        {
            title: 'Riesgos',
            content: [
                'Declaro que me han sido explicados verbalmente los posibles riesgos y complicaciones, siendo los más comunes:',
                {
                    type: 'list',
                    items: [
                        { title: '1. Reacción a la anestesia y/o a los sedantes:', text: 'Aunque el diente ya tiene endodoncia, puede ser necesario que me apliquen una anestesia local y, en caso de estar muy nervioso, posiblemente deba tomar un sedante (tranquilizante) para estar cómodo durante el tratamiento. Los anestésicos que me aplicarán son muy seguros, pero en ocasiones poco frecuentes puede haber una reacción alérgica a la anestesia, la cual puede requerir de atención médica de emergencia. El efecto de la anestesia puede reducir mi capacidad para deglutir, lo cual aumenta los riesgos de tragar objetos extraños durante el tratamiento. Una vez que ha terminado el efecto de la anestesia, puedo tener una molestia pasajera en el lugar donde se me aplicó la anestesia. Si me dan un sedante puedo tener mareo temporal o reducir mi coordinación, por lo que debo asistir con un acompañante y no debo manejar ningún vehículo.' },
                        { title: '2. Mandíbula con contractura o adolorida:', text: 'Al mantener la boca abierta durante el tratamiento puede provocarme dolor y contractura temporal de la mandíbula, y puede ser difícil abrir la boca de manera normal durante varios días posteriores al tratamiento. Puede ser necesario jalar los labios para realizar el tratamiento, lo que puede provocar que mis comisuras de la boca queden rojas o partidas durante varios días.' },
                        { title: '3. Inflamación, molestia, infección y sangrado:', text: 'Puede haber dolor, inflamación y molestia durante varios días, los cuales pueden ser tratados con analgésicos sin aspirina. También puede producirse una infección después del tratamiento, la cual será tratada con antibióticos. En raras ocasiones, después del tratamiento puedo experimentar sangrado. Si no informé que uso medicamentos que afectan la coagulación o tomé aspirina antes o después de la endodoncia hay riesgo de que el sangrado no se detenga y requiera la atención en un hospital. Siempre debo notificar inmediatamente al doctor en caso de presentar cualquiera de estas situaciones.' },
                        { title: '4. Remoción incompleta de la pulpa.', text: 'Los conductos radiculares estrechos, curvos o calcificados pueden evitar que se remueva toda la pulpa inflamada o infectada. Dejar algo de pulpa en el conducto radicular puede provocar que mis síntomas continúen o empeoren, lo cual puede requerir un procedimiento adicional llamado apicectomía. A través de una pequeña incisión en las encías y del hueso, se retira la pulpa restante y se sella el conducto radicular. Una apicectomía también puede ser necesaria si mis síntomas continúan y mi diente no sana' },
                        { title: '5. Instrumento roto:', text: 'Ocasionalmente, un instrumento de endodoncia, al ser muy fino, puede fracturarse en un conducto radicular estrecho, curvo o calcificado.Dependiendo de su ubicación, el fragmento puede ser removido o quizá pueda ser necesario sellarlo en el conducto radicular (estos instrumentos están hechos de acero inoxidable, no tóxico, lo cual no causa ningún daño). También puede ser necesario realizarme una apicectomía para sellar el conducto radicular.' },
                        { title: '6. Exceso de obturación:', text: 'Como resultado de rellenar en exceso el conducto radicular por la formación incompleta de su diente o de un absceso en la parte final del diente (ápice), quizá pueda existir un espacio entre el conducto radicular y el hueso o el tejido circundante del diente. En la mayor parte de los casos el exceso de obturación no produce complicaciones. En caso de presentarse una complicación, la apicectomía puede ser necesaria para retirar la obturación sobrante y sellar el conducto radicular.' },
                        { title: '7. Necesidad de tratamiento posterior:', text: 'Los dientes con tratamiento de endodoncia son más propensos a quebrarse o fracturarse, por lo que se necesita una restauración final como onlay, corona, puente o dentadura parcial. Si tengo enfermedad de las encías (periodontal), podría perder mi diente, aunque el tratamiento de endodoncia haya sido exitoso.' },
                        { title: '8. Necesidad de retratamiento de endodoncia y/o cirugía de endodoncia.', text: 'En ocasiones poco frecuentes, aunque el tratamiento de endodoncia, la reconstrucción y la restauración definitiva hayan sido exitosos, pueden presentarse nuevamente los síntomas de dolor, inflamación e infección. En estos casos me deben hacer un retratamiento de endodoncia, siendo necesario que me quiten la restauración final, la reconstrucción/endoposte y la gutapercha y en otras ocasiones eliminar la parte final de la(s) raíz (raíces) afectada(s). Durante el retiro, éstos pueden dañarse, quedando inservibles y la raíz del diente puede romperse, siendo necesaria la extracción.' }
                    ]
                }
            ]
        },
        {
            title: 'Consecuencias de no realizar el tratamiento',
            content: [
                'Este tratamiento me ayudará a aliviar mis síntomas. Si no se me realiza el tratamiento de endodoncia, la molestia, dolor, infección puede continuar, formando abscesos en el tejido y hueso alrededor de los dientes, pérdida de éstos e incluso enfrentar el riesgo de una infección que se extienda a otras zonas de la cara, el cuello y del cuerpo, que pueden causar la muerte si no se atienden.'
            ]
        },
        {
            title: 'Aceptación del tratamiento',
            content: [
                'Acepto y me comprometo a seguir responsablemente las recomendaciones recibidas, antes y después de la intervención, así como, acudir a las citas para las revisiones postoperatorias durante el tiempo indicado.',
                'A pesar de que no es posible garantizar resultados perfectos, se realizará todo esfuerzo razonable por asegurar que su afección sea tratada adecuadamente.',
                'Autorizo a mi odontólogo tratante a la atención de contingencias y urgencias que puedan derivarse del tratamiento que va a realizarme.',
                'Reconozco que esta carta de consentimiento puede ser revocable siempre y cuando no haya iniciado el tratamiento. Reconozco también que el Dr. puede negarse a realizar el tratamiento si encuentra que hay mayor riesgo que beneficios para mi salud.',
                'Al firmar esta carta de consentimiento reconozco que he recibido y comprendido la información adecuada acerca del tratamiento propuesto y que han respondido todas mis preguntas'
            ]
        }
    ]
  },
  {
    slug: 'profilaxis',
    title: 'Profilaxis',
    authorizedAct: 'Profilaxis, resinas y amalgamas',
    sections: [
        {
            title: 'Tratamiento propuesto',
            content: [
                'Declaro que el Dr. [*] y su equipo de ayudantes me ha informado satisfactoriamente que requiero los tratamientos seleccionados que se mencionan a continuación:',
                {
                    type: 'list',
                    items: [
                        'Profilaxis o limpieza dental,que consiste en la eliminación de sarro,depósitos suaves,placa dentobacteriana y manchas,seguido del pulido de las superficies de los dientes.',
                        'Selladores, para prevenir la formación de caries o detener una caries que inicia en los surcos de mis dientes. Los selladores se aplican en los surcos de mis dientes para evitar que penetren los agentes causantes de la caries.Al final puede ser necesario ajustar los puntos altos de los selladores para morder en la forma acostumbrada.',
                        'Resinas fluidas (resinas Flow), para tratar mis dientes con inicio de caries que no ha formado ninguna cavidad. Con este tratamiento no se necesita que recorten el tejido de mi diente que está sano, solo se retira, mediante una turbina y una fresa dental, una pequeña parte que tiene inicio de caries. Después se aplica la resina fluida y se endurece con una luz especial.Al final puede ser necesario ajustar los puntos altos de la resina fluida para morder en la forma acostumbrada.',
                        'Composites (resinas compuestas), para rellenar las cavidades que la caries ha formado en mis dientes. Para la restauración con composite se requiere remover, mediante una turbina y una fresa dental, todo el tejido del diente que se ha reblandecido y contaminado. Dependiendo de la profundidad de la cavidad, se pueden aplicar algunos cementos para recubrir el nervio (pulpa dental) de mi diente. Después se rellena la cavidad aplicando el composite en capas, que se endurecen con una luz especial. Al final puede ser necesario ajustar los puntos altos de la restauración de composite para morder en la forma acostumbrada.',
                        'Amalgama, para rellenar las cavidades que la caries ha formado en mis dientes y no es posible colocar composite. Para la restauración con amalgama se requiere remover, mediante una turbina y una fresa dental, todo el tejido del diente que se ha reblandecido y contaminado. Dependiendo de la profundidad de la cavidad, se pueden aplicar algunos cementos para recubrir el nervio (pulpa dental) de mi diente. Después se aplica la amalgama y se espera hasta su endurecimiento.Al final puede ser necesario ajustar los puntos altos de la restauración con amalgama para morder en la forma acostumbrada.'
                    ]
                },
                'Me informaron que puede haber cambios en el tratamiento dependiendo de los daños de los dientes que se encuentren durante la atención y de la evolución de mis padecimientos bucodentales particulares. Me informaron también que los tratamientos como las extracciones o los tratamientos de especialidad tienen consentimientos independientes con información más detallada y debo leerlos antes de que me realicen cualquiera de ellos.'
            ]
        },
        {
            title: 'Beneficios y alternativas',
            content: [
                 {
                    type: 'list',
                    items: [
                        'La eliminación de sarro mediante la profilaxis ayudará a mejorar mi salud bucodental, siempre y cuando mantenga el cuidado de mi boca con cepillado y uso de hilo dental. No existen alternativas a la profilaxis. Si el daño producido por el sarro en mis dientes y encías es grande, puedo necesitar tratamientos especializados de Periodoncia.',
                        'La aplicación de flúor refuerza la superficie externa (esmalte) sana del diente.Ayuda a prevenir la formación de cavidades por caries para que mejorar mi salud bucodental. No existen alternativas a este procedimiento. Para que la aplicación de flúor sea efectiva, es conveniente tener una alimentación con menos azúcar y carbohidratos,mantener una buena higiene bucal mediante cepillado dental con pasta fluorada, uso de hilo dental y enjuagues bucales que controlan las bacterias deteniendo el avance de la caries y pueden quedar líneas finas obscuras sin cavidad.',
                        'Los selladores ayudan a eliminar el avance de la caries en los dientes que no tienen cavidades y así evitarme el corte tejido dental sano para hacer una cavidad. La alternativa a los selladores es una alimentación con menos azúcar y carbohidratos, mantener una buena higiene mediante cepillado dental con pasta fluorada, uso de hilo dental y enjuagues bucales que controlan las bacterias deteniendo el avance de la caries y pueden quedar líneas finas obscuras sin cavidad. Se sugieren visitas de control cada seis meses para evaluar que no se hayan formado cavidades.',
                        'Las resinas fluidas ayudan a eliminar el avance de la caries en mis dientes que no tienen cavidades, pero tienen líneas obscuras o descalcificadas.Con este tratamiento se evitan hacer cavidades mayores y me salvan tejido dental sano. La alternativa a este tratamiento es una alimentación con menos azúcar y carbohidratos, mantener una buena higiene mediante cepillado dental con pasta fluorada, uso de hilo dental y enjuagues bucales que controlan las bacterias deteniendo el avance de la caries y pueden quedar líneas finas obscuras sin cavidad. Se sugieren visitas de control cada seis meses para evaluar que no se hayan formado cavidades.',
                        'La restauración de mis dientes con cavidades debidas a caries, con fracturas o con restauraciones defectuosas devuelven la integridad de mis dientes y ayudan a mejorar mi salud bucodental. Las restauraciones con composite tienen un tono similar a mis dientes dando un aspecto natural. En cavidades grandes, puede ser necesaria una restauración con amalgama. Las alternativas estéticas a las amalgamas en cavidades grandes son las restauraciones indirectas (se mandan a fabricar al laboratorio dental) tales como las incrustaciones, onlays y coronas, que requieren de varias citas en las que se prepara el diente, se toman impresiones y de color, se hace la prueba y la cementación de la restauración estética.'
                    ]
                 }
            ]
        },
        {
            title: 'Riesgos',
            content: [
                'Declaro que me han sido explicados verbalmente los posibles riesgos y complicaciones, siendo los más comunes:',
                {
                    type: 'list',
                    items: [
                        { title: '1. Sangrado de encías:', text: 'Los instrumentos que se usan durante las profilaxis tocan el diente y las encías. Mis encías pueden sangrar en forma pasajera. El sarro que se encuentra sobre mis dientes y encías puede esconder problemas mayores que no pudieron identificarse totalmente durante la evaluación. Si esto ocurre posiblemente necesite una cita con el periodoncista y podría modificarse el plan de tratamiento que me propusieron inicialmente.' },
                        { title: '2. Sensibilidad al calor y al frío:', text: 'Después de la profilaxis, mientras las encías sanan pueden retraerse, dejando expuesta parte de la raíz, lo cual podría hacer que los dientes sean más sensibles al calor o al frío.' },
                        { title: '3. Reacción a la anestesia y/o a los sedantes:', text: 'Se me aplicará una anestesia local y, en caso de estar muy nervioso, posiblemente deba tomar un sedante (tranquilizante) para estar cómodo durante el tratamiento. Los anestésicos que me aplicarán son muy seguros, pero en ocasiones poco frecuentes puede haber una reacción alérgica a la anestesia, la cual puede requerir de atención médica de emergencia. El efecto de la anestesia puede reducir mi capacidad para deglutir, lo cual aumenta los riesgos de tragar objetos extraños durante el tratamiento. Una vez que ha terminado el efecto de la anestesia, puedo tener una molestia pasajera en el lugar donde se me aplicó la anestesia. Si me dan un sedante puedo tener mareo temporal o reducir mi coordinación, por lo que debo asistir con un acompañante y no debo manejar ningún vehículo.' },
                        { title: '4. Mandíbula con contractura o adolorida:', text: 'Al mantener la boca abierta durante el tratamiento puede provocarme dolor y contractura temporal de la mandíbula, y puede ser difícil abrir la boca de manera normal durante varios días posteriores al tratamiento. Puede ser necesario jalar los labios para realizar el tratamiento, lo que puede provocar que mis comisuras de la boca queden rojas o partidas durante varios días.' },
                        { title: '5. Aplicación de aislantes:', text: 'Para el tratamiento con resinas y amalgamas pueden aplicarme un plástico aislante (dique de hule) para controlar la contaminación por saliva, el cual limita el habla. En raras ocasiones puede presentarse alergia al látex.' },
                        { title: '6. Fractura de los dientes.', text: 'Si tengo dientes con cavidades grandes o que tienen amalgamas o resinas amplias podrían estar debilitados. Al remover la parte dañada del diente y la restauración, las zonas debilitadas pueden romperse y tendrían que hacerse restauraciones más grandes para reponer las partes perdidas modificando el plan de tratamiento que me propusieron inicialmente.' },
                        { title: '7. Irritación del nervio del diente:', text: 'Para restaurar mis dientes es necesario eliminar las partes dañadas. Esto puede irritar el tejido nervioso (pulpa dental) que se encuentra en el centro de éste, provocando sensibilidad al calor, al frío o a la presión o dolor. Puedo necesitar que le apliquen a mis dientes materiales intermedios y continuar en una cita posterior para conocer la respuesta de los dientes. En ocasiones debe hacerse el tratamiento la pulpa (tratamiento de endodoncia). Si esto ocurre, deberé tener una cita con el endodoncista y podría modificarse el plan de tratamiento que me propusieron inicialmente.' },
                        { title: '8. Cambios en la mordida:', text: 'Cualquier tratamiento (selladores, resinas o amalgamas) pueden alterar mi mordida o hacer que mi mandíbula se sienta adolorida causando confusión con dolor de los dientes tratados. Esto puede requerir el ajuste de mi mordida,rebajando la superficie de las restauraciones que me hicieron.' },
                        { title: '9. Desgaste o fractura.', text: 'Si tengo apretamiento o rechinamiento (bruxismo) de mis dientes, es posible que haya desgaste o fractura de las resinas, amalgamas o de mis dientes. Debo usar un aparato llamado guarda oclusal para disminuir la posibilidad que esto me ocurra.' },
                        { title: '10. Daños a restauraciones desajustadas:', text: 'En algunos casos,los instrumentos utilizados para la profilaxis pueden desalojar las restauraciones de algunos lo cual puede requerir recolocarla o realizar una restauración posterior para repararlo.' }
                    ]
                }
            ]
        },
        {
            title: 'Consecuencias de no realizar el tratamiento',
            content: [
                'Si no se realiza la profilaxis, el sarro y los problemas existentes pueden ocasionar molestias futuras y posibles daños en el hueso que está alrededor de mis dientes y encías, requiriendo de tratamientos posteriores más complicados y costosos. Los dientes cariados, quebrados o rotos y con restauraciones previas inadecuadas continúan deteriorándose, formándose más caries, provocando dolor, infección, daño del hueso alrededor del diente y la pérdida prematura del mismo.'
            ]
        },
        {
            title: 'Aceptación del tratamiento',
            content: [
                'Acepto y me comprometo a seguir responsablemente las recomendaciones recibidas, antes y después de la intervención, así como, acudir a las citas para las revisiones postoperatorias durante el tiempo indicado.',
                'A pesar de que no es posible garantizar resultados perfectos, se realizará todo esfuerzo razonable por asegurar que su afección sea tratada adecuadamente.',
                'Autorizo a mi odontólogo tratante a la atención de contingencias y urgencias que puedan derivarse del tratamiento que va a realizarme.',
                'Reconozco que esta carta de consentimiento puede ser revocable siempre y cuando no haya iniciado el tratamiento. Reconozco también que el Dr. puede negarse a realizar el tratamiento si encuentra que hay mayor riesgo que beneficios para mi salud.',
                'Al firmar esta carta de consentimiento reconozco que he recibido y comprendido la información adecuada acerca del tratamiento propuesto y que han respondido todas mis preguntas.'
            ]
        }
    ]
  },
  {
    slug: 'reconstruccion-y-endoposte',
    title: 'Reconstrucción y endoposte',
    authorizedAct: 'Reconstrucciones y Endopostes.',
    sections: [
      {
        title: 'Tratamiento propuesto',
        content: [
          'Declaro que el Dr. [*] y su equipo de ayudantes me ha informado satisfactoriamente que las reconstrucciones o endopostes son necesarios cuando los dientes están muy destruidos o tienen tratamiento de endodoncia y es necesario crear un soporte para retener la corona o el puente fijo.',
          {
            type: 'list',
            items: [
                'El tratamiento de reconstrucción consta de 1 cita: a) Se limpia la parte interna del diente o se retira parte del material de relleno usado en la endodoncia; b) Se aplica una resina o cemento especial para formar la base de soporte necesaria y se procede a hacer la preparación para la corona.',
                'El tratamiento de endoposte se realiza en 1 o 2 citas: a) Se retira parte del material de relleno usado en la endodoncia; b) Se fija con cemento un poste metálico o de fibra de vidrio en el interior de la raíz y un material que forma la base de soporte necesaria y se procede a hacer la preparación para la corona.'
            ]
          },
        ]
      },
      {
        title: 'Beneficios y alternativas',
        content: [
          'El tratamiento propuesto tiene la intención de reconstruir los dientes destruidos y crear un soporte para retener la corona o el puente fijo.La alternativa de tratamiento para los dientes dañados consiste en extraerlos y colocar un puente removible. Los dientes posteriores con tratamiento de endodoncia se vuelven frágiles, por lo que las amalgamas, resinas e incrustaciones no son alternativas de tratamiento.',
        ]
      },
      {
        title: 'Riesgos',
        content: [
          'Declaro que me han sido explicados verbalmente los posibles riesgos y complicaciones, siendo los más comunes:',
          {
            type: 'list',
            items: [
              { title: '1. Reacción a la anestesia y/o a los sedantes:', text: 'Aunque el diente ya tiene endodoncia, puede ser necesario que me apliquen una anestesia local y, en caso de estar muy nervioso, posiblemente deba tomar un sedante (tranquilizante) para estar cómodo durante el tratamiento. Los anestésicos que me aplicarán son muy seguros, pero en ocasiones poco frecuentes puede haber una reacción alérgica a la anestesia, la cual puede requerir de atención médica de emergencia. El efecto de la anestesia puede reducir mi capacidad para deglutir, lo cual aumenta los riesgos de tragar objetos extraños durante el tratamiento. Una vez que ha terminado el efecto de la anestesia, puedo tener una molestia pasajera en el lugar donde se me aplicó la anestesia. Si me dan un sedante puedo tener mareo temporal o reducir mi coordinación, por lo que debo asistir con un acompañante y no debo manejar ningún vehículo.' },
              { title: '2. Mandíbula con contractura o adolorida:', text: 'Al mantener la boca abierta durante el tratamiento puede provocarme dolor y contractura temporal de la mandíbula, y puede ser difícil abrir la boca de manera normal durante varios días posteriores al tratamiento. Puede ser necesario jalar los labios para realizar el tratamiento, lo que puede provocar que mis comisuras de la boca queden rojas o partidas durante varios días.' },
              { title: '3. Fractura de partes del diente.', text: 'Pueden romperse partes del diente al hacer la limpieza previa a la reconstrucción. En estos casos puede ser necesaria la colocación de un endoposte.' },
              { title: '4. Fractura de la raíz.', text: 'La colocación de un endoposte es bastante segura, pero en ocasiones poco frecuentes pueden formarse agrietamientos en la raíz, los cuales continúan lentamente hasta generar una fractura de la raíz después de unas semanas o uno o varios años.' }
            ]
          }
        ]
      },
      {
        title: 'Consecuencias de no realizar el tratamiento',
        content: [
          'Para los dientes que tuvieron tratamiento de endodoncia, el no hacer la reconstrucción o endoposte y no colocar una corona o puente, produce contaminación y posible infección, fractura que provocar dolor, daño en el hueso alrededor del diente y la necesidad de extracción o pérdida del mismo.'
        ]
      },
      {
        title: 'Aceptación del tratamiento',
        content: [
          'Acepto y me comprometo a seguir responsablemente las recomendaciones recibidas, antes y después de la intervención, así como, acudir a las citas para las revisiones postoperatorias durante el tiempo indicado.',
          'A pesar de que no es posible garantizar resultados perfectos, se realizará todo esfuerzo razonable por asegurar que su afección sea tratada adecuadamente.',
          'Autorizo a mi odontólogo tratante a la atención de contingencias y urgencias que puedan derivarse del tratamiento que va a realizarme.',
          'Reconozco que esta carta de consentimiento puede ser revocable siempre y cuando no haya iniciado el tratamiento. Reconozco también que el Dr. puede negarse a realizar el tratamiento si encuentra que hay mayor riesgo que beneficios para mi salud.',
          'Al firmar esta carta de consentimiento reconozco que he recibido y comprendido la información adecuada acerca del tratamiento propuesto y que han respondido todas mis preguntas.'
        ]
      }
    ]
  },
  {
    slug: 'tratamiento-periodontal-no-quirurgico',
    title: 'Tratamiento Periodontal no Quirúrgico',
    authorizedAct: 'Tratamiento Periodontal no Quirúrgico (Raspado y Alisado Radicular).',
    sections: [
        {
            title: 'Tratamiento propuesto',
            content: [
                'Declaro que el Dr. [*] y su equipo de ayudantes me ha informado satisfactoriamente que el tratamiento periodontal no quirúrgico consiste en el raspado y alisado radicular de mis dientes. La finalidad de este tratamiento es remover los depósitos de sarro y placa que se encuentran en la superficie de los dientes y por debajo de las encías, así como para alisar las superficies de las raíces.',
                'Para el raspado y alisado radicular se utilizan instrumentos manuales y ultrasónicos por debajo de mis encías. Es probable que el tratamiento requiera de más de una cita para que el tratamiento sea efectivo.'
            ]
        },
        {
            title: 'Beneficios y alternativas',
            content: [
                'La eliminación de sarro por debajo de mis encías y el alisado de las raíces ayudará a mejorar mi salud periodontal. Si mantengo el cuidado de mi boca con cepillado, uso de hilo dental y los aditamentos especiales que me recomienden podré conservar la salud de mis dientes. Una vez que termine mi tratamiento, será necesario que asista a citas periódicas (usualmente cada 3-4 meses) con la finalidad de mantener la salud de mis encías, hueso y dientes.',
                'No existen alternativas al raspado y alisado radicular. Si el daño producido por el sarro en mis dientes y encías es muy grande, puedo necesitar un tratamiento quirúrgico de Periodoncia.'
            ]
        },
        {
            title: 'Riesgos',
            content: [
                'Declaro que me han sido explicados verbalmente los posibles riesgos y complicaciones, siendo los más comunes:',
                {
                    type: 'list',
                    items: [
                        { title: '1. Reacción a la anestesia y/o a los sedantes:', text: 'Se me aplicará una anestesia local y, en caso de estar muy nervioso, posiblemente deba tomar un sedante (tranquilizante) para estar cómodo durante el tratamiento. Los anestésicos que me aplicarán son muy seguros, pero en ocasiones poco frecuentes puede haber una reacción alérgica a la anestesia, la cual puede requerir de atención médica de emergencia. El efecto de la anestesia puede reducir mi capacidad para deglutir, lo cual aumenta los riesgos de tragar objetos extraños durante el tratamiento. Una vez que ha terminado el efecto de la anestesia, puedo tener una molestia pasajera en el lugar donde se me aplicó la anestesia. Si me dan un sedante puedo tener mareo temporal o reducir mi coordinación, por lo que debo asistir con un acompañante y no debo manejar ningún vehículo.' },
                        { title: '2. Mandíbula con contractura o adolorida:', text: 'Al mantener la boca abierta durante el tratamiento puede provocarme dolor y contractura temporal de la mandíbula, y puede ser difícil abrir la boca de manera normal durante varios días posteriores al tratamiento. Puede ser necesario jalar los labios para realizar el tratamiento, lo que puede provocar que mis comisuras de la boca queden rojas o partidas durante varios días.' },
                        { title: '3. Sangrado:', text: 'Los instrumentos que se usan durante el raspado y alisado radicular tocan mis encías. Mis encías pueden sangrar en forma pasajera. Si no informé que uso medicamentos o padezco una enfermedad que afectan la coagulación o tomé aspirina antes o después de la extracción hay riesgo de que el sangrado no se detenga y requiera la atención en un hospital.' },
                        { title: '4. Sensibilidad al calor y al frío:', text: 'Después del raspado y alisado radicular, mientras mis encías sanan, pueden retraerse un poco, dejando expuesta parte de la raíz, lo cual podría hacer que los dientes sean más sensibles al calor o al frío. Generalmente, esta sensibilidad desaparece después de algunas semanas y se puede tratar con pastas especiales.' },
                        { title: '5. Dolor o Incomodidad:', text: 'Mis dientes y encías pueden estar adoloridos durante varios días después del tratamiento. El Doctor me recomendará tomar algún analgésico para controlar las molestias. Si el dolor persiste o es severo debo notificar inmediatamente al Doctor.' },
                        { title: '6. Infección:', text: 'En raras ocasiones, después del tratamiento puedo experimentar una infección, la cual será tratada con antibióticos.' }
                    ]
                }
            ]
        },
        {
            title: 'Consecuencias de no realizar el tratamiento',
            content: [
                'Si el tratamiento periodontal no es realizado, continuaré teniendo problemas de salud en mis encías, que pueden incluir una infección y deterioro del hueso de soporte de mis dientes, lo que puede provocar que se aflojen y la pérdida prematura de los mismos. Las infecciones periodontales no tratadas pueden estar asociadas con problemas médicos más serios como la enfermedad cardiaca, embolia cerebral o apoplejía, diabetes, problemas respiratorios y en mujeres embarazadas, bebés de bajo peso al nacer o nacimientos prematuros.'
            ]
        },
        {
            title: 'Aceptación del tratamiento',
            content: [
                'Acepto y me comprometo a seguir responsablemente las recomendaciones recibidas, antes y después de la intervención, así como, acudir a las citas para las revisiones postoperatorias durante el tiempo indicado.',
                'A pesar de que no es posible garantizar resultados perfectos, se realizará todo esfuerzo razonable por asegurar que su afección sea tratada adecuadamente.',
                'Autorizo a mi odontólogo tratante a la atención de contingencias y urgencias que puedan derivarse del tratamiento que va a realizarme.',
                'Reconozco que esta carta de consentimiento puede ser revocable siempre y cuando no haya iniciado el tratamiento. Reconozco también que el Dr. puede negarse a realizar el tratamiento si encuentra que hay mayor riesgo que beneficios para mi salud.',
                'Al firmar esta carta de consentimiento reconozco que he recibido y comprendido la información adecuada acerca del tratamiento propuesto y que han respondido todas mis preguntas.'
            ]
        }
    ]
  },
];
