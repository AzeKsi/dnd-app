import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Block } from "../BlockList.types";

export const useBlockCard = (block: Block) => {
  const { setNodeRef, attributes, listeners, transition, transform, isDragging } = useSortable({
    id: block.id,
    data: {
      block,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return { setNodeRef, attributes, listeners, style, isDragging };
};
