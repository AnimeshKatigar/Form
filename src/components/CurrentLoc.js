import React, { Component } from 'react'

export default class CurrentLoc extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    
    render() {

        const {value, handleChange}=this.props;
        const countries=["Australia","India","England","USA","China"]
        return (
            <div className="form-container">
                <h1>Setup your Current Location</h1>
                <div className="form-group">
                    <label htmlFor="CurrentAddressLine1">Address Line 1</label>
                    <input type="text" className='form-control' name="CurrentAddressLine1" onChange={handleChange('CurrentAddressLine1')} value={value.CurrentAddressLine1} />
                    <p>Please enter your Address</p>
                </div>
                
                <div className="form-group">
                    <label htmlFor="CurrentAddressLine2">Address Line 2</label>
                    <input type="text" className='form-control' name="CurrentAddressLine2" onChange={handleChange('CurrentAddressLine2')} value={value.CurrentAddressLine2} />
                    <p>Please enter your Address</p>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="CurrentPostcode">PostCode</label>
                        <input type="text" className='form-control' name="CurrentPostcode" onChange={handleChange('CurrentPostcode')} value={value.CurrentPostcode} />
                        <p>Please enter your PostCode</p>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="CurrentCity">City</label>
                        <input type="text" className='form-control' name="CurrentCity" onChange={handleChange('CurrentCity')} value={value.CurrentCity} />
                        <p>Please enter your City</p>
                    </div>
                </div>
                

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="CurrentState">State</label>
                        <input type="text" className='form-control' name="CurrentState" onChange={handleChange('CurrentState')} value={value.CurrentState} />
                        <p>Please enter your State</p> 
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="CurrentCountry">Country</label>
                        <select class="form-control" name="CurrentCountry" onChange={handleChange('CurrentCountry')} value={value.CurrentCountry}>
                           
                           {countries.map((country)=>(
                               <option>{country}</option>
                           ))}

                        
                        </select>
                        <p>Please enter your Country</p>
                    </div>
                </div>

               
               
                <br/>

                <div className="text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Next</button>
                </div>

            </div>
        )
    }
}
