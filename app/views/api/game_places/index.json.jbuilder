@game_places.each do |game_place|
    json.set! game_place.id do 
        json.partial! 'api/game_places/game_place', game_place: game_place
    end
end