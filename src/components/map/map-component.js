import React from "react";
import "./map-component.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import icomarker from "../../assets/images/marker-map.png";
export class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      list: false,
      checkval: true,
      filterZona: "",
      filterRubro: "",
      filterName: "",
      arrayStores: [],
      valueZona: "",
      valueRubro: "",
      valueInput: "",
      checkvalMap: true,
      checkvalLs: false,
      stores: [
        {
          nombre: "Crepes And Wafles",
          rubro: "Bar",
          dir: "Cra. 9 #74-08",
          tel: "(1) 6767600",
          hor: "11:45–20:30",
          latitude: 4.657928,
          longitude: -74.05781,
          rating: 4.6,
          cantrating: 700,
          zona: "Norte",
          desc: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit"
        },
        {
          nombre: "Tostao",
          rubro: "Cafeteria",
          dir: " Cl. 65 #23 20",
          tel: "(1) 4864737",
          hor: "7:00–19:00",
          latitude: 4.656719,
          longitude: -74.070768,
          rating: 2.6,
          cantrating: 540,
          zona: "Sur",
          desc: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit"
        },
        {
          nombre: "Tennis",
          rubro: "Cafeteria",
          dir: "C. C. y de Negocios Andino. Carrera 11 #82-71",
          tel: "(1) 6168975",
          hor: "11:00–20:00",
          latitude: 4.66701,
          longitude: -74.052323,
          rating: 4.2,
          cantrating: 10,
          zona: "Oriente",
          desc: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit"
        },
        {
          nombre: "Adidas",
          rubro: "Alojamiento",
          dir: "Cl. 82 # 13-20",
          tel: "318 8481653",
          hor: "10:00–21:00",
          latitude: 4.667487,
          longitude: -74.054681,
          rating: 3.2,
          cantrating: 2,
          zona: "Occidente",
          desc: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit"
        },
        {
          nombre: "Juan Valdez Café",
          rubro: "Alojamiento",
          dir: "Cra. 7 # 67-05",
          tel: "Cra. 7 ## 67-05",
          hor: "6:30–20:30",
          latitude: 4.652822,
          longitude: -74.058616,
          rating: 1.2,
          cantrating: 1,
          zona: "Norte",
          desc: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit"
        },
        {
          nombre: "El Corral",
          rubro: "Restaurante",
          dir: "Calle 73 No. 10 - 83",
          tel: "01-800-0114722",
          hor: "11:00–21:00",
          latitude: 4.658405,
          longitude: -74.057536,
          rating: 4.8,
          cantrating: 20,
          zona: "Sur",
          desc: "Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit"
        }
      ]
    };
    this.state.arrayStores = this.state.stores;
  }
  onChangeFilter(event, id) {
    event.preventDefault();
    const value = event.target.value;
    const actualArray = [];
    const valZona = this.state.valueZona;
    const valRubro = this.state.valueRubro;
    if (id == "zona") {
      this.setState({
        valueZona: value
      });
      this.state.stores.map((store, index) => {
        if (value != "") {
          if (valRubro != "") {
            if (store.zona === value && store.rubro === valRubro) {
              actualArray.push(store);
            }
          } else {
            if (store.zona === value) {
              actualArray.push(store);
            }
          }
        } else if (value === "") {
          if (valRubro != "") {
            if (store.rubro === valRubro) {
              actualArray.push(store);
            }
          } else {
            actualArray.push(store);
          }
        }
      });
    }
    if (id == "rubro") {
      this.setState({
        valueRubro: value
      });
      this.state.stores.map((store, index) => {
        if (value != "") {
          if (valZona != "") {
            if (store.zona === valZona && store.rubro === value) {
              actualArray.push(store);
            }
          } else {
            if (store.rubro === value) {
              actualArray.push(store);
            }
          }
        } else if (value === "") {
          if (valZona != "") {
            if (store.zona === valZona) {
              actualArray.push(store);
            }
          } else {
            actualArray.push(store);
          }
        }
      });
    }
    this.setState({
      arrayStores: actualArray
    });
  }
  onChangeFilterSearch(event) {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      valueInput: value
    });
  }
  onChangeFilterSearchBtn = e => {
    const value = this.state.valueInput;
    const actualArray = [];
    this.state.arrayStores.map((store, index) => {
      if (value != "") {
        if (store.nombre.indexOf(value) > -1) {
          actualArray.push(store);
        }
      } else {
        actualArray.push(store);
      }
    });
    this.setState({
      arrayStores: actualArray
    });
  };
  noViewInfo = e => {
    this.setState({
      view: false
    });
    e.preventDefault();
  };
  viewList = e => {
    this.setState({
      list: true,
      checkvalMap: false,
      checkvalLs: true
    });
  };
  noViewList = e => {
    this.setState({
      list: false,
      checkvalMap: true,
      checkvalLs: false
    });
  };
  render() {
    const viewInfo = this.state.view;
    const viewList = this.state.list;
    const listItems = this.state.arrayStores;
    const valCheckMap = this.state.checkvalMap;
    const valCheckLs = this.state.checkvalLs;

    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    return (
      <div>
        <div class="filterMaps">
          <ul>
            <li class="listMapOpt">
              <label>
                <input
                  type="radio"
                  name="typeMap"
                  onClick={this.noViewList}
                  checked={valCheckMap}
                />
                MAPA
              </label>
              <label>
                <input
                  type="radio"
                  name="typeMap"
                  onClick={this.viewList}
                  checked={valCheckLs}
                />
                LISTA
              </label>
            </li>
            <li>
              <div class="icoSelect">
                <img src={require("../../assets/images/home/zona.png")}></img>
              </div>
              <select
                name="select"
                onChange={e => this.onChangeFilter(e, "zona")}
              >
                <option value="">Zona</option>
                <option value="Norte">Norte</option>
                <option value="Sur">Sur</option>
                <option value="Oriente">Oriente</option>
                <option value="Occidente">Occidente</option>
              </select>
              <div class="icoSelectRight">
                <img src={require("../../assets/images/home/down.png")}></img>
              </div>
            </li>
            <li>
              <div class="icoSelect">
                <img src={require("../../assets/images/home/rubro.png")}></img>
              </div>
              <select
                name="select"
                onChange={e => this.onChangeFilter(e, "rubro")}
              >
                <option value="">RUBRO</option>
                <option value="Alojamiento">Alojamientos</option>
                <option value="Bar">Bares</option>
                <option value="Cafeteria">Cafeterías</option>
                <option value="Restaurante">Restaurantes</option>
              </select>
              <div class="icoSelectRight">
                <img src={require("../../assets/images/home/down.png")}></img>
              </div>
            </li>
            <li class="textInput">
              <input
                type="text"
                onChange={e => this.onChangeFilterSearch(e)}
                placeholder="Buscar por..."
              ></input>
              <p onClick={this.onChangeFilterSearchBtn}>
                <img
                  src={require("../../assets/images/home/btn-search.svg")}
                ></img>
              </p>
            </li>
          </ul>
        </div>
        {viewList == false && (
          <div class="infoMapsHome">
            {viewInfo == true && (
              <div class="infoMapSelectHome ">
                <div class="closeInfoMap" onClick={this.noViewInfo}>
                  <img
                    src={require("../../assets/images/comercios/close-comercios.png")}
                  ></img>
                </div>
                <h3>{this.state.nombre}</h3>
                <div class="ratingInfoMapSelectHome">
                  <p>
                    {this.state.rating} ({this.state.cantrating})
                  </p>
                  <p>{this.state.rubro}</p>
                </div>
                <div class="imgInfoMapSelectHome">
                  <img
                    src={require("../../assets/images/comercios/comercio-1.jpg")}
                  ></img>
                </div>
                <div class="dataInfoMapSelectHome">
                  <ul>
                    <li>
                      <div class="icoInfoMap">
                        <p>
                          <span class="icon-icono5"></span>
                        </p>
                      </div>
                      <p>{this.state.dir}</p>
                    </li>
                    <li>
                      <div class="icoInfoMap">
                        <p>
                          <span class="icon-icono6"></span>
                        </p>
                      </div>
                      <p>{this.state.tel}</p>
                    </li>
                    <li>
                      <div class="icoInfoMap">
                        <p>
                          <span class="icon-icono7"></span>
                        </p>
                      </div>
                      <p>{this.state.hor}</p>
                    </li>
                    <li>
                      <p>{this.state.desc}</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <div class="mapComerciosHome">
              <Map
                google={this.props.google}
                zoom={13}
                style={mapStyles}
                initialCenter={{ lat: 4.6669067, lng: -74.0721145 }}
              >
                {this.state.arrayStores.map((store, index) => {
                  return (
                    <Marker
                      key={index}
                      id={index}
                      position={{
                        lat: store.latitude,
                        lng: store.longitude
                      }}
                      icon={icomarker}
                      onClick={() =>
                        this.setState({
                          nombre: store.nombre,
                          rubro: store.rubro,
                          dir: store.dir,
                          tel: store.tel,
                          hor: store.hor,
                          desc: store.desc,
                          rating: store.rating,
                          cantrating: store.cantrating,
                          view: true
                        })
                      }
                    />
                  );
                })}
              </Map>
            </div>
          </div>
        )}
        {viewList == true && (
          <table class="tablaLista">
            <tr>
              <th>Nombre</th>
              <th>Raiting</th>
              <th>Califaciones</th>
              <th>Rubro</th>
              <th>Dirección</th>
              <th>Telefono</th>
              <th>Horario</th>
              <th>Descripción</th>
            </tr>
            {listItems.map(store => (
              <tr>
                <td>{store.nombre}</td>
                <td>{store.rating}</td>
                <td>{store.cantrating}</td>
                <td>{store.rubro}</td>
                <td>{store.dir}</td>
                <td>{store.tel}</td>
                <td>{store.hor}</td>
                <td>{store.desc}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDhOSRSWQHb08rO3Zd8IVO8TZEn_0kvbU4"
  
})(Maps);
