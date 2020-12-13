import { attendeeState } from './state';
import { renderAttendeesCount } from './render';

export function validateCheckboxInput(input) {
  if (input === 'true' || input === 'on') input = true;
  else input = false;
  return input;
}

export function sortaAttendees(array) {
  return array.sort((a, b) => {
    return Number(b.data.plusOne) - Number(a.data.plusOne);
  });
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
