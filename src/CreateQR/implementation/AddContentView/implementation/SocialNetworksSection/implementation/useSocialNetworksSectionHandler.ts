import type { IconType } from "react-icons";
import {
  Si500Px,
  SiApplemusic,
  SiBehance,
  SiDiscord,
  SiDribbble,
  SiFacebook,
  SiFlickr,
  SiGithub,
  SiGitlab,
  SiGoogle,
  SiInstagram,
  SiLine,
  SiMessenger,
  SiPatreon,
  SiPinterest,
  SiReddit,
  SiRumble,
  SiSnapchat,
  SiSoundcloud,
  SiSpotify,
  SiStrava,
  SiTelegram,
  SiTiktok,
  SiTumblr,
  SiTwitch,
  SiUbereats,
  SiVimeo,
  SiVk,
  SiWechat,
  SiWhatsapp,
  SiX,
  SiXing,
  SiYelp,
  SiYoutube,
} from "react-icons/si";
import { FaGlobe, FaLinkedinIn, FaSkype } from "react-icons/fa";

export type SocialIcon = {
  id: string;
  bg: string;
  Icon: IconType;
  iconColor?: string;
};

export const SOCIAL_ICONS: SocialIcon[] = [
  { id: "globe", bg: "bg-pink-500", Icon: FaGlobe },
  { id: "dribbble", bg: "bg-pink-400", Icon: SiDribbble },
  { id: "facebook", bg: "bg-[#1877F2]", Icon: SiFacebook },
  { id: "flickr", bg: "bg-pink-500", Icon: SiFlickr },
  { id: "github", bg: "bg-slate-900", Icon: SiGithub },
  { id: "gitlab", bg: "bg-orange-500", Icon: SiGitlab },
  {
    id: "google",
    bg: "bg-white border border-slate-200",
    Icon: SiGoogle,
    iconColor: "text-blue-600",
  },
  { id: "line", bg: "bg-emerald-500", Icon: SiLine },
  { id: "linkedin", bg: "bg-[#0A66C2]", Icon: FaLinkedinIn },
  { id: "pinterest", bg: "bg-red-600", Icon: SiPinterest },
  { id: "reddit", bg: "bg-orange-600", Icon: SiReddit },
  { id: "skype", bg: "bg-sky-500", Icon: FaSkype },
  {
    id: "snapchat",
    bg: "bg-yellow-300",
    Icon: SiSnapchat,
    iconColor: "text-slate-900",
  },
  { id: "500px", bg: "bg-slate-900", Icon: Si500Px },
  { id: "tumblr", bg: "bg-indigo-900", Icon: SiTumblr },
  { id: "x", bg: "bg-slate-900", Icon: SiX },
  { id: "vimeo", bg: "bg-cyan-500", Icon: SiVimeo },
  { id: "vk", bg: "bg-blue-600", Icon: SiVk },
  { id: "xing", bg: "bg-emerald-700", Icon: SiXing },
  { id: "youtube", bg: "bg-red-600", Icon: SiYoutube },
  {
    id: "instagram",
    bg: "bg-gradient-to-tr from-amber-400 via-pink-500 to-fuchsia-500",
    Icon: SiInstagram,
  },
  { id: "tiktok", bg: "bg-slate-900", Icon: SiTiktok },
  { id: "whatsapp", bg: "bg-emerald-500", Icon: SiWhatsapp },
  { id: "telegram", bg: "bg-sky-500", Icon: SiTelegram },
  { id: "messenger", bg: "bg-blue-500", Icon: SiMessenger },
  { id: "yelp", bg: "bg-red-600", Icon: SiYelp },
  { id: "ubereats", bg: "bg-slate-900", Icon: SiUbereats },
  { id: "strava", bg: "bg-orange-500", Icon: SiStrava },
  { id: "rumble", bg: "bg-emerald-500", Icon: SiRumble },
  { id: "spotify", bg: "bg-emerald-500", Icon: SiSpotify },
  { id: "soundcloud", bg: "bg-orange-500", Icon: SiSoundcloud },
  { id: "applemusic", bg: "bg-slate-900", Icon: SiApplemusic },
  { id: "behance", bg: "bg-blue-600", Icon: SiBehance },
  { id: "patreon", bg: "bg-red-500", Icon: SiPatreon },
  { id: "twitch", bg: "bg-violet-600", Icon: SiTwitch },
  { id: "discord", bg: "bg-indigo-500", Icon: SiDiscord },
  { id: "wechat", bg: "bg-emerald-500", Icon: SiWechat },
];

export function useSocialNetworksSectionHandler() {
  return { socialIcons: SOCIAL_ICONS };
}
