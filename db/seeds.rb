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
    latitude: 39.68362171265492,
    longitude: -75.7460176310831,
    open_hour: '10:00 AM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: "The 'Coolest Store on Main Street' in Newark, DE (UD's Review) has served the gaming community for over 35 years. DOK's Game Club, located behind the store, offers gaming and tournaments every night and on weekends. Owned and operated by John & Mica Corradin.",
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
    latitude: 39.94239399638247,
    longitude: -75.15051014615901,
    open_hour: '3:00 PM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: 'The Philly Game Shop is a “friendly local game shop” (or FLGS, for the uninitiated) in South Philly that aims to be as inclusive as possible because, as they put it online, “tabletop gaming is for everyone.” They focus on all kinds of gaming fare, including board and card games, RPGs, and locally made games — all of which are available for in-store shopping, curbside pickup, local delivery, and nationwide shipping. There’s also limited in-store gaming that can accommodate one four-person table, if you’re up to it.',
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
    latitude: 38.88477671424203,
    longitude: -76.99691064408988,
    open_hour: '3:00 PM',
    close_hour: '10:00 PM',
    gmt: 'GMT -0400',
    description: "Labyrinth offers a unique, hands-on shopping experience. We specialize in everything related to non-electronic games, puzzles and mazes for all ages. Come out and play with us!",
    city_id: city3.id,
    dnd_campaign_id: 2
)

header3 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/3_header.jpeg')
gPlace3.photo.attach(io: header3, filename: '3_header.jpeg')

avatar3 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/3_avatar.jpeg')
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
    latitude: 39.81072788340758,
    longitude: -75.54852234592026,
    open_hour: '10:00 AM',
    close_hour: '10:00 PM',
    gmt: 'GMT -0400',
    description: 'This family-owned chain of game stores also has locations in Blue Bell and Wilmington, but its home base is in Delco, where it first opened in 2003. But wherever you go, this one is for the card game lovers among us — especially if that means you’re into Pokemon, Yu-Gi-Oh, or Magic: The Gathering. Aside from buying cards (both in-store and online), you can also sell your rarer cards to the store and try and make a buck on your hobby, too (and if you’ve seen what Pokemon cards can go for lately, maybe you ought to).',
    city_id: city1.id,
    dnd_campaign_id: 1
)

header4 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/4_header.jpeg')
gPlace4.photo.attach(io: header4, filename: '4_header.jpeg')

avatar4 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/4_avatar.jpeg')
gPlace4.avatar.attach(io: avatar4, filename: '4_avatar.jpeg')

pictures1_1 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_1.jpeg')
pictures1_2 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_2.jpeg')
pictures1_3 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_3.jpeg')
pictures1_4 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_4.jpeg')
pictures1_5 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_5.jpeg')
pictures1_6 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_6.jpeg')
pictures1_7 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_7.jpeg')
pictures1_8 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_8.jpeg')
pictures1_9 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_9.jpeg')

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
    latitude: 40.72957935803853,
    longitude: -73.99881417473236,
    open_hour: '10:00 AM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: "Manhattan's first board game cafe, featuring a thousand games to play and to buy, a wide range of beer, and locally-roasted coffee/espresso. With free wi-fi, plenty of tables, and an events calendar with something fun just about every night, this NYU hotspot brings modern board games to an old space: updating the famous Greenwich Village Chess Shop which had been in the spot for 40 years.",
    city_id: city4.id,
    dnd_campaign_id: 1
)

header5 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/5_header.jpeg')
gPlace5.photo.attach(io: header5, filename: '5_header.jpeg')

avatar5 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/5_avatar.jpeg')
gPlace5.avatar.attach(io: avatar5, filename: '5_avatar.jpeg')

pictures3_21 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_21.jpeg')
pictures3_22 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_22.jpeg')
pictures3_23 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_23.jpeg')
pictures3_24 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_24.jpeg')
pictures3_25 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_25.jpeg')
pictures3_26 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_26.jpeg')
pictures3_27 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_27.jpeg')
pictures3_28 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_28.jpeg')
pictures3_29 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_29.jpeg')

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
    latitude: 40.74771389710394,
    longitude: -73.98420950171395,
    open_hour: '10:00 AM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: "The Compleat Strategist opened in 1975 and has been New York City's premier game store ever since. We carry an incredibly deep and broad selection of board games, roleplaying games, collectible card games, war games, miniatures, dice, and accessories.",
    city_id: city4.id,
    dnd_campaign_id: 1
)

