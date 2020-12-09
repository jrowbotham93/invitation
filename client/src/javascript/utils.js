import { attendeeState } from './state';
import { renderAttendeesCount } from './render';

export function validateCheckboxInput(input) {
  return input === 'on' ? true : false;
}

export function getTotalAttendees(attendee) {
  if (!attendee) return;

  let { data } = attendee;

  if (data['plusOne'] && data['plusOneName'].length) {
    attendeeState.count += 1;
  }
  if (data['attending'] && data['name'].length) {
    attendeeState.count += 1;
  }
}

attendeeState.registerNewListener((val) => renderAttendeesCount(val));
