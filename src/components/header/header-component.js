import React from "react";
import { Link } from "react-router-dom";
/*SLIDER*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scrollchor from "react-scrollchor";
/*STYLES*/
import "./header-component.css";
import "../../assets/css/pure-min.css";
import "../../assets/css/grids-responsive-min.css";
import "../../assets/css/fonts.css";
import "../../assets/css/style-responsive.css";
/*COMPONENTES*/
class Header extends React.Component {
  state = {
    classmenu: 0,
    location: ""
  };
  addClass = e => {
    this.setState({
      classmenu: 1
    });
    e.preventDefault();
  };
  removeClass = e => {
    this.setState({
      classmenu: 0
    });
    e.preventDefault();
  };
  componentDidMount() {
    this.setState({
      location: window.location.pathname
    });
  }
  render() {
    const currLocation = this.state.location;
    const clases = this.state.classmenu;
    return (
      <header className="App-header">
        <div class="pure-g">
          <div class="pure-u-1-3 pure-u-md-4-24">
            <div className="App-logo">
              <Link to="/" spy={false} smooth={false}>
                <img src={require("../../assets/images/logo.png")}></img>
              </Link>
            </div>
          </div>
          <div class="pure-u-2-3 pure-u-md-20-24">
            <ul
              class=""
              className={`am_header_nav menuMobilView ${clases === 1 ? " menuMobilViewActive" : ""}`}
            >
              <span class="closeMenuMobil" onClick={this.removeClass}>
                <img
                  src={require("../../assets/images/home/close-menu.png")}
                ></img>
              </span>
              
              {currLocation != "/" && (
                <li onClick={this.removeClass}>
                  <Link to="/#como-usarlo" className="link">
                    ¿Cómo usarlo?
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
                    Comercios
                  </Scrollchor>
                </li>
              )}
              {currLocation != "/" && (
                <li onClick={this.removeClass}>
                  <Link to="/#comercios" className="link">
                  Comercios
                  </Link>
                </li>
              )}
              {currLocation == "/" && (
              <li onClick={this.removeClass}>
                <Scrollchor
                  to="#que-es-bitcoin"
                  animate={{ offset: -70, duration: 500 }}
                  spy={true}
                  className="nav-link"
                >
                  ¿Qué es bitcoin?
                </Scrollchor>
              </li>
              )}
              {currLocation != "/" && (
                <li onClick={this.removeClass}>
                  <Link to="/#que-es-bitcoin" className="link">
                  ¿Qué es bitcoin?
                  </Link>
                </li>
              )}
              <li onClick={this.removeClass}>
                <Link to="/contacto">CONTÁCTANOS</Link>
              </li>
              <div class="loginMenu">
                <div class="menuLogin">
                  <ul>
                    <li onClick={this.removeClass}>
                      <Link to="/login" spy={false} smooth={false}>
                        INGRESO
                      </Link>
                    </li>
                    <li onClick={this.removeClass}>
                      <Link to="/register" spy={false} smooth={false}>
                        REGISTRO
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
            <ul
              className={`menuMobil ${clases === 1 ? "menuMobilNoview" : ""}`}
              onClick={this.addClass}
            >
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p></p>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
