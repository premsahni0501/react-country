import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CountryItem from './CountryItem';

class CountryList extends Component{
    state = {
        value: ''
    }
    onCountrySelected = (event) =>{
        this.setState({
            value: event.target.value
        }, ()=>{
        this.props.onCountrySelected(this.state.value);
        })
    }
    render(){
        return (
            <select value={this.state.value} className="form-control" 
            onChange={this.onCountrySelected}>
                <option disabled value={''}>Select Country</option>
                {this.props.countries.map((country, indx)=>{
                    return <CountryItem key={indx} value={country.country}/>
                })}
            </select>
        );
    }
}
CountryList.propTypes = {
    countries: PropTypes.array
}
export default CountryList;