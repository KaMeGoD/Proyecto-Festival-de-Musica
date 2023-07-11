export const LineUp: React.FC = () => {
  return (
    <>
      <section id="lineup" className="lineup">
        <h3>Line Up</h3>

        <p className="dia">Viernes 21</p>

        <div className="escenarios-contenedor contenedor">
          <div className="escenario rock bg-amarillo">
            <p className="nombre-escenario">Escenario Rock</p>
            <ul className="calendario">
              <li>
                24:00 | <span>Metallica</span>
              </li>
              <li>
                22:00 | <span>Pearl Jam</span>
              </li>
              <li>
                20:00 | <span>KoRn</span>
              </li>
              <li>
                19:00 | <span>Muse</span>
              </li>
              <li>
                18:00 | <span>Breaking Benjamin</span>
              </li>
              <li>
                17:00 | <span>30 Seconds to Mars</span>
              </li>
            </ul>
          </div>

          <div className="escenario edm bg-verde">
            <p className="nombre-escenario">Escenario EDM</p>
            <ul className="calendario">
              <li>
                24:00 | <span>Deadmau5</span>
              </li>
              <li>
                22:00 | <span>Tïesto</span>
              </li>
              <li>
                20:00 | <span>Hardwell</span>
              </li>
              <li>
                19:00 | <span>Dash Berlin</span>
              </li>
              <li>
                18:00 | <span>Fedde Legrand</span>
              </li>
              <li>
                17:00 | <span>Audien</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="dia">Sabado 22</p>
        <div className="escenarios-contenedor contenedor">
          <div className="escenario rock bg-verde">
            <p className="nombre-escenario">Escenario Rock</p>
            <ul className="calendario">
              <li>
                24:00 | <span>Red Hot Chili Peppers</span>
              </li>
              <li>
                22:00 | <span>The Killers</span>
              </li>
              <li>
                20:00 | <span>Deftones</span>
              </li>
              <li>
                19:00 | <span>Limp Bizkit</span>
              </li>
              <li>
                18:00 | <span>Papa Roach</span>
              </li>
              <li>
                17:00 | <span>Lamb of God</span>
              </li>
            </ul>
          </div>
          <div className="escenario edm bg-amarillo">
            <p className="nombre-escenario">Escenario EDM</p>
            <ul className="calendario">
              <li>
                24:00 | <span>Paul Van Dyk</span>
              </li>
              <li>
                22:00 | <span>Armin Van Buuren</span>
              </li>
              <li>
                20:00 | <span>Above & Beyond</span>
              </li>
              <li>
                19:00 | <span>Eric Prdyz</span>
              </li>
              <li>
                18:00 | <span>Ferry Corsten</span>
              </li>
              <li>
                17:00 | <span>Vini Vici</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}