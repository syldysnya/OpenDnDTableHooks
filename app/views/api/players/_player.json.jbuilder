json.extract! player, :id, :email, :fname, :lname, :city_id, :dname, :reservations, :reviews, :created_at, :phone
json.city player.city
json.favorites player.favorites
json.reviews player.reviews
