import React from 'react';
import './Select.css';

export default class Select extends React.Component {


  
  /* 
  feature {
    name:
    option1: {
      name:
      cost:
    }
    option2: {
      name:
      cost:
    }
  }

  selected: 0 or 1 or 'option1' or 'option2'
  */
  

  render(){
    console.log(this.props)
    const feature = this.props.feature;
    const selected = this.props.selected;
    return (
      <div>
            
      <li key={index} className="feature__item">
    <div className={featureClass}
      
      onClick={e => this.updateFeature(key, item)}>
        { item.name }
        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(item.cost) })
    </div>
    </li>
      
      </div>
    )
    
  }




    const feature = this.props.feature;
    const components =this.props.components;

    const component = components[feature];
    const index = Object.keys(components).find(feature);

    const selectedClass = feature.name === this.state.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;

;
  }
  
}

