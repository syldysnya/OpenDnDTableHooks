class Review < ApplicationRecord 

    validates :description, :campaign_rating, :service_rating, :org_rating, :overall_rating, :reservation_id, presence: true
    validates :reservation_id, uniqueness: { scope: :player_id }

    belongs_to :player
    belongs_to :game_place
    belongs_to :reservation
    
end