import Ember from 'ember';

var inject = Ember.inject;
var computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['now-playing'],

  showCurrentTime: true,

  player: inject.service(),

  song: computed.readOnly('player.song'),

  remainingTime: computed('song.duration', 'player.currentTime', function() {
    return this.get('song.duration') - this.get('player.currentTime');
  }),

  actions: {
    pause: function() {
      this.get('player').pause();
    },

    resume: function() {
      this.get('player').resume();
    },

    toggleTimeDisplay: function() {
      this.toggleProperty('showCurrentTime');
    }
  }
});
