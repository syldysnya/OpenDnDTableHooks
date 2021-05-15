class Api::GamePlacesController < ApplicationController

    def index
        @game_places = GamePlace.all
    end

    def show
        @game_place = GamePlace.find(params[:id])
    end

end
