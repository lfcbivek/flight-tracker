import './App.css';
import 'leaflet/dist/leaflet.css';
import FlightMap from './components/FlightMap';
import QueryForm from './components/QueryForm';



function App() {
  
  return (
    <div className="App">
      <div className="map-container">
        <FlightMap />
      </div> 
      <div className="query-form">
        <QueryForm />
      </div> 
    </div>
  );
}

export default App;
