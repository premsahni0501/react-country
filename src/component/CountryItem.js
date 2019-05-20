import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CountryItem extends Component{
    render(){
        return (
            <option {...this.props}>{this.props.value}</option>
        );
    }
}
CountryItem.propTypes = {
    country: PropTypes.object
}
export default CountryItem;