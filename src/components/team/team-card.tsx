import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { TEAM_MEMBERS } from '@/lib/constants';

type TeamMember = (typeof TEAM_MEMBERS)[0];

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="smooth-hover text-center">
      <CardHeader className="items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
        <p className="mt-1 text-primary">{member.role}</p>
        <div className="mt-4 flex justify-center space-x-2">
          {member.socials.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.Icon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
