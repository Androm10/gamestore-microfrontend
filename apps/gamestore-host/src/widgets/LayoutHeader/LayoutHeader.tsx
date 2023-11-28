import { ReactNode } from "react";

interface LayoutHeaderProps {
  rightSlot?: ReactNode;
}

export function LayoutHeader(props: LayoutHeaderProps) {
  const { rightSlot } = props;

  return (
    <header>
      <div>
        <img src="jopa.gif" />
      </div>
      <div>{rightSlot}</div>
    </header>
  );
}
