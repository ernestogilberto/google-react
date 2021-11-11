import './App.css';
import google from './images/google.png'

function App() {
  return (
      <>
        <header>
          <nav>
            <ul className="nav-right-section">
              <li><a href="">Gmail</a></li>
              <li><a href="">Imágenes</a></li>
              <li className="menu-icon"><a href=""></a></li>
              <li className="perfil-photo"><a href=""></a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="main-logo">
            <img src={google} alt=""/>
          </section>
          <section className="main-input">
            <div className="main-input-container">
                <span className="search-icon">

                </span>
              <input type="text"/>
              <a className="micro-icon" href=""></a>
            </div>
          </section>
          <section className="main-buttons">
            <div>
              <button>Buscar con Google</button>
            </div>
            <div>
              <button>Me siento con suerte</button>
            </div>
          </section>
        </main>
        <footer>
          <ul className="footer-left">
            <li><a href="">Sobre Google</a></li>
            <li><a href="">Publicidad</a></li>
            <li><a href="">Negocios</a></li>
            <li><a href="">Cómo0 funciona la Búsqueda</a></li>
          </ul>
          <ul className="footer-right">
            <li><a href="">Privacidad</a></li>
            <li><a href="">Condiciones</a></li>
            <li><a href="">Preferencias</a></li>
          </ul>

        </footer>
      </>
  );
}

export default App;
