# Schema Information

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
person_id   | integer   | not null, foreign key (references person), indexed


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
post_id     | integer   | not null, foreign key (references post), indexed, unique


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## people
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name       | string    | not null
last_name        | string    | not null


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
photo_id    | integer   | not null, foreign key (references photo), indexed, unique

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo       | img       | not null
user_id     | integer   | not null, foreign key (references users), indexed
