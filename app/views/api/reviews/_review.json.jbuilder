json.extract! review, :id, :description, :campaign_rating, :service_rating, :org_rating, :overall_rating, :dnd_campaign_id, :game_place_id, :player_id
json.player_dname review.player.dname
json.player_reviews review.player.reviews
json.player_city City.where(id: review.player.city_id).select(:id, :name, :state)
