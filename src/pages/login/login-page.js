import React from "react";
import { Link } from "react-router-dom";
import ScrollMagic from "scrollmagic";
/*COMPONENTES*/
import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";
/*ESTILOS*/
import "./login-page.css";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
    this.state = {
      email: "",
      password: ""
    };
    this.procesar = this.procesar.bind(this);
    this.cambioEmail = this.cambioEmail.bind(this);
    this.cambioPassword = this.cambioPassword.bind(this);
  }
  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: ".sectionLogin",
      triggerHook: 0.9,
      duration: "120%",
      offset: -30
    })
      .setClassToggle(".sectionLogin", "sectionLoginAnimate")
      .addTo(this.controller);
    let URLhash = window.location.hash;
    if (!URLhash) {
      window.scroll({
        top: 0
      });
    }
  }
  render() {
    return (
      <div>
        <Header />
        <section class="sectionLogin sectionBeforeFooter woowContentFull">
          <h2>Ingreso</h2>
          <p class="txtSectionLogin">
            Ingresa con tus datos para ver todas las<br></br>
            operaciones que has realizado.
          </p>
          <div class="formContact">
            <div class="tabLogin">
              <ul>
                <li class="active">
                  <a href="">INGRESO</a>
                </li>
                <li class="noactive noactiveLogin">
                  <Link to="/register" className="link">
                    REGISTRO
                  </Link>
                </li>
              </ul>
            </div>
            <div class="borderTopForm"></div>
            <form onSubmit={this.procesar}>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-1">
                  <label for="name">E-mail</label>
                  <input
                    id="name"
                    class="pure-u-24-24"
                    type="email"
                    value={this.state.email}
                    onChange={this.cambioEmail}
                    required
                  />
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-1">
                  <label for="pass">Contraseña</label>
                  <input
                    id="pass"
                    class="pure-u-24-24"
                    type="password"
                    value={this.state.password}
                    onChange={this.cambioPassword}
                    required
                  />
                </div>
              </div>
              <div class="pure-g moreLogin">
                <div class="pure-u-1 pure-u-md-1-2">
                  <p class="optAceptoTyc">
                    <input type="radio" value="tyc" checked={true} />
                    Recordar mis datos
                  </p>
                </div>
                <div class="pure-u-1 pure-u-md-1-2">
                  <Link to="/reset-password" className="link">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
              <div class="pure-g btnSend">
                <button type="submit" class="">
                  INGRESAR
                </button>
              </div>
              <div class="pure-g moreLogin">
                <div class="pure-u-1 pure-u-md-1-1">
                  <p class="textcenter">
                    ¿No tienes una cuenta?&nbsp;
                    <Link to="/register" className="link">
                      Regístrate aquí
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  procesar(e) {
    e.preventDefault();
    console.log(this.state);
  }

  cambioEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  cambioPassword(e) {
    this.setState({
      password: e.target.value
    });
  }
}
export default Login;
