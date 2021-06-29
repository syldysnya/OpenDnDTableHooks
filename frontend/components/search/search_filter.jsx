import React from 'react';

const SearchFilter = (props) => {

    const {cities, checkRef, handleCheckBox} = props;

    let mappedCities = cities.map((city, i) => {
        return (
            <div className="city-box">
                <div onClick={handleCheckBox}
                    className="city-box-checkbox"
                    id={city.id}>
                    <div className="icon"><i className="fas fa-check" ></i></div>
                    <label htmlFor='city-box-checkbox' className="city-box-text">
                        {city.name}
                    </label>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="filter-cities-title">
                <i className="fas fa-map-marker-alt"></i>
                Location:
            </div>
            <div className="filter-by-city">
                {mappedCities}
            </div>
        </>
    );
};

export default SearchFilter;