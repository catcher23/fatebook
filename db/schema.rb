# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151118212139) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "humen", force: :cascade do |t|
    t.string   "fname",      null: false
    t.string   "lname",      null: false
    t.string   "phone",      null: false
    t.string   "email",      null: false
    t.string   "address",    null: false
    t.string   "screenname"
    t.string   "birthdate",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image_url"
    t.float    "lat"
    t.float    "lng"
    t.float    "dlat"
    t.float    "dlng"
  end

  create_table "notes", force: :cascade do |t|
    t.string   "title",           null: false
    t.text     "body",            null: false
    t.integer  "human_id"
    t.integer  "user_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "user_image_url"
    t.string   "username"
    t.string   "fname"
    t.string   "lname"
    t.string   "human_image_url"
  end

  add_index "notes", ["human_id"], name: "index_notes_on_human_id", using: :btree

  create_table "players", force: :cascade do |t|
    t.integer  "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tracks", force: :cascade do |t|
    t.integer  "trackee_id", null: false
    t.integer  "tracker_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tracks", ["trackee_id", "tracker_id"], name: "index_tracks_on_trackee_id_and_tracker_id", unique: true, using: :btree
  add_index "tracks", ["trackee_id"], name: "index_tracks_on_trackee_id", using: :btree
  add_index "tracks", ["tracker_id"], name: "index_tracks_on_tracker_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "image_url"
    t.string   "title"
    t.string   "division"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
