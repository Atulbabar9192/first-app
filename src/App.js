import './App.css';
import Vehicle from './Vehicle/vehicle'
function App() {
  return (
    <div className="App">
      <Vehicle VechicleType="car" name="Altroz" Manufacture="Tata"
FuelType="Petrol" />
<Vehicle VechicleType="car" name="Selto" Manufacture="KIA"
FuelType="Diesel" />
<Vehicle VechicleType="car" name="Breeza" Manufacture="Maruti-Suzuki"
FuelType="CNG" />

    
    </div>
  );
}

export default App;
