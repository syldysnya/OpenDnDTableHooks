# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'faker'
require 'aws-sdk-s3'

City.destroy_all
GamePlace.destroy_all
Player.destroy_all
DndCampaign.destroy_all
Reservation.destroy_all
Favorite.destroy_all
Review.destroy_all

newark = City.create!(name: 'Newark', state: 'DE')
philly = City.create!(name: 'Philadelphia', state: 'PA')
dc = City.create!(name: 'Washington', state: 'DC')
ny = City.create!(name: 'New York', state: 'NY')
sf = City.create!(name: 'San Francisco', state: 'CA')
la = City.create!(name: 'Los Angeles', state: 'CA')
seattle = City.create!(name: 'Seattle', state: 'WA')
austin = City.create!(name: 'Austin', state: 'TX')

cities = City.pluck(:id)

game_places = []
open_hours = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"]
close_hours = ["9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"]

descriptions = [
    "The store has served the gaming community for over 35 years. The Game Club, located behind the store, offers gaming and tournaments every night and on weekends. Owned and operated by John & Mica",
    'The Game Shop is a “friendly local game shop” that aims to be as inclusive as possible because “tabletop gaming is for everyone.” We focus on all kinds of gaming fare, including board and card games, RPGs, and locally made games — all of which are available for in-store shopping, curbside pickup, local delivery, and nationwide shipping. There’s also limited in-store gaming that can accommodate one five-person table, if you’re up to it.',
    "We offer a unique, hands-on gaming experience. We specialize in everything related to non-electronic games, puzzles and mazes for all ages. Come out and play with us!",
    'A family-owned game store, it first opened in 2003. This one is for the game lovers among us — especially if that means you’re into DnD, Pokemon, Yu-Gi-Oh, or Magic: The Gathering. Aside from buying cards (both in-store and online), you can also sell your rarer cards to the store and try and make a buck on your hobby, too (and if you’ve seen what Pokemon cards can go for lately, maybe you ought to).',
    "One of the first board game cafe, featuring a thousand games to play and to buy, a wide range of beer, and locally-roasted coffee/espresso. With free wi-fi, plenty of tables, and an events calendar with something fun just about every night, this place brings modern board games to an old space.",
    "Our place opened in 1975 and has been a premier game store ever since. We carry an incredibly deep and broad selection of board games, roleplaying games, collectible card games, war games, miniatures, dice, and accessories.",
    "Our Store specializes in Board Games, Role Playing Games and Magic: The Gathering. We have a large selection of board games and Magic singles. We host many gaming events and have a tremendous community built around the store!",
    "We are running game nights in our game store every day. We opened our place in April of 2016 with the goal of becoming the best game store around!",
    "Our game store is where communities come together to turn old stuff into new fun. By keeping gently used games in circulation instead of the trash, we create less waste and save more games. Together.",
    'Specializes in all things gaming - Current Gen, Retro Gaming, and imported games.',
    "Our place strives to provide a unique gaming experience where our players - you! - can challenge your mind and work with others as a team. Make a reservation for your group and have fun with us today! We do our absolute best to ensure a great experience for you.",
    "This game place has been one of the world's largest and most acclaimed sellers of comics, graphic novels, toys & other collectibles for over 30 years!",
    "Our game place is a unique, community-based, interactive board and card game center, café and social club. It is a place to play, learn, think creatively, socialize and strategize against an opponent or with team members.",
    'Our Game place is your spot for all the geeky goodness you can handle. Whether you’re looking for board games (like Catan), trading card games (think Magic: The Gathering), RPGs (Dungeons & Dragons), miniatures, painting supplies, dice, or any other gaming-related bits and bobs, they’ve likely got it waiting (and can do local delivery). Plus, there’s also a used game section, and you can sell your own used board games on commission if you’re looking to unload.',
    'At it since 2005 , our game place has long been considered one of the go-to tabletop gaming shops in New York. By all accounts, their selection of games is absolutely massive, consisting of 3,000 titles that run the gamut from board and card games, to RPGs and miniature-based games, plus all their associated accessories and supplies.',
    'Yes, our Game Store technically bills itself as a comic book and toy shop, but they’re no slouch when it comes to board and card games, either. This shop is great for both casual (think Cards Against Humanity or Clue) and more involved gamers alike (I.E., Arkham Horror and Dungeons & Dragons). And if you’re into Magic: The Gathering — or want to be — this is a great place to visit.',
    'Known as a “tabletop gaming mecca,” this shop has styled itself as an LGBTQ and female-friendly destination since first opening its doors in 2009. You’ll find just about everything you need, including Magic: The Gathering and Yu-Gi-Oh cards, Dungeons & Dragons and Warhammer 40,000 minis, board game standards like Catan and Pandemic, and hundreds of other offerings. In-store shopping is available, as are curbside pickup, shipping, and local delivery.',
    'Our cafe is open for outdoor dining (and limited indoor dining), and you can even choose from a library of some 1,200 games to play while you’re there.',
    'Known as one of the first board game bar, we provide one of the best gaming experience around! Make reservation and enjoy your time in our place',
    'Here are a dozen great board games to play with friends, whether you’re looking to lose yourself in a game for a few hours, or just something more casual.'
]

