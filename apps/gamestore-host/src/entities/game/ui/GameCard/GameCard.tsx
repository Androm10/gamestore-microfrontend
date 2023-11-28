import { ReactNode } from "react";
import { Game } from "../../model/types";
import s from "./GameCard.module.scss";

interface GameCardProps {
  game: Game;
  bottomActionSlot?: ReactNode;
}

export function GameCard(props: GameCardProps) {
  const { game, bottomActionSlot } = props;

  return (
    <div className={s.container}>
      <div className={s.posterContainer}>
        <img className={s.poster} src={game.avatarUrl} />
      </div>
      <div className={s.content}>
        <div className={s.name}>
          <label>{game.name}</label>
        </div>
        <label>${game.price}</label>
        <div className={s.dropupMenu}>{bottomActionSlot}</div>
      </div>
    </div>
  );
}
