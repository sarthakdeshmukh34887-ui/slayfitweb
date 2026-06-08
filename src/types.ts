export type PageTab = 'home' | 'features' | 'specs' | 'faq';

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface DependencyItem {
  name: string;
  version: string;
  role: string;
  performance: string;
  perfColor: 'primary' | 'tertiary';
}

export interface ChatMessage {
  id: string;
  sender: 'coach' | 'user';
  text: string;
  time: string;
}

export interface ExerciseItem {
  name: string;
  type: string;
  focus: string;
  locked?: boolean;
}
