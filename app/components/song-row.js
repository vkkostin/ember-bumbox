import Ember from 'ember';

export default Ember.Component.extend({
  player: Ember.inject.service(),

  tagName: 'tr',
  isPlaying: false,

  actions: {
    play() {
      this.set('isPlaying', true);
      this.get('player').play();
    },
    pause() {
      this.set('isPlaying', false);
      this.get('player').pause();
    }
  }
});
