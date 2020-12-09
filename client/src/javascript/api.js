// import { attendeeState } from './state';
import { config } from './globals';
import { renderAttendeesList } from './render';
import { getTotalAttendees } from './utils';

//  create a new attendee
export async function createAttendee(data) {
  const { url } = config();
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    res.json().then(async function (attendee) {
      await getTotalAttendees(attendee);
    });
  }
}

//  get all attendees
export async function readAttendees() {
  const { url } = config();
  const response = await fetch(url, {
    method: 'GET',
  });
  if (response.ok) {
    const res = await response.json().then((attendee) => attendee);
    await renderAttendeesList(res);
    res.forEach((attendee) => getTotalAttendees(attendee));
  }
}

//  update an attendee
export async function updateAttendee(data, id) {
  const { url } = config(id);

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
}

//  delete an attendee
export async function removeAttendee(id) {
  attendeeState.attendeeToRemove = id;

  const { url } = config(id);
  const response = await fetch(url, {
    method: 'DELETE',
  });
  if (response.ok) {
    return response;
  }
}
