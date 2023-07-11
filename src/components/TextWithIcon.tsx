import classNames from 'classnames';
import Icon from './Icon';

interface props {
  label: string;
  iconPathData: string;
  iconOnLeft?: boolean;
}

export default function TextWithIcon({
  label,
  iconPathData,
  iconOnLeft = false,
}: props): JSX.Element {
  return (
    <span
      className={classNames('flex justify-center gap-2', {
        'flex-row-reverse': iconOnLeft,
      })}
    >
      <span>{label}</span>
      <Icon iconPathData={iconPathData} className="w-6 h-6" />
    </span>
  );
}
