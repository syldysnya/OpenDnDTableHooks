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
        areaParams = params[:filter] if params[:filter]

        if areaParams && areaParams.to_i > 0
            city_idx = areaParams.to_i
            @game_places = GamePlace.joins(:reviews)
                                    .where(:city_id => city_idx)
                                    .group('game_places.id')
                                    .order('SUM(reviews.overall_rating)/COUNT(reviews.overall_rating) desc')
                                    .limit(11)
        elsif areaParams && areaParams.to_i == 0
            indicies = City.where(:area => areaParams).pluck(:id)
            @game_places = GamePlace.joins(:reviews)
                                    .where(:city_id => indicies)
                                    .group('game_places.id')
                                    .order('SUM(reviews.overall_rating)/COUNT(reviews.overall_rating) desc')
                                    .limit(11)
        else
            if current_player
                player_city_id = current_player.city.id
                @game_places = GamePlace.joins(:reviews)
                                        .where(:city_id => player_city_id)
                                        .group('game_places.id')
                                        .order('SUM(reviews.overall_rating)/COUNT(reviews.overall_rating) desc')
                                        .limit(11)
            else
                @game_places = GamePlace.joins(:reviews)
                                        .group('game_places.id')
                                        .order('SUM(reviews.overall_rating)/COUNT(reviews.overall_rating) DESC')
                                        .limit(11)
            end
        end
    end

    def default
        areaParams = params[:filter] if params[:filter]

        if areaParams && areaParams.to_i > 0
            city_idx = areaParams.to_i
            @game_places = GamePlace.where(:city_id => city_idx).order("RANDOM()").limit(11)
        elsif areaParams && areaParams.to_i == 0
            indicies = City.where(:area => areaParams).pluck(:id)
            @game_places = GamePlace.where(:city_id => indicies).order("RANDOM()").limit(11)
        else 
            if current_player
                player_city_id = current_player.city.id
                @game_places = GamePlace.where(:city_id => player_city_id).order("RANDOM()").limit(11)
            else
                @game_places = GamePlace.order("RANDOM()").limit(11)
            end
        end

    end

    def newest
        areaParams = params[:filter] if params[:filter]

        if areaParams && areaParams.to_i > 0
            city_idx = areaParams.to_i
            @game_places = GamePlace.joins(:reviews)
                                    .where(:city_id => city_idx)
                                    .order('id DESC')
                                    .limit(11)
        elsif areaParams && areaParams.to_i == 0
            indicies = City.where(:area => areaParams).pluck(:id)
            @game_places = GamePlace.joins(:reviews)
                                    .where(:city_id => indicies)
                                    .order('id DESC')
                                    .limit(11)
        else
            if current_player
                player_city_id = current_player.city.id
                @game_places = GamePlace.where(:city_id => player_city_id).order('id DESC').limit(11)
            else
                @game_places = GamePlace.all.order('id DESC').limit(11)
            end
        end
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
