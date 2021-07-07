class Api::FavoritesController < ApplicationController

    def index
        @favorites = Favorite.where(player_id: current_player)
    end

    def show 
        @favorite = Favorite.find(params[:id])
    end

    def create
        @favorite = Favorite.new(favorite_params)

        if @favorite.save!
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])

        if current_player.id === @favorite.player_id
            if @favorite.destroy!
                render json: :show, status: 204
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
