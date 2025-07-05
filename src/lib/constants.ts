
import {
  ShieldCheck, ShieldAlert, Ticket, User, Music, Bot, Github, Twitter, Linkedin, Server, Users, Clock, Wifi, CheckCircle,
  BrainCircuit, Users as UsersIcon, Wrench, MessageSquarePlus, MessagesSquare, Gift, Smile, EyeOff, Image as ImageIcon, Mic, Handshake, UserCircle as UserCircleIcon, Star, Voicemail, Milestone, FileText, Cog
} from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/features", label: "features" },
  { href: "/premium", label: "premium" },
  { href: "/status", label: "status" },
  { href: "/team", label: "team" },
  { href: "/support", label: "support" },
  { href: "/faq", label: "faq" },
  { href: "/settings", label: "settings" },
];

export const LEGAL_LINKS = [
  { href: "/legal?tab=terms", label: "Terms of Service" },
  { href: "/legal?tab=privacy", label: "Privacy Policy" },
];

export const DISCORD_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1208464388948893796";
export const SUPPORT_SERVER_URL = "https://discord.gg/NTePbyDBVX";

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
    title: "Logging",
    description: "Keep a detailed record of all server activity. Our comprehensive logging feature helps you monitor events, track moderation actions, and maintain accountability.",
    Icon: FileText,
    aiHint: "log file",
    details: [
        "Log everything from message edits/deletes to role changes.",
        "Send logs to a specific channel for easy monitoring.",
        "Highly configurable to log only the events you care about.",
        "Secure and easy-to-read log formats.",
    ]
  },
   {
    title: "AI",
    description: "Leverage the power of Artificial Intelligence. Omnix integrates GenAI for features like AI-powered support, FAQs, and intelligent conversation.",
    Icon: BrainCircuit,
    aiHint: "ai brain",
    details: [
        "AI-powered FAQ and support pages on the website.",
        "Intelligent auto-responses within Discord.",
        "Image generation and other creative AI tools.",
        "Context-aware AI that learns from your server.",
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
    title: "Autoresponder",
    description: "Set up automatic replies to specific words or phrases. Perfect for answering common questions or triggering automated actions.",
    Icon: MessagesSquare,
    aiHint: "chat reply",
    details: [
        "Create unlimited auto-response triggers.",
        "Use wildcards for more flexible matching.",
        "Send embed messages as responses.",
        "Add variables to your responses.",
    ]
  },
   {
    title: "JoinDM",
    description: "Automatically send a direct message to new members when they join your server. A great way to provide essential information.",
    Icon: MessageSquarePlus,
    aiHint: "welcome message",
    details: [
        "Craft a custom welcome message to be sent via DM.",
        "Use embeds and variables for a rich message.",
        "Guide new users to important channels or rules.",
        "Toggle on or off easily.",
    ]
  },
  {
    title: "Welcomer",
    description: "Create a warm and inviting atmosphere for new members with customizable welcome and leave messages. Make a great first impression!",
    Icon: Handshake,
    aiHint: "welcome handshake",
    details: [
        "Greet new members with personalized messages and images.",
        "Send welcome messages in a specific channel or directly to the user.",
        "Announce when members leave.",
        "Use variables like username, server name, and member count.",
    ]
  },
   {
    title: "Giveaway",
    description: "Easily host and manage giveaways in your server. Boost engagement and reward your community with our simple and fair giveaway system.",
    Icon: Gift,
    aiHint: "giveaway gift",
    details: [
        "Start giveaways with a simple command.",
        "Set duration, number of winners, and prize.",
        "Requirement options like requiring a certain role to enter.",
        "Fair winner selection and announcement.",
    ]
  },
  {
    title: "Reaction Roles",
    description: "Allow users to self-assign roles by reacting to a message. A simple and effective way to manage roles and channel access.",
    Icon: Star,
    aiHint: "reaction role",
    details: [
        "Set up multiple reaction role messages.",
        "Supports standard and custom emojis.",
        "Different modes: unique (one role per message) or multiple roles.",
        "Easy-to-use setup menu.",
    ]
  },
  {
    title: "Custom Roles",
    description: "Empower your community with custom roles. Allow users to create and manage their own unique roles, adding a layer of personalization.",
    Icon: UsersIcon,
    aiHint: "custom roles",
    details: [
        "Define who can create custom roles.",
        "Set limits on the number of custom roles a user can have.",
        "Users can set the role name and color.",
        "Safe and secure implementation.",
    ]
  },
    {
    title: "VC Roles",
    description: "Automatically assign a role to users when they join a voice channel, and remove it when they leave.",
    Icon: Voicemail,
    aiHint: "voice chat role",
    details: [
        "Great for indicating who is currently in a voice call.",
        "Assign different roles for different voice channels.",
        "Helps manage access to text channels for voice chat participants.",
        "Seamless and instant role assignment.",
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
    title: "Voice",
    description: "Advanced voice channel management tools. Create temporary voice channels, manage voice activity, and more.",
    Icon: Mic,
    aiHint: "voice channel",
    details: [
        "Auto-create temporary voice channels when a user joins a 'hub' channel.",
        "Grant users permission to manage their own temporary channels.",
        "Log voice channel activity.",
        "Voice channel moderation commands.",
    ]
  },
  {
    title: "Media Channels",
    description: "Designate channels as 'media-only' to enforce that only messages with images or videos can be sent.",
    Icon: ImageIcon,
    aiHint: "media only",
    details: [
        "Automatically delete messages without attachments in designated channels.",
        "Perfect for art, photography, or meme channels.",
        "Allow text with attachments if needed.",
        "Simple setup command.",
    ]
  },
    {
    title: "Fun",
    description: "Add a touch of fun to your server with a collection of entertaining commands. From memes to mini-games, keep your community entertained.",
    Icon: Smile,
    aiHint: "fun commands",
    details: [
        "Meme generators and random jokes.",
        "Interactive games like trivia and hangman.",
        "Image manipulation commands.",
        "A wide variety of fun and engaging activities.",
    ]
  },
  {
    title: "Utility",
    description: "A suite of powerful utility commands to get information and manage your server efficiently. Everything you need in one place.",
    Icon: Wrench,
    aiHint: "utility tools",
    details: [
        "Commands for user info, server info, and role info.",
        "Avatar and profile picture lookup.",
        "Tools for managing channels and roles.",
        "And much more for day-to-day server management.",
    ]
  },
  {
    title: "General",
    description: "A collection of general-purpose commands that make Omnix a versatile assistant for any server.",
    Icon: Bot,
    aiHint: "bot commands",
    details: [
        "Ping command to check bot latency.",
        "Help command to list all available features.",
        "Bot statistics and uptime information.",
        "Server status command.",
    ]
  },
   {
    title: "Profile Pictures (Pfp)",
    description: "Easily view and manage user profile pictures. Get high-resolution avatars for any user in the server.",
    Icon: UserCircleIcon,
    aiHint: "profile picture",
    details: [
        "Fetch the avatar of any user, even those not on the server (by ID).",
        "Get server-specific avatars.",
        "Download high-quality profile pictures.",
        "View avatar history (premium feature).",
    ]
  },
  {
    title: "Counter",
    description: "Set up dynamic channel counters to display server statistics like member count, online users, or role counts.",
    Icon: Milestone,
    aiHint: "member counter",
    details: [
        "Create channels that update their name with live stats.",
        "Track total members, online members, bots, and more.",
        "Customizable counter text formats.",
        "Updates automatically at set intervals.",
    ]
  },
   {
    title: "Ignore",
    description: "Tell the bot to ignore certain channels, roles, or users, preventing commands from being used where they shouldn't be.",
    Icon: EyeOff,
    aiHint: "ignore channel",
    details: [
        "Ignore commands in specific channels (e.g., announcement channels).",
        "Prevent users with an ignored role from using the bot.",
        "Add individual users to the ignore list.",
        "Simple commands to manage the ignore list.",
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
    { name: "Discord", Icon: Bot, href: SUPPORT_SERVER_URL },
    { name: "Twitter", Icon: Twitter, href: "#" },
];

export const ACCENT_COLORS = [
  { name: 'Default', color: '282.4 100% 41.4%' }, // #9400D3
  { name: 'Teal', color: '180 100% 25.1%' }, // #008080
  { name: 'Blue', color: '221.2 83.2% 53.3%' },
  { name: 'Green', color: '142.1 76.2% 36.3%' },
  { name: 'Rose', color: '346.8 77.2% 49.8%' },
  { name: 'Orange', color: '24.6 95% 53.1%' },
  { name: 'Yellow', color: '47.9 95.8% 53.1%' },
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
