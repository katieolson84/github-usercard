import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cardContainer = document.querySelector(".cards");

function cardMaker(cardObj) {
// instantiating the elements
  const card = document.createElement('div');
  const profilePic = document.createElement('img');
  const cardInfo = document.createElement('div');

// items in the card-info
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

// add to html
  card.appendChild(profilePic);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

// pulling data
  profilePic.setAttribute('src', cardObj.avatar_url);
  name.textContent = cardObj.name
  username.textContent = cardObj.login
  location.textContent = cardObj.location
  profile.textContent = 'Profile: ' //tried adding html_url here but it doesn't hyperlink
  profileLink.setAttribute = ('href', cardObj.html_url);
  console.log(profileLink); //console.log just shows a tag?
  profileLink.textContent = cardObj.html_url;
  // console.log(profile.link);
  followers.textContent = 'Followers: ' + cardObj.followers
  following.textContent = 'Following: ' + cardObj.following
  bio.textContent = 'Bio: ' + cardObj.bio
// adding classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  return card
}

const followersArray = [ 'katieolson84', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
  followersArray.forEach(username => {

axios.get(`https://api.github.com/users/${username}`)
  .then(res => {
    console.log(res.data)
    cardContainer.append(cardMaker(res.data));
  })
  .catch(drama => {
    console.log(drama)
  })
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

