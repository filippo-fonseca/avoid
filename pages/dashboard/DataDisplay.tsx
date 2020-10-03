import React, { Component } from 'react';
import { HeaderOne } from './styles';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

interface InputsExpected {
  data: string;
}

class DataDisplay extends Component<InputsExpected> {
  state = {
    loading: true,
    positive: 0,
    deaths: 0,
    hospitalized: 0,
    recovered: 0,
  };

  async componentDidMount() {
    const historicData = 'https://api.covidtracking.com/v1/us/daily.json';
    const currentData = 'https://api.covidtracking.com/v1/us/current.json';

    const response = await fetch(currentData);
    const data = await response.json();
    console.log(data);
    this.setState({ positive: data[0].positive });
    this.setState({ deaths: data[0].death });
    this.setState({ hospitalized: data[0].hospitalizedCurrently });
    this.setState({ recovered: data[0].recovered });
  }

  render() {
    const dataUsed = this.props.data;
    console.log(dataUsed);

    switch (dataUsed) {
      case 'positive':
        console.log('works');
        return (
          <HeaderOne size='27px'>
            {numberWithCommas(this.state.positive)}
          </HeaderOne>
        );
        break;
      case 'deaths':
        return (
          <HeaderOne size='27px'>
            {numberWithCommas(this.state.deaths)}
          </HeaderOne>
        );
      case 'hospitalized':
        return (
          <HeaderOne size='27px'>
            {numberWithCommas(this.state.hospitalized)}
          </HeaderOne>
        );
      case 'recovered':
        return (
          <HeaderOne size='27px'>
            {numberWithCommas(this.state.recovered)}
          </HeaderOne>
        );
    }
  }
}

export default DataDisplay;
