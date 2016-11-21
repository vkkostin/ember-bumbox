import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  artwork: DS.attr('string'),
  name:DS.attr('string'),
  artist: DS.attr('string'),
  isExplicit: DS.attr('boolean'),
  songs: DS.hasMany('song')
});
