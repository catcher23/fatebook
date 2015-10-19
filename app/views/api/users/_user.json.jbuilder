json.extract!(
  user,
  :id, :fname, :lname, :email, :birthdate, :address, :phone, :screenname, :image_url
)

json.notes do
  json.partial! 'api/notes/note', collection: user.notes, as: :note
end
