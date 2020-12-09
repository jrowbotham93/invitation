import { attendeeCount, attendeeFieldSetList } from './globals';

export function renderAttendeesCount(count) {
  let color = '';
  console.log(count);
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

const tableRow = (attendeeId, data) =>
  `<tr class="attendeeRow" id=${attendeeId}>
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
  </tr>`;

const tableRowNew = (attendeeId, data, index) =>
  `<fieldset class="space-evenly flex attendeeRow" id=${attendeeId}>
    <div class="flex column">
      <label for="nameField-${index}">Guest name</label>
      <input type="text" id="nameField-${index}" value="${data.name}"/>
    </div>
    <div class="flex column">
      <label for="attendingField-${index}">${
    data.attending ? 'Attending' : 'Not attending'
  }</label>
      <input type="checkbox" id="attendingField-${index}" ${
    data.attending ? 'checked' : ''
  }/>
    </div>
    <div class="flex column">
      <label for="plusoneField-${index}">${
    data.plusOne ? 'Plus One' : 'No Plus one'
  }</label>
      <input type="checkbox" id="plusoneField-${index}" ${
    data.plusOne ? 'checked' : ''
  }/>
    </div>
    <div class="flex column">
      <label for="plusoneNameField-${index}">${
    data.plusOne ? 'Name of plus one' : ''
  }</label>
    <input type="text" id="plusoneNameField-${index}" value="${
    data.plusOneName
  }"/>
    </div>
    <input class="visible" id="submitField-${index}" type="submit" value="submit change"/>
  </fieldset>`;

export function renderAttendeesList(attendees) {
  if (attendees.length < 1) return;
  else {
    const attendeeFieldset = `${attendees
      .map(({ id, data }, index) => tableRowNew(id, data, index))
      .join('')}`;
    attendeeFieldSetList.insertAdjacentHTML('beforeend', attendeeFieldset);
  }
}
