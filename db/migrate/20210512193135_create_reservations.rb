class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.datetime :game_date, null: false
      t.datetime :game_start, null: false
      t.integer :players_num, null: false
      t.integer :dnd_campaign_id, null: false
      t.integer :game_place_id, null: false
      t.integer :player_id, null: false
      t.index :dnd_campaign_id
      t.index :game_place_id
      t.index :player_id

      t.timestamps
    end
  end
end

