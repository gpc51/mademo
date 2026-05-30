# Made OS — Modelo de Pricing Value-Based v1.4

> **v1.4 (mayo 2026):** corregido tras el caso CyT (Concha y Toro). **Premium es la excepción a la regla de costo/hora:** una cuenta de vino/farma puede tener evento barato por hora pero valor-en-riesgo agregado enorme y alta sofisticación. No se clasifica por costo/hora sino por valor-en-riesgo agregado + posicionamiento. Sus palancas de captura son base por frente + **capa de correlación cross-area** (componente pagado post-piloto, no gratis para siempre) + amplitud, NO el success fee. Añadido el **patrón maestro: la forma del valor decide la palanca de captura** (sección 8).
>
> **v1.3 (mayo 2026):** corregido tras el caso Repsol. Añadido el **modo de empaquetado** (línea / activo / sitio) como decisión propia: define la arquitectura de cobro, no solo el tamaño. A escala de sitio integrado (refinería) la base por línea se reemplaza por **licencia anual por sitio + capex de implementación**. Reafirmada la regla B4: Clase A de integridad nunca es fee fijo. Reescrito el clasificador (sección 8) como las 3 preguntas definitivas.
>
> **v1.2 (mayo 2026):** corregido tras el caso Minsa. La clasificación familia/tier se hace por **costo real del evento**, no por la etiqueta del vertical. El vertical es solo una pista inicial.
>
> **v1.1 (mayo 2026):** corregido tras el caso práctico de Peñoles. Cambios: familia Pesada se diferencia por cap y fee, no por base; añadida banda B4 para eventos catastróficos / riesgo de integridad; regla de madurez reescrita para separar base (commodity) de captura de valor.
>
> Documento de referencia interno. NO es una propuesta y no se sirve en demo.madeos.ai.
> Define cómo se construye el pricing de cualquier propuesta nueva para que el precio
> siga al valor evitado, no al costo de servir, y para que el vendedor pueda clasificar
> una cuenta en minutos sin negociar desde cero.
>
> Origen: análisis de las 6 propuestas vivas (Andina, Jarritos, CyT, Minsa, Peñoles, Repsol),
> mayo 2026. La fuga detectada: dentro de un mismo vertical, cuentas de valor muy distinto
> pagaban lo mismo. Andina y Jarritos eran idénticos byte por byte aunque el evento de Andina
> vale 3x-6x más.

---

## 0. Principios

1. **Land simple, expand value-linked.** El precio de entrada es repetible y de baja fricción. La diferenciación vive en las palancas que escalan con valor: tier de base y banda de success fee.
2. **El precio sigue al valor evitado.** Meta de captura: Made debe capturar entre **8% y 15% del valor evitado documentado**. Hoy en Andina captura menos de 2%. Ese gap es la oportunidad.
3. **Defendible y auditable.** Cada número rastreable a una banda o un benchmark. Nada inventado.
4. **Consistencia intra-tier.** Dos cuentas del mismo tier pagan igual. Esto te protege cuando los compradores comparan.
5. **No matar el ROI.** Nunca subir tanto que el ROI proyectado del cliente caiga por debajo de ~5:1.

---

## 1. Segmentación: modo de empaquetado + dos ejes

El pricing se arma cruzando tres decisiones independientes. La primera define **cómo se cobra**; las otras dos, **cuánto**.

**Eje 0 — Modo de empaquetado (por unidad de valor que el cliente compra).** Antes de fijar un número, decide qué es lo que el cliente reconoce como la unidad que está comprando. Eso determina la arquitectura de cobro, no solo el monto.

| Modo | Unidad de valor | Cuándo aplica | Cobro recurrente | Ejemplos |
|---|---|---|---|---|
| **Por línea** | el frente/línea de producción | F&B, manufactura, embotellado | base $/mes por línea | Andina, Jarritos, Minsa |
| **Por activo** | el activo crítico (molino, bomba, presa) | minería, activos discretos de alto valor | base $/mes por activo + cap alto | Peñoles |
| **Por sitio** | la planta/refinería integrada completa | O&G, infraestructura integrada, multi-unidad | **licencia anual por sitio + capex de implementación one-time** | Repsol |

