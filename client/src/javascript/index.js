// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

import { validateCheckboxInput } from './utils';
import '../index.html';
import '../styles/app.css';
import {
  createAttendee,
  readAttendees,
  renderPlusOneInputField,
  removeAttendee,
} from './api';

window.addEventListener('load', async function () {
  await readAttendees();

  const form = document.querySelector('.attendeeDetailsForm');
  const checkboxPlusOne = document.querySelector('.checkboxPlusOne');
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

  removeSelectedAttendee.forEach((tableRow) =>
    tableRow.addEventListener('click', (event) => {
      removeAttendee(event.target.getAttribute('name'));
    })
  );

  checkboxPlusOne.addEventListener('change', (event) => {
    const bool = validateCheckboxInput(event.target.value);
    renderPlusOneInputField(bool);
  });
});
