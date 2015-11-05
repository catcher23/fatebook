# Fatebook

[Live][live]

[live]: www.fatebook.xyz

## Minimum Viable Product

Fatebook is a web application inspired by Facebook, allowing machine users to track and socially engineer human interaction within the matrix. It is built using Ruby on Rails
and React.js. Fatebook allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Enable a machine to look on their note and comment history
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
front end, I will begin by setting up a full JSON API for the user and human
profile pages.

[Details][phase-one]

### Phase 2: Flux Architecture and Post CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a human store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Profile `Index`, `IndexItem` and `Form`. These views will probably be broken down into assorted components, like sidebar, navbar, etc. A user store will also be built for users and components will be modified to reflect the differing characteristics of users and humans. Lastly, while constructing the views I will start using basic bootstrap for
styling.

[Details][phase-two]

### Phase 3: Walls and Notes (2 days)

Phase 3 adds a 'wall', which is composed of the assorted notes left by robots for the humans. Walls belong to the human show view component, in the main section. Create JSON API for Notes. Notes left on walls have a date time attached to them, and can be accessed both from the human and user pages. The user can see all the notes he has left, and all the notes that he and other robots have left for users.

[Details][phase-three]

### Phase 4: Searching people and tracking users (2 days)

Users can search for people using a search box, humans will be preseeded with tracking associations. Once the search is implemented, I will extend this to a fuzzy search that matches names. When a search string is typed a clickable drop down appears where you can select the names of user pages you want to go to. Machine users can track and untrack users. Tracked users will appear on their tracked list on their user page. At the same time, the tracker will appear on the tracker list on the human pages.
[Details][phase-four]

### Phase 5: Google map tracking (2-3 days)

All of the user's trackees will show up on his google map. The humans will be given a set of random coordinates to simulate movement in real time. They will be confined to within the boundary of San Francisco to simulate realistic moving speeds. On the human show pages, the human's own coordinate status will be rendered on a map on his respective page. An icon of the user and will show up on the GPS and his name will be displayed on hover.
[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in phase 6 I will add styling flourishes and make the pages color-coordinated. Using the faker and ffaker gems, I will generate about 200 humans and users and their respective associations to seed the database. I will also have a guest login for demo purposes.

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