> **Corrección (caso Repsol, mayo 2026).** Una refinería no compra "por frente": compra un despliegue de plataforma. Forzar la base por línea a esa escala subestima el valor y choca con el procurement del cliente. Repsol ya lo hace bien: licencia $280K/año por sitio + implementación $180K capex, separada de la mensualidad. El modo de empaquetado sube con la integración de la operación (línea → activo → sitio); correlaciona con la Familia pero es decisión propia, porque un cliente Pesado puede comprar por activo (Peñoles) o por sitio (Repsol). El success fee y la regla B4 aplican en los tres modos.

**Eje 1 — Familia (por criticidad / economía del activo).** Define la escala general. **El driver es la columna "Costo de paro típico", NO el nombre del vertical.** Los verticales son ejemplos ilustrativos, no la regla.

| Familia | Verticales ilustrativos | Costo de paro típico (driver) | Escala de precio |
|---|---|---|---|
| Ligera | Manufactura discreta de bajo costo de paro | <$20K/h | base baja, cap $9K |
| F&B | Bebidas, embotellado, lácteos, cervecería, **molienda de alto costo** | $20K-$120K/h | base media, cap $9K-$18K |
| Premium | Vino, destilados, farma | **evento barato por hora, pero valor-en-riesgo agregado alto** | base por frente + capa de correlación cross-area + amplitud; success fee bajo (B1). NO se clasifica por costo/hora |
| Pesada | Minería, O&G, petroquímica | $50K-$1.5M/h | base modesta (1.3x-2x F&B), la diferenciación real es por cap (5x-6x) y banda de success fee alta |

> **Corrección (caso Minsa, mayo 2026).** Minsa es "molienda", que por etiqueta caería en Ligera. Pero su evento real cuesta $35-60K/hora: economía de F&B, no de Ligera. Clasificarla por la etiqueta del vertical la habría mal-priceado. **Regla: la familia y el tier se asignan por el costo real del evento del activo candidato. El vertical solo sugiere por dónde empezar a buscar ese número.**

> **Corrección (caso Peñoles, mayo 2026).** La familia Pesada NO se diferencia por una base 5x-10x. Peñoles cobra base $2,000 (apenas 1.3x el F&B de $1,500) pero cap $50,000 (5.5x) y success fee $5,000-$6,000. La palanca de valor en activos críticos es el cap y el fee por evento, no la mensualidad fija. La base se mantiene modesta para no inflar el costo recurrente; el valor se captura cuando se evita el evento.

> **Corrección (caso CyT, mayo 2026). Premium es la excepción a la regla de costo/hora.** Concha y Toro es multinacional de $975M con evento barato (~$18K, $3,000/h): por costo/hora caería en Ligera/Tier S, lo cual es absurdo. El valor de una cuenta Premium está en el **valor-en-riesgo agregado a lo largo de un throughput masivo** ($293K-$975K/año), no en la severidad por evento. **Premium se clasifica por valor-en-riesgo agregado + posicionamiento de calidad, NO por costo/hora.** Sus tres palancas de captura: (1) la **capa de correlación cross-area** (ej. bodega-envasado), valor único de Made en operaciones multi-área, hoy regalada en piloto pero componente pagado post-piloto, no tercer frente gratis para siempre; (2) base por frente × amplitud (land 2 frentes, expand a red de bodegas/plantas); (3) modificador multinacional +20% post-descuento de logo fundador. El success fee NO es la palanca: queda en B1 porque los eventos son chicos.

**Eje 2 — Tier (por tamaño/valor de la cuenta dentro de la familia).** S / M / L.

---

## 2. Tabla de tiers para la familia F&B

Anclada a los números ya usados (Minsa $1,250, Jarritos/Andina $1,500 cliente, $3,000 interno admin).

