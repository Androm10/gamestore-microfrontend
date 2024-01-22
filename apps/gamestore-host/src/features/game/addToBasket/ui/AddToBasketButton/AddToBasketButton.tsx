import BasketSvg from '/public/svg/basket.svg';
import CloseSvg from '/public/svg/close.svg';
import { Game } from '@/entities/game/model/types';
import { IconCheckbox } from '@/shared/ui/IconCheckbox';
import { useState } from 'react';

interface AddToBasketButtonProps {
  backgroundColor?: string;
  game: Game;
}

//TODO: add login modal if user is not logged in

export function AddToBasketButton(props: AddToBasketButtonProps) {
  const { backgroundColor = 'orange' } = props;

  const [gameInBasket, setGameInBasket] = useState(false);

  const addToBasketHandler = (value: boolean) => {
    setGameInBasket(value);
  };

  const iconSlotHandler = (value: boolean) => {
    if (value) return <CloseSvg />;
    return <BasketSvg />;
  };

  return (
    <IconCheckbox
      value={gameInBasket}
      onClick={addToBasketHandler}
      iconSlot={iconSlotHandler}
      backgroundColor={backgroundColor}
    />
  );
}
