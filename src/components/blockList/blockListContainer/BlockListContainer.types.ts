import { Block } from "../BlockList.types";

export type BlockListContainerProps = {
  blocks: Block[];
  createBlock: () => void;
  activeBlock?: Block;
};
