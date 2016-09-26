json.array!(@humen) do |human|
  json.partial!('human', human: human)
end
