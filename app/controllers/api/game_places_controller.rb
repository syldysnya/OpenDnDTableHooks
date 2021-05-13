class Api::GamePlacesController < ApplicationController

    def index
        #debugger
        @game_places = GamePlace.all
    end

    def show
        #debugger
        @game_place = GamePlace.find(params[:id])
    end

end
