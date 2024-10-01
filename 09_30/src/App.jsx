import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="site">
      <header className="cabecalho">
        <nav className="container navbar navbar-expand">
          <div>
            <span className="navbar-brand"><img src="perfume.png" alt="" /></span>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="" className="nav-link menu_link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link menu_link">
                Sobre Nós
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link menu_link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="conteudo mt-3 container">
          <div className="row">
            <div className="conteudos col-md-10 col-sm-12">
              <h2>Produtos</h2>
              <div className="container produto p-3">
                <h3>Batom</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus enim sint nostrum officia sunt itaque numquam!
                  Magnam mollitia, at quisquam, nam ut officiis rerum cumque,
                  temporibus exercitationem doloribus et adipisci.
                </p>
                <button className="btn btn-warning me-3">Favoritar</button>
                <button className="btn btn-success">Comprar</button>
              </div>
              <div className="container produto p-3">
                <h3>Sombra</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus enim sint nostrum officia sunt itaque numquam!
                  Magnam mollitia, at quisquam, nam ut officiis rerum cumque,
                  temporibus exercitationem doloribus et adipisci.
                </p>
                <button className="btn btn-warning me-3">Favoritar</button>
                <button className="btn btn-success">Comprar</button>
              </div>
            </div>
            <aside className="col-md-2 col-sm-12">
              <h4>Perfumaria</h4>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">Sabonete<span className="badge text-bg-primary rounded-pill">8</span></li>
                <li className="list-group-item">Colonia</li>
                <li className="list-group-item">Vela</li>
                <li className="list-group-item">Body Splash</li>
              </ol>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
