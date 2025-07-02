'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, FileText } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function LegalPageContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'terms';

  return (
    <div className="container mx-auto max-w-4xl py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Legal Information</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Our terms of service and privacy policy.
        </p>
      </div>

      <Tabs defaultValue={tab} className="mt-12 w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="terms">
            <FileText className="mr-2 h-4 w-4" />
            Terms of Service
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <Shield className="mr-2 h-4 w-4" />
            Privacy Policy
          </TabsTrigger>
        </TabsList>
        <TabsContent value="terms" className="mt-6 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="font-headline text-2xl font-bold">Terms of Service</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>Welcome to Omnix! These terms and conditions outline the rules and regulations for the use of Omnix's Website, located at omnix.gg.</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Omnix if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <h3 className="font-headline text-xl font-semibold text-foreground">Cookies</h3>
            <p>We employ the use of cookies. By accessing Omnix, you agreed to use cookies in agreement with the Omnix's Privacy Policy.</p>
            
            <h3 className="font-headline text-xl font-semibold text-foreground">License</h3>
            <p>Unless otherwise stated, Omnix and/or its licensors own the intellectual property rights for all material on Omnix. All intellectual property rights are reserved. You may access this from Omnix for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p>You must not:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Republish material from Omnix</li>
              <li>Sell, rent or sub-license material from Omnix</li>
              <li>Reproduce, duplicate or copy material from Omnix</li>
              <li>Redistribute content from Omnix</li>
            </ul>
            
            <h3 className="font-headline text-xl font-semibold text-foreground">Disclaimer</h3>
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
                <li>limit or exclude our or your liability for death or personal injury;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="privacy" className="mt-6 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="font-headline text-2xl font-bold">Privacy Policy</h2>
           <div className="mt-4 space-y-4 text-muted-foreground">
                <p>At Omnix, accessible from omnix.gg, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Omnix and how we use it.</p>
                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                
                <h3 className="font-headline text-xl font-semibold text-foreground">Log Files</h3>
                <p>Omnix follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                
                <h3 className="font-headline text-xl font-semibold text-foreground">Third Party Privacy Policies</h3>
                <p>Omnix's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

                <h3 className="font-headline text-xl font-semibold text-foreground">Children's Information</h3>
                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                <p>Omnix does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function LegalPageSkeleton() {
    return (
        <div className="container mx-auto max-w-4xl py-16 sm:py-24">
            <div className="text-center">
                <Skeleton className="h-10 w-3/4 mx-auto" />
                <Skeleton className="h-6 w-1/2 mx-auto mt-4" />
            </div>
            <div className="mt-12 w-full">
                <div className="grid w-full grid-cols-2 gap-2">
                    <Skeleton className="h-10" />
                    <Skeleton className="h-10" />
                </div>
                <Skeleton className="mt-6 h-96 w-full rounded-lg" />
            </div>
        </div>
    )
}

export default function LegalPage() {
    return (
        <Suspense fallback={<LegalPageSkeleton />}>
            <LegalPageContent />
        </Suspense>
    )
}
