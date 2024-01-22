import { ReactNode } from 'react';
import s from './LayoutHeader.module.scss';

interface LayoutHeaderProps {
  rightSlot?: ReactNode;
}

export function LayoutHeader(props: LayoutHeaderProps) {
  const { rightSlot } = props;

  return (
    <header>
      <div className={s.logo}>GAMESHOP</div>
      <div>{rightSlot}</div>
    </header>
  );
}
