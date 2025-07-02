import { ShieldCheck, ShieldAlert, Ticket, User, Music, Bot, Github, Twitter, Linkedin, Server, Users, Clock, Wifi } from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/#features", label: "features" },
  { href: "/team", label: "team" },
  { href: "/support", label: "support" },
  { href: "/faq", label: "faq" },
];

export const DISCORD_INVITE_URL = "https://discord.com/invite/example";

export const FEATURES = [
  {
    title: "Anti-Nuke",
    description: "Our advanced Anti-Nuke system protects your server from malicious raids and unauthorized administrative actions, ensuring its safety and stability around the clock.",
    Icon: ShieldAlert,
    image: "https://placehold.co/500x300.png",
    aiHint: "server protection",
  },
  {
    title: "Auto-Mod",
    description: "Automate server moderation with our customizable Auto-Mod. It filters spam, removes inappropriate content, and manages user behavior, freeing up your moderation team.",
    Icon: ShieldCheck,
    image: "https://placehold.co/500x300.png",
    aiHint: "automation bot",
  },
  {
    title: "Ticketing",
    description: "A seamless ticketing system for user support. Members can create private support channels with a single click, allowing your staff to address issues efficiently.",
    Icon: Ticket,
    image: "https://placehold.co/500x300.png",
    aiHint: "customer support",
  },
  {
    title: "Moderation",
    description: "Powerful and easy-to-use moderation commands. From kicking and banning to muting members, Omnix provides all the tools you need to maintain a healthy community.",
    Icon: User,
    image: "https://placehold.co/500x300.png",
    aiHint: "community management",
  },
  {
    title: "Music",
    description: "High-quality music streaming for your voice channels. Enjoy your favorite tunes with friends with our feature-rich, easy-to-use music player.",
    Icon: Music,
    image: "https://placehold.co/500x300.png",
    aiHint: "headphones audio",
  },
  {
    title: "And More...",
    description: "Omnix is packed with dozens of other features, including welcome messages, logging, utility commands, and much more to enhance your Discord server.",
    Icon: Bot,
    image: "https://placehold.co/500x300.png",
    aiHint: "network abstract",
  },
];

export const TEAM_MEMBERS = [
    {
        name: "Alex 'vex' Johnson",
        role: "Lead Developer",
        avatar: "https://placehold.co/128x128.png",
        aiHint: "male portrait",
        socials: [
            { name: "GitHub", Icon: Github, href: "#" },
            { name: "LinkedIn", Icon: Linkedin, href: "#" },
            { name: "Twitter", Icon: Twitter, href: "#" },
        ],
    },
    {
        name: "Maria 'pixel' Garcia",
        role: "UI/UX Designer",
        avatar: "https://placehold.co/128x128.png",
        aiHint: "female portrait",
        socials: [
            { name: "GitHub", Icon: Github, href: "#" },
            { name: "LinkedIn", Icon: Linkedin, href: "#" },
            { name: "Twitter", Icon: Twitter, href: "#" },
        ],
    },
    {
        name: "Sam 'logic' Chen",
        role: "Backend Engineer",
        avatar: "https://placehold.co/128x128.png",
        aiHint: "person portrait",
        socials: [
            { name: "GitHub", Icon: Github, href: "#" },
            { name: "LinkedIn", Icon: Linkedin, href: "#" },
            { name: "Twitter", Icon: Twitter, href: "#" },
        ],
    },
    {
        name: "Jordan 'comms' Lee",
        role: "Community Manager",
        avatar: "https://placehold.co/128x128.png",
        aiHint: "person glasses",
        socials: [
            { name: "LinkedIn", Icon: Linkedin, href: "#" },
            { name: "Twitter", Icon: Twitter, href: "#" },
        ],
    },
];

export const SOCIAL_LINKS = [
    { name: "GitHub", Icon: Github, href: "#" },
    { name: "Discord", Icon: Bot, href: DISCORD_INVITE_URL },
    { name: "Twitter", Icon: Twitter, href: "#" },
];

export const BOT_STATS = [
  { label: 'Servers', value: '2,500+', Icon: Server },
  { label: 'Users', value: '1.2M+', Icon: Users },
  { label: 'Uptime', value: '99.9%', Icon: Clock },
  { label: 'Ping', value: '45ms', Icon: Wifi },
];

export const ACCENT_COLORS = [
  { name: 'Default', color: '282.4 100% 41.4%' }, // #9400D3
  { name: 'Teal', color: '180 100% 25.1%' }, // #008080
  { name: 'Blue', color: '221.2 83.2% 53.3%' },
  { name: 'Green', color: '142.1 76.2% 36.3%' },
  { name: 'Rose', color: '346.8 77.2% 49.8%' },
];
