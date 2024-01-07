import { Block } from "../BlockList.types";

export type BlockCardProps = {
  block: Block;
  moveUp?: (index: number) => void;
  moveDown?: (index: number) => void;
  index?: number;
};
