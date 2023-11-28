import { ReactNode } from "react";
import { Game } from "../../model/types";
import { GameCard } from "../GameCard";
import s from "./GameList.module.scss";

interface GameListProps {
  games: Game[];
  gameCardBottomSlot?: (game: Game) => ReactNode;
}

export function GameList(props: GameListProps) {
  const { games, gameCardBottomSlot } = props;

  return (
    <div className={s.gameList}>
      {games.map((game, index) => (
        <GameCard
          key={game.id}
          game={game}
          bottomActionSlot={
            gameCardBottomSlot ? gameCardBottomSlot(game) : undefined
          }
        />
      ))}
    </div>
  );
}
