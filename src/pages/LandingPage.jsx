import './Landing.css'
import Logo from '../../images/jose-r.jpg'
import supportChat from '../../images/supportChat.png'
import { Register } from '../sessions/Register'
export default function LandingPage() {
   const year = new Date().getFullYear();
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo-container">
          <img
            src={Logo}
            alt="School Logo"
            width={60}
            height={60}
            className="logo"
          />
          <h1 className="school-name">Jose Ricardo Guillen</h1>
        </div>
      </header>

      <main>
  <section className="hero">
    <div className="hero-content">
      <h2>Espacio Seguro para Compartir, Crecer y Conectar</h2>
      <p>
        Exprésate libremente a través de conversaciones anónimas con nuestro 
        psicólogo escolar. Tu voz importa, tu identidad permanece privada.
      </p>
    </div>
    <div className="hero-image">
      <img
        src={supportChat}
        alt="Ilustración de Chat de Apoyo"
        width={300}
        height={300}
        className="hero-img"
      />
    </div>
  </section>

  <section className="benefits">
    <h2>Por Qué el Apoyo Anónimo Funciona</h2>
    <div className="benefits-grid">
      <div className="benefit-card">
        <h3>Reducción de la Ansiedad Social</h3>
        <p>
          Hablar de forma anónima ayuda a reducir el miedo al juicio, permitiendo 
          una comunicación más honesta y abierta.
        </p>
      </div>
      <div className="benefit-card">
        <h3>Expresión Verdadera</h3>
        <p>
          Sin la presión de la identidad, los estudiantes se sienten más cómodos 
          compartiendo sus pensamientos y sentimientos genuinos.
        </p>
      </div>
      <div className="benefit-card">
        <h3>Entorno Seguro</h3>
        <p>
          La anonimidad crea un espacio protector donde los estudiantes pueden 
          discutir temas sensibles sin temor al estigma.
        </p>
      </div>
    </div>
  </section>

  <section className="join-section">
    <h2>Únete a Nuestra Comunidad de Apoyo</h2>
    <Register />
  </section>
</main>
<footer className="footer">
  <p>© {year} Apoyo de Jose Ricardo Guillen. Todas las conversaciones son confidenciales.</p>
</footer>

    </div>
  )
}
