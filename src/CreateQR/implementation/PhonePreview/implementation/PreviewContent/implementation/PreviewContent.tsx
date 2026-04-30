import {
  ArrowRight,
  BookOpen,
  Camera,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  Facebook,
  FileText,
  Globe,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  Music,
  Pause,
  Phone,
  Play,
  Plus,
  Search,
  Send,
  Share2,
  ShoppingBag,
  SkipBack,
  SkipForward,
  Star,
  ThumbsUp,
  Ticket,
  User,
  Utensils,
  Video as VideoIcon,
  Wifi,
} from "lucide-react";
import { PreviewContentProps } from "./PreviewContentProps";
import { WebsitePreviewBody } from "../../../../AddContentView/implementation/WebsiteContent/implementation/WebsitePreviewBody";

export function PreviewContent({ activeType }: PreviewContentProps) {
  if (!activeType) {
    return <EmptyPreview />;
  }

  switch (activeType.id) {
    case "website":
      return <WebsitePreview />;
    case "pdf":
      return <PdfPreview />;
    case "list-of-links":
      return <LinksPreview />;
    case "vcard":
      return <VCardPreview />;
    case "business":
      return <BusinessPreview />;
    case "video":
      return <VideoPreview />;
    case "images":
      return <ImagesPreview />;
    case "facebook":
      return <FacebookPreview />;
    case "instagram":
      return <InstagramPreview />;
    case "social-media":
      return <SocialMediaPreview />;
    case "whatsapp":
      return <WhatsAppPreview />;
    case "mp3":
      return <Mp3Preview />;
    case "menu":
      return <MenuPreview />;
    case "apps":
      return <AppsPreview />;
    case "coupon":
      return <CouponPreview />;
    case "wifi":
      return <WifiPreview />;
  }
}

function EmptyPreview() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 gap-5">
      <div className="relative w-44 h-44 rounded-2xl border-2 border-brand/30 p-3">
        <span className="absolute -top-0.5 -left-0.5 w-5 h-5 border-t-4 border-l-4 border-brand rounded-tl-xl" />
        <span className="absolute -top-0.5 -right-0.5 w-5 h-5 border-t-4 border-r-4 border-brand rounded-tr-xl" />
        <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 border-b-4 border-l-4 border-brand rounded-bl-xl" />
        <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 border-b-4 border-r-4 border-brand rounded-br-xl" />
        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900" aria-hidden>
          <rect x="4" y="4" width="22" height="22" fill="currentColor" />
          <rect x="8" y="8" width="14" height="14" fill="white" />
          <rect x="12" y="12" width="6" height="6" fill="currentColor" />
          <rect x="74" y="4" width="22" height="22" fill="currentColor" />
          <rect x="78" y="8" width="14" height="14" fill="white" />
          <rect x="82" y="12" width="6" height="6" fill="currentColor" />
          <rect x="4" y="74" width="22" height="22" fill="currentColor" />
          <rect x="8" y="78" width="14" height="14" fill="white" />
          <rect x="12" y="82" width="6" height="6" fill="currentColor" />
          {[
            [32, 6], [44, 6], [56, 6], [68, 6],
            [32, 14], [50, 14], [68, 14],
            [36, 22], [50, 22], [62, 22], [74, 22],
            [6, 32], [22, 32], [36, 32], [52, 32], [66, 32], [82, 32],
            [14, 40], [28, 40], [44, 40], [58, 40], [70, 40], [84, 40],
            [8, 48], [22, 48], [36, 48], [50, 48], [64, 48], [78, 48],
            [16, 56], [30, 56], [44, 56], [58, 56], [72, 56], [86, 56],
            [32, 68], [46, 68], [58, 68], [70, 68], [82, 68],
            [34, 78], [48, 78], [62, 78], [78, 78],
            [32, 88], [46, 88], [60, 88], [72, 88], [86, 88],
          ].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="6" height="6" fill="currentColor" />
          ))}
        </svg>
      </div>
      <p className="text-center text-slate-600 text-sm font-medium px-4">
        Hover a QR type to preview it here
      </p>
    </div>
  );
}

function WebsitePreview() {
  return (
    <div className="h-full flex flex-col">
      <WebsitePreviewBody url="" />
    </div>
  );
}

