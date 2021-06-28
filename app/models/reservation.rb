class Reservation < ApplicationRecord 

    validates :game_date, :game_start, :res_year, :gmt, presence: true
    validates :players_num, presence: true

    belongs_to :player
    belongs_to :game_place

    has_many :reviews
    # belongs_to :dnd_campaign
    
end