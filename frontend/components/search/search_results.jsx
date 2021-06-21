import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TimePickButtons from '../reservations/create_forms/time_pick_buttons';

const SearchResults = (props) => {
    
    const {searchResults, cities, filterResults, gamePlaces} = props;
    const [filtered, setFiltered] = useState('');
    const [sorted, setSorted] = useState(false);

    let mapped;
    let mappedArr;

    useEffect(() => {}, [sorted])

    if (filterResults) {
        mappedArr = searchResults;
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
        mappedArr = searchResults;
        mapped = searchResults.map((gp, i) => {
            return (
                <div className='result-item'
                    key={`filtered-gplaces-${i}`}>
                    <div className='avatar'>
                        <img src={gp.avatarUrl}/>
                    </div>
                    <div className="result-item-info">
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
                        <div className="time-pick-buttons">
                            {/* <TimePickButtons /> */}
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
                                    <div className="time-pick-buttons">
                                        {/* <TimePickButtons /> */}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )   
    }

    const sortResults = e => {
        let filter = e.target.value;
        let newMap;
        
        if (filter === 'newest') {
            newMap = mappedArr.sort((a, b) => a.id > b.id ? -1 : 1 )
            setFiltered(newMap)
            setSorted(true)
        } else {
            newMap = mappedArr;
            setSorted(false)
        }

    }

    if (filtered) {
        mapped = filtered.map((gp, i) => {
            return (
                <div className='result-item'
                    key={`filtered-gplaces-${i}`}>
                    <div className='avatar'>
                        <img src={gp.avatarUrl}/>
                    </div>
                    <div className="result-item-info">
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
                        <div className="time-pick-buttons">
                            {/* <TimePickButtons /> */}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="search-results-list">
            <div className="results-sort">
                <div className="number-of-places">
                    {mapped.length} game places available
                </div>
                <select className="sort-results" onChange={sortResults}>
                    <option defaultValue="featured">Featured</option>
                    <option value="highest">Highest Rated</option>
                    <option value="newest">Newest</option>
                </select>
            </div>
            {mapped}
        </div>
    );
};

export default SearchResults;