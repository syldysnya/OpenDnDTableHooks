class EditReviews < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :overall_rating, :decimal, null: false
  end
end
