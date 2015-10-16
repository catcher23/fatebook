class Note < ActiveRecord::Base
  validates :title, :body, presence: true
  validates :human, presence: true
  belongs_to :human
end
