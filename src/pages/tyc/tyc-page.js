import React from "react";
/*COMPONENTES*/
import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";
/*ESTILOS*/
import "./tyc-page.css";
class Tyc extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section class="sectionTyc sectionBeforeFooter woowContentFull">
          <div class="pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 pure-u-1-1">
            <h2>Términos y condiciones</h2>
          </div>
          <p class="txtSectionTyc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
            <br></br>
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam.
          </p>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Tyc;
