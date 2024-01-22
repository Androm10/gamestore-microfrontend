import { Game } from '../../model/types';
import s from './GameDiscount.module.scss';

interface GameDiscountProps {
  game: Game;
}

export function GameDiscount(props: GameDiscountProps) {
  const { game } = props;
  game.id;

  return <div className={s.container}>-{20}% </div>;
}
