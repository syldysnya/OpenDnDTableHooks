class DndCampaign < ApplicationRecord

    validates :title, :adventure_type, :description, presence: true
    validates :remote, :fifth_edition, inclusion: { in: [true, false]}

    belongs_to :game_place
    has_many :reservations
    has_many :reviews

end