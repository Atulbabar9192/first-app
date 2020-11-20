import React from 'react';  
import './App.css';
import Vehicle from './Vehicle/vehicle';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {  
      vehicles:[
        {VechicleType:"car", name: "Altroz",  Manufacture: "Tata",
FuelType:"Petrol" },  
{VechicleType:"car", name: "Nexon",  Manufacture: "Tata",
FuelType:"Diesel" },
{VechicleType:"car", name: "XUV",  Manufacture: "Mahindra",
FuelType:"Petrol" },
{VechicleType:"car", name: "Baleno",  Manufacture: "Maruti-suzuki",
FuelType:"Electric"},
        
      ]
    }
  }
  render() { 
    return ( 
      <div className="App container-fluid">
        <div className="row">
        <h1>List of vehicles</h1>
        <div>
        <button className="btn btn-warning btn-md buttonDiv button-update "> vehicle List</button>
        </div>
        </div>
        <div className="row"></div>
        <Vehicle VehicleType={this.state.vehicles[0].VechicleType} name={this.state.vehicles[0].name} Manufacture={this.state.vehicles[0].Manufacture}
FuelType={this.state.vehicles[0].FuelType} />
<Vehicle VehicleType={this.state.vehicles[1].VechicleType} name={this.state.vehicles[1].name} Manufacture={this.state.vehicles[1].Manufacture}
FuelType={this.state.vehicles[1].FuelType} />
<Vehicle VehicleType={this.state.vehicles[2].VechicleType} name={this.state.vehicles[2].name} Manufacture={this.state.vehicles[2].Manufacture}
FuelType={this.state.vehicles[2].FuelType} />
<Vehicle VehicleType={this.state.vehicles[3].VechicleType} name={this.state.vehicles[3].name} Manufacture={this.state.vehicles[3].Manufacture}
FuelType={this.state.vehicles[3].FuelType} />
      </div>
      
      );
  }
} 
export default App;
