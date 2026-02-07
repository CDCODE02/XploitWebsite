import { Box, Mic, Users, Zap, TrendingUp, Globe, Target, Award } from 'lucide-react';

export const NAVIGATION = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    title: 'Community Architecture',
    description: 'Building resilient, high-engagement Web3 communities from zero to critical mass using data-driven engagement loops.',
    icon: Users,
  },
  {
    title: 'Event Strategy & Execution',
    description: 'Curating premium side-events, hackathons, and conferences that drive brand authority and developer adoption.',
    icon: Mic,
  },
  {
    title: 'Growth Marketing',
    description: 'User acquisition strategies tailored for protocols and dApps. Converting passive followers into active token holders.',
    icon: TrendingUp,
  },
  {
    title: 'Brand Positioning',
    description: 'Defining your narrative in a noisy market. High-impact messaging that resonates with VCs and degens alike.',
    icon: Target,
  },
];

export const EXPERIENCE = [
  {
    role: 'Head of Community',
    company: 'Leading DeFi Protocol',
    period: '2022 - Present',
    description: 'Spearheaded community growth from 5k to 150k members. Orchestrated global ambassador program spanning 12 regions.',
  },
  {
    role: 'Senior Event Manager',
    company: 'Web3 Conference Inc.',
    period: '2021 - 2022',
    description: 'Managed logistics and content for Tier-1 crypto conferences in Dubai, Singapore, and London.',
  },
  {
    role: 'Marketing Strategist',
    company: 'NFT Launchpad',
    period: '2020 - 2021',
    description: 'Executed go-to-market strategies for blue-chip NFT collections, generating over $2M in primary sales volume.',
  },
];

export const TESTIMONIALS = [
  {
    quote: "Edwin understands the pulse of Web3 like few others. His ability to mobilize a community is simply unmatched.",
    author: "Alex R.",
    role: "Founder, Zenith Chain",
  },
  {
    quote: "Working with Edwin was a game-changer for our TGE. The hype he generated was organic, sustained, and high-quality.",
    author: "Sarah K.",
    role: "CMO, Nova Protocol",
  },
  {
    quote: "From event logistics to high-level strategy, Edwin delivers excellence. A true partner in growth.",
    author: "David L.",
    role: "Partner, Venture DAO",
  },
];

export const EVENTS_GALLERY = [
  { id: 1, title: "Token2049 Side Event", image: "https://picsum.photos/seed/web3conf1/600/400" },
  { id: 2, title: "ETH Global Hackathon", image: "https://picsum.photos/seed/hackathon/600/800" },
  { id: 3, title: "Dubai Crypto Meetup", image: "https://picsum.photos/seed/dubai/600/400" },
  { id: 4, title: "Community AMA Session", image: "https://picsum.photos/seed/ama/600/400" },
  { id: 5, title: "NFT NYC Panel", image: "https://picsum.photos/seed/panel/600/600" },
  { id: 6, title: "Private Founder Dinner", image: "https://picsum.photos/seed/dinner/600/400" },
];