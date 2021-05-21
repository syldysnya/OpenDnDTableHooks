class EditTables < ActiveRecord::Migration[5.2]
  def change
    change_column_null :game_places, :dnd_campaign_id, true
    change_column_null :reservations, :dnd_campaign_id, true
    change_column_null :reviews, :dnd_campaign_id, true
  end
end
