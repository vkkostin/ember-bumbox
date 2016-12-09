import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: 'now-playing',

  player: Ember.inject.service(),

  isPlaying: Ember.computed('player.isPlaying', function() {
    return this.get('player.isPlaying');
  }),

  song: Ember.computed('player.song', function() {
    return this.get('player.song');
  })

});
