import React from 'react';
import './Select.css';

export default class Select extends React.Component {
  
  /* 
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
        <ul className="feature__list" onClick={() => this.props.swapSelect(feature)}>
          <li className="feature__item">
            <div className={firstClass}>
            {details[0].name}({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(details[0].cost) })
            </div>
          </li>
          <li>
          <div className={secondClass}>
            {details[1].name}({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(details[1].cost) })
            </div>
          </li>
        </ul>
      </div>
    );
    }
  }

