import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import './App.css';
import Container from './components/container';
import Carrusel from './components/carrusel';
import Footer from './components/footer';
import Secccion from './components/section';
import Navegacion from './components/nav';




function App() {
  return (
    <div className="App container">
      <header>
        <Navegacion />
        <Carrusel />
      </header>
      <main>

      </main>
      <section>
        <Secccion />
      </section>

      <footer>
        <Footer />
      </footer>




    </div>
  );
}

export default App;
