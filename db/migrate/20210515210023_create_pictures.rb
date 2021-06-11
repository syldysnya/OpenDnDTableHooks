class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :url, null: false
      t.integer :game_place_id
      t.index :game_place_id
    end
  end
end
