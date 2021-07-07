class EditLatLong < ActiveRecord::Migration[5.2]
  def change
    change_column :game_places, :latitude, :float, null: false
    change_column :game_places, :longitude, :float, null: false
  end
end
