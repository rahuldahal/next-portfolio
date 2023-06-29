import { match } from '../utils';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Inter, Roboto } from '@next/font/google';
import { errorMessages, regex } from '../constants/validation';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

// TODO: apply CAPTCHA and reCAPTCHA

export default function Form(): JSX.Element {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    fullName: '',
    message: '',
  });

  const commonInputStyles =
    'w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-400';

  useEffect(() => {
    if (!validated) {
      return;
    }

    console.log('Send the Message...');
  }, [validated]);

  function validateForm() {
    let isValid = true;
    const newErrors = {
      email: '',
      fullName: '',
      message: '',
    };

    if (!match(email, regex.email)) {
      newErrors.email = errorMessages.email;
      isValid = false;
    }

    if (!match(fullName, regex.alpha)) {
      newErrors.fullName = errorMessages.fullname;
      isValid = false;
    }

    if (message.length > 100) {
      newErrors.message = errorMessages.message;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Submit form logic here
      console.log('Form validated successfully!');
      setValidated(true);

      // Clear input fields
      setEmail('');
      setFullName('');
      setMessage('');
    }
  }

  return (
    <section className={classNames(roboto.className, 'pt-40')}>
      <h1
        className={classNames(
          inter.className,
          'text-center text-3xl font-bold'
        )}
      >
        Send me a Direct Message
      </h1>
      <small className="block text-center">
        I'll get back to you as soon as possible.
      </small>
      <form className="max-w-md mx-auto mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={classNames(commonInputStyles, {
              'border-red-500': errors.email,
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className={classNames(commonInputStyles, {
              'border-red-500': errors.fullName,
            })}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            className={classNames(commonInputStyles, {
              'border-red-500': errors.message,
            })}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary-400 text-gray-100 rounded hover:bg-primary-500"
        >
          Send
        </button>
      </form>
    </section>
  );
}
