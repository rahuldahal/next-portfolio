'use client';

import classNames from 'classnames';

export default function InputField({
  id,
  label,
  value,
  error,
  type = 'text',
  onChange,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="uppercase text-sm text-gray-600 font-bold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={classNames(
          'w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline',
          { 'border-red-500': error }
        )}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
