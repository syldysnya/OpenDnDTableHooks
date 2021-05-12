class DndCampaign < ApplicationRecord

    validates :title, :adventure_type, :description, presence: true
    validates :remote, :fifth_edition, inclusion: { in: [true, false]}

end