function PdfPreview() {
  return (
    <div className="h-full flex flex-col bg-slate-100">
      <div className="px-3 py-2 bg-white flex items-center justify-between border-b border-slate-200">
        <ChevronLeft className="w-4 h-4 text-slate-600" />
        <span className="text-[10px] font-semibold text-slate-900">Report.pdf</span>
        <Download className="w-4 h-4 text-slate-600" />
      </div>
      <div className="flex-1 overflow-hidden p-3 flex flex-col gap-2">
        <div className="bg-white rounded shadow-sm p-3 flex-1">
          <div className="flex items-start gap-2 mb-2">
            <FileText className="w-4 h-4 text-brand" strokeWidth={2} />
            <div className="h-2.5 bg-slate-900 rounded w-24" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 bg-slate-300 rounded" />
            <div className="h-1.5 bg-slate-300 rounded w-11/12" />
            <div className="h-1.5 bg-slate-300 rounded w-10/12" />
            <div className="h-1.5 bg-slate-300 rounded w-9/12" />
          </div>
          <div className="my-3 h-16 rounded bg-slate-100 border border-slate-200" />
          <div className="space-y-1.5">
            <div className="h-1.5 bg-slate-300 rounded" />
            <div className="h-1.5 bg-slate-300 rounded w-10/12" />
            <div className="h-1.5 bg-slate-300 rounded w-8/12" />
          </div>
        </div>
      </div>
      <div className="py-2 flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
        <ChevronLeft className="w-3 h-3" />
        <span>Page 1 / 12</span>
        <ChevronRight className="w-3 h-3" />
      </div>
    </div>
  );
}

function LinksPreview() {
  const links = [
    { label: "My Store", icon: ShoppingBag },
    { label: "Instagram", icon: Instagram },
    { label: "YouTube Channel", icon: VideoIcon },
    { label: "Contact Me", icon: Mail },
  ];
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-emerald-50 to-white px-4 pt-4 overflow-hidden">
      <div className="flex flex-col items-center gap-1">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand to-emerald-600 flex items-center justify-center text-white font-bold">
          JL
        </div>
        <span className="text-[13px] font-bold text-slate-900">Jenny Leslie</span>
        <span className="text-[10px] text-slate-500 text-center px-2">
          All my links in one place
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5 flex-1 overflow-hidden">
        {links.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm"
          >
            <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
              <Icon className="w-3.5 h-3.5 text-brand" strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-semibold text-slate-800 flex-1">
              {label}
            </span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

function VCardPreview() {
  return (
    <div className="h-full flex flex-col bg-slate-50">
      <div className="bg-gradient-to-br from-brand to-emerald-600 h-20 flex items-end justify-center relative">
        <div className="absolute -bottom-6 w-16 h-16 rounded-full bg-white p-0.5 shadow-md">
          <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
            AM
          </div>
        </div>
      </div>
      <div className="pt-8 px-4 flex flex-col items-center gap-0.5">
        <span className="text-[13px] font-bold text-slate-900">Alex Morgan</span>
        <span className="text-[10px] text-slate-500">Product Designer</span>
      </div>
      <div className="mt-3 px-4 space-y-2">
        <Row icon={Phone} label="+1 555 123 4567" />
        <Row icon={Mail} label="alex@company.com" />
        <Row icon={MapPin} label="San Francisco, CA" />
        <Row icon={Globe} label="alexmorgan.design" />
      </div>
      <div className="mt-auto p-3">
        <button className="w-full bg-brand text-white text-xs font-semibold py-2 rounded-lg">
          Save to contacts
        </button>
      </div>
    </div>
  );
}

function BusinessPreview() {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="bg-slate-900 px-4 py-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-xs">
          N
        </div>
        <div>
          <div className="text-[12px] font-bold text-white">Northwind Co.</div>
          <div className="text-[9px] text-slate-300">Open · Closes 9 PM</div>
        </div>
      </div>
      <div className="p-3 space-y-2">
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-current" strokeWidth={0} />
          ))}
          <span className="text-[10px] text-slate-600 ml-1">4.9 (238)</span>
        </div>
        <div className="h-16 rounded-lg bg-gradient-to-br from-slate-200 to-slate-100" />
        <Row icon={MapPin} label="221 Market St." />
        <Row icon={Phone} label="+1 555 0100" />
        <Row icon={Globe} label="northwind.co" />
      </div>
      <div className="mt-auto p-3 flex gap-2">
        <button className="flex-1 bg-brand text-white text-xs font-semibold py-2 rounded-lg">
          Call
        </button>
        <button className="flex-1 bg-slate-900 text-white text-xs font-semibold py-2 rounded-lg">
          Directions
        </button>
      </div>
    </div>
  );
}

