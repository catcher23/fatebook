json.array!(@human) do |human|
  json.partial!('human', human: human)
end
