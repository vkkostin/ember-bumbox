import Ember from 'ember';

export default Ember.Service.extend({
  play() {
    console.log("Play");
  },
  pause() {
    console.log("Pause")
  }

});
