import { useBlockCard } from "./BlockCard.effect";
import { BlockCardProps } from "./BlockCard.types";

export const BlockCard = ({ block }: BlockCardProps) => {
  const { isDragging, setNodeRef, style, attributes, listeners } = useBlockCard(block);

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
      {block.text}
    </div>
  );
};
