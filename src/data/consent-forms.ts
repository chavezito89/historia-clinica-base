
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
  {
    slug: 'blanqueamiento',
    title: 'Consentimiento Informado para Blanqueamiento',
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
    title: 'Consentimiento Informado para Carillas',
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
    title: 'Consentimiento Informado para Coronas y Puentes Fijos',
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
    title: 'Consentimiento Informado para Extracción Dental',
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
            ]
          },
          'El Odontólogo me ha explicado que mi caso en particular puede presentar estos riesgos:\n_______________________________________________________________________________\n_______________________________________________________________________________\n_______________________________________________________________________________\n_______________________________________________________________________________',
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
];

    