class Review < ApplicationRecord 

    validates :description, :campaign_rating, :service_rating, :org_rating, :overall_rating, presence: true

    belongs_to :player
    belongs_to :game_place
    # belongs_to :dnd_campaign
    
end