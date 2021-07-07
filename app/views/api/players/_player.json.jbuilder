json.extract! player, :id, :email, :fname, :lname, :city_id, :dname, :reviews, :created_at, :phone, :city, :favorites
json.area player.city.area
json.reviews player.reviews.length
