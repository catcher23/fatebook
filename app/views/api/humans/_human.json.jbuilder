json.extract!(
  human,
  :id, :fname, :lname, :email, :birthdate, :address, :phone, :screenname, :image_url, :trackers, :lat, :lng, :dlat, :dlng
)

json.notes do
  json.partial! 'api/notes/note', collection: human.notes, as: :note
end

json.tracks do
  json.partial! 'api/tracks/track', collection: human.tracks, as: :track
end
