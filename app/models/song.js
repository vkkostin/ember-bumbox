import DS from 'ember-data';

export default DS.Model.extend({
<<<<<<< HEAD
=======
  id: DS.attr('number'),
>>>>>>> 2063b040fa4a94207c341aa957fa083402816ef0
  track: DS.attr('number'),
  name: DS.attr('string'),
  duration: DS.attr('number'),
  url: DS.attr('string'),
  album: DS.belongsTo('album')
});
