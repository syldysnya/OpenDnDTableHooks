class EditIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :overall_rating
    add_index :reviews, :service_rating
    add_index :reviews, :org_rating
    add_index :reviews, :campaign_rating
    add_index :cities, :area
    
    remove_index :cities, :state
    remove_index :game_places, :close_hour
    remove_index :game_places, :open_hour
  end
end
