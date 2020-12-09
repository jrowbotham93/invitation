export const attendeeFieldSetList = document.querySelector(
  '.attendeeFieldsetList'
);
export const attendeeCount = document.querySelector('.attendeeCount');
export const submitForm = document.querySelector('.submitForm');
export const checkboxPlusOne = document.querySelector('.checkboxPlusOne');
export const attendeeRow = document.querySelector('.attendeeRow');

export const config = (param) => {
  return {
    url: `${process.env.ENDPOINT}/${param ? param : ''}`,
  };
};