| Tier | Perfil | Costo paro/hora del activo | Base/mes por línea | Cap/mes | Ejemplos |
|---|---|---|---|---|---|
| **S** | Línea de bajo costo de paro, cuenta mediana, mercado local | <$20K/h | **$1,250** | $9,000 | (manufactura discreta ligera) |
| **M** | Línea de costo medio: embotellado vidrio, molienda, regional | $20K-$60K/h | **$1,500** | $12,000 | Jarritos, **Minsa** |
| **L** | Línea de alta velocidad (PET/Krones), multinacional | >$60K/h | **$3,000** | $18,000 | Andina |

> Nota 1: el $3,000 del Tier L no es nuevo. Ya existía como escalación interna oculta en la barra admin de las propuestas. El modelo solo lo hace explícito y lo asigna por criterio, no por negociación.
>
> Nota 2: Minsa estaba en tarifa S ($1,250) pero su evento real es $35-60K/h, lo que la pone en Tier M. **Reclasificada y emitida en Tier M:** base $1,500, fee B2. Coherente con su economía real.

---

## 3. Success fee indexado a banda de costo evitado

Esta es la corrección de mayor impacto. Hoy el fee es plano ($2,500 Clase A) sin importar si el evento vale $30K o $960K. Reemplazar por bandas según el costo del evento típico del activo:

| Banda | Costo del evento evitado | Success fee Clase A | Success fee Clase B |
|---|---|---|---|
| **B1** | <$50K | $1,500 | $750 |
| **B2** | $50K - $200K | $3,000 | $1,250 |
| **B3** | $200K - $2M | $6,000 | $2,500 |
| **B4** | Catastrófico / riesgo de integridad (>$2M: relaves/tailings, incidente mayor O&G, integridad estructural) | 2%-4% del costo evitado, piso $10,000 | $5,000 |

> **B4 añadida (caso Peñoles).** Un evento en presa de relaves no vale $300K: una falla de tailings es catastrófica ($100M+). Meterlo en B3 con fee fijo es la sub-captura más severa posible. Los eventos de riesgo de integridad nunca van en banda fija: se cobran como % del costo evitado documentado, porque su magnitud es de otro orden y muy variable. Peñoles Fase 2 cobra $4,000 por evento de relaves: eso es lo que B4 corrige.

**Opción avanzada para cuentas L maduras (año 2+):** success fee = **3% del costo evitado documentado**, con piso $1,500 y techo por evento = el cap mensual. Se usa cuando ya hay data auditada real y el cliente confía en el modelo. En land, usar siempre la banda fija (más digerible).

**Validación contra cartera actual:**
- Andina: evento $200K-$960K → **B3** ($6,000). Hoy paga $2,500. Subcaptura corregida.
- Jarritos: evento $80K-$320K → **B2/B3** ($3,000-$6,000). Hoy paga $2,500.
- Minsa: evento $35-60K/h × duración → **B2** ($3,000). **Emitida en Tier M:** base $1,500, Clase A $3,000, Clase B $1,250. Antes cobraba $2,500 plano sin Clase B explícita.
- Repsol Clase B (paro de proceso, ~$500K-$2M) → **B3**. Hoy cobra $15,000 fijo: OK, ya está en grado B3.
- Repsol Clase A (incidente de integridad, $10M-$100M+) → **B4** (2-4% del costo evitado). Hoy cobra $15,000 plano, igual que Clase B: la sub-captura más severa de la cartera. Es el mismo error que relaves en Peñoles, en el contexto de mayor stakes. **Clase A y Clase B nunca deben tener el mismo fee.**
- CyT (Premium): evento ~$18K → **B1** ($1,500). Hoy cobra $2,500, ligeramente por encima. Pero en Premium el fee NO es la palanca: la captura vive en base + capa de correlación + amplitud. No subir el fee aquí; monetizar la correlación post-piloto.

---

## 4. Componentes fijos (no se tier-izan)

