export interface TradeCategory {
  id: string;
  name: string;
  description: string;
  iconName: string; // Mapping to lucide-react icons
  slug: string;
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Ausbildung';
  postedDate: string;
  tags: string[];
}

export enum Role {
  USER = 'user',
  MODEL = 'model',
}

export interface ChatMessage {
  role: Role;
  text: string;
  timestamp: number;
}