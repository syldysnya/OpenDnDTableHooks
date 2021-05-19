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

header1 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/headers/1_header.jpeg')
gPlace1.photo.attach(io: header1, filename: '1_header.jpeg')

avatar1 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gpavatars/1_avatar.jpeg')
gPlace1.avatar.attach(io: avatar1, filename: '1_avatar.jpeg')

pictures1_1 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_1.jpeg')
pictures1_2 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_2.jpeg')
pictures1_3 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_3.jpeg')
pictures1_4 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_4.jpeg')
pictures1_5 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_5.jpeg')
pictures1_6 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_6.jpeg')
pictures1_7 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_7.jpeg')
pictures1_8 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_8.jpeg')
pictures1_9 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_9.jpeg')

gPlace1.pictures.attach(
        {io: pictures1_1, filename: 'img_1.jpeg'},
        {io: pictures1_2, filename: 'img_2.jpeg'},
        {io: pictures1_3, filename: 'img_3.jpeg'},
        {io: pictures1_4, filename: 'img_4.jpeg'},
        {io: pictures1_5, filename: 'img_5.jpeg'},
        {io: pictures1_6, filename: 'img_6.jpeg'},
        {io: pictures1_7, filename: 'img_7.jpeg'},
        {io: pictures1_8, filename: 'img_8.jpeg'},
        {io: pictures1_9, filename: 'img_9.jpeg'}
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

header2 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/headers/2_header.jpeg')
gPlace2.photo.attach(io: header2, filename: '2_header.jpeg')

avatar2 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gpavatars/2_avatar.jpeg')
gPlace2.avatar.attach(io: avatar2, filename: '2_avatar.jpeg')

pictures2_11 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_11.jpeg')
pictures2_12 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_12.jpeg')
pictures2_13 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_13.jpeg')
pictures2_14 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_14.jpeg')
pictures2_15 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_15.jpeg')
pictures2_16 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_16.jpeg')
pictures2_17 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_17.jpeg')
pictures2_18 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_18.jpeg')
pictures2_19 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_19.jpeg')

gPlace2.pictures.attach(
        {io: pictures2_11, filename: 'img_11.jpeg'},
        {io: pictures2_12, filename: 'img_12.jpeg'},
        {io: pictures2_13, filename: 'img_13.jpeg'},
        {io: pictures2_14, filename: 'img_14.jpeg'},
        {io: pictures2_15, filename: 'img_15.jpeg'},
        {io: pictures2_16, filename: 'img_16.jpeg'},
        {io: pictures2_17, filename: 'img_17.jpeg'},
        {io: pictures2_18, filename: 'img_18.jpeg'},
        {io: pictures2_19, filename: 'img_19.jpeg'}
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

header3 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/headers/3_header.jpeg')
gPlace3.photo.attach(io: header3, filename: '3_header.jpeg')

avatar3 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gpavatars/3_avatar.jpeg')
gPlace3.avatar.attach(io: avatar3, filename: '3_avatar.jpeg')

pictures3_21 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_21.jpeg')
pictures3_22 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_22.jpeg')
pictures3_23 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_23.jpeg')
pictures3_24 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_24.jpeg')
pictures3_25 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_25.jpeg')
pictures3_26 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_26.jpeg')
pictures3_27 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_27.jpeg')
pictures3_28 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_28.jpeg')
pictures3_29 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_29.jpeg')

gPlace3.pictures.attach(
        {io: pictures3_21, filename: 'img_21.jpeg'},
        {io: pictures3_22, filename: 'img_22.jpeg'},
        {io: pictures3_23, filename: 'img_23.jpeg'},
        {io: pictures3_24, filename: 'img_24.jpeg'},
        {io: pictures3_25, filename: 'img_25.jpeg'},
        {io: pictures3_26, filename: 'img_26.jpeg'},
        {io: pictures3_27, filename: 'img_27.jpeg'},
        {io: pictures3_28, filename: 'img_28.jpeg'},
        {io: pictures3_29, filename: 'img_29.jpeg'}
    )

gPlace4 = GamePlace.create!(
    name: 'Alternate Universes Wilmington',
    address: '3615 Silverside Rd',
    phone_num: '3023660963',
    latitude: 1.00001,
    longitude: 2.00001,
    open_hour: '10:00:00',
    close_hour: '19:00:00',
    description: 'description 44444',
    city_id: city1.id,
    dnd_campaign_id: 1
)

header4 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/headers/4_header.jpeg')
gPlace4.photo.attach(io: header4, filename: '4_header.jpeg')

avatar4 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gpavatars/4_avatar.jpeg')
gPlace4.avatar.attach(io: avatar4, filename: '4_avatar.jpeg')

pictures1_1 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_1.jpeg')
pictures1_2 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_2.jpeg')
pictures1_3 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_3.jpeg')
pictures1_4 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_4.jpeg')
pictures1_5 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_5.jpeg')
pictures1_6 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_6.jpeg')
pictures1_7 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_7.jpeg')
pictures1_8 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_8.jpeg')
pictures1_9 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_9.jpeg')

gPlace4.pictures.attach(
        {io: pictures1_1, filename: 'img_1.jpeg'},
        {io: pictures1_2, filename: 'img_2.jpeg'},
        {io: pictures1_3, filename: 'img_3.jpeg'},
        {io: pictures1_4, filename: 'img_4.jpeg'},
        {io: pictures1_5, filename: 'img_5.jpeg'},
        {io: pictures1_6, filename: 'img_6.jpeg'},
        {io: pictures1_7, filename: 'img_7.jpeg'},
        {io: pictures1_8, filename: 'img_8.jpeg'},
        {io: pictures1_9, filename: 'img_9.jpeg'}
    )

gPlace5 = GamePlace.create!(
    name: 'The Uncommons',
    address: '230 Thompson St',
    phone_num: '3023660963',
    latitude: 1.00001,
    longitude: 2.00001,
    open_hour: '10:00:00',
    close_hour: '19:00:00',
    description: 'description 44444',
    city_id: city4.id,
    dnd_campaign_id: 1
)

header5 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/headers/5_header.jpeg')
gPlace5.photo.attach(io: header5, filename: '5_header.jpeg')

avatar5 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gpavatars/5_avatar.jpeg')
gPlace5.avatar.attach(io: avatar5, filename: '5_avatar.jpeg')

pictures3_21 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_21.jpeg')
pictures3_22 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_22.jpeg')
pictures3_23 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_23.jpeg')
pictures3_24 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_24.jpeg')
pictures3_25 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_25.jpeg')
pictures3_26 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_26.jpeg')
pictures3_27 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_27.jpeg')
pictures3_28 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_28.jpeg')
pictures3_29 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_29.jpeg')

gPlace5.pictures.attach(
        {io: pictures3_21, filename: 'img_21.jpeg'},
        {io: pictures3_22, filename: 'img_22.jpeg'},
        {io: pictures3_23, filename: 'img_23.jpeg'},
        {io: pictures3_24, filename: 'img_24.jpeg'},
        {io: pictures3_25, filename: 'img_25.jpeg'},
        {io: pictures3_26, filename: 'img_26.jpeg'},
        {io: pictures3_27, filename: 'img_27.jpeg'},
        {io: pictures3_28, filename: 'img_28.jpeg'},
        {io: pictures3_29, filename: 'img_29.jpeg'}
    )

gPlace6 = GamePlace.create!(
    name: 'The Compleat Strategist',
    address: '11 E 33rd St',
    phone_num: '3023660963',
    latitude: 1.00001,
    longitude: 2.00001,
    open_hour: '10:00:00',
    close_hour: '19:00:00',
    description: 'description 44444',
    city_id: city4.id,
    dnd_campaign_id: 1
)

header6 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/headers/6_header.jpeg')
gPlace6.photo.attach(io: header6, filename: '6_header.jpeg')

avatar6 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gpavatars/6_avatar.jpeg')
gPlace6.avatar.attach(io: avatar6, filename: '6_avatar.jpeg')

pictures2_11 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_11.jpeg')
pictures2_12 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_12.jpeg')
pictures2_13 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_13.jpeg')
pictures2_14 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_14.jpeg')
pictures2_15 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_15.jpeg')
pictures2_16 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_16.jpeg')
pictures2_17 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_17.jpeg')
pictures2_18 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_18.jpeg')
pictures2_19 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_19.jpeg')

gPlace6.pictures.attach(
        {io: pictures2_11, filename: 'img_11.jpeg'},
        {io: pictures2_12, filename: 'img_12.jpeg'},
        {io: pictures2_13, filename: 'img_13.jpeg'},
        {io: pictures2_14, filename: 'img_14.jpeg'},
        {io: pictures2_15, filename: 'img_15.jpeg'},
        {io: pictures2_16, filename: 'img_16.jpeg'},
        {io: pictures2_17, filename: 'img_17.jpeg'},
        {io: pictures2_18, filename: 'img_18.jpeg'},
        {io: pictures2_19, filename: 'img_19.jpeg'}
    )

gPlace7 = GamePlace.create!(
    name: 'Twenty Sided Store',
    address: '362 Grand St',
    phone_num: '3023660963',
    latitude: 1.00001,
    longitude: 2.00001,
    open_hour: '10:00:00',
    close_hour: '19:00:00',
    description: 'description 44444',
    city_id: city4.id,
    dnd_campaign_id: 1
)

header7 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/headers/7_header.jpeg')
gPlace7.photo.attach(io: header7, filename: '7_header.jpeg')

avatar7 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gpavatars/7_avatar.jpeg')
gPlace7.avatar.attach(io: avatar7, filename: '7_avatar.jpeg')

pictures2_11 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_11.jpeg')
pictures2_12 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_12.jpeg')
pictures2_13 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_13.jpeg')
pictures2_14 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_14.jpeg')
pictures2_15 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_15.jpeg')
pictures2_16 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_16.jpeg')
pictures2_17 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_17.jpeg')
pictures2_18 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_18.jpeg')
pictures2_19 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_19.jpeg')
pictures2_20 = File.open('/Users/syldys/Desktop/bootcamp/OpenDndTable/app/assets/images/gallery/img_20.jpeg')

gPlace7.pictures.attach(
        {io: pictures2_11, filename: 'img_11.jpeg'},
        {io: pictures2_12, filename: 'img_12.jpeg'},
        {io: pictures2_13, filename: 'img_13.jpeg'},
        {io: pictures2_14, filename: 'img_14.jpeg'},
        {io: pictures2_15, filename: 'img_15.jpeg'},
        {io: pictures2_16, filename: 'img_16.jpeg'},
        {io: pictures2_17, filename: 'img_17.jpeg'},
        {io: pictures2_18, filename: 'img_18.jpeg'},
        {io: pictures2_19, filename: 'img_19.jpeg'}
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
    game_date: '07/01/2021',
    game_start: '6:00 PM',
    players_num: 2,
    dnd_campaign_id: dndcamp1.id,
    game_place_id: gPlace2.id,
    player_id: player1.id,
    confirmation_num: '45623',
    add_info: 'Ill be with friends',
    canceled: false
)

reserv2 = Reservation.create!(
    game_date: '08/01/2021',
    game_start: '4:00 PM',
    players_num: 2,
    dnd_campaign_id: dndcamp2.id,
    game_place_id: gPlace3.id,
    player_id: player1.id,
    confirmation_num: '12345',
    add_info: 'Ill be with friends',
    canceled: false
)

favorites = Favorite.create!(
    game_place_id: gPlace3.id,
    player_id: player3.id
)

review1 = Review.create!(
    description: 'Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than the human eye. He’s got style, a groovy style, and a car that just won’t stop. When the going gets tough, he’s really rough, with a Hong Kong Phooey chop (Hi-Ya!). Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than the human eye. Hong Kong Phooey, he’s fan-riffic!',
    campaign_rating: 1,
    service_rating: 3,
    org_rating: 4,
    overall_rating: 2.8,
    dnd_campaign_id: dndcamp1.id,
    game_place_id: gPlace2.id,
    player_id: player2.id
)

review2 = Review.create!(
    description: 'One for all and all for one, Muskehounds are always ready. One for all and all for one, helping everybody. One for all and all for one, it’s a pretty story. Sharing everything with fun, that’s the way to be. One for all and all for one, Muskehounds are always ready. One for all and all for one, helping everybody. One for all and all for one, can sound pretty corny. If you’ve got a problem chum, think how it could be.',
    campaign_rating: 5,
    service_rating: 5,
    org_rating: 5,
    overall_rating: 5.0,
    dnd_campaign_id: dndcamp2.id,
    game_place_id: gPlace3.id,
    player_id: player3.id,
)

review3 = Review.create!(
    description: 'Barnaby The Bear’s my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear’s my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so — if you want to sing this way, think of what you’d like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free.',
    campaign_rating: 3,
    service_rating: 3,
    org_rating: 3,
    overall_rating: 3.0,
    dnd_campaign_id: dndcamp1.id,
    game_place_id: gPlace2.id,
    player_id: player4.id
)

review4 = Review.create!(
    description: 'I never spend much time in school but I taught ladies plenty. It’s true I hire my body out for pay, hey hey. I’ve gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it’s only hay, hey hey. I might jump an open drawbridge, or Tarzan from a vine. ’Cause I’m the unknown stuntman that makes Eastwood look so fine.',
    campaign_rating: 1, 
    service_rating: 1,
    org_rating: 1,
    overall_rating: 1.0,
    dnd_campaign_id: dndcamp3.id,
    game_place_id: gPlace1.id,
    player_id: player4.id
)

review5 = Review.create!(
    description: 'Barnaby The Bear’s my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear’s my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so — if you want to sing this way, think of what you’d like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free.',
    campaign_rating: 5,
    service_rating: 5,
    org_rating: 5,
    overall_rating: 5.0,
    dnd_campaign_id: dndcamp2.id,
    game_place_id: gPlace3.id,
    player_id: player1.id
)

review6 = Review.create!(
    description: 'This is my boss, Jonathan Hart, a self-made millionaire, he’s quite a guy. This is Mrs H., she’s gorgeous, she’s one lady who knows how to take care of herself. By the way, my name is Max. I take care of both of them, which ain’t easy, ’cause when they met it was MURDER!',
    campaign_rating: 4,
    service_rating: 4, 
    org_rating: 4,
    overall_rating: 4.0,
    dnd_campaign_id: dndcamp1.id,
    game_place_id: gPlace2.id,
    player_id: player2.id
)

review7 = Review.create!(
    description: 'There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.',
    campaign_rating: 3,
    service_rating: 3,
    org_rating: 3,
    overall_rating: 3.0,
    dnd_campaign_id: dndcamp2.id,
    game_place_id: gPlace3.id,
    player_id: player3.id
)

review8 = Review.create!(
    description: '80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.',
    campaign_rating: 5, 
    service_rating: 5,
    org_rating: 5,
    overall_rating: 5.0,
    dnd_campaign_id: dndcamp1.id,
    game_place_id: gPlace2.id,
    player_id: player1.id
)

review9 = Review.create!(
    description: 'Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now.',
    campaign_rating: 5, 
    service_rating: 5,
    org_rating: 5,
    overall_rating: 5.0,
    dnd_campaign_id: dndcamp2.id,
    game_place_id: gPlace3.id,
    player_id: player3.id,
)

review10 = Review.create!(
    description: 'Barnaby The Bear’s my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear’s my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so — if you want to sing this way, think of what you’d like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free.', 
    campaign_rating: 4,
    service_rating: 4,
    org_rating: 4,
    overall_rating: 4.0,
    dnd_campaign_id: dndcamp1.id,
    game_place_id: gPlace2.id,
    player_id: player2.id
)