import { twMerge } from "tailwind-merge";

export default function CardLayout({
  children,
  className = "",
  isWithoutSimbian,
}) {
  return (
    <div
      className={twMerge(
        "p-5 sm:p-6 bg-blue-300/20 rounded-xl border border-gray-100/10 w-[400px] max-sm:w-full",
        isWithoutSimbian ? "bg-blue-300/20" : "bg-blue-900/70",
        className
      )}
    >
      {children}
    </div>
  );
}
