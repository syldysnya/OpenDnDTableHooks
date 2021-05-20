class EditGamePlace < ActiveRecord::Migration[5.2]
  def change
    change_column :game_places, :open_hour, :string, null: false
    change_column :game_places, :close_hour, :string, null: false
  end
end


