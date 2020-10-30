import React, { Component } from 'react'

export default class Confirmation extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep()
    }
    
    render() {

        const {
            value:{CurrentAddressLine1,
                CurrentAddressLine2, 
                CurrentPostcode,
                CurrentCity,
                CurrentState,
                CurrentCountry,
                DeliveryAddressLine1,
                DeliveryAddressLine2,
                DeliveryPostcode,
                DeliveryCity,
                DeliveryState,
                DeliveryCountry,
                PackageDetails,
                PackageKG,
                PackageWidth,
                PackageHeight,
                PackageLength}
        } = this.props;

        return (
            <div className="form-container">
                <h1>Review and Submit your Order</h1>
                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <h4>Current Address Details:</h4>
                        {CurrentAddressLine1} <br/>
                        {CurrentAddressLine2} <br/>
                        {CurrentCity} {CurrentPostcode},{CurrentState}, {CurrentCountry}      
                    </li>

                    <li class="list-group-item">
                        <h4>Package Details:</h4>
                        {PackageDetails} <br/>
                        {PackageKG} <br/>
                        Dimensions: {PackageWidth}(w) * {PackageHeight}(h) * {PackageLength}(l)   
                    </li>

                    <li class="list-group-item">
                        <h4>Delivery Address Details:</h4>
                        {DeliveryAddressLine1} <br/>
                        {DeliveryAddressLine2} <br/>
                        {DeliveryCity} {DeliveryPostcode}, {DeliveryState}, {DeliveryCountry}      
                    </li>
                   
                    
                </ul>

                
                
               
                <br/>
            <div className="row">
                <div className="col-6">
                        <button className="btn btn-outline-primary" onClick={this.back}>Previous</button>
                </div>
                <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Submit</button>
                </div>
                
            </div>
                
            </div>
        )
    }
}
