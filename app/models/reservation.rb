class Reservation < ApplicationRecord 

    validates :game_date, :game_start, presence: true
    validates :players_num, presence: true

    belongs_to :player
    belongs_to :game_place
    # belongs_to :dnd_campaign
    
end