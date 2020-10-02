import React, { Component } from 'react';
import { DisplayData } from './styles';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

class DataDisplay extends Component {
  state = {
    loading: true,
    usedData: 0,
  };

  async componentDidMount() {
    const historicData = 'https://api.covidtracking.com/v1/us/daily.json';
    const currentData = 'https://api.covidtracking.com/v1/us/current.json';

    const response = await fetch(currentData);
    const data = await response.json();
    console.log(data);
    this.setState({ usedData: data[0].positive });
  }

  render() {
    return (
      <DisplayData size='100px'>
        {numberWithCommas(this.state.usedData)}
      </DisplayData>
    );
  }
}

export default DataDisplay;
