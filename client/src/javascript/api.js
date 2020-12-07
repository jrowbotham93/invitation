const config = (param) => {
  return {
    url: `${process.env.ENDPOINT}/${param ? param : ''}`,
  };
};

//  API calls
//  create a new attendee
export async function createAttendee(data) {
  const { url } = config();
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
}

//  get all attendees
export async function readAttendees() {
  const { url } = config();
  const response = await fetch(url, {
    method: 'GET',
  });
  if (response.ok) {
    const res = await response.json().then((attendee) => attendee);

    let totalCount = 0;
    res.forEach(({ data }) => {
      if (data.plusOne && data.plusOne) {
        totalCount += 1;
      }
      return (totalCount += 1);
    });

    renderAttendeesCount(totalCount);
    renderAttendeesList(res);
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

//  delete an attendees
export async function removeAttendee(id) {
  console.log(id);
  const { url } = config(id);

  const response = await fetch(url, {
    method: 'DELETE',
  });
  if (response.ok) {
    return response;
  }
}

function renderAttendeesList(attendees) {
  if (attendees.length < 1) return;
  else {
    const attendeTable = document.querySelector('.attendeeTable');
    const htmlTick = '<span class="htmlTick">&#10004</span>';
    const htmlCross = '<span class="htmlCross">&#10007;</span>';

    const attendeeRows = `${attendees
      .map(
        ({ id, data }) =>
          `<tr>
            <td>${data.name}</td>
            <td>${data.attending ? htmlTick : htmlCross}</td>
            <td>${data.plusOne ? htmlTick : htmlCross}</td>
            <td>${data.plusOneName}</td>
            <td class="removeAttendee" name="${id}">
              Remove attendee
            </td>
          </tr>`
      )
      .join('')}`;

    attendeTable.insertAdjacentHTML('beforeend', attendeeRows);
  }
}

function renderAttendeesCount(count = 15) {
  const attendeeCount = document.querySelector('.attendeeCount');

  let color = '';

  if (count < 10) color = 'Green';
  else if (count < 20) color = 'Orange';
  else color = 'Red';

  const highlightNumber = `<span class="highlightNumber${color}">${count}</span>`;
  attendeeCount.innerHTML = `Currenly ${highlightNumber} guests confirmed.`;
}

export function renderPlusOneInputField(bool) {
  const textFieldPlusOne = document.querySelectorAll('.textFieldPlusOne');
  textFieldPlusOne.forEach((i) => i.classList.toggle('visible'));
}