function VideoPreview() {
  return (
    <div className="h-full flex flex-col bg-slate-950">
      <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-black">
        <button className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl">
          <Play className="w-6 h-6 text-slate-900 fill-current ml-0.5" strokeWidth={0} />
        </button>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-brand rounded-full" />
          </div>
          <div className="flex justify-between text-[9px] text-white/80 mt-1">
            <span>0:42</span>
            <span>2:15</span>
          </div>
        </div>
      </div>
      <div className="p-3 bg-white">
        <div className="text-[12px] font-bold text-slate-900">Our New Product Launch</div>
        <div className="text-[10px] text-slate-500 mt-0.5">Watch in HD · 2:15</div>
      </div>
    </div>
  );
}

function ImagesPreview() {
  const tiles = [
    "from-rose-300 to-rose-500",
    "from-sky-300 to-sky-500",
    "from-amber-300 to-amber-500",
    "from-emerald-300 to-emerald-500",
    "from-violet-300 to-violet-500",
    "from-fuchsia-300 to-fuchsia-500",
  ];
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-3 py-2 flex items-center justify-between border-b border-slate-200">
        <span className="text-[11px] font-bold text-slate-900">Gallery</span>
        <Camera className="w-4 h-4 text-slate-600" strokeWidth={2} />
      </div>
      <div className="p-2 grid grid-cols-2 gap-1.5 flex-1 overflow-hidden">
        {tiles.map((grad, i) => (
          <div
            key={i}
            className={`rounded-md bg-gradient-to-br ${grad} aspect-[4/3]`}
          />
        ))}
      </div>
    </div>
  );
}

function FacebookPreview() {
  return (
    <div className="h-full flex flex-col bg-slate-100">
      <div className="bg-[#1877F2] px-3 py-2 flex items-center justify-between">
        <span className="text-white font-black text-sm">facebook</span>
        <Search className="w-4 h-4 text-white" />
      </div>
      <div className="p-2 space-y-2">
        <div className="bg-white rounded-lg p-2.5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center">
              <Facebook className="w-3.5 h-3.5 text-white fill-current" strokeWidth={0} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-900">Your Page</div>
              <div className="text-[9px] text-slate-500">Just now · Public</div>
            </div>
          </div>
          <div className="h-1.5 bg-slate-300 rounded w-11/12 mb-1" />
          <div className="h-1.5 bg-slate-300 rounded w-8/12 mb-2" />
          <div className="h-20 rounded bg-gradient-to-br from-sky-200 to-blue-400" />
          <div className="flex items-center gap-3 mt-2 text-slate-500 text-[10px]">
            <span className="flex items-center gap-1">
              <ThumbsUp className="w-3 h-3" strokeWidth={2.5} /> Like
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-3 h-3" strokeWidth={2.5} /> Comment
            </span>
            <span className="flex items-center gap-1">
              <Share2 className="w-3 h-3" strokeWidth={2.5} /> Share
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InstagramPreview() {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-3 py-2 flex items-center justify-between border-b border-slate-100">
        <span className="font-bold text-slate-900 text-sm italic">Instagram</span>
        <Heart className="w-4 h-4 text-slate-900" strokeWidth={2} />
      </div>
      <div className="px-3 py-2 flex gap-2 overflow-x-auto">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-pink-500 to-fuchsia-500 flex-shrink-0"
          >
            <div className="w-full h-full rounded-full bg-slate-200 border-2 border-white" />
          </div>
        ))}
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="px-3 pb-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500 p-0.5">
            <div className="w-full h-full rounded-full bg-slate-200" />
          </div>
          <span className="text-[11px] font-semibold text-slate-900">yourbrand</span>
        </div>
        <div className="h-32 bg-gradient-to-br from-fuchsia-300 via-pink-400 to-amber-300" />
        <div className="px-3 py-2 flex items-center gap-3">
          <Heart className="w-4 h-4 text-slate-900" strokeWidth={2} />
          <MessageCircle className="w-4 h-4 text-slate-900" strokeWidth={2} />
          <Send className="w-4 h-4 text-slate-900" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

