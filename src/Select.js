import React from 'react';
import './Select.css';

export default class Select extends React.Component {
  
  /* 
    Processor: [
          {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700,
            selected: true
          },
          {
            name: 'Professor X AMD Fire Breather with sidewinder technology',
            cost: 1200,
            selected: false
          }
        ],  

<Select feature="Processor" details=[{}, {}]>

return <li key={index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={e => this.swapSelection(key)this.updateFeature(key, item)}>
                  { item.name }
                  ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
              </div>
            </li>

  */
  
  render(){
    const feature = this.props.feature;
    const details = this.props.details;
    const firstClass = details[0].selected ? 'feature__option feature__selected' : 'feature__option';
    const secondClass = details[1].selected ? 'feature__option feature__selected' : 'feature__option';

    return (
      <div className="feature">
        <div className="feature__name">{feature}</div>
        <ul className="feature__list">
          <li className="feature__item">
            <div className={firstClass}>
            {details[0].name}({details[0].cost})
            </div>
          </li>
          <li>
          <div className={secondClass}>
            {details[1].name}({details[1].cost})
            </div>
          </li>
        </ul>
      </div>
    );
    }
  }

