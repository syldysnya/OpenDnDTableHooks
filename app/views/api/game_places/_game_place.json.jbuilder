json.extract! game_place, :id, :name, :address, :phone_num, :latitude, :longitude, :open_hour, :close_hour, :description, :city_id, :dnd_campaign_id
json.photoUrl url_for(game_place.photo)
json.avatarUrl url_for(game_place.avatar)
json.pictureUrls game_place.pictures.map { |file| url_for(file) }
json.reviews game_place.reviews
json.reservations game_place.reservations
ratingArr = game_place.reviews.map { |rev| rev.overall_rating }
serviceArr = game_place.reviews.map { |rev| rev.service_rating }
campArr = game_place.reviews.map { |rev| rev.campaign_rating }
orgArr = game_place.reviews.map { |rev| rev.org_rating }
json.length_rat game_place.reviews.length
json.rating ratingArr.reduce(:+)
json.serv_rating serviceArr.reduce(:+)
json.org_rating orgArr.reduce(:+)
json.camp_rating campArr.reduce(:+)
arr = game_place.reviews.map { |rev| [rev.campaign_rating, rev.service_rating, rev.org_rating] }
sorted = arr.flatten.sort
obj = {}
sorted.each do |num|
    if obj[num]
        obj[num] += 1
    else 
        obj[num] = 1
    end
end
json.all_ratings_nums obj
json.all_length sorted.length
json.favorites game_place.favorites