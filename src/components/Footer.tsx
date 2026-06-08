import { PageTab } from '../types';
import { Globe, Network, Terminal } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onModalClick: (title: string, content: string) => void;
}

export default function Footer({ setActiveTab, onModalClick }: FooterProps) {
  const showPrivacy = () => {
    onModalClick(
      'Privacy Policy',
      `Our zero-knowledge commitment guarantees that 100% of your biometric, GPS, and layout statistics remain fully protected on your device. We use industry-standard AES-256 keys to secure offline datastores, with zero telemetry transmission or cloud leakage. You are in complete control of your fitness logs.`
    );
  };

  const showTerms = () => {
    onModalClick(
      'Terms of Service',
      `By utilizing the SlayFit Tracker application, you accept our local-first deployment guidelines. Our AI generative features operate on-device using custom neural endpoints. Users are advised to calibrate workouts based on individual injury histories logged during onboarding.`
    );
  };

  const showGitHub = () => {
    onModalClick(
      'GitHub Integration',
      `Explore our open-source native extensions and custom Skia layouts. Use of our build pipeline complies with system architecture 1.0 protocols under the Apache-2.0 software license.`
    );
  };

  return (
    <footer className="bg-surface-container-lowest w-full py-10 px-6 border-t border-white/5 mt-16 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6 text-sm">
        <div className="flex flex-col items-center md:items-start gap-1">
          <button 
            onClick={() => setActiveTab('home')}
            className="font-display text-base font-bold text-primary-fixed-dim hover:opacity-85 transition-opacity"
          >
            SlayFit Tracker
          </button>
          <p className="text-on-surface-variant text-xs text-center md:text-left">
            © 2024 SlayFit Tracker. Engineered for Precision.
          </p>
        </div>
        
        <div className="flex gap-6 text-xs text-on-surface-variant">
          <button 
            onClick={showPrivacy}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Privacy
          </button>
          <button 
            onClick={showTerms}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Terms
          </button>
          <button 
            onClick={showGitHub}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            GitHub
          </button>
        </div>

        <div className="flex gap-4 text-on-surface-variant">
          <button 
            onClick={() => onModalClick('Global Network', 'Connect to on-demand localized nodes for real-time model syncing.')}
            className="hover:text-primary cursor-pointer transition-colors p-1"
          >
            <Globe className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onModalClick('System Core', 'Integrates seamless JSI extensions for high-frequency accelerometers.')}
            className="hover:text-primary cursor-pointer transition-colors p-1"
          >
            <Network className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onModalClick('Terminal Manifest', 'Inspect build dependencies: React Native, Expo 51, and Victory Native XL.')}
            className="hover:text-primary cursor-pointer transition-colors p-1"
          >
            <Terminal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
