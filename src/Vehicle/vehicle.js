import './vehicle.css'

const vehicle = (props) => {
    return (
    <div className="vehicle">
        
        {<h1>vechile :{props.VechicleType}</h1> }
    <p> Name: {props.name}</p>
        <p>Manufacture :{props.Manufacture}</p>
        <p>Fuel type:{props.FuelType}</p> 
        {/* <p>comments:{props.children}</p> */}
    </div>);
    
}
export default vehicle;