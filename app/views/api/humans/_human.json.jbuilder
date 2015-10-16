json.extract!(
  human,
  :id, :fname, :lname, :email, :birthdate, :address, :phone, :screenname, :image_url
)

json.notes do
  json.partial! 'api/notes/note', collection: human.notes, as: :note
end
