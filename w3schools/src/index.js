import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

class Garage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {carInGarage: true};
    }
    
    toogleCar = (event) => {
        this.setState({carInGarage: !this.state.carInGarage})
    }
    
    render() {
        let myCar = this.state.carInGarage ? <Car />: <p>None</p> ;
        return (
            <div>
                <h1>Which car stands in my Garage?</h1>
                {myCar}
                <button type= "button" onClick={this.toogleCar}>Toggle car</button>
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById('root'));