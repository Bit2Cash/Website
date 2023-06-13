import React from "react";
import { Link } from "react-router-dom";
import ScrollMagic from "scrollmagic";
/*COMPONENTES*/
import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";
/*ESTILOS*/
import "./register-page.css";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      password2: "",
      empresa: "",
      nit: "",
      numcuenta: "",
      banco: "",
      tipocuenta: "",
      terminos: ""
    };
    this.procesar = this.procesar.bind(this);
  }
  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: ".sectionRegister",
      triggerHook: 0.9,
      duration: "120%",
      offset: -30
    })
      .setClassToggle(".sectionRegister", "sectionRegisterAnimate")
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
        <section class="sectionRegister sectionBeforeFooter woowContentFull">
          <h2>Registro</h2>
          <p class="txtSectionLogin">
            Para tener un registro de todos tus movimientos crea<br></br>una
            cuenta con tus datos personales.
          </p>
          <div class="formContact">
            <div class="tabLogin">
              <ul>
                <li class="noactive">
                  <Link to="/login" className="link">
                    INGRESO
                  </Link>
                </li>
                <li class="active">
                  <a href="#">REGISTRO</a>
                </li>
              </ul>
            </div>
            <div class="borderTopForm"></div>
            <form onSubmit={this.procesar}>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-1"></div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-2 paddingRight">
                  <label for="">Nombre</label>
                  <input id="" class="pure-u-24-24" type="text" required/>
                </div>
                <div class="pure-u-1 pure-u-md-1-2 paddingLeft">
                  <label for="">Apellido</label>
                  <input id="" class="pure-u-24-24" type="text" required/>
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-1">
                  <label for="">E-mail</label>
                  <input id="" class="pure-u-24-24" type="email" required/>
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-2 paddingRight">
                  <label for="">Contraseña</label>
                  <input id="" class="pure-u-24-24" type="password" required/>
                </div>
                <div class="pure-u-1 pure-u-md-1-2 paddingLeft">
                  <label for="">Confirmar Contraseña</label>
                  <input id="" class="pure-u-24-24" type="password" required/>
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-2 paddingRight">
                  <label for="">Empresa</label>
                  <input id="" class="pure-u-24-24" type="text" required/>
                </div>
                <div class="pure-u-1 pure-u-md-1-2 paddingLeft">
                  <label for="">NIT / CC</label>
                  <input id="" class="pure-u-24-24" type="text" required/>
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-1">
                  <label for="">Número de cuenta</label>
                  <input id="" class="pure-u-24-24" type="text" required/>
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-2">
                  <div class="inputForm inputMaRi">
                    <select name="select">
                      <option value="">BANCO</option>
                      <option value="Banco 1">Banco 1</option>
                      <option value="Banco 2">Banco 2</option>
                      <option value="Banco 3">Banco 3</option>
                    </select>
                  </div>
                </div>
                <div class="pure-u-1 pure-u-md-1-2">
                  <div class="inputForm">
                    <label>
                      <input
                        type="radio"
                        name="typeCC"
                        checked={true}
                      />
                      AHORRO
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="typeCC"
                      />
                      CTE
                    </label>
                  </div>
                </div>
              </div>
              <div class="pure-g moreLogin ">
                <div class="pure-u-1 pure-u-md-1-2">
                  <p class="optAceptoTyc">
                    <input type="radio" value="tyc" checked={true} required/>
                    Acepto términos y condiciones
                  </p>
                </div>
                <div class="pure-u-1 pure-u-md-1-2">
                  <p>
                    ¿Ya te registraste?&nbsp;
                    <Link to="/login" className="link">Ingresa aquí</Link>
                  </p>
                </div>
              </div>
              <div class="pure-g btnSend">
                <button type="submit" class="">
                  REGISTRARME
                </button>
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
}
export default Register;
