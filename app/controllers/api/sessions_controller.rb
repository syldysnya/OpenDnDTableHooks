class Api::SessionsController < ApplicationController

    def create
        @player = Player.find_by_credentials(
            params[:players][:email],
            params[:players][:password]
        )

        if @player.nil?
            render json: ['Wrong credentials'], status: 401
        else
            login!(@player)
            render 'api/players/show'
        end
    end
        
    def destroy
        if !current_player        
            render json: ['errors'], status: 404
        else
            logout!
            render json: {}
        end
    end

end
