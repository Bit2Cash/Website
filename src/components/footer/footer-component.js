import React from "react";
import { Link } from "react-router-dom";
import Scrollchor from "react-scrollchor";
/*STYLES*/
import "./footer-component.css";
class Footer extends React.Component {
  state = {
    location: ""
  };
  componentDidMount() {
    this.setState({
      location: window.location.pathname
    });
  }
  render() {
    const currLocation = this.state.location;
    return (
      <footer>
        <div class="icoFooter">
          <img src={require("../../assets/images/footer/footer-ico.png")}></img>
        </div>
        <div class="pure-g">
          <div class="pure-u-1-2 pure-u-sm-1-2 pure-u-md-1-4">
            <div class="infoDivFooter">
              <h3>NOSOTROS</h3>
              <ul>
                {currLocation == "/" && (
                  <li onClick={this.removeClass}>
                    <Scrollchor
                      to="#bit2chash"
                      animate={{ offset: -70, duration: 500 }}
                      spy={true}
                      className="nav-link"
                    >
                      ¿QUÉ ES BIT2CASH?
                    </Scrollchor>
                  </li>
                )}
                {currLocation != "/" && (
                  <li onClick={this.removeClass}>
                    <Link to="/#bit2chash" className="link">
                      ¿QUÉ ES BIT2CASH?
                    </Link>
                  </li>
                )}
                {currLocation == "/" && (
                  <li onClick={this.removeClass}>
                    <Scrollchor
                      to="#como-usarlo"
                      animate={{ offset: -70, duration: 500 }}
                      spy={true}
                      className="nav-link"
                    >
                      ¿Cómo usarlo?
                    </Scrollchor>
                  </li>
                )}
                {currLocation != "/" && (
                  <li onClick={this.removeClass}>
                    <Link to="/#como-usarlo" className="link">
                      ¿Cómo usarlo?
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div class="pure-u-1-2 pure-u-sm-1-2 pure-u-md-1-4">
            <div class="infoDivFooter">
              <h3>CONTACTO</h3>
              <ul class="ulcontacto">
                <li>
                  <div class="icoFooterContac">
                    <img
                      src={require("../../assets/images/footer/icono-msg.png")}
                    ></img>
                  </div>
                  <p>contact@bit2cash.site</p>
                </li>
                <li>
                  <div class="icoFooterContac">
                    <img
                      src={require("../../assets/images/footer/icono-insta.png")}
                    ></img>
                  </div>
                  <p>@bitcop</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="pure-u-1-2 pure-u-sm-1-2 pure-u-md-1-4">
            <div class="infoDivFooter">
              <h3>LEGAL</h3>
              <ul>
                <li>
                  <Link to="/terminos-y-condiciones" className="link">
                    TÉRMINOS Y CONDICIONES
                  </Link>
                </li>
                <li>
                  <Link to="/terminos-y-condiciones" className="link">
                    POLÍTICA DE PRIVACIDAD
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="pure-u-1-2 pure-u-sm-1-2 pure-u-md-1-4">
            <div class="infoDivFooter">
              <h3>RECURSOS</h3>
              <ul>
                {currLocation == "/" && (
                  <li onClick={this.removeClass}>
                    <Scrollchor
                      to="#que-es-bitcoin"
                      animate={{ offset: -70, duration: 500 }}
                      spy={true}
                      className="nav-link"
                    >
                      PRECIO DEL BITCOIN
                    </Scrollchor>
                  </li>
                )}
                {currLocation != "/" && (
                  <li onClick={this.removeClass}>
                    <Link to="/#que-es-bitcoin" className="link">
                      PRECIO DEL BITCOIN
                    </Link>
                  </li>
                )}
                {currLocation == "/" && (
                  <li onClick={this.removeClass}>
                    <Scrollchor
                      to="#comercios"
                      animate={{ offset: -70, duration: 500 }}
                      spy={true}
                      className="nav-link"
                    >
                      COMERCIOS BITCOIN
                    </Scrollchor>
                  </li>
                )}
                {currLocation != "/" && (
                  <li onClick={this.removeClass}>
                    <Link to="/#comercios" className="link">
                      COMERCIOS BITCOIN
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div class="pure-u-4-24">
            <div className="App-logo App-logoFooter">
              <img
                src={require("../../assets/images/footer/footer-logo.png")}
              ></img>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
