import React from "react";
import { Link } from "react-router-dom";
import ScrollMagic from "scrollmagic";
/*COMPONENTES*/
import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";
/*ESTILOS*/
import "./reset-password-page.css";
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
    this.state = {
      email: "",
      emailStatus: false
    };
    this.procesar = this.procesar.bind(this);
    this.cambioEmail = this.cambioEmail.bind(this);
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
    const viewForm = this.state.emailStatus;
    if (viewForm == false) {
      return (
        <div>
          <Header />
          <section class="sectionLogin sectionResetPass sectionBeforeFooter woowContentFull">
            <h2>Recuperar contraseña</h2>
            <p class="txtSectionLogin">
              Ingresa el correo con el que creaste tu cuenta.<br></br>
              Recibirás un correo para actualizar tu contraseña.
            </p>
            <div class="formContact">
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
                <div class="pure-g btnSend">
                  <button type="submit" class="">
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
          </section>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <section class="sectionContact sectionContactSend sectionBeforeFooter woowContentFull">
            <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
              <h2>Gracias por tu tiempo</h2>
            </div>
            <div class="formContact" onSubmit={this.submitForm}>
              <div class="wrapperHidden"></div>
              <div class="divEnvio-L-B">
                <div class="airplaneL">
                  <img
                    src={require("../../assets/images/contacto/airplane.png")}
                  ></img>
                </div>
                <img
                  src={require("../../assets/images/contacto/envio-l-aft.png")}
                ></img>
              </div>
              <form>
                <div class="pure-g">
                  <div class="pure-u-1 pure-u-md-1-1">
                    <p class="primaryTxt">Revisa tu bandeja de entrada.</p>
                    <p class="secondTxt">
                      Te enviamos un correo<br></br>donde encontraras un vinculo,<br></br>
                      ábrelo y actualiza tu clave.
                    </p>
                    <div class="btnNewMsg btnGoToHome">
                      <Link to="/" className="link">
                        IR AL INICIO
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
              <div class="divEnvio-R-A">
                <div class="airplane">
                  <img
                    src={require("../../assets/images/contacto/airplane.png")}
                  ></img>
                </div>
                <img
                  src={require("../../assets/images/contacto/envio-r-aft.png")}
                ></img>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      );
    }
  }
  procesar(e) {
    e.preventDefault();
    this.setState({
      emailStatus: true
    });
  }
  cambioEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
}
export default ResetPassword;