- **Gateway Edge:** $5,000 USD one-time por edge por línea. Es pass-through de hardware industrial, legítimamente uniforme. No se descuenta salvo network deal.
- **Estructura de Fases:** Fase 0 (validación) → Fase 1 (piloto pagado) → Fase 2 (red). El 100% de la inversión de piloto se acredita al primer año si se escala. Sin cambios.

---

## 5. Madurez: separar base (commodity) de captura de valor

Aquí hay una tensión real que el caso Peñoles destapó. Made es un sistema que aprende: la precisión y el switching cost suben con el tiempo (argumento para subir precio). Pero en la continuación el motor ya está entrenado y cuesta menos servir (argumento para bajar). Las dos cosas son ciertas. La resolución es **no mover ambas palancas en la misma dirección:**

**Regla:** la **base** (cómputo, soporte recurrente, un commodity) puede mantenerse o bajar levemente en la continuación. La **captura de valor** (success fee + cap) se mantiene o sube con la data real. El moat se monetiza vía fee por evento, nunca regalando el fee.

Dos escenarios distintos, no confundir:

| Escenario | Base | Success fee + cap |
|---|---|---|
| **Renovación mismo alcance** (mismo activo, año 2) | mantener o -0% a -10% (ya entrenado) | mantener o subir según costo evitado real auditado |
| **Expansión a nueva área/fase** (ej. Peñoles relaves) | es un land nuevo: se price desde cero por su familia/tier | por el riesgo de la nueva área, no por descuento de continuación. Relaves = B4, no banda baja |

**El error a evitar (visible en Peñoles Fase 2):** bajar base, fee Y cap a la vez "porque el modelo ya existe". Eso regala la captura de valor justo cuando el switching cost es máximo. Si la Fase 2 entra a un área de mayor riesgo (relaves), el fee debería SUBIR a B4, no bajar a $4,000.

---

## 6. Optionalidad de expansión (land → network)

| Etapa | Estructura |
|---|---|
| Land | 1-3 líneas a precio de tier |
| Expand | A 5+ líneas: -10% sobre base unitaria, PERO cap por línea se mantiene y success fee sigue por banda. Net: más ARR aunque baje el unitario |
| Network deal | Contrato marco multi-planta con compromiso mínimo anual (ej. Andina 30 frentes / $2.5M, Jarritos 18 líneas / $1.06M). Descuento de volumen a cambio de piso de ARR garantizado |

---

## 7. Modificadores (multiplicadores sobre la base del tier)

| Modificador | Ajuste | Por qué |
|---|---|---|
| Multinacional / facturación USD / procurement enterprise | **+20%** | Mayor BATNA (presupuesto APM real) y precio como señal de calidad percibida |
| Design Partner / primer logo del vertical | **-25% a -40%** | Ya aplicado con Maderera Mich. Compra el caso de referencia |
| Evento reciente documentado / urgencia operativa | sin descuento | WTP alta, no regalar |
| OT crítica / air-gap / seguridad reforzada | sube de familia (a Pesada) | Mayor riesgo y valor para Made |

---

## 8. El patrón de clasificación: 3 preguntas en orden

Validado contra los cuatro casos (Minsa, Peñoles, Repsol, CyT). Cualquier cuenta se categoriza con estas tres preguntas, **en este orden**. Cada una salió de un caso real.

**Antes de empezar, obtén el número que manda: el costo de paro por hora del activo candidato** (USD/h). Sin ese dato no se clasifica nada.

1. **¿Cuánto cuesta el evento por hora?** (número real, nunca la etiqueta del vertical) → fija **Familia** (Eje 1) y la **Banda de success fee** (sección 3). *Lección Minsa: molienda parecía Ligera, pero su evento de $35-60K/h es economía F&B.* **Excepción Premium (CyT):** si el evento es barato por hora pero la cuenta es grande/sofisticada (vino, destilados, farma), NO la mandes a Ligera. Clasifica por valor-en-riesgo agregado y posicionamiento; la captura va por base + correlación + amplitud, no por fee.

