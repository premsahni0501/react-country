import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CountryItem extends Component{
    render(){
        return (
            <option value={this.props.country.country}>{this.props.country.country}</option>
        );
    }
}
CountryItem.propTypes = {
    country: PropTypes.object
}
export default CountryItem;