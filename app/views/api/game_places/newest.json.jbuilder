json.newest(@game_places) do |gp|
    json.partial! 'api/game_places/game_place', game_place: gp
end