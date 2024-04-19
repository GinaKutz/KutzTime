export const validateName = (name) => {
    if (!name.trim()) {
      return 'Name is required';
    }
    return '';
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return 'Email is required';
    } else if (!emailRegex.test(email)) {
      return 'Invalid email address';
    }
    return '';
  };
  
  export const validateMessage = (message) => {
    if (!message.trim()) {
      return 'Message is required';
    }
    return '';
  };
  