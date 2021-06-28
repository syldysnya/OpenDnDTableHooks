class CreateGamePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :game_places do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :phone_num, null: false
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false
      t.datetime :open_hour, null: false
      t.datetime :close_hour, null: false
      t.string :gmt, null: false
      t.string :wedsite
      t.text :description, null: false
      t.integer :city_id, null: false
      t.integer :dnd_campaign_id, null: false
      t.index :name
      t.index :city_id
      t.index :dnd_campaign_id
      t.index :open_hour
      t.index :close_hour

      t.timestamps
    end

    add_column :players, :city_id, :integer
    add_index :players, :city_id
  end
end
