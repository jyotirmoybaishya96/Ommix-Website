
import { ShieldCheck, ShieldAlert, Ticket, User, Music, Bot, Github, Twitter, Linkedin, Server, Users, Clock, Wifi, CheckCircle } from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/features", label: "features" },
  { href: "/premium", label: "premium" },
  { href: "/status", label: "status" },
  { href: "/team", label: "team" },
  { href: "/support", label: "support" },
  { href: "/faq", label: "faq" },
];

export const LEGAL_LINKS = [
  { href: "/legal?tab=terms", label: "Terms of Service" },
  { href: "/legal?tab=privacy", label: "Privacy Policy" },
];

export const DISCORD_INVITE_URL = "https://discord.com/invite/example";

export const FEATURES = [
  {
    title: "Anti-Nuke",
    description: "Our advanced Anti-Nuke system protects your server from malicious raids and unauthorized administrative actions, ensuring its safety and stability around the clock.",
    Icon: ShieldAlert,
    aiHint: "security shield",
    details: [
        "Monitors for rapid administrative actions like mass bans, kicks, or channel deletions.",
        "Configurable sensitivity levels to match your server's activity.",
        "Automatically locks down the server and alerts owners when a threat is detected.",
        "Whitelist trusted admins to prevent false positives.",
    ]
  },
  {
    title: "Auto-Mod",
    description: "Automate server moderation with our customizable Auto-Mod. It filters spam, removes inappropriate content, and manages user behavior, freeing up your moderation team.",
    Icon: ShieldCheck,
    aiHint: "robot hammer",
    details: [
        "Advanced filters for spam, excessive mentions, caps, and profanity.",
        "Auto-deletes harmful links and files.",
        "Set up custom keyword filters to keep conversations on-topic.",
        "Configurable punishments: warn, mute, or ban users automatically."
    ]
  },
  {
    title: "Ticketing",
    description: "A seamless ticketing system for user support. Members can create private support channels with a single click, allowing your staff to address issues efficiently.",
    Icon: Ticket,
    aiHint: "support ticket",
    details: [
        "Users can open a ticket with a simple command or button click.",
        "Creates a private channel between the user and your support staff.",
        "Transcripts of tickets can be saved for your records.",
        "Fully customizable messages, categories, and support roles."
    ]
  },
  {
    title: "Moderation",
    description: "Powerful and easy-to-use moderation commands. From kicking and banning to muting members, Omnix provides all the tools you need to maintain a healthy community.",
    Icon: User,
    aiHint: "judge gavel",
    details: [
        "Comprehensive set of commands: ban, kick, mute, warn, and more.",
        "Moderation case logging creates a history for each user.",
        "Timed mutes and bans with clear, automated unmute/unban actions.",
        "Bulk message deletion tools for quick channel cleanup."
    ]
  },
  {
    title: "Music",
    description: "High-quality music streaming for your voice channels. Enjoy your favorite tunes with friends with our feature-rich, easy-to-use music player.",
    Icon: Music,
    aiHint: "music notes",
    details: [
        "Lag-free, high-fidelity audio streaming from sources like YouTube and Spotify.",
        "Supports playlists, song queuing, and lyrics.",
        "DJ roles to control who can manage the music queue.",
        "Premium users get access to volume control, 24/7 playback, and more."
    ]
  },
  {
    title: "And More...",
    description: "Omnix is packed with dozens of other features, including welcome messages, logging, utility commands, and much more to enhance your Discord server.",
    Icon: Bot,
    aiHint: "plus icon",
    details: [
        "Customizable welcome and leave messages with banner images.",
        "Detailed logging for all server events.",
        "Utility commands for user info, server stats, and more.",
        "Reaction roles to let users self-assign roles."
    ]
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

export const ACCENT_COLORS = [
  { name: 'Default', color: '282.4 100% 41.4%' }, // #9400D3
  { name: 'Teal', color: '180 100% 25.1%' }, // #008080
  { name: 'Blue', color: '221.2 83.2% 53.3%' },
  { name: 'Green', color: '142.1 76.2% 36.3%' },
  { name: "Rose", color: '346.8 77.2% 49.8%' },
];

export const PREMIUM_FEATURES = [
  {
    category: 'Core Functionality',
    features: [
      { name: 'Server Limit', free: '1 Server', premium: 'Up to 10 Servers' },
      { name: 'Basic Moderation Commands', free: true, premium: true },
      { name: 'Ticketing System', free: true, premium: true },
      { name: 'Welcome & Leave Messages', free: true, premium: true },
      { name: 'Basic Auto-Mod (Spam, Links)', free: true, premium: true },
    ],
  },
  {
    category: 'Music',
    features: [
      { name: 'Music Quality', free: 'Standard', premium: 'High Fidelity' },
      { name: '24/7 Playback', free: false, premium: true },
      { name: 'Volume Control', free: false, premium: true },
      { name: 'Playlists', free: '1 playlist', premium: 'Unlimited playlists' },
    ]
  },
  {
    category: 'Advanced Features',
    features: [
      { name: 'Advanced Anti-Nuke System', free: false, premium: true },
      { name: 'AI-Powered Auto-Mod', free: false, premium: true },
      { name: 'Custom Branding & Embeds', free: false, premium: true },
      { name: 'Auto-Publishing', free: false, premium: true },
      { name: 'Advanced Server Logging', free: false, premium: true },
      { name: 'Custom Commands', free: false, premium: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Community Support', free: true, premium: true },
      { name: 'Priority Support', free: false, premium: true },
    ],
  },
];
