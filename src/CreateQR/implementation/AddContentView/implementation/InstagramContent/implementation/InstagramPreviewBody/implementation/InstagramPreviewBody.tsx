import {
  Bell,
  Bookmark,
  ChevronLeft,
  Grid3X3,
  Home,
  MoreHorizontal,
  Play,
  Plus,
  Search,
  User,
  UserPlus,
} from "lucide-react";

export function InstagramPreviewBody() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-white">
      <div className="px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <ChevronLeft className="w-4 h-4 text-slate-900" strokeWidth={2.5} />
          <span className="text-[13px] font-bold text-slate-900">
            Username
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <Bell className="w-4 h-4 text-slate-700" strokeWidth={2} />
          <MoreHorizontal
            className="w-4 h-4 text-slate-700"
            strokeWidth={2}
          />
        </div>
      </div>

      <div className="px-3 pt-2 flex items-center gap-3">
        <span className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-pink-500 to-fuchsia-500 shrink-0">
          <span className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center">
            <User className="w-7 h-7 text-slate-400" strokeWidth={2} />
          </span>
        </span>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
          <div className="h-1.5 w-2/3 bg-slate-200 rounded-full" />
          <div className="h-1.5 w-1/2 bg-slate-200 rounded-full" />
        </div>
      </div>

      <div className="px-3 pt-3">
        <div className="text-[11px] font-bold text-slate-900 mb-1.5">
          Username
        </div>
        <div className="space-y-1">
          <div className="h-1.5 w-11/12 bg-slate-200 rounded-full" />
          <div className="h-1.5 w-9/12 bg-slate-200 rounded-full" />
        </div>
      </div>

      <div className="px-3 pt-3 flex items-center gap-2">
        <span className="flex items-center -space-x-1.5">
          <span className="w-5 h-5 rounded-full bg-slate-300 ring-2 ring-white" />
          <span className="w-5 h-5 rounded-full bg-slate-200 ring-2 ring-white" />
        </span>
        <div className="h-1.5 flex-1 bg-slate-200 rounded-full" />
      </div>

      <div className="px-3 pt-3 flex items-center gap-1.5">
        <button className="flex-1 bg-slate-100 text-slate-500 text-[10px] font-semibold py-1.5 rounded">
          Follow
        </button>
        <button className="flex-1 bg-slate-100 text-slate-500 text-[10px] font-semibold py-1.5 rounded">
          Message
        </button>
        <button className="flex-1 bg-slate-100 text-slate-500 text-[10px] font-semibold py-1.5 rounded">
          Shop
        </button>
        <button
          aria-label="Add user"
          className="w-7 h-7 bg-slate-100 text-slate-500 rounded flex items-center justify-center"
        >
          <UserPlus className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
      </div>

      <div className="px-3 pt-3 flex gap-2 overflow-x-hidden">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="w-9 h-9 rounded-full bg-slate-200 shrink-0" />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-around border-y border-slate-200 py-2 text-slate-500">
        <span className="relative pb-1">
          <Grid3X3 className="w-4 h-4 text-slate-900" strokeWidth={2} />
          <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-slate-900" />
        </span>
        <Play className="w-4 h-4" strokeWidth={2} />
        <Bookmark className="w-4 h-4" strokeWidth={2} />
      </div>

      <div className="px-1 pt-1 grid grid-cols-2 gap-1">
        <div className="aspect-[4/3] rounded-sm bg-slate-200" />
        <div className="aspect-[4/3] rounded-sm bg-slate-200" />
      </div>

      <div className="sticky bottom-0 bg-white border-t border-slate-200 px-3 py-2 flex items-center justify-between">
        <Home className="w-4 h-4 text-slate-900" strokeWidth={2} />
        <Search className="w-4 h-4 text-slate-900" strokeWidth={2} />
        <span className="w-5 h-5 rounded border-[1.5px] border-slate-900 flex items-center justify-center">
          <Plus className="w-3 h-3 text-slate-900" strokeWidth={2.5} />
        </span>
        <Play className="w-4 h-4 text-slate-900" strokeWidth={2} />
        <span className="w-5 h-5 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-pink-500 to-fuchsia-500">
          <span className="w-full h-full rounded-full bg-slate-200" />
        </span>
      </div>
    </div>
  );
}