#newark
15.times do |num|
    game_place = GamePlace.new
    game_place.name = Faker::Fantasy::Tolkien.unique.location
    game_place.address = Faker::Address.street_address
    game_place.phone_num = "302-#{rand(100..999)}-#{rand(1000..9999)}"
    game_place.latitude = 39.683621 + rand/20
    game_place.longitude = -75.746017 + rand/20
    game_place.open_hour = open_hours.sample
    game_place.close_hour = close_hours.sample
    game_place.gmt = 'GMT -0400'
    game_place.description = descriptions.sample
    game_place.city_id = newark.id
    game_places << game_place
end

#philly
15.times do |num|
    game_place = GamePlace.new
    game_place.name = Faker::Fantasy::Tolkien.unique.location
    game_place.address = Faker::Address.street_address
    game_place.phone_num = "215-#{rand(100..999)}-#{rand(1000..9999)}"
    game_place.latitude = 39.942393 + rand/20
    game_place.longitude = -75.150510 + rand/20
    game_place.open_hour = open_hours.sample
    game_place.close_hour = close_hours.sample
    game_place.gmt = 'GMT -0400'
    game_place.description = descriptions.sample
    game_place.city_id = philly.id
    game_places << game_place
end

#washington
15.times do |num|
    game_place = GamePlace.new
    game_place.name = Faker::Books::Dune.unique.city
    game_place.address = Faker::Address.street_address
    game_place.phone_num = "202-#{rand(100..999)}-#{rand(1000..9999)}"
    game_place.latitude = 38.910145 + rand/20
    game_place.longitude = -77.032944 + rand/20
    game_place.open_hour = open_hours.sample
    game_place.close_hour = close_hours.sample
    game_place.gmt = 'GMT -0400'
    game_place.description = descriptions.sample
    game_place.city_id = dc.id
    game_places << game_place
end

#new york
15.times do |num|
    game_place = GamePlace.new
    game_place.name = Faker::Books::CultureSeries.unique.culture_ship
    game_place.address = Faker::Address.street_address
    game_place.phone_num = "212-#{rand(100..999)}-#{rand(1000..9999)}"
    game_place.latitude = 40.753061 + rand/20
    game_place.longitude = -73.988035 + rand/20
    game_place.open_hour = open_hours.sample
    game_place.close_hour = close_hours.sample
    game_place.gmt = 'GMT -0400'
    game_place.description = descriptions.sample
    game_place.city_id = ny.id
    game_places << game_place
end

#seattle
15.times do |num|
    game_place = GamePlace.new
    game_place.name = Faker::Movies::Hobbit.unique.location
    game_place.address = Faker::Address.street_address
    game_place.phone_num = "206-#{rand(100..999)}-#{rand(1000..9999)}"
    game_place.latitude = 47.607388  + rand/20
    game_place.longitude = -122.343444 + rand/20
    game_place.open_hour = open_hours.sample
    game_place.close_hour = close_hours.sample
    game_place.gmt = 'GMT -0700'
    game_place.description = descriptions.sample
    game_place.city_id = seattle.id
    game_places << game_place
