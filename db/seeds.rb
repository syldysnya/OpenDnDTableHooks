# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

City.destroy_all
GamePlace.destroy_all
Player.destroy_all
DndCampaign.destroy_all
Reservation.destroy_all
Favorite.destroy_all

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
    open_hour: '10:00:00',
    close_hour: '19:00:00',
    description: 'description 1111',
    city_id: city1.id,
    dnd_campaign_id: 3
)

header1 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/1_header.jpeg')
gPlace1.photo.attach(io: header1, filename: '1_header.jpeg')

avatar1 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/1_avatar.jpeg')
gPlace1.avatar.attach(io: avatar1, filename: '1_avatar.jpeg')

pictures1_1 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_1.jpeg')
pictures1_2 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_2.jpeg')
pictures1_3 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_3.jpeg')
pictures1_4 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_4.jpeg')
pictures1_5 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_5.jpeg')
pictures1_6 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_6.jpeg')
pictures1_7 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_7.jpeg')
pictures1_8 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_8.jpeg')
pictures1_9 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_9.jpeg')
pictures1_10 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_10.jpeg')

gPlace1.pictures.attach(
        {io: pictures1_1, filename: 'img_1.jpeg'},
        {io: pictures1_2, filename: 'img_2.jpeg'},
        {io: pictures1_3, filename: 'img_3.jpeg'},
        {io: pictures1_4, filename: 'img_4.jpeg'},
        {io: pictures1_5, filename: 'img_5.jpeg'},
        {io: pictures1_6, filename: 'img_6.jpeg'},
        {io: pictures1_7, filename: 'img_7.jpeg'},
        {io: pictures1_8, filename: 'img_8.jpeg'},
        {io: pictures1_9, filename: 'img_9.jpeg'},
        {io: pictures1_10, filename: 'img_10.jpeg'}
    )


gPlace2 = GamePlace.create!(
    name: 'The Philly Game Shop',
    address: '519 S 5th St',
    phone_num: '2153059230',
    latitude: 1.00000,
    longitude: 2.0000,
    open_hour: '15:00:00',
    close_hour: '19:00:00',
    description: 'desciption2222',
    city_id: city2.id,
    dnd_campaign_id: 1
)

header2 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/2_header.jpeg')
gPlace2.photo.attach(io: header2, filename: '2_header.jpeg')

avatar2 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/2_avatar.jpeg')
gPlace2.avatar.attach(io: avatar2, filename: '2_avatar.jpeg')

pictures2_11 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_11.jpeg')
pictures2_12 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_12.jpeg')
pictures2_13 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_13.jpeg')
pictures2_14 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_14.jpeg')
pictures2_15 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_15.jpeg')
pictures2_16 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_16.jpeg')
pictures2_17 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_17.jpeg')
pictures2_18 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_18.jpeg')
pictures2_19 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_19.jpeg')
pictures2_20 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_20.jpeg')

gPlace2.pictures.attach(
        {io: pictures2_11, filename: 'img_11.jpeg'},
        {io: pictures2_12, filename: 'img_12.jpeg'},
        {io: pictures2_13, filename: 'img_13.jpeg'},
        {io: pictures2_14, filename: 'img_14.jpeg'},
        {io: pictures2_15, filename: 'img_15.jpeg'},
        {io: pictures2_16, filename: 'img_16.jpeg'},
        {io: pictures2_17, filename: 'img_17.jpeg'},
        {io: pictures2_18, filename: 'img_18.jpeg'},
        {io: pictures2_19, filename: 'img_19.jpeg'},
        {io: pictures2_20, filename: 'img_20.jpeg'}
    )


gPlace3 = GamePlace.create!(
    name: 'Labyrinth Games & Puzzles',
    address: '645 Pennsylvania Ave. SE',
    phone_num: '2025441059',
    latitude: 0.00004,
    longitude: 1.00004,
    open_hour: '15:00:00',
    close_hour: '19:00:00',
    description: 'description333',
    city_id: city3.id,
    dnd_campaign_id: 2
)

header3 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/3_header.jpeg')
gPlace3.photo.attach(io: header3, filename: '3_header.jpeg')

avatar3 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/3+avatar.jpeg')
gPlace3.avatar.attach(io: avatar3, filename: '3_avatar.jpeg')

pictures3_21 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_21.jpeg')
pictures3_22 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_22.jpeg')
pictures3_23 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_23.jpeg')
pictures3_24 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_24.jpeg')
pictures3_25 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_25.jpeg')
pictures3_26 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_26.jpeg')
pictures3_27 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_27.jpeg')
pictures3_28 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_28.jpeg')
pictures3_29 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_29.jpeg')
pictures3_30 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_30.jpeg')

gPlace3.pictures.attach(
        {io: pictures3_21, filename: 'img_21.jpeg'},
        {io: pictures3_22, filename: 'img_22.jpeg'},
        {io: pictures3_23, filename: 'img_23.jpeg'},
        {io: pictures3_24, filename: 'img_24.jpeg'},
        {io: pictures3_25, filename: 'img_25.jpeg'},
        {io: pictures3_26, filename: 'img_26.jpeg'},
        {io: pictures3_27, filename: 'img_27.jpeg'},
        {io: pictures3_28, filename: 'img_28.jpeg'},
        {io: pictures3_29, filename: 'img_29.jpeg'},
        {io: pictures3_30, filename: 'img_30.jpeg'}
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
    adventure_type: 'dungeon crawling',
    remote: false,
    fifth_edition: true,
    description: 'weirdly enough has nothing to do with the Harry Potter series, but rather a campaign filled with a disturbing amount of fire',
    game_place_id: gPlace2.id
)

dndcamp2 = DndCampaign.create!(
    title: "Overcooked",
    adventure_type: 'one shot',
    remote: false,
    fifth_edition: false,
    description: "a campaign about preparing a meal in the time set by your boss because he's not happy with your performance",
    game_place_id: gPlace3.id
)

dndcamp3 = DndCampaign.create!(
    title: "The Knights of the Burning Empire",
    adventure_type: 'epic',
    remote: false,
    fifth_edition: true,
    description: "an empire of humans who were blessed by a Phoenix and the Emperor is called the Phoenix King, he dies and is reborn as a new man every time",
    game_place_id: gPlace1.id
)

reserv1 = Reservation.create!(
    game_date: '05/01/2021',
    game_start: '6:00 PM',
    players_num: 2,
    dnd_campaign_id: dndcamp1.id,
    game_place_id: gPlace2.id,
    player_id: player2.id,
    confirmation_num: '1234567892',
    add_info: 'Ill be with friends'
)

favorites = Favorite.create!(
    game_place_id: gPlace3.id,
    player_id: player3.id
)

# 10.times do 
#     random_num = Random.rand(30)
#     gPlace1.images.attach(io: File.open(`/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_#{random_num}.jpeg`), filename: `img_#{random_num}.jpeg`)
# end