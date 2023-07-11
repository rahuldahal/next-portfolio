'use client';

type props = {
  iconPathData: string | string[];
  className?: string;
};

export default function Icon({
  iconPathData,
  className = '',
}: props): JSX.Element {
  const pathData =
    typeof iconPathData === 'string' ? [iconPathData] : iconPathData;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {pathData.map((data, index) => {
        return (
          <path key={index} fillRule="evenodd" clipRule="enenodd" d={data} />
        );
      })}
    </svg>
  );
}
