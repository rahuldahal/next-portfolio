import Link from 'next/link';
import { match } from '../utils';
import classNames from 'classnames';
import InputField from './InputField';
import TextWithIcon from './TextWithIcon';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { hCAPTCHA_SITE_KEY } from '../constants';
import { Inter, Roboto } from '@next/font/google';
import React, { useEffect, useState } from 'react';
import { iconPaths } from '../constants/iconPaths';
import { errorMessages, regex } from '../constants/validation';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Form() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    fullName: '',
    message: '',
  });

  useEffect(() => {
    if (!validated) {
      console.log('The provided data is not valid!');
      return;
    }

    if (!isVerified) {
      console.log('Verify that you are not a robot!');
      return;
    }

    console.log('Send the Message...');
  }, [validated, isVerified]);

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

  async function handleCAPTCHA(token) {
    const res = await fetch('/api/verifyhCAPTCHA', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token,
      }),
    });

    const data = await res.json();

    setIsVerified(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid && isVerified) {
      // Submit form logic here
      console.log('Form validated and verified successfully!');
      setValidated(true);

      // Clear input fields
      setEmail('');
      setFullName('');
      setMessage('');
    }
  }

  return (
    <section
      className={classNames(
        roboto.className,
        'bg-primary-600 text-gray-100 px-4 md:px-8 py-12'
      )}
    >
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2
              className={classNames(
                inter.className,
                'text-4xl lg:text-5xl font-bold leading-tight'
              )}
            >
              Let&apos;s talk about everything!
            </h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send me an{' '}
              <Link href="mailto:rdaahal@gmail.com" className="underline">
                email
              </Link>{' '}
              instead.
            </div>
          </div>
          <Image
            src="/images/contact.svg"
            alt="Contact Us Illustration"
            width={480}
            height={300}
            className="block mt-8 text-center"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <InputField
            id="email"
            label="Email"
            value={email}
            error={errors.email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            id="fullName"
            label="Full Name"
            value={fullName}
            error={errors.fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <div className="mb-4">
            <label
              htmlFor="message"
              className="uppercase text-sm text-gray-600 font-bold"
            >
              Message
            </label>
            <textarea
              id="message"
              className={classNames(
                'w-full px-4 py-2 bg-gray-200 border rounded focus:outline-none focus:border-primary-400',
                { 'border-red-500': errors.message }
              )}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <HCaptcha sitekey={hCAPTCHA_SITE_KEY} onVerify={handleCAPTCHA} />

          <button
            disabled={!isVerified && !validated}
            type="submit"
            className={classNames(
              'w-full py-2 px-4 bg-primary-400 text-gray-100 rounded hover:bg-primary-500',
              { 'opacity-50 cursor-not-allowed': !isVerified && !validated }
            )}
          >
            <TextWithIcon label="Send" iconPathData={iconPaths.send} />
          </button>
        </form>
      </div>
    </section>
  );
}
