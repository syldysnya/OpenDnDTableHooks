class EditFavs < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, [:game_place_id, :player_id], unique: true
  end
end
