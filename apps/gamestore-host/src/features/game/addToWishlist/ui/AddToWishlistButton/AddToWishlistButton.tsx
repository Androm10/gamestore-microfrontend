import HeartSvg from '/public/svg/heart.svg';
import HeartFilledSvg from '/public/svg/heart-filled.svg';
import { Game } from '@/entities/game/model/types';
import { IconCheckbox } from '@/shared/ui/IconCheckbox';
import { useState } from 'react';

interface AddToWishlistButtonProps {
  backgroundColor?: string;
  game: Game;
}

//TODO: add login modal if user is not logged in

export function AddToWishlistButton(props: AddToWishlistButtonProps) {
  const { backgroundColor = 'orange' } = props;

  const [gameInWishlist, setGameInWishlist] = useState(false);

  const addToWishlistHandler = (value: boolean) => {
    setGameInWishlist(value);
  };

  const iconSlotHandler = (value: boolean) => {
    if (value) return <HeartFilledSvg />;
    return <HeartSvg />;
  };

  return (
    <IconCheckbox
      value={gameInWishlist}
      iconSlot={iconSlotHandler}
      backgroundColor={backgroundColor}
      onClick={addToWishlistHandler}
    />
  );
}
