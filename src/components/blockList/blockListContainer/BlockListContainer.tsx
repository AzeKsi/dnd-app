import { useMemo } from "react";
import { BlockCard } from "../blockCard/BlockCard";
import { BlockListContainerProps } from "./BlockListContainer.types";
import { SortableContext } from "@dnd-kit/sortable";
import { DragOverlay } from "@dnd-kit/core";
import { createPortal } from "react-dom";

export const BlockListContainer = ({
  blocks,
  createBlock,
  activeBlock,
}: BlockListContainerProps) => {
  const blocksId = useMemo(() => {
    return blocks.map((block) => block.id);
  }, [blocks]);

  return (
    <div className="bg-zinc-800 h-[900px] rounded-md flex flex-col">
      <div className="bg-neutral-900 text-md rounded-md h-[60px] rounded-b-none p-3 font-bold border-zinc-800 border-4">
        <div className="flex gap-4">
          <div className="items-center flex justify-center bg-zinc-800 px-2 py-1 text-sm rounded-full">
            {blocks.length}
          </div>
          Block List
        </div>
      </div>
      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={blocksId}>
          {blocks.map((block) => (
            <BlockCard key={block.id} block={block} />
          ))}
        </SortableContext>
      </div>
      <button
        className="flex p-4 rounded-md border-4 gap-2 items-cente hover:text-rose-500 transition-none hover:bg-neutral-900 border-zinc-800 active:bg-black"
        onClick={createBlock}>
        Add block
      </button>
      {createPortal(
        <DragOverlay>{activeBlock && <BlockCard block={activeBlock} />}</DragOverlay>,
        document.body
      )}
    </div>
  );
};
