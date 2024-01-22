import { HTMLAttributes, ReactNode } from 'react';
import s from './IconCheckbox.module.scss';

interface IconCheckboxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  backgroundColor?: string;
  onClick: (value: boolean) => void;
  iconSlot?: (value: boolean) => ReactNode;
  value: boolean;
}

export function IconCheckbox(props: IconCheckboxProps) {
  const { onClick, value, backgroundColor = 'orange', iconSlot, ...rest } = props;

  const clickHandler = () => {
    onClick(!value);
  };

  return (
    <div
      className={s.container}
      onClick={clickHandler}
      style={{ background: backgroundColor, color: '#fff' }}
      {...rest}
    >
      {iconSlot(value)}
    </div>
  );
}
