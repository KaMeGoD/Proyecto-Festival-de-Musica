export const Boleteria: React.FC = () =>{
  return(
    <>
      <section id="boletos" className="boletos bg-verde">
        <h3>Boletos</h3>
        <div className="contenedor contenedor-boletos">
          <div className="basico pase">
            <p className="nombre-pase">Pase 1 Día</p>
            <header className="pase-header">
              <p>Incluye</p>
            </header>
            <div className="pase-body">
              <ul>
                <li>Accesos a ambos escenarios</li>
                <li>Comida y Bebidas</li>
              </ul>
            </div>
            <footer className="pase-footer">
              <p>$100</p>
            </footer>
          </div>
          <div className="Premium pase">
            <p className="nombre-pase">Pase 2 Día</p>
            <header className="pase-header">
              <p>Incluye</p>
            </header>
            <div className="pase-body">
              <ul>
                <li>Accesos a ambos escenarios</li>
                <li>Comida y Bebidas</li>
                <li>Camisa del Evento</li>
                <li>Acceso Vip</li>
              </ul>
            </div>
            <footer className="pase-footer">
              <p>$180</p>
            </footer>
          </div>
        </div>
      </section>
    </>
)
}