class Api::ReservationsController < ApplicationController

    def index
        player_id = current_player.id
        past = Reservation.where(:player_id => player_id).where('date_info < ?', Date.today).order('date_info DESC').limit(10)
        future = Reservation.where(:player_id => player_id).where('date_info >= ?', Date.today).order('date_info')

        @reservations = [past, future]
    end

    def show
        @reservation = Reservation.find(params[:id])
    end

    def create
        @reservation = Reservation.new(reservation_params)
        
        if @reservation.save!
            render 'api/reservations/show'
        else 
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find(params[:id])

        if @reservation.update(reservation_params)
            render 'api/reservations/show'
        else
            render @reservation.errors.full_messages, status: 422
        end

    end

    def destroy 
        @reservation = Reservation.find(params[:id])

        if @reservation.player_id === current_player.id
            if @reservation.destroy
                render 'api/players/show'
            else
                render json: ["Can't destroy"]
            end
        end
    end

    private

    def reservation_params
        params.require(:reservation)
            .permit(
                :game_date,
                :game_start,
                :players_num,
                :dnd_campaign_id,
                :game_place_id,
                :player_id,
                :confirmation_num,
                :add_info,
                :canceled,
                :plphone,
                :email,
                :res_year,
                :gmt, 
                :date_info
            )
    end
end