header6 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/6_header.jpeg')
gPlace6.photo.attach(io: header6, filename: '6_header.jpeg')

avatar6 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/6_avatar.jpeg')
gPlace6.avatar.attach(io: avatar6, filename: '6_avatar.jpeg')

pictures2_11 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_11.jpeg')
pictures2_12 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_12.jpeg')
pictures2_13 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_13.jpeg')
pictures2_14 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_14.jpeg')
pictures2_15 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_15.jpeg')
pictures2_16 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_16.jpeg')
pictures2_17 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_17.jpeg')
pictures2_18 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_18.jpeg')
pictures2_19 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_19.jpeg')

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
    latitude: 40.71685174379597,
    longitude: -73.98897753055107,
    open_hour: '10:00 AM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: "Twenty Sided Store specializes in Board Games, Role Playing Games and Magic: The Gathering. We have a large selection of board games and Magic singles. We host many gaming events and have a tremendous community built around the store!",
    city_id: city4.id,
    dnd_campaign_id: 1
)

header7 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/7_header.jpeg')
gPlace7.photo.attach(io: header7, filename: '7_header.jpeg')

avatar7 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/7_avatar.jpeg')
gPlace7.avatar.attach(io: avatar7, filename: '7_avatar.jpeg')

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

gPlace8 = GamePlace.create!(
    name: 'Born To Game',
    address: '821 N Broad St',
    phone_num: '3023765750',
    latitude: 39.46053827973325,
    longitude: -75.71789051523876,
    open_hour: '10:00 AM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: "Owner James Jerman collected Magic the Gathering cards since he was a teenager. Co-Owner Samantha Ames wanted to rid of some of the thousands upon thousands of cards he had, so she sorted them for him. James became a judge for Magic and ran tournaments in Newark for years. We moved to Dover and he began running tournaments in multiple game stores across Delaware. He also sold cards on consignment, trade shows, etc. In 2012, Sam started selling James' Magic cards online with great success. The goal was always to open a brick and mortar store though, selling online was supposed to be a stepping stone. We finally opened Born to Game in April of 2016 with the goal of becoming the best game store in Delaware!",
    city_id: city1.id,
    dnd_campaign_id: 1
)

header8 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/8_header.jpeg')
gPlace8.photo.attach(io: header8, filename: '8_header.jpeg')

avatar8 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/8_avatar.jpeg')
gPlace8.avatar.attach(io: avatar8, filename: '8_avatar.jpeg')

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

