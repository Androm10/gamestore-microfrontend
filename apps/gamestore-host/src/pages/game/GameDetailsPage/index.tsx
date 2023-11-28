import { Game } from "@/entities/game/model/types";

export function GameDetailsPage() {
  const mockGame: Game = {
    id: 1,
    name: "Shit",
    description: "crap game",
    releaseDate: new Date(),
    price: 29.99,
    avatarUrl: "/mocks/mockgame1.jpg",
  };

  return (
    <div>
      <img src={mockGame.avatarUrl} />
      <div>{mockGame.name}</div>
    </div>
  );
}
