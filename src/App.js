import { useState } from 'react';  
import './App.css';
import Vehicle from './Vehicle/vehicle';

const App = props=> {
  const [vehicleState, setVehicleState]=useState(

    {
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
  );

 const updateHandler =()=>{
   console.log('update handler clicked'); 
   setVehicleState({vehicles:[
    {VechicleType:"car", name: "S3x",  Manufacture: "Suzuki",
FuelType:"CNG" },  
{VechicleType:"car", name: "I20",  Manufacture: "Hundai",
FuelType:"Diesel" },
{VechicleType:"car", name: "Scropio",  Manufacture: "Mahindra",
FuelType:"Petrol" },
{VechicleType:"car", name: "Audi-A5",  Manufacture: "Audi",
FuelType:"Electric"},
    
  ]
});
 }  

   
    return ( 
      <div className="App container-fluid lg-col-6"> 
        <div className="row">
        <h1>List of vehicles</h1>
        <div className= "buttonDiv">
        <button className="btn btn-warning btn-md buttonDiv button-update " onClick={updateHandler}> Update List</button>
        </div>
        </div>
        <div className="row"></div>
        <Vehicle VehicleType={vehicleState.vehicles[0].VechicleType} name={vehicleState.vehicles[0].name} Manufacture={vehicleState.vehicles[0].Manufacture}
FuelType={vehicleState.vehicles[0].FuelType} />
<Vehicle VehicleType={vehicleState.vehicles[1].VechicleType} name={vehicleState.vehicles[1].name} Manufacture={vehicleState.vehicles[1].Manufacture}
FuelType={vehicleState.vehicles[1].FuelType} />
<Vehicle VehicleType={vehicleState.vehicles[2].VechicleType} name={vehicleState.vehicles[2].name} Manufacture={vehicleState.vehicles[2].Manufacture}
FuelType={vehicleState.vehicles[2].FuelType} />
<Vehicle VehicleType={vehicleState.vehicles[3].VechicleType} name={vehicleState.vehicles[3].name} Manufacture={vehicleState.vehicles[3].Manufacture}
FuelType={vehicleState.vehicles[3].FuelType} />
      </div>
      
      );
  }
export default App;
