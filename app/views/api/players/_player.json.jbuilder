json.extract! player, :id, :email, :fname, :lname, :city_id, :dname, :reviews, :created_at, :phone, :city, :favorites
# json.city player.city
# json.favorites player.favorites
json.reviews player.reviews.length
