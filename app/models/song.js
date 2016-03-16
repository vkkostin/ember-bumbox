import DS from 'ember-data';
import Ember from 'ember';

const attr = DS.attr;
const belongsTo = DS.belongsTo;
const computed = Ember.computed;

export default DS.Model.extend({
  track: attr('number'),
  name: attr('string'),
  duration: attr('number'),
  url: attr('string'),
  album: belongsTo('album'),

  artist: computed.alias('album.artist'),
  artwork: computed.alias('album.artwork')
});

