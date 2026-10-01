window.DECK = {
  "title": "Made OS · CEMEX · Industrial intelligence",
  "date": "2026-10-01",
  "targetSeconds": 810,
  "maxSeconds": 900,
  "sources": {
    "artisan": "https://madeos.ai/blog/artisanlab-cnc-prescriptive-maintenance/",
    "architecture": "https://madeos.ai/blog/JEV-System-One-in-Model-Made-OS-english/",
    "telemetry": "https://madeos.ai/blog/reliable-industrial-telemetry-kafka-order-traceability/",
    "pricing": "https://demo.madeos.ai/cemex-system-one/",
    "team": "https://demo.madeos.ai/vc-deck-madeos/",
    "vc": "https://demo.madeos.ai/vc-deck-madeos/",
    "cat": "https://www.cat.com/en_US/by-industry/electric-power/product-support/visionlink.html",
    "hilti": "https://www.hilti.com/content/landing-page/local/smart-battery-tool-tracking-fleet-visibility-theft-recovery",
    "trimble": "https://transportation.trimble.com/en/solutions/fleet-maintenance",
    "ferrovial": "https://www.ferrovial.com/en-gb/innovation/technologies/predictive-analytics/",
    "vinci": "https://leonard.vinci.com/en/predictive-maintenance-how-far-can-we-anticipate-breakdowns/"
  },
  "slides": [
    {
      "id": "opening",
      "label": "The promise",
      "seconds": 60,
      "template": "cover",
      "title": "Act before<br><em>the stop</em>",
      "html": "<p class=\"hero-sub\">Prescriptive intelligence for<br>industrial assets and heavy equipment.</p>",
      "script": "When a critical machine stops, the cost goes far beyond the repair. Production slows, deliveries slip, and the team has to react.\n\nMade OS helps that team act earlier, with a clear maintenance decision based on machine data and operating history.\n\nOur goal is simple: act before the stop.\n\nLet me show you what this means at a furniture factory in Mexico.",
      "direction": "Empieza mirando al jurado. Pausa después de “repair”. La tensión está en el efecto del paro sobre el negocio, sin enumerar activos. Baja la velocidad en “act before the stop” y pasa directamente al caso.",
      "cue": "Un paro cuesta → los datos necesitan convertirse en una acción.",
      "sources": [
        "architecture"
      ],
      "evidence": "La apertura expresa el objetivo del producto, no una garantía de eliminar todos los paros. Fondo generado proporcionado por el fundador."
    },
    {
      "id": "case",
      "label": "ArtisanLab",
      "seconds": 105,
      "template": "case",
      "title": "ArtisanLab <span class=\"place\">Furniture factory in Mexico</span>",
      "html": "<div class=\"case-stat\"><strong>43<span>%</span></strong><p>fewer unplanned stops</p><span class=\"qualification\">Estimated vs. historical average · Jan–Jun 2026</span></div><p class=\"case-adoption\"><strong>&gt;85%</strong> of alerts and advice addressed</p><div class=\"case-roi\"><span>ROI RECOVERED IN PRODUCTION</span><strong><small>USD $</small>437K</strong><p>annual production recovered by Made OS</p></div>",
      "script": "At ArtisanLab, a furniture factory in Mexico, worn cutting tools could stop a CNC machine. Without a spare part, a repair could take up to fifteen days.\n\nMade OS used machine signals and history to help the team plan tool replacement.\n\nThe pilot recorded one unplanned stop over six months. Against the historical average, that is an estimated forty-three percent fewer stops.\n\nThe team addressed more than eighty-five percent of alerts and advice.\n\nThe annual production recovered is four hundred and thirty-seven thousand dollars.\n\nThis is production value, before costs.\n\nThis case is now helping us open doors in mining and mobile fleets. Let me show you the system behind it.",
      "direction": "Señalar 43%, adopción y después USD 437K. Hacer una pausa sobre la cifra de producción. No convertir valor producido en utilidad neta ni atribuirle un múltiplo de ROI. El fondo CNC sigue siendo ilustrativo; se retira su rótulo visual por instrucción del fundador.",
      "cue": "Caso real → uso por el equipo → valor de producción recuperado.",
      "sources": [
        "artisan"
      ],
      "evidence": "Resultado histórico de ArtisanLab según el artículo: 1 evento frente a 1,75 esperados; reducción estimada 43%, rango 33–50%. >85% de alertas atendidas. USD 437K anuales y categoría furniture factory actualizados por el fundador en este turno. El importe sustituye el USD 144K del deck VC; no se extrapola ni se deriva de otra cifra. Pendiente precisar si anual medido o anualizado. Imagen de fondo CNC generada, no foto del cliente."
    },
    {
      "id": "architecture",
      "label": "How Made OS works",
      "seconds": 140,
      "template": "architecture",
      "title": "How Made OS works",
      "html": "<div class=\"system-flow\"><div class=\"flow-input\"><p class=\"flow-kicker\">YOUR ASSETS</p><h3>Signals<br>+ history</h3></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"made-engine\"><div class=\"engine-head\">MADE OS <span>TWO INTELLIGENCE LAYERS</span></div><div class=\"engine-layers\"><article class=\"predictive-layer\"><span class=\"layer-number\">01</span><h3>Operational intelligence</h3><p>System One + data analytics</p><small>Assess condition and maintenance priority</small><div class=\"model-strategy\"><strong>Operational twin design</strong><div class=\"context-chain\">Sensor <b>→</b> Asset <b>→</b> Operation</div><small>Time-series ML + specialist SLMs</small></div></article><span class=\"layer-arrow\" aria-hidden=\"true\">→</span><article class=\"advice-layer\"><span class=\"layer-number\">02</span><h3>Maintenance advice</h3><p>Language model</p><small>Analysis + operating limits</small><strong>What · Why · Next check</strong></article></div></div><span class=\"flow-arrow\" aria-hidden=\"true\">→</span><div class=\"flow-output\"><p class=\"flow-kicker\">YOUR TEAM</p><h3>Review<br>and act</h3><span>Operator-ready action</span></div></div><div class=\"deployment-answers\"><div><h4>Your existing sensors</h4><p>Read installed sensors<br>Add instrumentation if needed</p></div><div><h4>Your deployment choice</h4><p>Edge or API<br>Cloud or local with partners</p></div><div><h4>Your data stays yours</h4><p>Encrypted · Read-only access<br>Customer-owned raw data</p></div></div>",
      "script": "Made OS has two main layers.\n\nThe first assesses asset condition and maintenance priority. It combines System One with data analytics to evaluate what the machine is doing in its operating context.\n\nOur operational twin design connects each sensor to the asset, and the asset to the wider operation. We are developing time-series models and small models for specific industrial tasks to support that context.\n\nThe second layer uses a language model to turn the analysis into clear maintenance advice: what needs attention, why it matters, and what to check.\n\nOperating limits guide the response. The team reviews the action and follows site procedures. We also trace each event to its source.\n\nWe use existing sensors or add them when needed. We connect through Edge or API, with cloud or local processing through partners. Access is encrypted and read-only. The raw data stays yours.\n\nNow, let us see the full flow on a mining truck.",
      "direction": "La primera capa explica para qué sirve: evaluar condición y prioridad de mantenimiento. El recorrido Sensor → Asset → Operation explica el alcance del contexto, no vuelve a enumerar entradas. Se retira el rótulo solicitado; Operational twin design y el guion distinguen la propuesta de gemelos y modelos especializados de lo ya operativo. Señala las respuestas inferiores en orden: sensores, despliegue, datos.",
      "cue": "Contexto del activo → modelos con funciones distintas → consejo revisado por el equipo.",
      "sources": [
        "architecture",
        "telemetry"
      ],
      "evidence": "La base actual de dos capas procede del CTO y de la publicación de Made: analítica y System One para evaluar contexto; LLM para comunicación; límites operativos y trazabilidad. Fine-tuning es adaptación de un modelo, no sinónimo del pipeline analítico completo. La extensión Operational twins / time-series ML / specialist SLMs es arquitectura propuesta, identificada como Operational twin design y como desarrollo en el guion; se retiró el rótulo MODEL STRATEGY · IN DEVELOPMENT a petición del fundador. No se afirma que un SLM sea por sí mismo un gemelo digital ni que se haya validado causalidad, precisión o pronóstico temporal. Seguridad y modalidades de despliegue proceden del fundador; read-only describe acceso a sistemas, no ausencia de almacenamiento. Ver ARQUITECTURA-CTO.md."
    },
    {
      "id": "demo",
      "label": "Product demo",
      "seconds": 145,
      "template": "demo",
      "title": "Product demo",
      "html": "<div class=\"video-shell\"><video id=\"product-video\" controls playsinline preload=\"metadata\" poster=\"assets/demo-poster.jpg\" aria-label=\"Made OS product demo with English audio\"><source src=\"assets/demo-made-os.mp4\" type=\"video/mp4\"></video><button id=\"play-demo\" class=\"play-demo\" aria-label=\"Play demo with sound\"><span>▶</span><small>Play demo</small></button></div>",
      "script": "Watch the signals, the analysis, and the action sent to the team.\n\n[PLAY THE VIDEO. Remain silent. Original audio: 2:08.7.]\n\nThat is Made OS in action.",
      "direction": "Slide y archivo de video sin cambios. Entrar alrededor de 05:05 e iniciar tras la introducción de diez segundos. No hablar durante el audio. Al terminar, una frase y avanzar.",
      "cue": "Señala qué mirar → reproduce → guarda silencio.",
      "sources": [],
      "evidence": "Video original del fundador, íntegro: demo-made-os.mp4, 128,695 s. Los puntos de coherencia del diagnóstico y de procedencia de datos siguen en REVISION.md."
    },
    {
      "id": "advantage",
      "label": "Why Made OS",
      "seconds": 65,
      "template": "advantage",
      "title": "The prescriptive layer<br><em>for your existing systems</em>",
      "html": "<div class=\"advantage-flow\"><div class=\"existing-stack\"><p>EXISTING INDUSTRIAL SYSTEMS</p><h3>Telemetry<br>Diagnostics<br>Maintenance history</h3></div><span class=\"advantage-arrow\" aria-hidden=\"true\">→</span><div class=\"action-layer\"><p class=\"action-brand\">MADE OS</p><h3>A clear next action</h3><div><span>What needs attention?</span><span>What should the team do?</span><span>When should it act?</span></div></div></div><p class=\"advantage-line\">Complements OEM, fleet and industrial platforms.</p>",
      "script": "This audience already knows connected equipment. Caterpillar offers VisionLink. Hilti offers ON!Track. Industrial operators also invest in their own analytics.\n\nMade focuses on a specific maintenance decision, using the context of the customer's operation.\n\nWe bring that context together to help the team decide what needs attention, what to check and when to act.\n\nWe start with the available data and agree the integration for each pilot.\n\nFor an equipment maker or a fleet platform, that creates a path to add Made to its own offering.",
      "direction": "Caterpillar y Hilti son ejemplos comprobados de oferta tecnológica. No implican integración Made ni uso interno de un stack común. El valor propuesto se evalúa en un caso y una integración concretos; no afirmar que sus plataformas solo muestran datos o carecen de recomendaciones.",
      "cue": "Sistemas existentes → capa Made → siguiente acción útil.",
      "sources": [
        "cat",
        "hilti",
        "trimble",
        "ferrovial",
        "vinci"
      ],
      "evidence": "Validación pública por empresa en VALIDACION-STACK.md. Caterpillar, Hilti y Trimble ofrecen telemetría/gestión/mantenimiento. Ferrovial y VINCI documentan aplicaciones predictivas; Saint-Gobain publica aplicaciones de industria 4.0. Haskell ofrece servicios de integración. BCA es organismo sectorial; Cemex Ventures y Zacua son inversores. No se verificó un stack homogéneo ni conectores Made certificados para esos productos. La frase sobre integración describe alcance que se acuerda en el piloto."
    },
    {
      "id": "markets",
      "label": "Markets and pipeline",
      "seconds": 70,
      "template": "markets",
      "title": "Mines. Factories. Fleets.",
      "html": "<div class=\"industry-panels\"><article class=\"industry-mining\"><h3>Mining</h3><p>Heavy equipment</p></article><article class=\"industry-manufacturing\"><h3>Manufacturing</h3><p>Industrial assets</p></article><article class=\"industry-fleets\"><h3>Mobile fleets</h3><p>Vehicles and engines</p></article></div><div class=\"pipeline-totals\"><p>COMMERCIAL PIPELINE</p><div><span>Paid entry pilots</span><strong><small>≈ USD</small> 300K</strong><p>Gross potential pilot value</p></div><span class=\"pipeline-next\" aria-hidden=\"true\">→</span><div><span>Operational scale</span><strong><small>USD</small> 34M+</strong><p>Qualified expansion potential</p></div></div>",
      "script": "Our market spans mining, manufacturing and mobile fleets.\n\nWe enter through paid pilots on critical assets, then expand when the value is proven.\n\nOur current pipeline represents about three hundred thousand dollars in gross potential pilot value. The qualified expansion potential is more than thirty-four million dollars if those opportunities scale.\n\nThese figures depend on conversion and rollout.\n\nWe adapt the signals, asset context and operating rules to each use case. The core platform stays the same.\n\nThe path is clear: prove the value on an asset, then expand across the operation.",
      "direction": "Conserva las tres industrias y señala solo dos cifras de pipeline. Paid entry pilots describe el formato comercial de entrada, no que USD 300K ya estén cobrados. USD 34M+ es potencial de expansión calificado; no ARR contratado ni ingresos reconocidos. El deck VC no indica horizonte temporal de esa cifra.",
      "cue": "Tres mercados → USD 300K de pilotos potenciales → USD 34M+ de expansión calificada.",
      "sources": [
        "vc"
      ],
      "evidence": "Slide 05 / GO-TO-MARKET del deck VC consultada de nuevo el 1 de octubre de 2026: Paid entry pilots ≈ USD 300K, Gross potential pilot value; Operational scale USD 34M+, Qualified expansion potential. Se trasladan por solicitud expresa del fundador como pipeline actual. No se añaden probabilidad, periodo anual, contratos o ingresos reconocidos. Se retiran los nombres de empresas y Starting work del frente. Las etapas comerciales por relación se conservan en Q&A. No se incorpora el TAM de USD 175B."
    },
    {
      "id": "value",
      "label": "ROI and revenue",
      "seconds": 85,
      "template": "value",
      "title": "Recover production.",
      "html": "<div class=\"return-proof\"><div class=\"return-multiple\"><span>UP TO</span><strong>8<span>×</span></strong></div><div class=\"return-meaning\"><h3>Reported net ROI<br>in active operations</h3><p>After Made OS costs</p></div></div><div class=\"value-journey\"><div><h3>Agreed baseline</h3><p>Base subscription</p></div><span aria-hidden=\"true\">→</span><div><h3>Verified benefit</h3><p><em>10%</em> performance commission</p><small>Cap: 1.5× annual base</small></div><span aria-hidden=\"true\">→</span><div><h3>Net return</h3><p>After base + performance fee</p></div></div>",
      "script": "In active industrial operations, this model has generated net returns of up to eight times, after deducting the cost of Made OS.\n\nWe start with an agreed baseline and a base subscription.\n\nWe then measure the benefit with the customer. Made earns a ten percent performance commission on verified value, capped at one point five times the annual base.\n\nThe customer's return is measured after all fees. We assess that return for each operation.\n\nThat gives us a shared goal: recover more value from the same operation.\n\nNow, here is the team behind it.",
      "direction": "Pausa después de “eight times”. El frente usa “in active operations”, como solicita el fundador. Aclara que descuenta el costo de Made OS; si preguntan por el caso, conserva la atribución a ArtisanLab. Señala una sola vez la línea inferior de izquierda a derecha. No menciones implementación. Es un resultado reportado por el fundador, no promedio, garantía ni auditoría independiente. No derivar el 8× de USD 437K: el fundador lo calcula sobre ahorro. Falta documentar periodo y desglose monetario.",
      "cue": "Hasta 8× reportado → base + comisión por valor verificado → retorno del cliente.",
      "sources": [
        "vc"
      ],
      "evidence": "El fundador confirmó el 1 de octubre de 2026 que el 8× proviene de ArtisanLab y corresponde a ROI neto: al ahorro se restó el costo de Made OS. Se presenta como ROI neto reportado frente al costo de Made OS. La definición matemática de ROI neto es (ahorro − costo) / costo; no se aportaron importes de ahorro, costo o periodo para reproducir el cálculo. No se usa USD 437K como ahorro ni se convierten cifras a otro indicador. Modelo: base y comisión del 10% sobre valor verificado, cap 1,5× base anual. No se menciona implementación ni se afirma que sea gratuita. Ver EXPLICACION-ROI.md y PREGUNTAS-Y-RESPUESTAS.md. El nombre del cliente se retiró del frente y del pitch por solicitud del fundador; el resultado sigue sustentado en el mismo caso y se explica en la pregunta 16."
    },
    {
      "id": "team",
      "label": "Team",
      "seconds": 75,
      "template": "team",
      "title": "Built for industrial work",
      "html": "<div class=\"team-grid\"><article><img src=\"assets/gerardo.png\" alt=\"Gerardo Peña\"><h3>Gerardo Peña</h3><p>CEO · Product & business</p><span>MIT TR35</span></article><article><img src=\"assets/ramiro.png\" alt=\"Ramiro Pantoja\"><h3>Ramiro Pantoja</h3><p>CTO · Technology &amp;<br>Development Lead</p></article><article><img src=\"assets/gabriel.jpeg\" alt=\"Gabriel Rodriguez\"><h3>Gabriel Rodriguez</h3><p>PhD · AI Lab Lead</p></article></div><p class=\"research-line\"><span>IN DEVELOPMENT</span> Specialized Physical AI models</p>",
      "script": "I lead product and business. My background is industrial design. I received the MIT Innovators Under Thirty-Five award.\n\nRamiro leads technology and development, from the data systems to industrial deployment.\n\nGabriel has a PhD in AI and leads our AI Lab. His focus is specialist models and learning from operating history.\n\nTogether, we cover the customer problem, the machine connection and the model work.\n\nNow we are ready to take the next step with the right industrial partner.",
      "direction": "Menciona responsabilidades con frases cortas. No repitas la explicación técnica de la slide 3. El rótulo IN DEVELOPMENT conserva el estado del trabajo en modelos especializados.",
      "cue": "Gerardo: producto y negocio. Ramiro: tecnología y desarrollo. Gabriel: AI Lab.",
      "sources": [
        "team"
      ],
      "evidence": "Antecedentes según deck de referencia e incorporación de Gabriel confirmada por fundador. Los modelos especializados y métodos históricos están en desarrollo. Los retratos son los de referencia, no imágenes generadas. Fondo industrial ilustrativo sin personas, tomado de las imágenes del fundador; no se presenta como laboratorio propio."
    },
    {
      "id": "close",
      "label": "Pilot to native integration",
      "seconds": 65,
      "template": "native",
      "title": "Start with a pilot.<br><em>Scale into the product.</em>",
      "html": "<div class=\"native-path\"><article><span>01 / PROVE</span><h3>Pilot</h3><p>A critical asset.<br>A result we verify together.</p></article><article><span>02 / REPLICATE</span><h3>Operational scale</h3><p>More assets, sites<br>and fleets.</p></article><article class=\"native-goal\"><span>03 / OUR GOAL</span><h3>Native OEM<br>integration</h3><p>Made OS built into equipment<br>and service platforms.</p></article></div><div class=\"native-close\"><strong>Let’s build it together.</strong><a href=\"mailto:ger@madeos.ai\">ger@madeos.ai</a></div>",
      "script": "We invite you to build this path with us.\n\nStart with a paid pilot on one critical asset. Agree the goals and measure the result.\n\nThen scale across more assets, sites or fleets.\n\nFor equipment makers like Caterpillar, our long-term goal is to make Made OS a native intelligence layer inside equipment and service platforms.\n\nA pilot proves the value. Scale makes it repeatable. Native integration makes it part of the product.\n\nCEMEX, Caterpillar, and the partners in this room can help us build that path.\n\nLet us act before the stop. Thank you.",
      "direction": "Señalar el recorrido y hacer una pausa al llegar a “Native OEM integration”. Nombrar Caterpillar mirando al jurado. Presentar integración nativa como objetivo, no como capacidad o partnership existente.",
      "cue": "Piloto → escala → inteligencia nativa. Invitación a operadores y fabricantes.",
      "sources": [
        "vc"
      ],
      "evidence": "Propuesta estratégica inspirada en GO-TO-MARKET del deck VC. Se conservan las etapas; se eliminan precios, USD 300K, USD 34M y TAM USD 175B no requeridos ni actualizados. No hay asociación acordada con Caterpillar implícita: es audiencia y posible socio futuro."
    }
  ],
  "version": "enterprise-v6"
};
