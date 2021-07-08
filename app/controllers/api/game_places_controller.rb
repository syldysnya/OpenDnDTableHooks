class Api::GamePlacesController < ApplicationController

    def index
        if filter_params
            @game_places = GamePlace.all

            if filter_params[:location]
                @game_places = GamePlace.where(:city_id => filter_params[:location])
            end

            if filter_params[:name]
                names = GamePlace.pluck(:name).select {|gp| gp.downcase.include?(filter_params[:name])}
                cities = City.pluck(:name).select {|gp| gp.downcase.include?(filter_params[:name].downcase)}
                
                if names.length > 0 
                    @game_places = @game_places.where("lower(name) LIKE lower(?)", "%#{filter_params[:name]}%")
                end

                if cities.length > 0
                    game_places = []
                    @game_places = @game_places.each do |gp|
                        cities.each do |city|
                            if gp.city.name == city
                                game_places << gp
                            end
                        end
                    end
                    @game_places = game_places
                end

            end

            if filter_params[:rating] > '0'
                game_places = []

                @game_places.each do |gp|
                    rat_reviews = gp.reviews.pluck(:overall_rating)
                    avg = rat_reviews.sum / rat_reviews.length
                    if avg >= filter_params[:rating].to_i
                        game_places << gp
                    end
                end

                @game_places = game_places
            end

        else
            @game_places = GamePlace.all.limit(15)
        end
    end 

    def rating

        game_places = GamePlace.joins(:reviews)
                                .group('game_places.id')
                                .order('SUM(reviews.overall_rating)/COUNT(reviews.overall_rating) DESC')

        @game_places = []
        if current_player
            game_places.each { |gp| @game_places << gp if gp.city.id == current_player.city.id}
        else
            @game_places = game_places[0..10]
        end
        
    end

    def default
        @game_places = []
        
        if current_player
            GamePlace.all.each { |gp| @game_places << gp if gp.city.id == current_player.city.id}
        else
            @game_places = GamePlace.all
        end

        @game_places = @game_places[0..10].shuffle
    end

    def newest
        @game_places = []
        
        if current_player
            GamePlace.all.order('created_at DESC').each { |gp| @game_places << gp if gp.city.area == current_player.city.area}
        else
            @game_places = GamePlace.all.order('created_at DESC')
        end

        @game_places = @game_places[0..10]
    end

    def show
        @game_place = GamePlace.find(params[:id])
    end

    def filter_params
        if (params[:filter])
            params.require(:filter).permit(:rating, :name, :location => [])
        end
    end

end
