import React from 'react';
import Select from './Select';
import './Specs.css';

export default class Specs extends React.Component {


    render(){
      return  (
        <section className="main__form">
         <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
         {Object.keys(this.props.FEATURES2).map(name =>
           <Select feature={name} details={this.props.FEATURES2[name]} />)}
        </section>
        )
    }
   
       
    
}