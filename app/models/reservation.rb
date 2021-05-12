class Reservation < ApplicationRecord 

    validates :game_date, :game_start, presence: true
    validates :players_num, presence: true

end