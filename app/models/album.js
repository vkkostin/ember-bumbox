import DS from 'ember-data';
import Ember from 'ember';

const attr = DS.attr;
const hasMany = DS.hasMany;
const computed = Ember.computed;

export default DS.Model.extend({
  artwork: attr('string'),
  name: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: hasMany('songs'),

  songDurations: computed.mapBy('songs', 'duration'),
  totalDuration: computed.sum('songDurations'),
  songCount: computed.alias('songs.length')
});

