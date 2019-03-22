import React from 'react';
import Select from './Select';
import './Specs.css';

export default class Specs extends React.Component {


    render(){
      return  (
        <section className="main__form">
       <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
       <Select />
       <Select />
       <Select />
       <Select />
     </section>
        )
    }
   
       
    
}