
import React from 'react';
import { Sermon, TeamMember, ConnectEvent } from './types';

export const HARBOR_LOGO = (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="currentColor">
    <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="12" />
    <path d="M250 50 L270 120 L230 120 Z" />
    <path d="M250 450 L230 380 L270 380 Z" />
    <path d="M50 250 L120 230 L120 270 Z" />
    <path d="M450 250 L380 270 L380 230 Z" />
    {/* Internal compass points */}
    <path d="M250 150 L260 220 L240 220 Z" strokeWidth="2" />
    <path d="M250 350 L240 280 L260 280 Z" strokeWidth="2" />
    {/* Anchor Cross Hybrid */}
    <path d="M250 160 V340" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
    <path d="M190 220 H310" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
    <path d="M180 300 C180 340, 320 340, 320 300" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
    <path d="M170 290 L180 300 L190 290" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
    <path d="M310 290 L320 300 L330 290" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
  </svg>
);

export const SERMONS: Sermon[] = [
  {
    id: '1',
    title: 'Finding Your Anchor',
    speaker: 'Pastor John Smith',
    date: 'Oct 27, 2024',
    series: 'Steady in the Storm',
    description: 'A deep dive into Hebrews 6:19 and how faith acts as an anchor for our souls.',
    thumbnail: 'https://picsum.photos/seed/sermon1/800/450',
    audioUrl: '#'
  },
  {
    id: '2',
    title: 'Navigating Uncharted Waters',
    speaker: 'Sarah Jenkins',
    date: 'Oct 20, 2024',
    series: 'The Voyage Ahead',
    description: 'Learning to trust God when we cannot see the shore.',
    thumbnail: 'https://picsum.photos/seed/sermon2/800/450',
    audioUrl: '#'
  },
  {
    id: '3',
    title: 'Safe Harbor: Building Community',
    speaker: 'Pastor John Smith',
    date: 'Oct 13, 2024',
    series: 'Living Together',
    description: 'Exploring the beauty of a church that protects and nurtures.',
    thumbnail: 'https://picsum.photos/seed/sermon3/800/450',
    audioUrl: '#'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'John Smith',
    role: 'Lead Pastor',
    bio: 'John has been leading Harbor Church for 12 years with a passion for community outreach and Biblical teaching.',
    imageUrl: 'https://picsum.photos/seed/john/400/400'
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Associate Pastor',
    bio: 'Sarah oversees our small group ministries and has a heart for helping people find their "anchor" in Christ.',
    imageUrl: 'https://picsum.photos/seed/sarah/400/400'
  },
  {
    id: 't3',
    name: 'Marcus Williams',
    role: 'Worship Director',
    bio: 'Marcus brings a soulful and deep connection to every Sunday service through music.',
    imageUrl: 'https://picsum.photos/seed/marcus/400/400'
  }
];

export const CONNECT_EVENTS: ConnectEvent[] = [
  { id: 'e1', title: 'Young Adults Beach Bonfire', date: 'Nov 2, 7:00 PM', location: 'North Harbor Shore', type: 'Event' },
  { id: 'e2', title: 'The Anchor Small Group', date: 'Wednesdays, 6:30 PM', location: 'Church Hall', type: 'Group' },
  { id: 'e3', title: 'Food Bank Volunteering', date: 'Saturday, 9:00 AM', location: 'Community Center', type: 'Volunteer' },
];
