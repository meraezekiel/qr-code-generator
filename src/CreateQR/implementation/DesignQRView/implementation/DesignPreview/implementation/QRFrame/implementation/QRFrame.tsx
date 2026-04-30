import { ChevronUp, MessageCircle } from "lucide-react";
import { QRFrameProps } from "./QRFrameProps";

export function QRFrame({ frameStyle, text = "Scan Me!", children }: QRFrameProps) {
  switch (frameStyle) {
    case "none":
      return <div className="w-full h-full">{children}</div>;

    case "label-bottom-line":
      return (
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 min-h-0">{children}</div>
          <div className="border-t border-slate-900 mt-1.5 pt-1 flex justify-center">
            <span className="text-xs font-bold text-slate-900 tracking-wide">
              {text}
            </span>
          </div>
        </div>
      );

    case "label-bottom-tag":
      return (
        <div className="w-full h-full flex flex-col items-center">
          <div className="flex-1 min-h-0 w-full">{children}</div>
          <span className="mt-1.5 rounded-md bg-slate-900 text-white px-2.5 py-1 text-[11px] font-bold leading-none">
            {text}
          </span>
        </div>
      );

    case "label-bottom-bar":
      return (
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 min-h-0">{children}</div>
          <div className="bg-slate-900 text-white text-xs font-bold py-1.5 flex justify-center mt-1">
            {text}
          </div>
        </div>
      );

    case "label-bottom-arrow":
      return (
        <div className="w-full h-full flex flex-col items-center">
          <div className="flex-1 min-h-0 w-full">{children}</div>
          <ChevronUp
            className="w-4 h-4 text-slate-900 -mb-0.5"
            strokeWidth={3}
            aria-hidden
          />
          <span className="text-xs font-bold text-slate-900 tracking-wide">
            {text}
          </span>
        </div>
      );

    case "bordered-thin":
      return (
        <div className="w-full h-full p-2 border border-slate-900 flex flex-col">
          <div className="flex-1 min-h-0">{children}</div>
          <div className="flex justify-center pt-1">
            <span className="text-xs font-bold text-slate-900 tracking-wide">
              {text}
            </span>
          </div>
        </div>
      );

    case "bordered-rounded":
      return (
        <div className="w-full h-full p-2 border-2 border-slate-900 rounded-lg flex flex-col">
          <div className="flex-1 min-h-0">{children}</div>
          <div className="flex justify-center pt-1">
            <span className="text-xs font-bold text-slate-900 tracking-wide">
              {text}
            </span>
          </div>
        </div>
      );

    case "label-top-bar":
      return (
        <div className="w-full h-full flex flex-col">
          <div className="bg-slate-900 text-white text-xs font-bold py-1.5 flex justify-center mb-1">
            {text}
          </div>
          <div className="flex-1 min-h-0">{children}</div>
        </div>
      );

    case "label-cursive":
      return (
        <div className="w-full h-full flex flex-col items-center">
          <div className="flex-1 min-h-0 w-full">{children}</div>
          <span className="italic text-slate-900 text-sm font-semibold pt-1.5 leading-none">
            {text}
          </span>
        </div>
      );

    case "speech-bubble":
      return (
        <div className="w-full h-full flex flex-col items-center">
          <div className="flex-1 min-h-0 w-full">{children}</div>
          <span className="mt-1.5 rounded-full bg-slate-100 border border-slate-300 px-2.5 py-1 text-[11px] font-bold text-slate-800 leading-none flex items-center gap-1">
            <MessageCircle className="w-3 h-3" strokeWidth={2.5} aria-hidden />
            {text}
          </span>
        </div>
      );

    case "gift-box":
      return (
        <div className="w-full h-full flex flex-col items-center">
          <BowSvg className="w-10 h-6 -mb-1" />
          <div className="flex-1 min-h-0 w-full p-1.5 border-2 border-slate-900 rounded-md relative">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1.5 bg-slate-900" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 bg-slate-900" />
            <div className="relative z-10 w-full h-full bg-white p-1">{children}</div>
          </div>
          <span className="text-xs font-bold text-slate-900 pt-1">{text}</span>
        </div>
      );

    case "bow-ribbon":
      return (
        <div className="w-full h-full flex flex-col items-center">
          <BowSvg className="w-12 h-7 -mb-1.5" />
          <div className="flex-1 min-h-0 w-full">{children}</div>
          <span className="text-xs font-bold text-slate-900 pt-1">{text}</span>
        </div>
      );

    case "shopping-bag":
      return (
        <div className="w-full h-full flex flex-col items-center">
          <BagHandlesSvg className="w-14 h-5 -mb-1" />
          <div className="flex-1 min-h-0 w-full p-2 border-2 border-slate-900 rounded-sm">
            {children}
          </div>
          <span className="text-xs font-bold text-slate-900 pt-1">{text}</span>
        </div>
      );

    case "envelope":
      return (
        <div className="w-full h-full flex flex-col items-center">
          <EnvelopeFlapSvg className="w-full h-7 -mb-px" />
          <div className="flex-1 min-h-0 w-full p-2 border-2 border-t-0 border-slate-900">
            {children}
          </div>
          <span className="text-xs font-bold text-slate-900 pt-1">{text}</span>
        </div>
      );

    case "scooter":
      return (
        <div className="w-full h-full flex flex-col items-center">
          <ScooterSvg className="w-20 h-10 -mb-1" />
          <div className="flex-1 min-h-0 w-full">{children}</div>
          <span className="text-xs font-bold text-slate-900 pt-1">{text}</span>
        </div>
      );

    case "hand":
      return (
        <div className="w-full h-full flex flex-col items-center">
          <div className="flex-1 min-h-0 w-full">{children}</div>
          <HandPointingSvg className="w-14 h-8 -mt-1" />
          <span className="text-xs font-bold text-slate-900">{text}</span>
        </div>
      );
  }
}

function BowSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        d="M30 16 C 18 4, 6 4, 4 16 C 6 28, 18 28, 30 16 Z"
        fill="currentColor"
      />
      <path
        d="M30 16 C 42 4, 54 4, 56 16 C 54 28, 42 28, 30 16 Z"
        fill="currentColor"
      />
      <rect x="26" y="10" width="8" height="12" rx="1.5" fill="currentColor" />
      <path d="M28 22 L24 30" />
      <path d="M32 22 L36 30" />
    </svg>
  );
}

function BagHandlesSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 70 22"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M14 22 C 14 4, 24 4, 28 4 C 32 4, 32 22, 32 22" />
      <path d="M38 22 C 38 4, 46 4, 50 4 C 54 4, 54 22, 54 22" />
    </svg>
  );
}

function EnvelopeFlapSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 30"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M0 0 L100 0 L50 28 Z" fill="white" />
    </svg>
  );
}

function ScooterSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 50"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="20" cy="40" r="7" fill="white" />
      <circle cx="20" cy="40" r="2" fill="currentColor" />
      <circle cx="80" cy="40" r="7" fill="white" />
      <circle cx="80" cy="40" r="2" fill="currentColor" />
      <path
        d="M27 40 Q 35 22, 55 26 L 70 40 Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path d="M70 28 L 80 12" />
      <path d="M76 12 L 90 14" />
      <rect x="6" y="14" width="22" height="20" rx="2" fill="white" />
      <line x1="13" y1="22" x2="21" y2="22" />
      <line x1="13" y1="27" x2="21" y2="27" />
    </svg>
  );
}

function HandPointingSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path
        d="M40 6 L 40 22 M 36 14 L 36 24 M 32 16 L 32 26 M 28 20 L 28 30
           Q 24 32, 24 36 L 50 36 Q 54 36, 54 32 L 54 24 Q 54 20, 50 20 L 44 20"
        fill="white"
      />
    </svg>
  );
}
