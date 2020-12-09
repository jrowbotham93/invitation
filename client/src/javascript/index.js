import '../index.html';
import '../styles/app.css';

import { validateCheckboxInput } from './utils';
import { renderPlusOneInputField } from './render';
import { checkboxPlusOne } from './globals';

import { createAttendee, readAttendees } from './api';

window.addEventListener('load', async function () {
  await readAttendees();

  document
    .querySelector('.attendeeDetailsForm')
    .addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      let dataToPost = {
        attending: (attendee) => validateCheckboxInput(attendee),
        plusOne: (attendee) => validateCheckboxInput(attendee),
      };

      for (let data of formData.entries()) {
        dataToPost[data[0]] = data[1];
      }
      createAttendee(dataToPost);
      e.target.reset();
    });

  checkboxPlusOne.addEventListener('change', (event) => {
    const bool = validateCheckboxInput(event.target.value);
    renderPlusOneInputField(bool);
  });
});
