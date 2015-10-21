json.extract!(
  user,
  :id, :username, :trackees
)

json.notes do
  json.partial! 'api/notes/note', collection: user.notes, as: :note
end

json.tracks do
  json.partial! 'api/tracks/track', collection: user.tracks, as: :track
end
