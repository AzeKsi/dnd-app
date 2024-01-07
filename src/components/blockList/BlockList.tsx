import { useBlockList } from "./BlockList.effect";
import { BlockListContainer } from "./blockListContainer/BlockListContainer";
import { DndContext } from "@dnd-kit/core";

const BlockList = () => {
  const { blocks, createBlock, onDragStart, activeBlock, onDragEnd, onDragOver } = useBlockList();

  return (
    <div className="min-h-screen m-auto flex w-full items-center overflow-y-hidden overflow-x-auto px-[40px]">
      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}>
        <div className="w-full">
          <BlockListContainer blocks={blocks} createBlock={createBlock} activeBlock={activeBlock} />
        </div>
      </DndContext>
    </div>
  );
};

export default BlockList;
