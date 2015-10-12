# Fatebook

[Heroku link][heroku]

[heroku]: https://vast-brushlands-6199.herokuapp.com/

## Minimum Viable Product

Fatebook is a web application inspired by Facebook, allowing machine users to track and socially engineer human interaction within the matrix. It is built using Ruby on Rails
and React.js. Fatebook allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
  [ ] Enable a machine to look on their note and comment history
- [ ] Create and edit a person profile
- [ ] Add and delete people's connections
- [ ] Post notes/issues on people's walls
- [ ] Track human location history using Google maps
- [ ] Upload pics and tag friends
- [ ] Sort people by their information
- [ ] Have a 'todos' list
## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Profile model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for the profile page.

[Details][phase-one]

### Phase 2: Flux Architecture and Post CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a User store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Profile `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Profile information can be created, read, edited and destroyed in the browser. Images will be able to be uploaded.
Lastly, while constructing the views I will start using basic bootstrap for
styling.

[Details][phase-two]

### Phase 3: Walls and Comments (2 days)

Phase 3 adds a wall. Walls belong to a Person page, which has
its own `Index` view. Create JSON API for Comments. Comments can be left on walls and pictures, edited, and deleted. People can be tagged in pictures.

[Details][phase-three]

### Phase 4: Searching people and adding friends (2 days)

Users can search for people using a search box, from a collection of preseeded people. Once the search is implemented, I will extend this to a fuzzy search that matches names. Machine users can add connections to human profiles with a search page that sorts according to personality characteristics.

[Details][phase-four]

### Phase 5: Check in with Google maps (2 days)

Users can check in people at locations using google maps. It will be integrated with the Yelp Api so that users can check people in at actual places. A marker and date will be added to the map.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements like the comment form.

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] A friends sorting function
- [ ] A 'todos' list
- [ ] Pagination / infinite scroll for profile index
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
