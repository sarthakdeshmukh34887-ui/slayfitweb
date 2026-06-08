import { FAQItem, DependencyItem, ChatMessage, ExerciseItem } from './types';

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'AI Coach & Accuracy',
    question: "How accurate is the AI coach's feedback?",
    answer: "Our proprietary SlayFit engine uses multi-layer neural networks trained on over 500,000 professional athlete datasets. We guarantee a 98.4% accuracy rate in exercise identification and biometric analysis, calibrated specifically to your personal movement patterns during the first 7 days of use."
  },
  {
    id: 'faq-2',
    category: 'AI Coach & Accuracy',
    question: "Does the coach adapt to my injury history?",
    answer: "Absolutely. During onboarding, you can log specific joint sensitivities or previous injuries. The AI will automatically omit high-risk movements and suggest therapeutic alternatives designed to improve mobility without compromising safety."
  },
  {
    id: 'faq-3',
    category: 'Data Privacy',
    question: "Who owns my biometric data?",
    answer: "You do. Period. SlayFit Tracker employs end-to-end encryption for all health data. We do not sell your personal biometrics to third parties. Your data is stored locally by default, with optional encrypted cloud syncing for multi-device support."
  },
  {
    id: 'faq-4',
    category: 'Data Privacy',
    question: "How is the data secured?",
    answer: "We use AES-256 bank-level encryption and biometric authentication locks (FaceID/Fingerprint) within the app. All AI processing is performed using differential privacy techniques to ensure your identity remains anonymous even during machine learning training."
  },
  {
    id: 'faq-5',
    category: 'Capabilities & Compatibility',
    question: "Can I track workouts offline?",
    answer: "Yes. SlayFit Tracker is designed for the most remote environments. The core tracking algorithms run natively on your device. Your data will automatically sync to your dashboard once a connection is re-established."
  },
  {
    id: 'faq-6',
    category: 'Capabilities & Compatibility',
    question: "Is it compatible with Android?",
    answer: "Yes, SlayFit Tracker is fully optimized for Android 12 and above. We provide native support for Google Fit, Samsung Health, and specific wearable integrations including Garmin and Whoop."
  }
];

export const DEPENDENCY_DATA: DependencyItem[] = [
  {
    name: 'react-native',
    version: '0.74.x',
    role: 'Core Runtime',
    performance: 'Optimized',
    perfColor: 'primary'
  },
  {
    name: 'expo',
    version: '~51.0.0',
    role: 'Ecosystem & Native APIs',
    performance: 'Native JSI',
    perfColor: 'primary'
  },
  {
    name: '@google/generative-ai',
    version: '^0.12.0',
    role: 'Intelligence Layer (Gemini)',
    performance: 'Flash Tier',
    perfColor: 'tertiary'
  },
  {
    name: 'victory-native-xl',
    version: '^1.0.0',
    role: 'Skia Rendering Engine',
    performance: '60 FPS',
    perfColor: 'primary'
  }
];

export const INITIAL_CHAT: ChatMessage[] = [
  {
    id: 'chat-1',
    sender: 'coach',
    text: "Your deadlift form looks solid, but you're losing tension at the lockout. Try to squeeze your glutes harder.",
    time: '11:24'
  },
  {
    id: 'chat-2',
    sender: 'user',
    text: "Got it. I'll focus on the lockout for this set.",
    time: '11:25'
  },
  {
    id: 'chat-3',
    sender: 'coach',
    text: "Perfect. Go for 5 reps at RPE 8. 🚀",
    time: '11:25'
  }
];

export const EXERCISE_LIBRARY: ExerciseItem[] = [
  {
    name: 'Barbell Bench Press',
    type: 'Compound',
    focus: 'Strength'
  },
  {
    name: 'Incline DB Press',
    type: 'Isolation',
    focus: 'Hypertrophy'
  },
  {
    name: 'Weighted Dips',
    type: 'Calisthenics',
    focus: 'Triceps/Chest',
    locked: true
  },
  {
    name: 'Cable Crossover',
    type: 'Isolation',
    focus: 'Hypertrophy'
  },
  {
    name: 'Push-Ups (Weighted)',
    type: 'Calisthenics',
    focus: 'Endurance'
  }
];
