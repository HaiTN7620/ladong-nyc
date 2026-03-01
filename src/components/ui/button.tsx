import { cn } from "@/lib/utils/cn";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "px-6 py-3 border border-black hover:bg-black hover:text-white transition",
        className,
      )}
    >
      {children}
    </button>
  );
}
