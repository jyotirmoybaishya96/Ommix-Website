import { NextResponse } from 'next/server';

// This is a fixed start time for the bot to calculate uptime.
const BOT_LAUNCH_TIME = new Date('2024-01-01T00:00:00Z').getTime();
const INITIAL_GUILDS = 2500;
const INITIAL_USERS = 1200000;
const INITIAL_CHANNELS = 15000;

export type StatsResponse = {
  guilds: number;
  users: number;
  channels: number;
  ping: number;
  uptime: number; // in seconds
};

// In a real app, you would get this from your discord.js client instance
// For this prototype, we simulate the data.
async function getBotStats(): Promise<StatsResponse> {
  const now = Date.now();
  const uptimeMilliseconds = now - BOT_LAUNCH_TIME;

  // Simulate guild growth: ~1 server every 8 hours
  const guilds = INITIAL_GUILDS + Math.floor(uptimeMilliseconds / (1000 * 60 * 60 * 8));
  
  // Simulate user growth: ~1 user every 10 seconds
  const users = INITIAL_USERS + Math.floor(uptimeMilliseconds / (1000 * 10));

  // Simulate channel growth: ~1 channel every 30 minutes
  const channels = INITIAL_CHANNELS + Math.floor(uptimeMilliseconds / (1000 * 60 * 30));

  // Simulate a random ping between 40ms and 55ms
  const ping = 40 + Math.floor(Math.random() * 15);

  const uptime = Math.floor(uptimeMilliseconds / 1000);

  return { guilds, users, channels, ping, uptime };
}


export async function GET() {
  try {
    const stats = await getBotStats();
    return NextResponse.json(stats);
  } catch (err) {
    console.error("[API /stats] Error:", err);
    return NextResponse.json({ error: "Failed to fetch bot stats" }, { status: 500 });
  }
}
