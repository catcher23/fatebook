var Layout = React.createClass({
  render: function () {
    return(
<main class="content group">

  <header class="content-header">
    <h1>Sennacy The Great</h1>
    <button class="content-header-add-friend">Add Friend</button>
  </header>

  <section class="content-sidebar">

    <div class="profile-picture">

      <img src="https://pbs.twimg.com/profile_images/424484505915621376/EOwsjaMZ.png" alt=""/>
    </div>

    <div class="profile-info">
      <h2>Sennacy</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    <ul class="profile-nav">
      <li><a href="#">Wall</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Friends</a></li>
      <li><a href="#">Photos</a></li>
    </ul>

    <ul class="profile-friends group">

    </ul>

  </section>
  <section class="content-main">

  </section>
</main>


);
}
});
