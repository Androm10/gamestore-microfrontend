import { ReactNode } from 'react';
import { Game } from '../../model/types';
import s from './GameCard.module.scss';
import { GameDiscount } from '../GameDiscount';

interface GameCardProps {
  game: Game;
  bottomActionSlot?: ReactNode;
}

export function GameCard(props: GameCardProps) {
  const { game, bottomActionSlot } = props;

  const isDiscounted = false;

  return (
    <div className={s.container}>
      <div className={s.posterContainer}>
        <img className={s.poster} src={game.avatarUrl} />
      </div>
      <div className={s.content}>
        <div className={s.name}>
          <label>{game.name}</label>
        </div>
        <label className={s.price}>${game.price}</label>
        <div className={s.dropupMenu}>{bottomActionSlot}</div>
      </div>
      {isDiscounted && (
        <div className={s.discount}>
          <GameDiscount game={game} />
        </div>
      )}
    </div>
  );
}
