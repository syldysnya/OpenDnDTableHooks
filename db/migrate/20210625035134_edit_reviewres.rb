class EditReviewres < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :reservation_id, :integer, null: false
    add_index :reviews, [:reservation_id, :player_id], unique: true
  end
end
