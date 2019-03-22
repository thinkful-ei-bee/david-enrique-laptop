import React from 'react';
import Select from './Select';
import './Specs.css';

export default class Specs extends React.Component {


    render(){
      return  (
        <section className="main__form">
         <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
         {Object.keys(this.props.features).sort().map(name =>
           <Select key={name} feature={name} details={this.props.features[name]} swapSelect={this.props.swapSelect}/>)}
        </section>
        )
    }
   
       
    
}