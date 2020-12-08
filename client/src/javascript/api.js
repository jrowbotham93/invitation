import { attendeeState } from './state';
import { config } from './globals';
import { renderAttendeesCount, renderAttendeesList } from './render';

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
    res.json().then(function (attendee) {
      renderAttendeesList(Array(attendee));
      let count = attendee.data.plusOne ? 2 : 1;
      renderAttendeesCount((attendeeState.attendeeCount += count));
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
    await getTotalAttendees(res);
  }
}

function getTotalAttendees(attendees) {
  attendees.forEach(({ data }) => {
    if (data.plusOne && data.plusOne) {
      attendeeState.attendeeCount += 1;
    }
    return (attendeeState.attendeeCount += 1);
  });
  renderAttendeesCount(attendeeState.attendeeCount);
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
