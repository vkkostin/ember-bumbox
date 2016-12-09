import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['isCurrentSong:is-current-song'],

  player: Ember.inject.service(),

  isCurrentSong: Ember.computed('player.song', 'song', function() {
    return this.get('player.song') === this.get('song');
  }),

  isPlaying: Ember.computed('player.isPlaying', 'isCurrentSong', function() {
    return this.get('isCurrentSong') && this.get('player.isPlaying');
  }),

  actions: {
    play() {
      this.get('player').play(this.get('song'));
    },
    pause() {
      this.get('player').pause();
    }
  }
});
