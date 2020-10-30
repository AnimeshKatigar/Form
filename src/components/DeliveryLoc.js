import React, { Component } from 'react'

export default class DeliveryLoc extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    
    back = e =>{
        e.preventDefault();
        this.props.prevStep()
    }

    render() {

        const {value, handleChange}=this.props;
        const countries=["Australia","India","England","USA","China"]

        return (
            <div className="form-container">
            <h1>Setup your Delivery Location</h1>
            <div className="form-group">
                    <label htmlFor="DeliveryAddressLine1">Address Line 1</label>
                    <input type="text" className='form-control' name="DeliveryAddressLine1" onChange={handleChange('DeliveryAddressLine1')} value={value.DeliveryAddressLine1} />
                    <p>Please enter your Delivery Address</p>
                </div>
                <div className="form-group">
                    <label htmlFor="DeliveryAddressLine2">Address Line 2</label>
                    <input type="text" className='form-control' name="DeliveryAddressLine2" onChange={handleChange('DeliveryAddressLine2')} value={value.DeliveryAddressLine2} />
                    <p>Please enter your Delivery Address</p>
                </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="DeliveryPostcode">PostCode</label>
                    <input type="text" className='form-control' name="DeliveryPostcode" onChange={handleChange('DeliveryPostcode')} value={value.DeliveryPostcode} />
                    <p>Please enter your PostCode</p>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="DeliveryCity">City</label>
                    <input type="text" className='form-control' name="DeliveryCity" onChange={handleChange('DeliveryCity')} value={value.DeliveryCity} />
                    <p>Please enter your City</p>
                </div>
            </div>
            

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="DeliveryState">State</label>
                    <input type="text" className='form-control' name="DeliveryState" onChange={handleChange('DeliveryState')} value={value.DeliveryState} />
                    <p>Please enter your State</p> 
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="DeliveryCountry">Country</label>
                    <select class="form-control" name="DeliveryCountry" onChange={handleChange('DeliveryCountry')} value={value.DeliveryCountry} >
                           
                           {countries.map((country)=>(
                               <option>{country}</option>
                           ))}

                        
                    </select>
                    <p>Please enter your Country</p>
                </div>
            </div>

           
           
            <br/>

            <div className="row">
                <div className="col-6">
                        <button className="btn btn-outline-primary" onClick={this.back}>Previous</button>
                </div>
                <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Next</button>
                </div>
                
            </div>
        </div>



            
        )
    }
}
