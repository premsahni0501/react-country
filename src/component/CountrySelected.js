import React from 'react';
import PropTypes from 'prop-types';

const CountrySelected = ({ selected }) => {
    console.log(selected);
    return (
        selected.name?
        (
            <div className="card country-prev">
                <img src={`${selected.flag}`} alt={selected.name} 
                className="card-img-top img-fluid"/>
                <div className="card-body">
                    <h1>{selected.name}</h1>
                </div>
            </div>
        )
        :
        (<p>Please select a country</p>)
        
    );
}
CountrySelected.propTypes = {
    selected: PropTypes.object
}
export default CountrySelected;