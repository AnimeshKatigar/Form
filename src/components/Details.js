import React, { Component } from 'react'

export default class Details extends Component {
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

        return (
            <div className="form-container">
                <h1>Enter the Details of your Delivery</h1>
                <div className="form-group">
                    <label htmlFor="PackageDetails">Package Details</label>
                    <input type="text" className='form-control' name="PackageDetails" onChange={handleChange('PackageDetails')} value={value.PackageDetails} />
                    <p>Please Enter your Package Details</p>
                </div>
                <div className="form-group">
                    <label htmlFor="PackageKG">Package Weight in KG</label>
                    <input type="number" className='form-control' name="PackageKG" onChange={handleChange('PackageKG')} value={value.PackageKG} />
                    <p>Please Enter the Package Weight in KG</p>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="PackageWidth">Package Width in CM </label>
                        <input type="number" className='form-control' name="PackageWidth" onChange={handleChange('PackageWidth')} value={value.PackageWidth} />
                        <p>Please Enter the Package Width in CM</p>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="PackageHeight">Package Height in CM</label>
                        <input type="number" className='form-control' name="PackageHeight" onChange={handleChange('PackageHeight')} value={value.PackageHeight} />
                        <p>Please Enter the Package Height in CM</p>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="PackageLength">Package Length in CM</label>
                        <input type="number" className='form-control' name="PackageLength" onChange={handleChange('PackageLength')} value={value.PackageLength} />
                        <p>Please Enter the Package Length in CM</p>
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
