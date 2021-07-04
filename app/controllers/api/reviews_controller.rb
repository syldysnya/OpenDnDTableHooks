class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
    end

    def show 
        @review = Review.inludes(:player).find(params[:id])
        
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render 'api/reviews/show'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])

        if @review.player_id === current_player.id
            if @review.update_attributes(review_params)
                render 'api/reviews/show'
            else
                render json: @review.errors.full_messages, status: 422
            end
        end
    end

    def destroy
        @review = Review.find(params[:id])

        if @review.player_id === current_player.id
            if @review.destroy
                render 'api/reviews/show'
            else
                render json: ["Something went wrong"]
            end
        end
    end

    private

    def review_params
        
        params.require(:review)
            .permit(
                :description,
                :campaign_rating,
                :service_rating,
                :org_rating,
                :overall_rating,
                :dnd_campaign_id,
                :game_place_id,
                :player_id,
                :reservation_id
            )
    end

end
