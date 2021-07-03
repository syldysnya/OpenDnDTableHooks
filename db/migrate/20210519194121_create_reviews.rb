class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :description, null: false
      t.integer :campaign_rating, null: false
      t.integer :service_rating,  null: false
      t.integer :org_rating, null: false
      t.float :overall_rating, null: false
      t.integer :dnd_campaign_id, null: false
      t.integer :game_place_id, null: false
      t.integer :player_id, null: false

      t.timestamps

      t.index :dnd_campaign_id
      t.index :game_place_id
      t.index :player_id
    end
  end
end