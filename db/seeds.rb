# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.delete_all

player1 = Player.create!(
    email: 'sykh@mail.com',
    lname: 'Sy',
    fname: 'Kh',
    password: '12345678'
)

player1 = Player.create!(
    email: 'davher@mail.com',
    lname: 'Dav',
    fname: 'Her',
    password: '12345678'
)

player1 = Player.create!(
    email: 'oyumdon@mail.com',
    lname: 'Oyum',
    fname: 'Don',
    password: '12345678'
)

player1 = Player.create!(
    email: 'saidon@mail.com',
    lname: 'Sai',
    fname: 'Don',
    password: '12345678'
)