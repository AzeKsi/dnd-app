import { useBlockCard } from "./BlockCard.effect";
import { BlockCardProps } from "./BlockCard.types";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export const BlockCard = ({ block, moveUp, moveDown, index }: BlockCardProps) => {
  const { isDragging, setNodeRef, style, attributes, listeners } = useBlockCard(block);
  const shouldDisplayActions = moveUp && moveDown && index !== undefined;

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        {...style}
        className="opacity-30bg-zinc-950 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-rose-500 cursor-grab relative"></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      {...style}
      {...attributes}
      {...listeners}
      className="bg-neutral-900 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab">
      <p className="flex-grow">{block.text}</p>
      {shouldDisplayActions && (
        <div className="flex gap-2 items-center">
          <button onClick={() => moveUp(index)}>
            <ChevronUpIcon width={24} height={24} className="hover:stroke-rose-500" />
          </button>
          <button onClick={() => moveDown(index)}>
            <ChevronDownIcon width={24} height={24} className="hover:stroke-rose-500" />
          </button>
        </div>
      )}
    </div>
  );
};
