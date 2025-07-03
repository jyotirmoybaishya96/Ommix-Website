
import BotStats from '@/components/home/bot-stats';
import { FaqSection } from '@/components/home/faq-section';
import HeroSection from '@/components/home/hero-section';

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <HeroSection />
      <BotStats />
      <FaqSection />
    </div>
  );
}
