import '../index.html';
import '../styles/app.css';

import { validateCheckboxInput } from './utils';
import { renderMainContent, renderPlusOneInputField } from './render';
import { createAttendee, readAttendees, updateAttendee } from './api';

window.addEventListener('load', async function () {
  document.body.innerHTML = renderMainContent;

  await readAttendees();

  const attendeeRow = document.querySelectorAll('.attendeeRow');
  const attendeeDetailsForm = document.querySelector('.attendeeDetailsForm');
  const attendeeListField = document.querySelectorAll('.attendeeListField');
  const mainContainer = document.querySelector('.container');
  const checkboxPlusOne = document.querySelector('.checkboxPlusOne');

  attendeeRow.forEach((i) => {
    i.addEventListener('click', (e) => {
      e.target.parentElement.nextElementSibling.classList.add(
        'transformActive'
      );
      mainContainer.classList.add('modalOverlay');
      // for screen readers - modal will otherwise mess them up
      mainContainer.setAttribute('aria-hidden', 'true');
    });
  });

  attendeeListField.forEach((i) => {
    i.querySelector('.closeForm').addEventListener('click', (e) => {
      e.target.closest('form').classList.remove('transformActive');
      mainContainer.classList.remove('modalOverlay');
      mainContainer.removeAttribute('aria-hidden', 'true');
    });

    i.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const attendeeId = e.target.id;

      let dataFromForm = {};

      for (let data of formData.entries()) {
        dataFromForm[data[0]] = data[1];
      }

      dataFromForm.attending = validateCheckboxInput(dataFromForm.attending);
      dataFromForm.plusOne = validateCheckboxInput(dataFromForm.plusOne);

      updateAttendee(dataFromForm, attendeeId);

      e.target.reset();

      e.target.remove('transformActive');
      mainContainer.classList.remove('modalOverlay');
      mainContainer.removeAttribute('aria-hidden', 'true');
    });
  });

  attendeeDetailsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let dataFromForm = {};

    for (let data of formData.entries()) {
      dataFromForm[data[0]] = data[1];
    }

    dataFromForm.attending = validateCheckboxInput(dataFromForm.attending);
    dataFromForm.plusOne = validateCheckboxInput(dataFromForm.plusOne);

    createAttendee(dataToPost);

    e.target.reset();
  });

  checkboxPlusOne.addEventListener('change', (event) => {
    const bool = validateCheckboxInput(event.target.value);
    renderPlusOneInputField(bool);
  });
});
