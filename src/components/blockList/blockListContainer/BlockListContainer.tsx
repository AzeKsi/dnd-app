import { BlockCard } from "../blockCard/BlockCard";
import { BlockListContainerProps } from "./BlockListContainer.types";
import { SortableContext } from "@dnd-kit/sortable";
import { DragOverlay } from "@dnd-kit/core";
import { createPortal } from "react-dom";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useBlockListContainer } from "./BlockListContainer.effect";

export const BlockListContainer = ({
  blocks,
  createBlock,
  activeBlock,
  moveUp,
  moveDown,
}: BlockListContainerProps) => {
  const { blocksId, parent } = useBlockListContainer(blocks);

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
      <div className="flex flex-grow flex-col p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={blocksId}>
          <ul className="flex flex-col gap-4" ref={parent}>
            {blocks.map((block, index) => (
              <li key={block.id}>
                <BlockCard block={block} index={index} moveUp={moveUp} moveDown={moveDown} />
              </li>
            ))}
          </ul>
        </SortableContext>
      </div>
      <button
        className="flex p-4 rounded-md border-4 gap-2 items-cente hover:text-rose-500 transition-all hover:bg-neutral-900 border-zinc-800 active:bg-black"
        onClick={createBlock}>
        <PlusCircleIcon width={24} height={24} />
        Add block
      </button>
      {createPortal(
        <DragOverlay>{activeBlock && <BlockCard block={activeBlock} />}</DragOverlay>,
        document.body
      )}
    </div>
  );
};