gPlace8.pictures.attach(
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

gPlace9 = GamePlace.create!(
    name: '2nd & Charles',
    address: '101 Geoffrey Dr',
    phone_num: '3023765750',
    latitude: 39.68691308793171,
    longitude: -75.6511323863966,
    open_hour: '10:00 AM',
    close_hour: '10:00 PM',
    gmt: 'GMT -0400',
    description: "2nd & Charles is where communities come together to turn old stuff into new fun. By keeping gently used books, games, movies and more in circulation instead of the trash, we create less waste and save more cash. Together.",
    city_id: city1.id,
    dnd_campaign_id: 1
)

header9 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/9_header.jpeg')
gPlace9.photo.attach(io: header9, filename: '9_header.jpeg')

avatar9 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/9_avatar.jpeg')
gPlace9.avatar.attach(io: avatar9, filename: '9_avatar.jpeg')

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

gPlace9.pictures.attach(
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

gPlace10 = GamePlace.create!(
    name: 'J&L Game',
    address: '1026 6th Ave',
    phone_num: '(212) 233-3399',
    latitude: 40.75268249368759,
    longitude: -73.98540411520486,
    open_hour: '11:00 AM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: 'Specializes in all things gaming - Current Gen, Retro Gaming, and imported games.',
    city_id: city4.id,
    dnd_campaign_id: 1
)

header10 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/10_header.jpeg')
gPlace10.photo.attach(io: header10, filename: '9_header.jpeg')

avatar10 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/10_avatar.jpeg')
gPlace10.avatar.attach(io: avatar10, filename: '10_avatar.jpeg')

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

gPlace10.pictures.attach(
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

gPlace11 = GamePlace.create!(
    name: 'First Games Publr Network Inc',
    address: '420 Lexington Ave',
    phone_num: '(212) 983-0501',
    latitude: 40.752818087793266,
    longitude: -73.97558203609611,
    open_hour: '11:00 AM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: "First Games Publr Network Inc strives to provide a unique gaming experience where our players - you! - can challenge your mind and work with others as a team. Make a reservation for your group and have fun with us today! We do our absolute best to ensure a great experience for you.",
    city_id: city4.id,
    dnd_campaign_id: 1
)

header11 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/11_header.jpeg')
gPlace11.photo.attach(io: header11, filename: '11_header.jpeg')

avatar11 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/11_avatar.jpeg')
gPlace11.avatar.attach(io: avatar11, filename: '11_avatar.jpeg')

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

gPlace11.pictures.attach(
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

gPlace12 = GamePlace.create!(
    name: 'Forbidden Planet',
    address: '832 Broadway',
    phone_num: '(212) 473-1576',
    latitude: 40.73362517535937,
    longitude: -73.99078355938694,
    open_hour: '10:00 AM',
    close_hour: '9:00 PM',
    gmt: 'GMT -0400',
    description: "Forbidden Planet NYC has been one of the world's largest and most acclaimed sellers of comics, graphic novels, toys & other collectibles for over 30 years!",
    city_id: city4.id,
    dnd_campaign_id: 1
)

header12 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/12_header.jpeg')
gPlace12.photo.attach(io: header12, filename: '12_header.jpeg')

avatar12 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/12_avatar.jpeg')
gPlace12.avatar.attach(io: avatar12, filename: '12_avatar.jpeg')

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

gPlace12.pictures.attach(
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

gPlace13 = GamePlace.create!(
    name: 'The Brooklyn Strategist',
    address: '333 Court St',
    phone_num: '(718) 576-3035',
    latitude: 40.68290340727823,
    longitude: -73.99540335753413,
    open_hour: '11:00 AM',
    close_hour: '9:00 PM',
    gmt: 'GMT -0400',
    description: "The Brooklyn Strategist is a unique, community-based, interactive board and card game center, café and social club. It is a place to play, learn, think creatively, socialize and strategize against an opponent or with team members.",
    city_id: city4.id,
    dnd_campaign_id: 1
)

header13 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/13_header.jpeg')
gPlace13.photo.attach(io: header13, filename: '13_header.jpeg')

avatar13 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/13_avatar.jpeg')
gPlace13.avatar.attach(io: avatar13, filename: '13_avatar.jpeg')

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

gPlace13.pictures.attach(
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

gPlace14 = GamePlace.create!(
    name: 'Wild Game',
    address: '222 3rd Ave',
    phone_num: '(212) 983-0501',
    latitude: 40.73695343762714,
    longitude: -73.98550625721938,
    open_hour: '11:00 AM',
    close_hour: '9:00 PM',
    gmt: 'GMT -0400',
    description: 'Wild Game is your spot for all the geeky goodness you can handle. Whether you’re looking for board games (like Catan), trading card games (think Magic: The Gathering), RPGs (Dungeons & Dragons), miniatures, painting supplies, dice, or any other gaming-related bits and bobs, they’ve likely got it waiting (and can do local delivery). Plus, there’s also a used game section, and you can sell your own used board games on commission if you’re looking to unload.',
    city_id: city4.id,
    dnd_campaign_id: 1
)

header14 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/14_header.jpeg')
gPlace14.photo.attach(io: header14, filename: '14_header.jpeg')

avatar14 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/14_avatar.jpeg')
gPlace14.avatar.attach(io: avatar14, filename: '14_avatar.jpeg')

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

gPlace14.pictures.attach(
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

gPlace15 = GamePlace.create!(
    name: 'gameloft inc',
    address: '50 W 23rd St',
    phone_num: '(212) 993-3000',
    latitude: 40.74213712720014,
    longitude: -73.99192063055048,
    open_hour: '09:00 AM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: 'At it since 2005,gameloft inc has long been considered one of the go-to tabletop gaming shops in New York. By all accounts, their selection of games is absolutely massive, consisting of 3,000 titles that run the gamut from board and card games, to RPGs and miniature-based games, plus all their associated accessories and supplies.',
    city_id: city4.id,
    dnd_campaign_id: 1
)

header15 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/15_header.jpeg')
gPlace15.photo.attach(io: header15, filename: '15_header.jpeg')

avatar15 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/15_avatar.jpeg')
gPlace15.avatar.attach(io: avatar15, filename: '15_avatar.jpeg')

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

gPlace15.pictures.attach(
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

gPlace16 = GamePlace.create!(
    name: 'Jack Game Store',
    address: '1400 Broadway',
    phone_num: '(212) 993-3000',
    latitude: 40.75322657261571,
    longitude: -73.98702400171383,
    open_hour: '10:00 AM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: 'Yes, Jack Game Store technically bills itself as a comic book and toy shop, but they’re no slouch when it comes to board and card games, either. This shop is great for both casual (think Cards Against Humanity or Clue) and more involved gamers alike (I.E., Arkham Horror and Dungeons & Dragons). And if you’re into Magic: The Gathering — or want to be — this is a great place to visit.',
    city_id: city4.id,
    dnd_campaign_id: 1
)

header16 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/16_header.jpeg')
gPlace16.photo.attach(io: header16, filename: '16_header.jpeg')

avatar16 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/16_avatar.jpeg')
gPlace16.avatar.attach(io: avatar16, filename: '16_avatar.jpeg')

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

gPlace16.pictures.attach(
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

gPlace17 = GamePlace.create!(
    name: 'Game Fixx',
    address: '3850 Lancaster Ave',
    phone_num: '(215) 387-4040',
    latitude: 39.96153668796879,
    longitude: -75.19920745940739,
    open_hour: '12:00 PM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: 'Known as a “tabletop gaming mecca,” this shop has styled itself as an LGBTQ and female-friendly destination since first opening its doors in 2009. You’ll find just about everything you need, including Magic: The Gathering and Yu-Gi-Oh cards, Dungeons & Dragons and Warhammer 40,000 minis, board game standards like Catan and Pandemic, and hundreds of other offerings. In-store shopping is available, as are curbside pickup, shipping, and local delivery.',
    city_id: city2.id,
    dnd_campaign_id: 1
)

header17 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/17_header.jpeg')
gPlace17.photo.attach(io: header17, filename: '17_header.jpeg')

avatar17 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/17_avatar.jpeg')
gPlace17.avatar.attach(io: avatar17, filename: '17_avatar.jpeg')

pictures2_11 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_11.jpeg')
pictures2_12 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_12.jpeg')
pictures2_13 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_13.jpeg')
pictures2_14 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_14.jpeg')
pictures2_15 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_15.jpeg')
pictures2_16 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_16.jpeg')
pictures2_17 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_17.jpeg')
pictures2_18 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_18.jpeg')
pictures2_19 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_19.jpeg')

gPlace17.pictures.attach(
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

gPlace18 = GamePlace.create!(
    name: 'Winners Corner',
    address: '2141 P St NW',
    phone_num: '(202) 750-6113',
    latitude: 38.91016169719257,
    longitude: -77.04799974594341,
    open_hour: '10:00 AM',
    close_hour: '11:00 PM',
    gmt: 'GMT -0400',
    description: 'This Winners Corner cafe is open for outdoor dining (and limited indoor dining), and you can even choose from a library of some 1,200 games to play while you’re there.',
    city_id: city3.id,
    dnd_campaign_id: 1
)

header18 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/18_header.jpeg')
gPlace18.photo.attach(io: header18, filename: '18_header.jpeg')

avatar18 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/18_avatar.jpeg')
gPlace18.avatar.attach(io: avatar18, filename: '18_avatar.jpeg')

pictures2_11 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_11.jpeg')
pictures2_12 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_12.jpeg')
pictures2_13 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_13.jpeg')
pictures2_14 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_14.jpeg')
pictures2_15 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_15.jpeg')
pictures2_16 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_16.jpeg')
pictures2_17 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_17.jpeg')
pictures2_18 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_18.jpeg')
pictures2_19 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_19.jpeg')

gPlace18.pictures.attach(
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

gPlace19 = GamePlace.create!(
    name: 'Game Zone',
    address: '6145 Woodland Ave',
    phone_num: '(215) 724-1277',
    latitude: 39.92870953585875,
    longitude: -75.23055065940814,
    open_hour: '10:00 AM',
    close_hour: '11:30 PM',
    gmt: 'GMT -0400',
    description: 'Known as Philly’s first board game bar, Game Zone has moved operations online due to the pandemic — but you can still get your geeky fix from them via pickup or local delivery (or shipping, if you’re farther out).',
    city_id: city2.id,
    dnd_campaign_id: 1
)

header19 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/19_header.jpeg')
gPlace19.photo.attach(io: header19, filename: '19_header.jpeg')

avatar19 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/19_avatar.jpeg')
gPlace19.avatar.attach(io: avatar19, filename: '19_avatar.jpeg')

pictures2_11 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_11.jpeg')
pictures2_12 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_12.jpeg')
pictures2_13 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_13.jpeg')
pictures2_14 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_14.jpeg')
pictures2_15 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_15.jpeg')
pictures2_16 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_16.jpeg')
pictures2_17 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_17.jpeg')
pictures2_18 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_18.jpeg')
pictures2_19 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_19.jpeg')

gPlace19.pictures.attach(
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

gPlace20 = GamePlace.create!(
    name: 'The Cool Kids Of Dc',
    address: '4671 Benning Rd SE',
    phone_num: '(202) 823-6903',
    latitude: 38.88487815962703,
    longitude: -76.93551375758095,
    open_hour: '10:30 AM',
    close_hour: '10:00 PM',
    gmt: 'GMT -0400',
    description: 'Here are a dozen great board games to play with friends, whether you’re looking to lose yourself in a game for a few hours, or just something more casual.',
    city_id: city3.id,
    dnd_campaign_id: 1
)

header20 = open('https://app-opendndtable-seed.s3.amazonaws.com/headers/20_header.jpeg')
gPlace20.photo.attach(io: header20, filename: '20_header.jpeg')

avatar20 = open('https://app-opendndtable-seed.s3.amazonaws.com/gpavatars/20_avatar.jpeg')
gPlace20.avatar.attach(io: avatar20, filename: '20_avatar.jpeg')

pictures2_11 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_11.jpeg')
pictures2_12 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_12.jpeg')
pictures2_13 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_13.jpeg')
pictures2_14 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_14.jpeg')
pictures2_15 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_15.jpeg')
pictures2_16 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_16.jpeg')
pictures2_17 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_17.jpeg')
pictures2_18 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_18.jpeg')
pictures2_19 = open('https://app-opendndtable-seed.s3.amazonaws.com/images/gallery/img_19.jpeg')

gPlace20.pictures.attach(
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
    email: 'demo@mail.com',
    lname: 'User',
    fname: 'Demo',
    password: '12345678',
    city_id: city1.id
)

player2 = Player.create!(
    email: 'davher@mail.com',
    fname: 'Dav',
    lname: 'Her',
    password: '12345678',
    city_id: city2.id
)

player3 = Player.create!(
    email: 'oyumdon@mail.com',
    fname: 'Oyum',
    lname: 'Don',
    password: '12345678',
    city_id: city3.id
)

player4 = Player.create!(
    email: 'saidon@mail.com',
    fname: 'Sai',
    lname: 'Don',
    password: '12345678',
    city_id: city4.id
)

res1 = Reservation.create!(
    canceled: false,
    confirmation_num: 6125,
    email: "demo@mail.com",
    game_date: "Thu Jul 01",
    game_place_id: gPlace2.id,
    game_start: "6:15 PM",
    gmt: "GMT-0400",
    player_id: player1.id,
    players_num: 4,
    res_year: "2021"
)

res2 = Reservation.create!(
    canceled: false,
    confirmation_num: 5101,
    email: "demo@mail.com",
    game_date: "Fri Nov 19",
    game_place_id: gPlace2.id,
    game_start: "8:15 PM",
    gmt: "GMT-0400",
    player_id: player1.id,
    players_num: 2,
    res_year: "2021"
)

res3 = Reservation.create!(
    canceled: false,
    confirmation_num: 4269,
    email: "demo@mail.com",
    game_date: "Sun Oct 31",
    game_place_id: gPlace3.id,
    game_start: "7:45 PM",
    gmt: "GMT-0400",
    player_id: player1.id,
    players_num: 2,
    res_year: "2021"
)

res4 = Reservation.create!(
    canceled: false,
    confirmation_num: 5753,
    email: "demo@mail.com",
    game_date: "Wed Dec 29",
    game_place_id: gPlace4.id,
    game_start: "9:15 PM",
    gmt: "GMT-0500",
    player_id: player1.id,
    players_num: 2,
    res_year: "2021"
)

res5 = Reservation.create!(
    game_date: "Wed Jun 30",
    game_start: "7:30 PM",
    players_num: 5,
    game_place_id: gPlace11.id,
    player_id: player1.id,
    confirmation_num: "60",
    canceled: false, 
    email: "demo@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res6 = Reservation.create!(
    game_date: "Wed Jun 30",
    game_start: "8:30 PM",
    players_num: 2,
    game_place_id: gPlace14.id,
    player_id: player1.id, 
    confirmation_num: "9397", 
    canceled: true,
    email: "demo@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res7 = Reservation.create!(
    game_date: "Fri Dec 31",
    game_start: "8:15 PM",
    players_num: 2,
    game_place_id: gPlace6.id,
    player_id: player1.id,
    confirmation_num: "9739",
    canceled: false,
    email: "demo@mail.com",
    res_year: "2021",
    gmt: "GMT-0500"
)

res8 = Reservation.create!(
    game_date: "Fri Jul 02",
    game_start: "7:30 PM",
    players_num: 2,
    game_place_id: gPlace1.id,
    player_id: player1.id,
    confirmation_num: "6936",
    canceled: false,
    email: "demo@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res9 = Reservation.create!(
    game_date: "Sat Jun 12",
    game_start: "3:45 PM",
    players_num: 2,
    game_place_id: gPlace5.id,
    player_id: player1.id,
    confirmation_num: "1107",
    canceled: false,
    email: "demo@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res10 = Reservation.create!(
    game_date: "Mon May 03",
    game_start: "2:30 PM",
    players_num: 2,
    game_place_id: gPlace2.id,
    player_id: player2.id,
    confirmation_num: "4932",
    canceled: false,
    email: "davher@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res11 = Reservation.create!(
    game_date: "Tue May 18",
    game_start: "4:15 PM",
    players_num: 2,
    game_place_id: gPlace17.id,
    player_id: player2.id,
    confirmation_num: "1634",
    canceled: false,
    email: "davher@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res12 = Reservation.create!(
    game_date: "Tue Apr 20",
    game_start: "1:45 PM",
    players_num: 2,
    game_place_id: gPlace19.id,
    player_id: player2.id,
    confirmation_num: "4315",
    canceled: false,
    email: "davher@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res13 = Reservation.create!(
    game_date: "Sat Mar 20",
    game_start: "5:30 PM",
    players_num: 5,
    game_place_id: gPlace1.id,
    player_id: player2.id,
    confirmation_num: "5311",
    canceled: false,
    email: "davher@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res14 = Reservation.create!(
    game_date: "Tue Jun 15",
    game_start: "8:00 PM",
    players_num: 2,
    game_place_id: gPlace4.id,
    player_id: player2.id,
    confirmation_num: "2024",
    canceled: false,
    email: "davher@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res15 = Reservation.create!(
    game_date: "Tue Jun 15",
    game_start: "8:00 PM",
    players_num: 2,
    game_place_id: gPlace8.id,
    player_id: player2.id,
    confirmation_num: "2024",
    canceled: false,
    email: "davher@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res16 = Reservation.create!(
    game_date: "Tue Jun 15",
    game_start: "8:00 PM",
    players_num: 2,
    game_place_id: gPlace9.id,
    player_id: player2.id,
    confirmation_num: "2024",
    canceled: false,
    email: "davher@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res17 = Reservation.create!(
    game_date: "Tue Jun 15",
    game_start: "8:00 PM",
    players_num: 2,
    game_place_id: gPlace3.id,
    player_id: player2.id,
    confirmation_num: "2024",
    canceled: false,
    email: "davher@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res18 = Reservation.create!(
    game_date: "Tue Jun 15",
    game_start: "8:00 PM",
    players_num: 2,
    game_place_id: gPlace18.id,
    player_id: player2.id,
    confirmation_num: "2024",
    canceled: false,
    email: "davher@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res19 = Reservation.create!(
    game_date: "Tue Jun 15",
    game_start: "8:00 PM",
    players_num: 2,
    game_place_id: gPlace20.id,
    player_id: player2.id,
    confirmation_num: "2024",
    canceled: false,
    email: "davher@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
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

fav1 = Favorite.create!(
    player_id: player1.id,
    game_place_id: gPlace3.id
);

fav2 = Favorite.create!(
    player_id: player1.id,
    game_place_id: gPlace11.id
);

fav3 = Favorite.create!(
    player_id: player1.id,
    game_place_id: gPlace5.id
);

fav4 = Favorite.create!(
    player_id: player1.id,
    game_place_id: gPlace1.id
);

fav5 = Favorite.create!(
    player_id: player1.id,
    game_place_id: gPlace15.id
);

rev1 = Review.create!(
    description: "Had fun with friends",
    campaign_rating: 5,
    service_rating: 3,
    org_rating: 5,
    overall_rating: 4.3,
    game_place_id: gPlace2.id,
    player_id: player1.id,
    reservation_id: res1.id
);

rev2 = Review.create!(
    description: "Can't wait to come back!",
    campaign_rating: 5,
    service_rating: 5,
    org_rating: 4,
    overall_rating: 4.6,
    game_place_id: gPlace11.id,
    player_id: player1.id,
    reservation_id: res5.id
);

rev3 = Review.create!(
    description: "Good place",
    campaign_rating: 4,
    service_rating: 4,
    org_rating: 4,
    overall_rating: 4.1,
    game_place_id: gPlace2.id,
    player_id: player2.id,
    reservation_id: res10.id
)

rev4 = Review.create!(
    description: "Enjoyed it, will come back again!",
    campaign_rating: 5,
    service_rating: 5,
    org_rating: 4,
    overall_rating: 4.6,
    game_place_id: gPlace17.id,
    player_id: player2.id,
    reservation_id: res11.id
)

rev5 = Review.create!(
    description: "Like the story, but it was too short!",
    campaign_rating: 5,
    service_rating: 4,
    org_rating: 3,
    overall_rating: 4.1,
    game_place_id: gPlace19.id,
    player_id: player2.id,
    reservation_id: res12.id
)

rev6 = Review.create!(
    description: "I love this place",
    campaign_rating: 5,
    service_rating: 5,
    org_rating: 5,
    overall_rating: 5.0,
    game_place_id: gPlace1.id,
    player_id: player2.id,
    reservation_id: res13.id
)

rev7 = Review.create!(
    description: "It was fine",
    campaign_rating: 3,
    service_rating: 3,
    org_rating: 3,
    overall_rating: 3.0,
    game_place_id: gPlace4.id,
    player_id: player2.id,
    reservation_id: res14.id
)

rev8 = Review.create!(
    description: "Stuff is great",
    campaign_rating: 4,
    service_rating: 5,
    org_rating: 3,
    overall_rating: 4.0,
    game_place_id: gPlace8.id,
    player_id: player2.id,
    reservation_id: res15.id
)

rev9 = Review.create!(
    description: "Kinda expensive",
    campaign_rating: 3,
    service_rating: 2,
    org_rating: 3,
    overall_rating: 2.6,
    game_place_id: gPlace9.id,
    player_id: player2.id, 
    reservation_id: res16.id
)

rev10 = Review.create!(
    description: "Loved it",
    campaign_rating: 5,
    service_rating: 5,
    org_rating: 4,
    overall_rating: 4.6,
    game_place_id: gPlace3.id,
    player_id: player2.id,
    reservation_id: res17.id
)

rev11 = Review.create!(
    description: "Enjoyed the game",
    campaign_rating: 5,
    service_rating: 4,
    org_rating: 5,
    overall_rating: 4.6,
    game_place_id: gPlace18.id,
    player_id: player2.id,
    reservation_id: res18.id
)

rev12 = Review.create!(
    description: "Was hard to find",
    campaign_rating: 5,
    service_rating: 2,
    org_rating: 5,
    overall_rating: 4.0,
    game_place_id: gPlace20.id,
    player_id: player2.id,
    reservation_id: res19.id
)