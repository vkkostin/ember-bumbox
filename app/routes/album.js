import Ember from 'ember';
import albums from 'bumbox/models/album-fixtures';

export default Ember.Route.extend({
  model(param) {
    return albums.findBy('id', param.album_id);
  }
});
