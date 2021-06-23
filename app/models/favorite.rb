class Favorite < ApplicationRecord

    validates :game_place_id, :player_id, presence: true
    validates :game_place_id, uniqueness: { scope: :player_id }

    belongs_to :game_place
    belongs_to :player

end