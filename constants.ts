import { Box, Mic, Users, Zap, TrendingUp, Globe, Target, Award, UserPlus, Video, CalendarCheck, Handshake, Sparkles } from 'lucide-react';

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
    title: 'Community Building',
    description: "I build loyal, high-signal communities that don't just exist — they participate, convert, and grow ecosystems.",
    icon: UserPlus,
  },
  {
    title: 'Web3 Marketing',
    description: 'I design and execute Web3-native marketing that turns complex products into narratives people believe in and act on.',
    icon: TrendingUp,
  },
  {
    title: 'Content Creation',
    description: 'I create scroll-stopping content that educates, entertains, and moves audiences from awareness to adoption.',
    icon: Video,
  },
  {
    title: 'Web3 Events',
    description: 'I craft unforgettable Web3 experiences that blend strategy, storytelling, and culture to drive real ecosystem impact.',
    icon: CalendarCheck,
  },
  {
    title: 'Business Development',
    description: 'I unlock strategic partnerships and growth opportunities that align vision, value, and long-term expansion.',
    icon: Handshake,
  },
  {
    title: 'Web3 Entertainment',
    description: 'I fuse blockchain education with entertainment to make Web3 human, memorable, and impossible to ignore.',
    icon: Zap,
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
    quote: "You played a pivotal role in the beta launch and user testing phase, ensuring that we captured valuable insights to refine our product. Your proactive approach and execution during this phase significantly contributed to the success of the launch.",
    author: "AG",
    role: "Arka Prediction Market",
    image: "https://i.ibb.co/G4Jt9R6g/arka.jpg"
  },
  {
    quote: "He consistently demonstrated a strong sense of professionalism, ownership, and creative problem-solving. He was dependable and proactive, and he approached his work with a clear focus on delivering high-quality outcomes.",
    author: "Dr. Harri Obi",
    role: "Lead, SuperteamNG",
    image: "https://i.ibb.co/WpGKsZN3/harri.jpg"
  },
  {
    quote: "Edwin stood out for his ability to manage our community, create content, meet deadlines, and collaborate effectively, and he contributed meaningfully to our goals. He was proactive, receptive to feedback, and easy to work with in both independent and team settings.",
    author: "Odion Olumhense",
    role: "Co-founder/COO Joint Labs",
    image: "https://i.ibb.co/ZzpNHPkf/odion.jpg"
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