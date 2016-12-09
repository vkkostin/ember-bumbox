import Ember from 'ember';

export default Ember.Service.extend({
  isPlaying: false,
  audioElement: null,
  song: null,
  currentTime: 0,

  setupAudioElement: function() {
    var el = document.createElement('audio');
    el.addEventListener('play', Ember.run.bind(this, 'didStartPlaying'));
    el.addEventListener('timeupdate', Ember.run.bind(this, 'timeDidUpdate'));
    el.addEventListener('pause', Ember.run.bind(this, 'didPause'));
    this.set('audioElement', el);
  }.on('init'),

  play: function(song) {
    this.set('song', song);
    this.set('audioElement.src', song.get('url'));
    this.get('audioElement').play();
  },

  pause: function() {
    this.get('audioElement').pause();
  },

  didStartPlaying: function() {
    this.set('isPlaying', true);
  },

  timeDidUpdate: function() {
    this.set('currentTime', Math.floor(this.get('audioElement').currentTime));
  },

  didPause: function() {
    this.set('isPlaying', false);
  },

  willDestroy: function() {
    this.get('audioElement').pause();
    this.set('audioElement.src', '');
  }
});
