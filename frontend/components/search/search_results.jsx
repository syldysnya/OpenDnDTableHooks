import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TimePickButtons from '../reservations/create_forms/time_pick_buttons';

const SearchResults = (props) => {
    
    const {searchResults, cities, filterResults, gamePlaces, reservation} = props;

    let mapped;
    let mappedArr;

    if (filterResults) {
        mappedArr = searchResults;
        mapped = filterResults.map((gp, i) => {
            return (
                <div className='result-item'
                    key={`filtered-gplaces-${i}`}>
                    <div className='avatar'>
                        <img src={gp.avatarUrl}/>
                    </div>
                    <div className='link-place'>
                        <NavLink to={{
                            pathname: `/gameplaces/${gp.id}`
                            }}
                            style={{ textDecoration: 'none', color: '#247f9e' }}>
                            {gp.name}
                        </NavLink>
                    </div>
                    <div>{cities.map(city => {
                        if (city.id === gp.cityId) {
                            return city.name
                            }
                        })}
                    </div>
                    <TimePickButtons reservation={reservation} formType='ViewPage'/>
                </div>
            )
        })
    } else if (searchResults.length > 0) {
        mappedArr = searchResults;
        mapped = searchResults.map((gp, i) => {
            return (
                <div className='result-item'
                    key={`filtered-gplaces-${i}`}>
                    <div className='avatar'>
                        <img src={gp.avatarUrl}/>
                    </div>
                    <div className="result-item-info">
                        <div className='link-place'>
                            <NavLink to={{
                                pathname: `/gameplaces/${gp.id}`
                                }}
                                style={{ textDecoration: 'none', color: '#247f9e' }}>
                                {gp.name}
                            </NavLink>
                        </div>
                        <div>{cities.map(city => {
                            if (city.id === gp.cityId) {
                                return city.name
                                }
                            })}
                        </div>
                        <div className="time-pick-buttons">
                            <TimePickButtons reservation={reservation} formType='ViewPage'/>
                        </div>
                    </div>
                </div>
            )
        })
    } else {
        mappedArr = gamePlaces;
        mapped = gamePlaces.map((gp, i) => {
                        return (
                            <div className='result-item'
                                key={`filtered-gplaces-${i}`}>
                                <div className='avatar'>
                                    <img src={gp.avatarUrl}/>
                                </div>
                                <div className="result-item-info">
                                    <div className='link-place'>
                                        <NavLink to={{
                                            pathname: `/gameplaces/${gp.id}`
                                            }}
                                            style={{ textDecoration: 'none', color: '#247f9e' }}>
                                            {gp.name}
                                        </NavLink>
                                    </div>
                                    <div>{cities.map(city => {
                                        if (city.id === gp.cityId) {
                                            return city.name
                                            }
                                        })}
                                    </div>
                                    <div className="time-pick-buttons">
                                        <TimePickButtons reservation={reservation} formType='ViewPage'/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )   
    }

    return (
        <div className="search-results-list">
            <div className="number-of-places">
                {mapped.length} game places available
            </div>
            {/* <div className="results-sort">
                <select className="sort-results" onChange={sortResults}>
                    <option defaultValue="featured">Featured</option>
                    <option value="highest">Highest Rated</option>
                    <option value="newest">Newest</option>
                </select>
            </div> */}
            <div className="list-places">
                {mapped}
            </div>
        </div>
    );
};

export default SearchResults;