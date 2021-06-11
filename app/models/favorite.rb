class Favorite < ApplicationRecord

    belongs_to :game_place
    belongs_to :player

end