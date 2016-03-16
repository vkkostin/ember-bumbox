import Ember from 'ember';

const inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'tr',
  isPlaying: false,
  player: inject.service(),

  actions: {
    play: function() {
      this.get('player').play(this.get('song'));
      this.set('isPlaying', true);
    },

    pause: function() {
      this.get('player').pause();
      this.set('isPlaying', false);
    }
  }
});
