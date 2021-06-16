import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TimePickButtons from '../reservations/create_forms/time_pick_buttons';

const SearchResults = (props) => {
    
    const {searchResults, cities, filterResults, gamePlaces} = props;
    let mapped;

    if (filterResults) {
        mapped = filterResults.map((gp, i) => {
            return (
                <div key={`filtered-gplaces-${i}`}>
                    <div className='avatar'>
                        <img src={gp.avatarUrl}/>
                    </div>
                    <div>
                        <NavLink to={{
                            pathname: `/gameplaces/${gp.id}`
                            }}
                            style={{ textDecoration: 'none' }}>
                            {gp.name}
                        </NavLink>
                    </div>
                    <div>{cities.map(city => {
                        if (city.id === gp.cityId) {
                            return city.name
                            }
                        })}
                    </div>
                    {/* <TimePickButtons /> */}
                </div>
            )
        })
    } else if (searchResults.length > 0) {
        mapped = searchResults.map((gp, i) => {
            return (
                <div key={`filtered-gplaces-${i}`}>
                    <div className='avatar'>
                        <img src={gp.avatarUrl}/>
                    </div>
                    <div>
                        <NavLink to={{
                            pathname: `/gameplaces/${gp.id}`
                            }}
                            style={{ textDecoration: 'none' }}>
                            {gp.name}
                        </NavLink>
                    </div>
                    <div>{cities.map(city => {
                        if (city.id === gp.cityId) {
                            return city.name
                            }
                        })}
                    </div>
                    {/* <TimePickButtons /> */}
                </div>
            )
        })
    } else {
        mapped = gamePlaces.map((gp, i) => {
                        return (
                            <div key={`filtered-gplaces-${i}`}>
                                <div className='avatar'>
                                    <img src={gp.avatarUrl}/>
                                </div>
                                <div>
                                    <NavLink to={{
                                        pathname: `/gameplaces/${gp.id}`
                                        }}
                                        style={{ textDecoration: 'none' }}>
                                        {gp.name}
                                    </NavLink>
                                </div>
                                <div>{cities.map(city => {
                                    if (city.id === gp.cityId) {
                                        return city.name
                                        }
                                    })}
                                </div>
                                {/* <TimePickButtons /> */}
                            </div>
                        )
                    }
                )   
    }

    return (
        <div>
            {mapped}
        </div>
    );
};

export default SearchResults;