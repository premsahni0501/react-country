import React from 'react';
import './App.css';
import CountryList from './component/CountryList';
import CountrySelected from './component/CountrySelected';

import country from 'country-json/src/country-by-flag';

class App extends React.Component {
  state = {
    selectedCountry: {
      name: '',
      flag: ''
    }
  }
  onCountrySelected = (countryName) =>{
    const countryMatched = country.find(item=>item.country === countryName);
    console.log(countryName, countryMatched);
    let found = {
      name: countryMatched.country,
      flag: countryMatched.flag_base64
    }
    this.setState({
      selectedCountry: {...found}
    })
  }
  render(){
    console.log(country);
    return (
      <div className="App">
        <CountryList countries={country} onCountrySelected={this.onCountrySelected}></CountryList>
        <CountrySelected selected={this.state.selectedCountry}/>
      </div>
    );
  }
}

export default App;
