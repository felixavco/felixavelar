import ecommerce from '../../img/ecommerce.PNG';
import cachadas from '../../img/cachadas.PNG';
import devBook from '../../img/devbook.PNG';
import storyBooks from '../../img/storybooks.PNG';
import JSGame from '../../img/JSGame.PNG';

const projects = [
  {
    name: "Ecommerce React", 
    img: ecommerce, 
    github: "https://github.com/felixavco/e_Commerce_React", 
    url: "https://turing.felixavelar.com/", 
    description: "An Ecommerce platform build with React & Redux and Materialize Css as HTML/CSS Framework, responsive design adaptable to all screen sizes. This application displays all the items with a pagination but also supports live searches, the user can add items to the cart and see in real time the quantity of items in cart and the total of all the items in the cart, users can also remove or add more items to the cart."
  }, 

  {
    name: "Cachadas SV", 
    img: cachadas, 
    github: "https://github.com/felixavco/cachadas", 
    url: "http://api.felixavelar.com/", 
    description: "Cachadas (bargains) SV is a fullstack project buid with Node, Express, MongoDB and React & Redux, this application allows users to create post to sell or buy products, in order to create a post the user needs to create an account, once the user creates the account a verification email is sent to the user's email address, the message is sent using Sendgrid's API, the application also supports multiple image uploads, password reset via secret token sent to the registered email address."
  }, 

  {
    name: "DevBook", 
    img: devBook, 
    github: "https://github.com/felixavco/devConnector", 
    url: "https://devbook.herokuapp.com/", 
    description: "DevBook is a full stack appliation build with Node.js, Express, MongoDB, React and Redux, this is a social media for developers, developers can create a profile add experience, education, create post, and comment other user's posts."
  }, 

  {
    name: "StoryBooks", 
    img: storyBooks, 
    github: "https://github.com/felixavco/storybooks", 
    url: "https://favelar-storybooks.herokuapp.com/", 
    description: "Story Books is a Node Application that allow users to create stories, the user has the option to keep their stories private, the user can also post comments on other user's histories, the application allows users to register or login using their Google or Facebook account the user data is then stored in a MongoDB database, the views are buid with Handlebars."
  },
  {
    name: "JS Game", 
    img: JSGame, 
    github: "https://github.com/felixavco/Veyrix_game", 
    url: "http://veyrix.xyz", 
    description: "This is a simple game build with vanilla JavaScript, the game objective is to hit Olaf with the hammer"
  }
]



export default projects;