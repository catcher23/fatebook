class Human < ActiveRecord::Base
  validates :image_url, presence: true
  has_many :notes
  has_many(
  :tracks,
  foreign_key: :trackee_id,
  class_name: "Track"
  )
  has_many(
    :trackers,
    through: :tracks,
    source: :tracker
  )
end
