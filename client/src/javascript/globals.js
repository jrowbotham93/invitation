export const submitForm = document.querySelector('.submitForm');
export const attendeeDetailsForm = document.querySelector(
  '.attendeeDetailsForm'
);
export const attendeeListField = document.querySelector('.attendeeListField');

export const config = (param) => {
  return {
    url: `${process.env.ENDPOINT}/${param ? param : ''}`,
  };
};
