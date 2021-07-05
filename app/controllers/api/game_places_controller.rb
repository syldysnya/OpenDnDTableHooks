class Api::GamePlacesController < ApplicationController

    def index
        if filter_params
            @game_places = GamePlace.all
            
            if filter_params[:location]
                @game_places= GamePlace.where(:city_id => filter_params[:location])
            end
            
            if filter_params[:rating] > '0'
                @game_places = @game_places.joins(:reviews).where("reviews.overall_rating >= ?", filter_params[:rating])
            end

            if filter_params[:name]
                @game_places = @game_places.where("lower(name) LIKE lower(?)", "%#{filter_params[:name]}%")
            end
        else
            @game_places = GamePlace.all
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
