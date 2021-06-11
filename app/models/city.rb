class City < ApplicationRecord 

    validates :name, presence: true
    validates :state, presence: true

    has_many :players
    has_many :game_places

end