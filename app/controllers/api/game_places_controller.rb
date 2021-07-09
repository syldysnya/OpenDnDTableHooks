class Api::GamePlacesController < ApplicationController

    def index
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
            @game_places = GamePlace.where(:city_id => city_idx)
                                    .order('created_at DESC')
                                    .limit(11)
        elsif areaParams && areaParams.to_i == 0
            indicies = City.where(:area => areaParams).pluck(:id)
            @game_places = GamePlace.where(:city_id => indicies)
                                    .order('created_at DESC')
                                    .limit(11)
        else
            if current_player
                player_city_id = current_player.city.id
                @game_places = GamePlace.where(:city_id => player_city_id).order('created_at DESC').limit(11)
            else
                @game_places = GamePlace.all.order('created_at DESC').limit(11)
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