function SocialMediaPreview() {
  const socials = [
    { icon: Facebook, color: "bg-[#1877F2]" },
    { icon: Instagram, color: "bg-gradient-to-tr from-amber-400 via-pink-500 to-fuchsia-500" },
    { icon: VideoIcon, color: "bg-[#FF0000]" },
    { icon: MessageCircle, color: "bg-[#25D366]" },
    { icon: Share2, color: "bg-slate-800" },
    { icon: Mic, color: "bg-fuchsia-600" },
  ];
  return (
    <div className="h-full flex flex-col bg-slate-50 px-4 pt-3">
      <div className="text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-brand to-emerald-600 flex items-center justify-center">
          <Share2 className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <div className="text-[12px] font-bold text-slate-900 mt-1">Follow us</div>
        <div className="text-[10px] text-slate-500">on every platform</div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {socials.map(({ icon: Icon, color }, i) => (
          <div
            key={i}
            className={`${color} aspect-square rounded-xl flex items-center justify-center shadow-sm`}
          >
            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatsAppPreview() {
  return (
    <div className="h-full flex flex-col bg-[#E5DDD5]">
      <div className="bg-[#128C7E] px-3 py-2 flex items-center gap-2">
        <ChevronLeft className="w-4 h-4 text-white" />
        <div className="w-7 h-7 rounded-full bg-white/20" />
        <div className="flex-1">
          <div className="text-white font-semibold text-[11px]">Your Business</div>
          <div className="text-white/80 text-[9px]">online</div>
        </div>
        <Phone className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
        <div className="bg-white rounded-lg rounded-tl-none px-2 py-1.5 max-w-[75%] shadow-sm">
          <div className="text-[10px] text-slate-800">Hi! How can we help?</div>
        </div>
        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-2 py-1.5 max-w-[75%] shadow-sm ml-auto">
          <div className="text-[10px] text-slate-800">I'd like to place an order</div>
        </div>
        <div className="bg-white rounded-lg rounded-tl-none px-2 py-1.5 max-w-[75%] shadow-sm">
          <div className="text-[10px] text-slate-800">Great! What can we get for you?</div>
        </div>
      </div>
      <div className="px-2 pb-2">
        <div className="bg-white rounded-full h-7 flex items-center px-3 text-[10px] text-slate-400">
          Type a message...
        </div>
      </div>
    </div>
  );
}

function Mp3Preview() {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-900 text-white">
      <div className="px-3 pt-3 flex items-center justify-between text-[10px]">
        <ChevronLeft className="w-4 h-4" />
        <span className="font-semibold">Now Playing</span>
        <Share2 className="w-4 h-4" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-3">
        <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 shadow-2xl flex items-center justify-center">
          <Music className="w-14 h-14 text-white/90" strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <div className="text-[13px] font-bold">Summer Vibes</div>
          <div className="text-[10px] text-white/70">Your Brand · Single</div>
        </div>
        <div className="w-full">
          <div className="h-0.5 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full w-2/5 bg-white rounded-full" />
          </div>
          <div className="flex justify-between text-[9px] text-white/60 mt-1">
            <span>1:24</span>
            <span>3:32</span>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-1">
          <SkipBack className="w-5 h-5 fill-current" strokeWidth={0} />
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
            <Pause className="w-5 h-5 text-slate-900 fill-current" strokeWidth={0} />
          </div>
          <SkipForward className="w-5 h-5 fill-current" strokeWidth={0} />
        </div>
      </div>
    </div>
  );
}

function MenuPreview() {
  const items = [
    { name: "Margherita Pizza", price: "$12" },
    { name: "Caesar Salad", price: "$8" },
    { name: "Pasta Carbonara", price: "$14" },
    { name: "Tiramisu", price: "$6" },
  ];
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="bg-amber-600 px-3 py-2 flex items-center gap-2">
        <Utensils className="w-4 h-4 text-white" />
        <span className="text-white font-bold text-sm">Our Menu</span>
      </div>
      <div className="px-3 py-2 flex gap-2 overflow-x-auto border-b border-slate-100">
        {["All", "Mains", "Drinks", "Desserts"].map((tab, i) => (
          <span
            key={tab}
            className={`text-[10px] px-2 py-0.5 rounded-full ${
              i === 0 ? "bg-amber-600 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="flex-1 overflow-hidden p-2 space-y-1.5">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 bg-slate-50 rounded-lg p-2"
          >
            <div className="w-10 h-10 rounded bg-gradient-to-br from-amber-200 to-amber-400 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-[11px] font-semibold text-slate-900">
                {item.name}
              </div>
              <div className="text-[9px] text-slate-500">Fresh & delicious</div>
            </div>
            <div className="text-[11px] font-bold text-amber-600">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppsPreview() {
  return (
    <div className="h-full flex flex-col bg-white px-4 pt-4 overflow-hidden">
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand to-emerald-600 shadow-xl flex items-center justify-center">
          <BookOpen className="w-9 h-9 text-white" strokeWidth={2} />
        </div>
        <div className="text-center">
          <div className="text-[13px] font-bold text-slate-900">YourApp</div>
          <div className="text-[10px] text-slate-500">by Your Company</div>
          <div className="flex items-center justify-center gap-0.5 mt-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" strokeWidth={0} />
            ))}
            <span className="text-[9px] text-slate-600 ml-1">4.9</span>
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        <button className="w-full bg-slate-900 text-white text-[11px] font-semibold py-2 rounded-lg flex items-center justify-center gap-2">
          <Download className="w-3 h-3" /> App Store
        </button>
        <button className="w-full bg-brand text-white text-[11px] font-semibold py-2 rounded-lg flex items-center justify-center gap-2">
          <Download className="w-3 h-3" /> Google Play
        </button>
      </div>
    </div>
  );
}

function CouponPreview() {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-rose-50 to-white px-4 pt-4">
      <div className="relative bg-white rounded-xl border-2 border-dashed border-rose-400 p-4 shadow-md">
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-rose-50" />
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white" />
        <div className="flex flex-col items-center gap-1">
          <Ticket className="w-6 h-6 text-rose-500" strokeWidth={2} />
          <div className="text-[10px] font-semibold text-rose-500 uppercase tracking-wider">
            Special offer
          </div>
          <div className="text-3xl font-black text-slate-900">25% OFF</div>
          <div className="text-[10px] text-slate-500">Your next purchase</div>
          <div className="mt-2 bg-slate-100 rounded px-3 py-1 flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold text-slate-900">
              SAVE25
            </span>
            <Copy className="w-3 h-3 text-slate-500" />
          </div>
        </div>
      </div>
      <button className="mt-3 w-full bg-rose-500 text-white text-xs font-semibold py-2 rounded-lg">
        Redeem now
      </button>
    </div>
  );
}

function WifiPreview() {
  return (
    <div className="h-full flex flex-col bg-slate-50 px-4 pt-6">
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
          <Wifi className="w-8 h-8 text-brand" strokeWidth={2} />
        </div>
        <div className="text-[12px] font-bold text-slate-900">Connect to WiFi</div>
        <div className="text-[10px] text-slate-500">Scan to join instantly</div>
      </div>
      <div className="mt-4 bg-white rounded-xl border border-slate-200 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-[10px] text-slate-500">Network</div>
          <div className="text-[11px] font-semibold text-slate-900">YourBrand_WiFi</div>
        </div>
        <div className="h-px bg-slate-100" />
        <div className="flex items-center justify-between">
          <div className="text-[10px] text-slate-500">Password</div>
          <div className="text-[11px] font-mono font-semibold text-slate-900">••••••••</div>
        </div>
        <div className="h-px bg-slate-100" />
        <div className="flex items-center justify-between">
          <div className="text-[10px] text-slate-500">Security</div>
          <div className="text-[11px] font-semibold text-slate-900">WPA2</div>
        </div>
      </div>
      <button className="mt-3 w-full bg-brand text-white text-xs font-semibold py-2 rounded-lg flex items-center justify-center gap-1.5">
        <Plus className="w-3 h-3" />
        Connect
      </button>
    </div>
  );
}

function Row({
  icon: Icon,
  label,
}: {
  icon: typeof User;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-2.5 py-1.5">
      <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
        <Icon className="w-3 h-3 text-brand" strokeWidth={2.5} />
      </div>
      <span className="text-[11px] font-medium text-slate-800 truncate">{label}</span>
    </div>
  );
}
