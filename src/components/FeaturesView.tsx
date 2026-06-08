import { useState } from 'react';
import { motion } from 'motion/react';
import { Video, ShieldAlert, Cpu, Heart, Check, Users, MessageSquare } from 'lucide-react';

interface FeaturesViewProps {
  onShowModal: (title: string, content: string) => void;
}

export default function FeaturesView({ onShowModal }: FeaturesViewProps) {
  // Sync state for Execute program
  const [syncStatus, setSyncStatus] = useState<'idle' | 'linking' | 'synced'>('idle');

  const executeSync = () => {
    if (syncStatus !== 'idle') return;
    setSyncStatus('linking');
    setTimeout(() => {
      setSyncStatus('synced');
      setTimeout(() => {
        setSyncStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Header */}
      <header className="mb-12 text-center md:text-left">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Engineering <span className="text-primary-fixed-dim electric-glow">Human Potential.</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Advanced neural networks meet professional-grade sports science. Experience a tracking ecosystem that learns your biomechanics, predicts your plateaus, and optimizes every rep.
        </p>
      </header>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Card: Adaptive AI Coaching */}
        <section className="col-span-12 md:col-span-8 glass-card rounded-xl p-6 relative overflow-hidden group min-h-[380px] flex flex-col justify-between">
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-4">
              <span className="font-display text-[10px] bg-primary-fixed-dim/10 text-primary-fixed-dim px-3 py-1 rounded-full border border-primary-fixed-dim/20 uppercase tracking-widest font-bold">
                Neural Interface
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Adaptive AI Coaching</h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-md mb-6 leading-relaxed">
              Meet your persistent training partner. SlayFit analyses your sleep metrics, physical readiness, and previous load velocity on primary lifts to balance your neural fatigue dynamically.
            </p>

            {/* Simulated linking process */}
            <div className="flex-grow flex flex-col justify-end gap-3 max-w-sm">
              <div className="bg-surface-container-high/60 p-4 rounded-xl rounded-bl-none border border-white/5">
                <p className="text-[10px] font-display font-bold text-primary-fixed-dim tracking-wider uppercase mb-1">SlayFit Core</p>
                <p className="text-xs md:text-sm font-semibold font-sans">
                  "Your CNS recovery is at 84%. Increasing volume on primary lifts by 12% today. Ready?"
                </p>
              </div>
              
              <button
                onClick={executeSync}
                className={`w-full py-3.5 rounded-xl font-display text-xs md:text-sm font-bold active:scale-95 transition-all text-center cursor-pointer ${
                  syncStatus === 'idle' 
                    ? 'bg-primary-fixed-dim text-on-primary-fixed shadow-[0_0_15px_rgba(0,218,243,0.3)] hover:opacity-90'
                    : syncStatus === 'linking'
                    ? 'bg-surface-container-highest text-primary-fixed-dim border border-primary-fixed-dim/30 animate-pulse'
                    : 'bg-emerald-500 text-white font-semibold'
                }`}
              >
                {syncStatus === 'idle' && '"Execute program. Syncing with power rack."'}
                {syncStatus === 'linking' && 'Establishing JSI Bluetooth Link...'}
                {syncStatus === 'synced' && '✓ Program Loaded. Safe training!'}
              </button>
            </div>
          </div>

          {/* Abstract light graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center">
            <Cpu className="w-48 h-48 text-primary-fixed-dim" />
          </div>
        </section>

        {/* Card: Computer Vision */}
        <section className="col-span-12 md:col-span-4 glass-card rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-5 h-5 text-primary-fixed-dim" />
              <h3 className="font-display text-lg font-bold">Computer Vision</h3>
            </div>
            
            <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden border border-white/10 mb-4 select-none pointer-events-none">
              <img 
                className="w-full h-full object-cover opacity-60" 
                alt="Lifting posture computer-vision tracking mock representation" 
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDprwAidHeJ7PusgSSHVY7_VVLqaBUM5GoflBmmFL16o2WRqEcwKrVx8B8yzo1EXt-rA6ghC266g8V9HBhC52pUjurCsDnyuaZwg-XPY6Dj3D0x6GGaPVVmw5GmOjpQXoaBRe6GfOvruPD_KUIImMhdeCnirGGoYtXcIK3o15zZ3_bA3pZQ-QN5blEljvA7ud8FuO_AR_ny6yIo25yukKNVCqwhovwzhVRGAoHCSnkH6L6hU7S1spjbNh4JnDht73hSbxj5sroDKRA"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-3">
                <div className="flex justify-between items-start">
                  <span className="bg-red-500/80 text-[9px] font-bold px-2 py-0.5 rounded text-white uppercase tracking-wider">Live Biometrics</span>
                  <span className="text-primary-fixed-dim font-mono text-xs font-bold bg-black/50 px-1.5 py-0.5 rounded">98% Accuracy</span>
                </div>
                <div className="bg-background/80 backdrop-blur-md p-2 rounded border border-primary-fixed-dim/30">
                  <p className="text-[9px] text-primary-fixed-dim uppercase font-bold tracking-widest">Feedback</p>
                  <p className="text-[11px] text-white">Hips rising too fast. Stabilize core.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
            Automatic kinematic analysis. Our model estimates squat depth, liftoff alignment, joint angles, and bar pathway errors instantaneously.
          </p>
        </section>

        {/* Card: Predictive Analytics */}
        <section className="col-span-12 md:col-span-4 glass-card rounded-xl p-6 flex flex-col justify-between h-[360px]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-primary-fixed-dim" />
              <h3 className="font-display text-lg font-bold">Predictive Analytics</h3>
            </div>
            <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Proprietary models forecast progress benchmarks 4 weeks out. Keep consistency indexes aligned to peak metrics easily.
            </p>
          </div>

          <div className="flex items-center justify-center py-6">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="54" stroke="currentColor" strokeWidth="8"></circle>
                <circle className="text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,218,243,0.5)]" cx="64" cy="64" fill="transparent" r="54" stroke="currentColor" strokeDasharray="339.12" strokeDashoffset="101.7" strokeLinecap="round" strokeWidth="8"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-lg font-bold text-primary-fixed-dim">+12.4%</span>
                <span className="text-[9px] uppercase font-semibold text-on-surface-variant tracking-wider">Est. 1RM Growth</span>
              </div>
            </div>
          </div>
        </section>

        {/* Card: Generative programming (Hypertrophy, Session list code block) */}
        <section className="col-span-12 md:col-span-8 glass-card rounded-xl p-6 flex flex-col justify-between h-[360px] overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 h-full">
            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-display text-lg font-bold mb-3">Generative Programming</h3>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
                  Ditch static programs. Each rep scheme scales according to live neural readiness and previous workout strain ratios. Enforces perfect recovery limits.
                </p>
              </div>

              <div className="space-y-3 mt-auto">
                <div className="bg-surface-container-low p-3 rounded-lg border border-white/5">
                  <p className="text-[9px] font-display font-semibold text-on-surface-variant uppercase mb-1 tracking-wider">Hypertrophy Index</p>
                  <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary-fixed-dim w-[85%]"></div>
                  </div>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg border border-white/5">
                  <p className="text-[9px] font-display font-semibold text-on-surface-variant uppercase mb-1 tracking-wider">Neural Fatigue Index</p>
                  <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-container w-[40%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-black/40 rounded-xl p-4 border border-white/5 font-mono text-[12px] flex flex-col justify-between h-full max-h-[300px]">
              <p className="text-primary-fixed-dim border-b border-primary-fixed-dim/20 pb-2 mb-2 flex justify-between tracking-wide font-sans">
                <span className="font-bold">SESSION_ID: 94X-EPSILON</span>
                <span className="bg-primary-fixed-dim/10 px-1.5 py-0.5 rounded font-mono font-bold text-[10px]">READY_SCORE: 92</span>
              </p>
              <div className="space-y-2 flex-grow overflow-y-auto pr-1 custom-scrollbar">
                <div className="flex justify-between items-center opacity-85">
                  <span>1. BARBELL SQUAT</span>
                  <span className="text-primary-fixed-dim font-bold">3 x 5 @ 140kg</span>
                </div>
                <div className="flex justify-between items-center opacity-85">
                  <span>2. ROMANIAN STRAP DEADLIFT</span>
                  <span className="text-primary-fixed-dim font-bold">3 x 10 @ 100kg</span>
                </div>
                <div className="flex justify-between items-center opacity-85">
                  <span>3. WEIGHTED CHINUPS</span>
                  <span className="text-primary-fixed-dim font-bold">4 x MAX-1</span>
                </div>
                <div className="flex justify-between items-center opacity-85">
                  <span>4. LYING LEG CURLS</span>
                  <span className="text-primary-fixed-dim font-bold">3 x 12 @ 45kg</span>
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/10 text-on-surface-variant italic text-[10px] font-sans">
                // System auto-suggestion: high priority on isometric knee extension.
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Intelligent Logging details section */}
      <section className="glass-card rounded-2xl p-8 md:p-12 mt-12 bg-gradient-to-br from-surface-container-high/40 to-surface-container-low/20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">Frictionless Intelligent Logging</h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant">
            No endless manual spreadsheets or double taps. We interface directly with local peripherals and native listeners so logs are completely automated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-sans">
          <div className="p-4 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-primary-fixed-dim/5 border border-primary-fixed-dim/20 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-primary-fixed-dim" />
            </div>
            <h4 className="font-display text-base font-bold text-white mb-2">Auto-Set Detection</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Using smart wearables to detect sets, capture eccentric acceleration, and counts reps automatically.
            </p>
          </div>

          <div className="p-4 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-primary-fixed-dim/5 border border-primary-fixed-dim/20 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-primary-fixed-dim" />
            </div>
            <h4 className="font-display text-base font-bold text-white mb-2">Natural Language Log</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Just say "Set 3, 315 for 5," and the local engine interprets, tracks, and adjusts instantly.
            </p>
          </div>

          <div className="p-4 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-primary-fixed-dim/5 border border-primary-fixed-dim/20 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary-fixed-dim" />
            </div>
            <h4 className="font-display text-base font-bold text-white mb-2">Biometric Syncing</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Instant JSI bluetooth streams from chest straps, rings, Garmin, and scales for exact readiness.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
