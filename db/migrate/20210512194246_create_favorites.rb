class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :game_place_id, null: false
      t.integer :player_id, null: false

      t.index :game_place_id
      t.index :player_id

      t.timestamps
    end
  end
end
