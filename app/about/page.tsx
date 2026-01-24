import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about EFH Consulting Group - three best friends from Palm Springs helping small businesses get the exposure they deserve.',
};

const team = [
  {
    name: 'Eduardo Molina',
    role: 'Co-Founder',
    age: '22',
    focus: 'Marketing & Growth',
    image: '/images/team-eduardo.png',
  },
  {
    name: 'Francisco Duran',
    role: 'Co-Founder',
    age: '21',
    focus: 'Strategy & Development',
    image: '/images/team-francisco.PNG',
  },
  {
    name: 'Henrry Acosta',
    role: 'Co-Founder',
    age: '22',
    focus: 'Operations & Finance',
    image: '/images/team-henrry.png',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-dark to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Driven by real <span className="text-gold">business challenges</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We started a business and learned the hard way that great work means nothing without visibility. Now we make sure other small businesses don&apos;t face the same struggle.
          </p>
        </div>
      </section>

      {/* Our Story - The Real One */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
                The Beginning
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Driven by experience.<br />Focused on results.
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Before EFH Consulting Group, we started a construction company. Three best friends from the Coachella Valley who thought that if we did good work, customers would find us.
                </p>
                <p>
                  We were wrong.
                </p>
                <p>
                  We watched competitors with worse work but better marketing win every job. We had no website, no social media presence, nothing. Word of mouth was slow. We felt invisible.
                </p>
                <p className="text-white font-medium">
                  That experience taught us something valuable: talent isn&apos;t enough. You need to be seen.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-gold/10 to-transparent rounded-xl flex items-center justify-center border border-gold/10">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-gold mb-2">2024</div>
                  <div className="text-gray-500 text-sm">Founded</div>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-gold/10 to-transparent rounded-xl flex items-center justify-center border border-gold/10">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-gold mb-2">3</div>
                  <div className="text-gray-500 text-sm">Founders</div>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-gold/10 to-transparent rounded-xl flex items-center justify-center border border-gold/10">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-gold mb-2">21-22</div>
                  <div className="text-gray-500 text-sm">Years Old</div>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-gold/10 to-transparent rounded-xl flex items-center justify-center border border-gold/10">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-gold mb-2">∞</div>
                  <div className="text-gray-500 text-sm">Years Friends</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real People Section */}
      <section className="py-20 bg-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real people. Real business results.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Best friends since birth. Business partners by choice. We bring different strengths to the table, united by one goal: helping businesses like yours succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} variant="bordered" className="overflow-hidden group">
                <div className={`aspect-[4/3] flex items-center justify-center relative ${member.image ? 'bg-gray-dark' : 'bg-gradient-to-br from-gold/5 via-gray-dark to-black'}`}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <svg className="w-16 h-16 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gold/20 rounded-full z-10">
                    <span className="text-gold text-sm font-medium">{member.age}</span>
                  </div>
                </div>
                <div className="p-6 bg-black/80 border-t border-gold/20">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gold mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.focus}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Building Trust Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Building trust, one client at a time
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  We know we&apos;re young. We know we&apos;re new. That&apos;s exactly why we do things differently.
                </p>
                <p>
                  We don&apos;t ask you to trust us based on promises. We build your website first, show you the results, and let you decide if we&apos;re worth it.
                </p>
                <p>
                  $500 for your website. $50/month for three months while we prove ourselves. Then $150/month if we&apos;ve earned it.
                </p>
                <p className="text-white font-medium">
                  No contracts. No pressure. Just results.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/pricing">
                  <Button variant="outline">View Our Pricing</Button>
                </Link>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="bg-gray-dark rounded-xl border border-gold/10 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">1</div>
                    <div>
                      <h4 className="text-white font-semibold">We build first</h4>
                      <p className="text-gray-500 text-sm">See your website before you commit</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">2</div>
                    <div>
                      <h4 className="text-white font-semibold">You pay $500</h4>
                      <p className="text-gray-500 text-sm">Only if you love what we created</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">3</div>
                    <div>
                      <h4 className="text-white font-semibold">3 months at $50</h4>
                      <p className="text-gray-500 text-sm">Our chance to prove ongoing value</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black font-bold">4</div>
                    <div>
                      <h4 className="text-white font-semibold">$150/month partnership</h4>
                      <p className="text-gray-500 text-sm">Only after we&apos;ve earned your trust</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
                Location
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Born and raised in the desert
              </h2>
              <p className="text-gray-400 mb-6">
                Palm Springs. Desert Hot Springs. The Coachella Valley. This is home. We grew up here, we started our first business here, and now we&apos;re helping other local businesses thrive here.
              </p>
              <p className="text-gray-400 mb-6">
                But we&apos;re not limited to local. We work with clients across California and nationwide. If you have an internet connection, we can help you.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Palm Springs', 'Desert Hot Springs', 'Cathedral City', 'Rancho Mirage', 'Palm Desert', 'Nationwide'].map((location) => (
                  <span key={location} className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm">
                    {location}
                  </span>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-dark to-black rounded-xl flex items-center justify-center border border-gold/10">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-gold/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white font-semibold">Coachella Valley</p>
                <p className="text-gray-500 text-sm">California, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s build your online presence
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            We&apos;ve been where you are. We know the struggle. Let us help you get the visibility your business deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start a Conversation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
