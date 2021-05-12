class GamePlace < ApplicationRecord

    validates :name, :open_hour, :close_hour, :address, :phone_num, :latitude, :longitude, :description, presence: true

end