end

#austin
15.times do |num|
    game_place = GamePlace.new
    game_place.name = Faker::Movies::Hobbit.unique.location
    game_place.address = Faker::Address.street_address
    game_place.phone_num = "512-#{rand(100..999)}-#{rand(1000..9999)}"
    game_place.latitude = 30.292865 + rand/20
    game_place.longitude = -97.724570 + rand/20
    game_place.open_hour = open_hours.sample
    game_place.close_hour = close_hours.sample
    game_place.gmt = 'GMT -0500'
    game_place.description = descriptions.sample
    game_place.city_id = austin.id
    game_places << game_place
end

#sf
15.times do |num|
    game_place = GamePlace.new
    game_place.name = Faker::Movies::HarryPotter.unique.location
    game_place.address = Faker::Address.street_address
    game_place.phone_num = "415-#{rand(100..999)}-#{rand(1000..9999)}"
    game_place.latitude = 37.755659 + rand/20
    game_place.longitude = -122.453393 + rand/20
    game_place.open_hour = open_hours.sample
    game_place.close_hour = close_hours.sample
    game_place.gmt = 'GMT -0700'
    game_place.description = descriptions.sample
    game_place.city_id = sf.id
    game_places << game_place
end

#la
15.times do |num|
    game_place = GamePlace.new
    game_place.name = Faker::Movies::HarryPotter.unique.location
    game_place.address = Faker::Address.street_address
    game_place.phone_num = "323-#{rand(100..999)}-#{rand(1000..9999)}"
    game_place.latitude = 34.052026 + rand/20
    game_place.longitude = -118.270315 + rand/20
    game_place.open_hour = open_hours.sample
    game_place.close_hour = close_hours.sample
    game_place.gmt = 'GMT -0700'
    game_place.description = descriptions.sample
    game_place.city_id = la.id
    game_places << game_place
end

game_places.each do |gp|
    gp.save
end

gallery_images = [
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_1.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_2.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_3.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_4.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_5.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_6.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_7.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_8.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_9.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_10.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_11.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_12.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_13.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_14.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_15.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_16.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_17.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_18.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_19.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_20.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_21.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_22.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_23.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_24.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_25.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_26.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_27.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_28.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_29.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_30.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_31.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_32.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_33.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_34.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_35.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_36.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_37.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_38.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_39.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_40.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_41.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_42.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_43.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_44.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_45.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_46.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_47.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_48.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_49.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_50.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_51.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_52.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_53.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_54.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_55.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_56.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_57.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_58.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_59.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_60.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_61.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_62.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_63.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_64.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_65.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_66.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_67.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_68.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_69.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/images/gallery/img_70.jpeg',
]

avatars = [
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/1_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/2_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/3_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/4_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/5_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/6_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/7_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/8_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/9_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/10_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/11_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/12_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/13_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/14_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/15_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/16_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/17_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/18_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/19_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/20_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/21_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/22_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/23_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/24_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/25_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/26_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/27_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/28_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/29_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/30_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/31_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/32_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/33_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/34_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/35_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/36_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/37_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/38_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/39_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/40_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/41_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/42_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/43_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/44_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/45_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/46_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/47_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/48_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/49_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/50_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/51_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/52_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/53_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/54_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/55_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/56_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/57_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/58_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/59_avatar.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/gpavatars/60_avatar.jpeg',
]

headers = [
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/1_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/2_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/3_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/4_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/5_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/6_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/7_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/8_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/9_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/10_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/11_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/12_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/13_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/14_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/15_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/16_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/17_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/18_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/19_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/20_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/21_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/22_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/23_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/24_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/25_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/26_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/27_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/28_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/29_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/30_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/31_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/32_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/33_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/34_header.jpeg',
    'https://app-opendndtable-seed.s3.us-east-1.amazonaws.com/headers/35_header.jpeg',
]

GamePlace.all.each do |gp, i|
    file = open(avatars.sample)
    gp.avatar.attach(io: file, filename: "#{i}_avatar.jpeg")
