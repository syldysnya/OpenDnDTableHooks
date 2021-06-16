import React from 'react';

const SearchFilter = (props) => {

    const {cities} = props;

    let mappedCities = cities.map((city, i) => {
        return (
            <div className="city-box">
                <input type="checkbox" 
                    onClick={props.handleCheckBox}
                    className="city-box-checkbox"
                    id={city.id} />
                <label className="city-box-text">
                    {city.name}
                </label>
            </div>
        )
    })

    return (
        <div>
            <div className="filter-by-city">
                {mappedCities}
            </div>
        </div>
    );
};

export default SearchFilter;