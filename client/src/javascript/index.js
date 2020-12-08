import '../index.html';
import '../styles/app.css';

import { attendeeState } from './state';
import { validateCheckboxInput } from './utils';
import { renderPlusOneInputField, renderAttendeesCount } from './render';
import { form, checkboxPlusOne } from './globals';

import { createAttendee, readAttendees, removeAttendee } from './api';

window.addEventListener('load', async function () {
  await readAttendees();

  const removeSelectedAttendee = document.querySelectorAll('.removeAttendee');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    new FormData(form);
  });

  form.addEventListener('formdata', (event) => {
    let data = event.formData;

    let dataToPost = {};

    for (let responses of data.entries(data)) {
      dataToPost[responses[0]] = responses[1];
    }

    dataToPost.attending = validateCheckboxInput(dataToPost.attending);
    dataToPost.plusOne = validateCheckboxInput(dataToPost.plusOne);

    createAttendee(dataToPost);
    form.reset();
  });

  removeSelectedAttendee.forEach((tableRow) => {
    tableRow.addEventListener('click', (event) => {
      let attendeeId = event.target.getAttribute('name');
      let plusOne = event.target.previousElementSibling.innerHTML;
      let count = plusOne.length ? 2 : 1;

      renderAttendeesCount((attendeeState.attendeeCount -= count));
      removeAttendee(attendeeId);

      return event.target.parentElement.remove();
    });
  });

  checkboxPlusOne.addEventListener('change', (event) => {
    const bool = validateCheckboxInput(event.target.value);
    renderPlusOneInputField(bool);
  });
});