end

GamePlace.all.each do |gp, i|
    file = open(headers.sample)
    gp.photo.attach(io: file, filename: "#{i}_header.jpeg")
end

GamePlace.all.each do |gp, j|
    gp_pics = []

    2.times do |i|
        gp_pics << gallery_images.sample
    end
    
    gp_pics.each do |path, i|
        file = open(path)
        gp.pictures.attach(io: file, filename: "img_#{j}_#{i}.jpeg")
    end
end

player1 = Player.create!(
    email: 'demo@mail.com',
    lname: 'User',
    fname: 'Demo',
    password: '12345678',
    city_id: newark.id
)

gp_ids = GamePlace.pluck(:id)

players = [];
30.times do |i|
    player = Player.new
    player.email = Faker::Internet.email
    player.fname = Faker::Name.first_name
    player.lname = Faker::Name.last_name
    player.password = '12345678'
    player.city_id = cities.sample
    players << player
end

players.each do |player|
    player.save
end

players_ids = Player.pluck(:id)

reservations = []
time_picks = [
    "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM"
]

200.times do |i|
    player = players.sample
    randomDate = Faker::Date.between(from: '2021-01-01', to: '2021-07-01')
    strDate = randomDate.strftime("%a, %d, %b").split(', ').join(' ')

    reservation = Reservation.new
    reservation.canceled = false,
    reservation.confirmation_num = rand(10000..10000000),
    reservation.email = player.email,
    reservation.game_date = strDate,
    reservation.game_place_id = gp_ids.sample,
    reservation.game_start = time_picks.sample,
    reservation.gmt = "GMT-0400",
    reservation.player_id = players_ids.sample,
    reservation.players_num = 2,
    reservation.res_year = "2021"
    reservations << reservation
end

reservations.each do |res|
    res.save
end

reviews = []
ratings = [2, 3, 4, 5]
res_pla_gp_ids = Reservation.pluck(:id, :player_id, :game_place_id)

res_pla_gp_ids.each do |array|

    review = Review.new
    review.description = Faker::Restaurant.review
    review.campaign_rating = ratings.sample
    review.service_rating = ratings.sample
    review.org_rating = ratings.sample
    review.overall_rating = (review.campaign_rating + review.org_rating + review.org_rating) / 3.0
    review.game_place_id = array[2]
    review.player_id = array[1]
    review.reservation_id = array[0]
    reviews << review
end

reviews.each do |rev|
    rev.save
end

res1 = Reservation.create!(
    canceled: true,
    confirmation_num: 6125,
    email: "demo@mail.com",
    game_date: "Thu Jul 01",
    game_place_id: gp_ids.sample,
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
    game_place_id: gp_ids.sample,
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
    game_place_id: gp_ids.sample,
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
    game_place_id: gp_ids.sample,
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
    game_place_id: gp_ids.sample,
    player_id: player1.id,
    confirmation_num: "60",
    canceled: true,
    email: "demo@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

res6 = Reservation.create!(
    game_date: "Wed Jun 30",
    game_start: "8:30 PM",
    players_num: 2,
    game_place_id: gp_ids.sample,
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
    game_place_id: gp_ids.sample,
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
    game_place_id: gp_ids.sample,
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
    game_place_id: gp_ids.sample,
    player_id: player1.id,
    confirmation_num: "1107",
    canceled: false,
    email: "demo@mail.com",
    res_year: "2021",
    gmt: "GMT-0400"
)

Favorite.create!(player_id: player1.id, game_place_id: gp_ids.sample);
Favorite.create!(player_id: player1.id, game_place_id: gp_ids.sample);
Favorite.create!(player_id: player1.id, game_place_id: gp_ids.sample);
Favorite.create!(player_id: player1.id, game_place_id: gp_ids.sample);
Favorite.create!(player_id: player1.id, game_place_id: gp_ids.sample);
Favorite.create!(player_id: player1.id, game_place_id: gp_ids.sample);
Favorite.create!(player_id: player1.id, game_place_id: gp_ids.sample);