import { TeamCard } from '@/components/team/team-card';
import { TEAM_MEMBERS } from '@/lib/constants';

export default function TeamPage() {
  return (
    <div className="container mx-auto py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Meet the Team</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          The passionate individuals behind Omnix, dedicated to creating the best Discord experience.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM_MEMBERS.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
