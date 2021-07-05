import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { FaStar } from 'react-icons/fa';

const SearchFilter = (props) => {

    const dispatch = useDispatch();
    const cities = useSelector(state => Object.values({...state.entities.cities.citiesAll}));
    const locationFilter = useSelector(state => state.ui.filters.location);
    const {locationFilters, setLocationFilters} = props;

    const handleLocationFilter = e => {
        const value = parseInt(e.currentTarget.id);
        let tag = document.getElementById(value);
        
        if (locationFilters && locationFilters.includes(value)) {
            let newVal = locationFilters.filter(ele => ele !== value)
            setLocationFilters(newVal)
            tag.classList.remove('checked')
        } else {
            let newVal = locationFilters.concat([value])
            setLocationFilters(newVal)
            tag.classList.add('checked')
        }
    };

    const handleRatingFilter = e => {
        const value = parseInt(e.currentTarget.id);
        dispatch(updateFilter('rating', value))
    }

    useEffect(() => {
        if (locationFilters.length > 0) {
            debugger
            dispatch(updateFilter('location', locationFilters))
        }
    }, [locationFilters])

    let mappedCities = cities.map((city, i) => {
        return (
            <div className="city-box" key={`cities-${i}`}>
                <div onClick={handleLocationFilter}
                    className="city-box-checkbox"
                    id={city.id}>
                    <div className="icon"><i className="fas fa-check" ></i></div>
                    <label htmlFor='city-box-checkbox' className="city-box-text">
                        {city.name}
                    </label>
                </div>
            </div>
        )
    });

    let mappedStars = [5, 4, 3, 2, 1].map(j => {
        let line = [1, 2, 3, 4, 5].map(i => {

            return (
                <label key={`stars-${i}`}>
                    <FaStar size={20}
                            color={j >= i ? '#fdaf08' : '#d2d1d1' }
                            className='star'/>
                </label>
            )
        })

        return (
            <div className='line-stars' key={j} id={j} onClick={handleRatingFilter}>
                {line}
            </div>
        )
    });

    return (
        <>
            <div className="city-filter-box">
                <div className="filter-cities-title">
                    <i className="fas fa-map-marker-alt"></i>
                    Location:
                </div>
                <div className="filter-by-city">
                    {mappedCities}
                </div>
            </div>
            <div className="rating-city-box">
                <div className="filter-cities-title">
                    <i className="fas fa-trophy"></i>
                    Rating:
                </div>
                <div className="filter-by-city">
                    {mappedStars}
                </div>
            </div>
        </>
    );
};

export default SearchFilter;