
export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series: string;
  description: string;
  thumbnail: string;
  audioUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ConnectEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'Group' | 'Event' | 'Volunteer';
}
