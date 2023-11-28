import { Game } from "@/entities/game/model/types";
import { GameList } from "@/entities/game/ui/GameList";
import { Link } from "react-router-dom";

export function GameCatalogPage() {
  const mockGames: Game[] = [
    {
      id: 1,
      name: "Shit",
      description: "crap game",
      releaseDate: new Date(),
      price: 29.99,
      avatarUrl: "mocks/mockgame1.jpg",
    },
    {
      id: 2,
      name: "Wallout",
      description: "Postapocalypse western shooter",
      releaseDate: new Date(),
      price: 15.99,
      avatarUrl: "mocks/mockgame2.jpg",
    },
  ];

  return (
    <div>
      Game catalog
      <GameList
        games={mockGames}
        gameCardBottomSlot={(game: Game) => {
          return (
            <div>
              {" "}
              <Link to={"/game/" + game.id}>Details</Link>{" "}
            </div>
          );
        }}
      />
    </div>
  );
}
