export const regex = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  alpha: /^[a-zA-Z ]+$/,
};

export const errorMessages = {
  email: 'The provided input is not an email.',
  fullname: 'The provided input is not alphabetic.',
  message: 'The message must not exceed 100 characters.',
};
