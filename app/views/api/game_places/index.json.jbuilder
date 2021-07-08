json.game_places_all(@game_places) do |game_place|
    json.partial! 'api/game_places/game_place', game_place: game_place
end