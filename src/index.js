import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  $('.cards-container').click(function() {
    $ ('.fa-diamond').show();
  });
}); 
// function Game(){
//   this.matchCount = 0;
//   this.tryCounter = 0;
// }

// Game.prototype.cardMatch()
