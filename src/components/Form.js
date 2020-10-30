import React, { Component } from 'react'
import Confirmation from './Confirmation';
import CurrentLoc from './CurrentLoc';
import DeliveryLoc from './DeliveryLoc';
import Details from './Details'
import Last from './Last'

export default class Form extends Component {
    
    state={
        step:1,
        CurrentAddressLine1:"",
        CurrentAddressLine2:"",
        CurrentPostcode:"",
        CurrentCity:'',
        CurrentState:'',
        CurrentCountry:'',
        DeliveryAddressLine1:"",
        DeliveryAddressLine2:"",
        DeliveryPostcode:"",
        DeliveryCity:"",
        DeliveryState:"",
        DeliveryCountry:"",
        PackageDetails:"",
        PackageKG:"",
        PackageWidth:"",
        PackageHeight:"",
        PackageLength:""
    }
    
     nextStep=()=> {
        const{step}=this.state;
        this.setState({
            step:step + 1
        });
    }
     prevStep=()=> {
        const{step}=this.state;
        this.setState({
            step:step - 1
        });
    }
    
     handleChange = input => e =>{
        this.setState({[input]:e.target.value}); 
    }
    
    
    
    
    render() {

        const {step} = this.state;
        const {
            CurrentAddressLine1,
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
            PackageLength} = this.state
       

        const values={
            CurrentAddressLine1,
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

 
    
        switch(step){
            case 1:
                return(
                    <CurrentLoc
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                )
            case 2:
                return (
                    <Details
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    value={values}
                />
                )
            case 3:
                return(
                    <DeliveryLoc
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                )

            case 4:
                return(
                    <Confirmation
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        value={values}
                    />
                )
            case 5:
                return(
                    <Last/>
                )

            default:
                return ("")
            }
    }
}
