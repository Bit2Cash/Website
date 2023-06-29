import React from "react";
import "./map-component.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import icomarker from "../../assets/images/marker-map.png";
export class Maps extends React.Component {
  
  render() {
    return (
      <div>
        <iframe  type="image/jpg" src="https://btcmap.org/map#13/4.62545/-74.10072" style={{width:'1200px', height:'400px'}} > </iframe>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDhOSRSWQHb08rO3Zd8IVO8TZEn_0kvbU4"
  
})(Maps);
