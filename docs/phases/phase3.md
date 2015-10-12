# Phase 3: Walls and Comments (2 days)

## Rails
### Models
* Post
* Comment

### Controllers
* Api::PostsController (create, destroy, index, show, update)
* Api::CommentsController (create, destroy, index, show, update)

### Views
* user/index.json.jbuilder
* posts/show.json.jbuilder
* comments/show.json.jbuilder

## Flux
### Views (React Components)
* NotebooksIndex
  - NotebookIndexItem
* NotebookForm
* SearchIndex

### Stores
* Notebook

### Actions
* ApiActions.receiveAllPosts
* ApiActions.receiveSinglePost
* ApiActions.deletePost
* ApiActions.receiveAllComments
* ApiActions.receiveSingleComment
* ApiActions.deleteComment
### ApiUtil
* ApiUtil.fetchAllPosts
* ApiUtil.fetchSinglePost
* ApiUtil.createPost
* ApiUtil.editPost
* ApiUtil.destroyPost
* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment

## Gems/Libraries
