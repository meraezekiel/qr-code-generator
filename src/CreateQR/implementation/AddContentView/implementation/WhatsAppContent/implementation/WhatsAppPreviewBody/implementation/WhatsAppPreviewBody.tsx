import {
  Camera,
  CheckCheck,
  MoreVertical,
  Paperclip,
  Phone,
  Smile,
  User,
  Video,
  Mic,
} from "lucide-react";

export function WhatsAppPreviewBody() {
  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#E5DDD5]">
      <div className="bg-[#075E54] px-3 py-2.5 flex items-center gap-2">
        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <User className="w-4 h-4 text-white/90" strokeWidth={2} />
        </span>
        <div className="flex-1">
          <div className="text-white text-[12px] font-semibold">
            0991 558 6034
          </div>
        </div>
        <Video className="w-4 h-4 text-white" strokeWidth={2} />
        <Phone className="w-4 h-4 text-white" strokeWidth={2} />
        <MoreVertical className="w-4 h-4 text-white" strokeWidth={2} />
      </div>

      <div className="flex-1 p-3 flex flex-col justify-start">
        <div className="ml-auto max-w-[75%] bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 shadow-sm">
          <p className="text-[11px] text-slate-800">Type a message.</p>
          <span className="flex items-center justify-end gap-1 mt-0.5">
            <CheckCheck
              className="w-3 h-3 text-sky-500"
              strokeWidth={2.5}
            />
          </span>
        </div>
      </div>

      <div className="px-2 pb-2 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full h-9 flex items-center px-3 gap-2">
          <Smile className="w-4 h-4 text-slate-400" strokeWidth={2} />
          <span className="flex-1 text-[11px] text-slate-400">Message</span>
          <Paperclip
            className="w-4 h-4 text-slate-400"
            strokeWidth={2}
          />
          <Camera className="w-4 h-4 text-slate-400" strokeWidth={2} />
        </div>
        <button
          type="button"
          aria-label="Voice message"
          className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm"
        >
          <Mic className="w-4 h-4 text-white" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
