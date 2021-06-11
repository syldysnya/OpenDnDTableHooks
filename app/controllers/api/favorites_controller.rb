class Api::FavoritesController < ApplicationController

    def index
        @favorites = Favorite.where(player_id: current_player.id)
    end

    def create
        @favorite.create!(favorite_params)
        render :index
    end

    def destroy
        @favorite = Favorite.find(params[:id])

        if current_player.id === @favorite.player_id
            if @favorite.destroy
                render :index
            else
                render json: ['Something went wrong'], status: 422
            end
        end

    end

    private

    def favorite_params
        params.require(:favorite).permit(:game_place_id, :player_id)
    end

end
