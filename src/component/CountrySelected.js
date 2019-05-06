import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CountrySelected extends Component{
    render(){
        return (
            (this.props)?(
                <div className="card country-prev">
                    <img src={`${this.props.selected.flag}`} alt={this.props.selected.name} className="card-img-top img-fluid"/>
                    <div className="card-body">
                        <h1>{this.props.selected.name}</h1>
                    </div>
                </div>):
                ('')
            
        );
    }
}
CountrySelected.propTypes = {
    selected: PropTypes.object
}
export default CountrySelected;