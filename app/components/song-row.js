import Ember from 'ember';

const inject = Ember.inject;
const computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['isCurrentSong'],

  song: null,
  player: inject.service(),

  actions: {
    play: function() {
      this.get('player').play(this.get('song'));
    },

    pause: function() {
      this.get('player').pause();
    }
  },

  isCurrentSong: computed('player.song', 'song', function() {
    return this.get('player.song') === this.get('song');
  }),

  isPlaying: computed('isCurrentSong', 'player.isPlaying', function() {
    return this.get('isCurrentSong') && this.get('player.isPlaying');
  })
});