2. **¿Cuál es la unidad de valor que el cliente compra?** línea → activo → sitio → fija el **modo de empaquetado** (Eje 0) y con él la arquitectura de cobro: base por línea, base por activo, o licencia anual por sitio. Lo decide el tamaño y la integración de la operación. *Lección Repsol: la refinería compra plataforma, no frentes; se cobra licencia/año, no $/línea.*

3. **¿Hay riesgo de integridad / catastrófico?** Si sí → la captura del evento **nunca es fija**: va a **B4** (% del costo evitado), y Clase A nunca iguala a Clase B. Aplica sea relaves (Peñoles) o incidente ATEX (Repsol Clase A). *Lección Peñoles, confirmada por Repsol.*

Luego: **Tier S/M/L** dentro de la familia (sección 2) y **modificadores** (sección 7).

→ Salen arquitectura de cobro, base, cap, fee y gateway en minutos, todos defendibles.

### Patrón maestro: la forma del valor decide la palanca de captura

La síntesis de los cuatro casos. No todas las cuentas se capturan con la misma palanca. Identifica primero la **forma del valor**, luego jala la palanca que le corresponde:

| Forma del valor de la cuenta | Caso de referencia | Palanca de captura primaria |
|---|---|---|
| Severidad alta por evento | Andina, Peñoles Fase 1 | Success fee por banda (B2-B3) |
| Riesgo catastrófico / integridad | Peñoles relaves, Repsol Clase A | B4 = % del costo evitado |
| Integración a escala de sitio | Repsol | Licencia anual por sitio + capex |
| Throughput alto, evento bajo, premium | CyT | Base por frente + capa de correlación + amplitud |

El error transversal en la cartera actual: usar la misma palanca (success fee plano $2,500) para todas las formas de valor. El modelo asigna la palanca correcta a cada forma.

---

## 9. Ejemplo aplicado: Andina vs Jarritos re-priceados

Hoy son idénticos. Con el modelo:

| Componente | Andina (F&B, Tier L, +20% multinacional, Banda B3) | Jarritos (F&B, Tier M, Banda B2) |
|---|---|---|
| Base/mes por línea | $3,000 × 1.20 = **$3,600** | **$1,500** |
| Success fee Clase A | **$6,000** | **$3,000** |
| Success fee Clase B | **$2,500** | **$1,250** |
| Cap/mes | **$18,000** | **$12,000** |
| Gateway Edge | $5,000 | $5,000 |

**Resultado:** Andina paga ~2.4x Jarritos en base y 2x en fee, alineado a que su evento vale 3x-6x más. Ambos siguen con ROI proyectado por encima de 5:1. La fuga se cierra sin volver el modelo bespoke.

---

## 10. Guardrails

- **Piso:** nunca por debajo del costo de servir (hardware + soporte + cloud por línea).
- **Techo:** nunca tan alto que el ROI proyectado del cliente caiga bajo ~5:1.
- **Consistencia:** dos cuentas del mismo tier y banda pagan lo mismo. La diferenciación es por criterio público, no por quién negocia mejor.
- **Auditabilidad:** toda banda y modificador debe poder explicarse al cliente con un benchmark o su propio dato.

---

## 11. Pendientes de calibración con Gerardo

1. Confirmar los cortes de costo/hora de los tiers S/M/L (hoy estimados: <$20K, $20-60K, >$60K).
2. Validar el techo del escalador año 2 (+15% propuesto).
3. Decidir si el Tier L usa banda fija B3 o el 3% del costo evitado desde el año 1.
4. Definir el piso real de costo de servir por línea para fijar el guardrail inferior.
5. Definir el umbral para pasar de base por línea a licencia por sitio (modo Eje 0): ¿número de líneas/unidades, valor de contrato, o tipo de operación integrada?
6. ~~Acción concreta Repsol: separar Clase A (B4) de Clase B.~~ **RESUELTO (emitido):** Repsol cobra Clase A integridad a 2-4% del costo evitado (piso $15K, sin cap mensual) y Clase B fija $15K. Las dos clases ya no cobran lo mismo.
