export const renderMainContent = `<main>
            <div class="container spacing flex flex-center column">
                <h1>Gijs & James</h1>
                <h2>are getting married...</h2>
                <h3>Come and celebrate with us</h3>

                <time datetime="2020-12-18">18th Decemeber</time>
                <time>16:00 - late</time>
                <a
                    href="https://goo.gl/maps/nkPE6bxaerDQS1j6A"
                    alt="directions">
                    Bercylaan 71, 1031KP, Amsterdam
                </a>
                <p class="spacingVertical"> Please fill out the form below so we can keep track of numbers</p>
                <h2 class="attendeeCount"></h2>
                <form class="form flex flex-center spacingVertical attendeeDetailsForm" name="attendeeDetailsForm">
                    <fieldset class="fieldset flex column space-evenly">
                        <legend>Add yourelf as an attendee</legend>

                        <label for="name">Attendee Name</label>
                        <input  type="text" name="name" alt="attendee name" required placeholder="James Smith"  />

                        <label for="attending">Tick the box if you are definitely attending</label>
                        <input class="checkboxAttending" type="checkbox" name="attending" value="true" alt="attending guest"  />

                        <label for="plusOne">Tick the box if you would like a plus one</label>
                        <input class="checkboxPlusOne" type="checkbox" name="plusOne" value="true" alt="plus one"  />

                        <label class="textFieldPlusOne " for="plusOneName">Plus one's name</label>
                        <input class="textFieldPlusOne " type="text" name="plusOneName" placeholder="Samuel Smith" alt="plus one name"/>
                        <input type="submit" class="submitForm" value="Submit"/>
                    </fieldset>
                </form>
                <section class="flex flex-center column attendeeFieldsetList">
                    <h2 >Guest list</h2>
                </section>
            </div>
        </main>`;

export function renderAttendeesCount(count) {
  const attendeeCount = document.querySelector('.attendeeCount');
  let color = '';
  if (count < 10) color = 'Green';
  else if (count < 20) color = 'Orange';
  else color = 'Red';

  const highlightNumber = `<span class="highlightNumber${color}">${count}</span>`;
  attendeeCount.innerHTML = `Currenly ${highlightNumber} guests confirmed.`;
}

export function renderPlusOneInputField() {
  const textFieldPlusOne = document.querySelectorAll('.textFieldPlusOne');
  textFieldPlusOne.forEach((i) => i.classList.toggle('slideDown'));
}

const editAttendee = (
  { name, attending, plusOne, plusOneName = '' },
  index,
  attendeeId
) => `<form class="attendeeListField" id="${attendeeId}">
        <input type="button" class="closeForm" value="Close"/>
        <fieldset class="fieldset">
          <legend> Update ${name}</legend>
            <div>
              <label for="name-${index}">Name</label>
              <input type="text" id="name-${index}" name="name" value="${name}" placeholder="${name}"/>
            </div>
            <div>
              <label for="attending-${index}">Attending</label>
              <input type="checkbox" ${
                attending && 'checked'
              }  name="attending" id="attending-${index}"/>
            </div>
            <div>
              <label for="plusone-${index}">Plus One</label>
              <input id="plusone-${index}" ${
  plusOne && 'checked'
} name="plusOne" type="checkbox"/>
            </div>
            <div>
              <label for="plusOneName-${index}">Plus One Name</label>
              <input id="plusOneName-${index}" name="plusOneName" value="${plusOneName}" type="text" placeholder="${
  plusOneName || ''
}"/>
            </div>
            <div class="flex flex-center">
              <input type="submit" class="submitForm" value="Submit"/>
            </div>
          </fieldset>
        </form>`;

const tableRowNew = (attendeeId, data, index) => {
  return `<div class="flex-center flex attendeeRow">
      <span>${data.name} ${
    data.attending ? 'is attending ' : 'is not attending '
  }${data.plusOne ? 'with ' : ''}${data.plusOneName}</span></div>
    ${editAttendee(data, index, attendeeId)}
  `;
};

export function renderAttendeesList(attendees) {
  const attendeeFieldSetList = document.querySelector('.attendeeFieldsetList');
  if (attendees.length < 1) return;
  else {
    const attendeeFieldset = `${attendees
      .map(({ id, data }, index) => tableRowNew(id, data, index))
      .join('')}`;
    attendeeFieldSetList.insertAdjacentHTML('beforeend', attendeeFieldset);
  }
}
