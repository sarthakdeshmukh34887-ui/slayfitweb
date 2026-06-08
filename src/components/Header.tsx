import { PageTab } from '../types';
import { Zap, HelpCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onDownloadClick: () => void;
}

export default function Header({ activeTab, setActiveTab, onDownloadClick }: HeaderProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto h-16">
        {/* Logo/Brand */}
        <button
          onClick={() => setActiveTab('home')}
          className="font-display text-lg md:text-xl font-bold text-on-surface flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
          id="nav-logo"
        >
          <Zap className="w-5 h-5 text-primary-fixed-dim fill-primary-fixed-dim" />
          <span className="tracking-tighter">SlayFit Tracker</span>
        </button>

        {/* Navigation Tabs */}
        <div className="hidden md:flex items-center gap-6 font-display text-sm">
          <button
            onClick={() => setActiveTab('features')}
            className={`cursor-pointer pb-1 font-medium transition-all ${
              activeTab === 'features'
                ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            id="nav-tab-features"
          >
            Features
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`cursor-pointer pb-1 font-medium transition-all ${
              activeTab === 'specs'
                ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            id="nav-tab-specs"
          >
            Tech Specs
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`cursor-pointer pb-1 font-medium transition-all relative ${
              activeTab === 'faq'
                ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            id="nav-tab-faq"
          >
            FAQ
          </button>
        </div>

        {/* CTA Button */}
        <button
          onClick={onDownloadClick}
          className="bg-primary-container text-on-primary-container hover:bg-primary-container/85 px-4 py-1.5 rounded-lg font-display text-xs md:text-sm font-bold active:scale-95 transition-all cursor-pointer"
          id="nav-btn-download"
        >
          Download App
        </button>
      </div>
    </nav>
  );
}
