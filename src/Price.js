import React from 'react';

 export default class Price extends React.Component{
    // constructor(props){
    //     super(props),
    // }
    

    render(){
        const total = Object.keys(this.props.features)
        .reduce((acc, curr) => acc + this.props.features[curr].filter(i => i.selected)[0].cost, 0);  


        const summary = Object.keys(this.props.features)
            .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.props.features[key].filter(i => i.selected)[0].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.features[key].filter(i => i.selected)[0].cost) }
            </div>
        </div>)

     return (<section className= "main__summary">
    <h3>NEW GREENLEAF 2018</h3>
    {summary}
    <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(total) }
              </div>
            </div>
        </section>)
    }
 }


