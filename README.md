![logo](https://app-opendndtable-seed.s3.amazonaws.com/Screen+Shot+2021-05-21+at+10.29.50+AM.png)

# OpenDnDTable 

[Live Demo](https://opendndtable.herokuapp.com/)

OpenDnDTable is an online service for booking tables for DnD sessions. Built with Rails, React Hooks, Redux, Javascript, and PostgreSQL. Integrates Google Maps API and AWS S3.This project was inspired by [OpenTable](https://www.opentable.com/) website.

## Features

Secure frontend and backend user authentication using BCrypt.
Users can make, edit, cancel reservations.
Users can add reviews.
Game places support images.

![open-main](https://user-images.githubusercontent.com/78821780/125368583-809f3500-e348-11eb-83e4-cf7a35577f99.gif)

## Sign In and Sign Up

![open-auth](https://user-images.githubusercontent.com/78821780/125367681-9b70aa00-e346-11eb-8ddf-c6750c4acd79.gif)

## Make a reservation

![open-res](https://user-images.githubusercontent.com/78821780/125368408-22725200-e348-11eb-85aa-42d8fa140a61.gif)

## Profile page

`My profile` page stores an information about your reservations.

![open-profile](https://user-images.githubusercontent.com/78821780/125368212-c3144200-e347-11eb-91c0-8d11b095e89f.gif)

## Search and filter

![open-search](https://user-images.githubusercontent.com/78821780/125367992-484b2700-e347-11eb-82d5-68163b1746e9.gif)

## Code Snippet

```js
// this code will send a list of game places to the frontend based on params

if filter_params
    gp_indicies = GamePlace.joins(:reviews)
                            .group('game_places.id')
                            .having('SUM(reviews.overall_rating)/COUNT(reviews.overall_rating)*1.0 >= ?', filter_params[:rating])
                            .pluck(:id)

    if filter_params[:name]
        results_name = GamePlace.where("lower(name) LIKE lower(?)", "%#{filter_params[:name]}%").pluck(:id)
        cities = City.where('lower(name) LIKE lower(?)', "%#{filter_params[:name]}%").pluck(:id)
        results_cities = GamePlace.where(:city_id => cities).pluck(:id)
        res = results_name + results_cities

        gp_indicies = gp_indicies & res.uniq
    end

    if filter_params[:location]
        gp_idx = GamePlace.where(:city_id => filter_params[:location]).pluck(:id)
        gp_indicies = gp_idx & gp_indicies
    end

    @game_places = GamePlace.where(:id => gp_indicies).limit(30)
else
    @game_places = GamePlace.order("RANDOM()").limit(15)
end
```

## Project Design

OpenDnDTable was designed to make a reservation process of a table easy and understandable.

## Technologies

This project uses Redux and React.js on the frontend, and Rails/PostgreSQL backend.

## Possible Future Features

I'm going to comtinue working on this project to build features like search by filters, by location, a function to save favorite places, and errors handling.
