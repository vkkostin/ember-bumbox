import Ember from 'ember';
import Albums from 'bumbox/models/album-fixtures';

export default Ember.Route.extend({
  model() {
    return Albums;
  }
});
