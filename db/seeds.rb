# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all
Player.destroy_all

city1 = City.create!(
    name: 'Newark',
    state: 'DE'
)

city2 = City.create!(
    name: 'Philadelphia',
    state: 'PA'
)

city3 = City.create!(
    name: 'Washington',
    state: 'DC'
)

city4 = City.create!(
    name: 'New York',
    state: 'NY'
)

gPlace1 = GamePlace.create!(
    name: 'Days of Knights',
    address: '173 E Main St',
    phone_num: '3023660963',
    latitude: 1.00001,
    longitude: 2.00001,
    open_hour: 10:00:00,
    close_hour: 19:00:00,
    description: 'description 1111'
    city_id: city1.id,
    dnd_campaign_id: 3
)

gPlace2 = GamePlace.create!(
    name: 'The Philly Game Shop',
    address: '519 S 5th St',
    phone_num: '2153059230',
    latitude: 1.00000
    longitude: 2.0000
    open_hour: 15:00:00,
    close_hour: 19:00:00,
    description: 'desciption2222'
    city_id: city2.id,
    dnd_campaign_id: 1
)

gPlace3 = GamePlace.create!(
    name: 'Labyrinth Games & Puzzles',
    address: '645 Pennsylvania Ave. SE',
    phone_num: '2025441059',
    latitude: 0.00004,
    longitude: 1.00004,
    open_hour: 15:00:00,
    close_hour: 19:00:00,
    description: 'description333'
    city_id: city3.id,
    dnd_campaign_id: 2
)

player1 = Player.create!(
    email: 'sykh@mail.com',
    lname: 'Sy',
    fname: 'Kh',
    password: '12345678',
    city_id: city1.id
)

player2 = Player.create!(
    email: 'davher@mail.com',
    lname: 'Dav',
    fname: 'Her',
    password: '12345678',
    city_id: city2.id
)

player3 = Player.create!(
    email: 'oyumdon@mail.com',
    lname: 'Oyum',
    fname: 'Don',
    password: '12345678',
    city_id: city3.id
)

player4 = Player.create!(
    email: 'saidon@mail.com',
    lname: 'Sai',
    fname: 'Don',
    password: '12345678',
    city_id: city4.id
)

dndcamp1 = DndCampaign.create!(
    title: "The Order of the Phoenix",
    adventure_type: 'dungeon crawling'
    remote: false
    fifth_edition: true
    description: 'weirdly enough has nothing to do with the Harry Potter series, but rather a campaign filled with a disturbing amount of fire',
    game_place_id: gPlace2.id
)

dndcamp2 = DndCampaign.create!(
    title: "Overcooked",
    adventure_type: 'one shot'
    remote: false
    fifth_edition: false
    description: "a campaign about preparing a meal in the time set by your boss because he's not happy with your performance",
    game_place_id: gPlace3.id
)

dndcamp3 = DndCampaign.create!(
    title: "The Knights of the Burning Empire",
    adventure_type: 'epic'
    remote: false
    fifth_edition: true
    description: "an empire of humans who were blessed by a Phoenix and the Emperor is called the Phoenix King, he dies and is reborn as a new man every time",
    game_place_id: gPlace1.id
)

reserv1 = Reservation.create!(
    game_date: 05/01/2021,
    game_start: 18:00:00,
    players_num: 2,
    dnd_campaign_id: dndcamp1.id,
    game_place_id: gPlace2.id,
    player_id: player2.id
)

favorites = Favorite.create!(
    game_place_id: gPlace3.id,
    player_id: player3.id
)



