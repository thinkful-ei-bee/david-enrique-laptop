import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Specs from './Specs';
import Price from './Price';

class App extends Component {
  
    state = {
      FEATURES2: {
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
        "Operating System": [
          {
            name: 'Ubuntu Linux 16.04',
            cost: 200,
            selected: true
          },
          {
            name: 'Bodhi Linux',
            cost: 300,
            selected: false
          }
        ],
        "Video Card": [
          {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98,
            selected: true
          },
          {
            name: 'Mind mild breeze 2000',
            cost: 1345,
            selected: false
          }
        ],
        Display: [
          {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500,
            selected: true
          },
          {
            name: '15.3" HGTV (3840 x 2160) Home makeover edition',
            cost: 1400,
            selected: false
          },
        ]
      },
    }
  
  swapSelect = feature => {
    const featureArr = this.state.FEATURES2[feature];
    const newArr = featureArr.map(item => {
      let {name, cost, selected} = item;
      selected = !selected;
      return {
        name,
        cost,
        selected
      }
    });
    
    const featureNames = ['Processor', 'Operating System', 'Video Card', 'Display'];
    const unmodified = featureNames.filter(ele => ele !== feature);
    const newObj = {};
    for (let i = 0; i<unmodified.length; i++) {
      newObj[unmodified[i]] = this.state.FEATURES2[unmodified[i]];
    }
    newObj[feature] = newArr;

    this.setState({
      FEATURES2: newObj
    });

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <Specs features={this.state.FEATURES2} swapSelect={this.swapSelect}></Specs>
          <Price features={this.state.FEATURES2}/>
        </main>
      </div>
    );
  }
}

export default App;  
