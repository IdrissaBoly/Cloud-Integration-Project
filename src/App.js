import logo from "./logo.svg";
import "./App.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import LeafletGeocoder from "./LeafletGeocoder";
function App() {
  const position = [34.020882, -6.84165];

  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LeafletGeocoder />
      </MapContainer>
    </div>
  );
}
let defaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
});
L.Marker.prototype.options.icon = defaultIcon;
export default App;
