class Track < ActiveRecord::Base
  belongs_to :trackee, class_name: "Human"
  belongs_to :tracker, class_name: "User"
end
