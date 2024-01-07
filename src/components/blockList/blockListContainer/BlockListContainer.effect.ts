import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useMemo } from "react";
import { Block } from "../BlockList.types";

export const useBlockListContainer = (blocks: Block[]) => {
  const blocksId = useMemo(() => {
    return blocks.map((block) => block.id);
  }, [blocks]);

  const [parent] = useAutoAnimate();

  return { blocksId, parent };
};
