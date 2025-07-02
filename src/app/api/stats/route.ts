
import { NextResponse } from 'next/server';

// This is a fixed start time for the bot to calculate uptime.
const BOT_LAUNCH_TIME = new Date('2024-01-01T00:00:00Z').getTime();
const INITIAL_SERVERS = 2500;
const INITIAL_USERS = 1200000;

export async function GET() {
  const now = Date.now();
  const uptimeMilliseconds = now - BOT_LAUNCH_TIME;

  // Simulate server growth: ~1 server every 8 hours
  const servers = INITIAL_SERVERS + Math.floor(uptimeMilliseconds / (1000 * 60 * 60 * 8));
  
  // Simulate user growth: ~1 user every 10 seconds
  const users = INITIAL_USERS + Math.floor(uptimeMilliseconds / (1000 * 10));

  // Simulate a random ping between 40ms and 55ms
  const ping = 40 + Math.floor(Math.random() * 15);

  // Calculate uptime in d/h/m format
  const totalSeconds = Math.floor(uptimeMilliseconds / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const uptime = `${days}d ${hours}h ${minutes}m`;

  return NextResponse.json({
    servers,
    users,
    ping,
    uptime,
  });
}
