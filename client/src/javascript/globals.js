export const attendeeTable = document.querySelector('.attendeeTable');
export const attendeeCount = document.querySelector('.attendeeCount');
export const form = document.querySelector('.attendeeDetailsForm');
export const checkboxPlusOne = document.querySelector('.checkboxPlusOne');

export const config = (param) => {
  return {
    url: `${process.env.ENDPOINT}/${param ? param : ''}`,
  };
};
