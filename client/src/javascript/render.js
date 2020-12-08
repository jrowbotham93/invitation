import { attendeeCount, attendeeTable } from './globals';

export function renderAttendeesCount(count) {
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

const tableRow = (id, data) =>
  `<tr class="attendeeRow">
    <td>${data.name}</td>
    <td>${
      data.attending
        ? '<span class="htmlTick">&#10004</span>'
        : '<span class="htmlCross">&#10007;</span>'
    }</td>
    <td>${
      data.plusOne
        ? '<span class="htmlTick">&#10004</span>'
        : '<span class="htmlCross">&#10007;</span>'
    }</td>
    <td>${data.plusOneName}</td>
    <td class="removeAttendee" name="${id}">
      Remove attendee
    </td>
  </tr>`;

export function renderAttendeesList(attendees) {
  if (attendees.length < 1) return;
  else {
    const attendeeRows = `${attendees
      .map(({ id, data }) => tableRow(id, data))
      .join('')}`;
    attendeeTable.insertAdjacentHTML('beforeend', attendeeRows);
  }
}
