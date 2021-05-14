class Api::PlayersController < ApplicationController

    def show 
        @player = Player.find(params[:id])
    end

    def create
        @player = Player.new(player_params)
        
        if @player.save
            login!(@player)
            render 'api/players/show'
        else
            render json: @player.errors.full_messages, status: 422
        end
    end

    def update
        @player = Player.find(player_params)

        if @player.update(player_params)
            render 'api/players/show'
        else
            render json: @player.errors.full_messages, status: 422
        end
    end

    private

    def player_params
        params.require(:player).permit(:email, :lname, :fname, :password, :city_id)
    end

end
