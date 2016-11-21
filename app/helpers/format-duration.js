import Ember from 'ember';

export function formatDuration(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  let formattedSec = (seconds < 10) ? "0" + seconds : seconds
  return minutes + ":" + formattedSec;
}

export default Ember.Helper.helper(formatDuration);
