class Api::GamePlacesController < ApplicationController

    def index
        if filter_params[:location] && filter_params[:rating] == '0'
            @game_places= GamePlace.where(:city_id => filter_params[:location])
        elsif filter_params[:location] && filter_params[:rating] > '0'
            game_places = GamePlace.joins(:reviews).where(:city_id => filter_params[:location])
            @game_places = game_places.joins(:reviews).where("reviews.overall_rating >= ?", filter_params[:rating])
        elsif filter_params[:rating] > '0'
            debugger
            @game_places = GamePlace.joins(:reviews).where("reviews.overall_rating >= ?", filter_params[:rating])
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
