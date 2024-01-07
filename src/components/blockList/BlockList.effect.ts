import { useState } from "react";
import { Block } from "./BlockList.types";
import { DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export const useBlockList = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [activeBlock, setActiveBlock] = useState();

  const createBlock = () => {
    const newBlock = {
      id: blocks.length + 1,
      text: `Block ${blocks.length + 1}`,
    };

    setBlocks([...blocks, newBlock]);
  };

  const onDragStart = (event: DragStartEvent) => {
    setActiveBlock(event.active.data.current?.block);
    return;
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeBlockId = active.id;
    const overBlockId = over.id;

    if (activeBlockId === overBlockId) return;

    setBlocks((blocks) => {
      const activeIndex = blocks.findIndex((block) => block.id === activeBlockId);
      const overIndex = blocks.findIndex((block) => block.id === overBlockId);

      return arrayMove(blocks, activeIndex, overIndex);
    });
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    setBlocks((blocks) => {
      const activeIndex = blocks.findIndex((b) => b.id === activeId);
      const overIndex = blocks.findIndex((b) => b.id === overId);

      return arrayMove(blocks, activeIndex, overIndex);
    });
  };

  return { blocks, createBlock, onDragStart, activeBlock, onDragEnd, onDragOver };
};
