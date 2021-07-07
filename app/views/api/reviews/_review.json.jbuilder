json.extract! review, :id, :description, :campaign_rating, :service_rating, :org_rating, :overall_rating, :game_place_id, :player_id, :reservation_id
json.player_dname review.player.dname
json.player_reviews review.player.reviews
json.player_city review.player.city.name
json.reservation review.reservation
