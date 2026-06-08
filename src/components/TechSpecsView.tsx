import { useState } from 'react';
import { motion } from 'motion/react';
import { DEPENDENCY_DATA } from '../data';
import { 
  Copy, 
  Check, 
  Settings, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Phone, 
  Layers,
  Sparkles
} from 'lucide-react';

interface TechSpecsViewProps {
  onShowModal: (title: string, content: string) => void;
}

export default function TechSpecsView({ onShowModal }: TechSpecsViewProps) {
  const [copied, setCopied] = useState(false);

  // Raw code string to copy
  const codeSnippet = `import { useSensors } from 'expo-sensors';
// Accessing high-frequency telemetry
const { accelerometer } = await useSensors();`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 font-sans">
      {/* Header */}
      <header className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-white/5 mb-4">
          <span className="flex h-2 w-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
          <span className="font-display text-[10px] text-primary-fixed-dim uppercase tracking-widest font-bold">System Architecture 1.0</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-on-surface leading-tight mb-3">
          Engineered for Precision
        </h1>
        <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A high-performance stack designed for low-latency athletic tracking, localized privacy, and AI-driven biological optimization.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Card: React Native & Expo */}
        <div className="md:col-span-8 glass-card rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-between min-h-[340px]">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Phone className="w-40 h-48 text-primary-fixed-dim" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-fixed-dim/10 rounded-lg border border-primary-fixed-dim/20">
                <Layers className="w-5 h-5 text-primary-fixed-dim" />
              </div>
              <h2 className="font-display text-xl font-bold text-on-surface">Cross-Platform Core</h2>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed max-w-xl">
              Built on <span className="text-white font-semibold">React Native</span> and the <span className="text-white font-semibold">Expo SDK 51</span> ecosystem. Utilizing JSI (JavaScript Interface) for near-native performance and seamless hardware access to biometric sensors.
            </p>
          </div>

          {/* Copyable custom code snippet */}
          <div className="relative bg-[#0c0f0f] border-l-2 border-[#00daf3] p-4 rounded-r-lg font-mono text-[11px] leading-relaxed text-on-surface-variant/90 max-w-lg shrink-0">
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-1.5 hover:bg-white/5 text-on-surface-variant hover:text-white rounded transition-colors cursor-pointer"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <pre>
              <span className="text-primary-fixed-dim">import</span> {`{ useSensors }`} <span className="text-primary-fixed-dim">from</span> <span className="text-tertiary-container">'expo-sensors'</span>;{'\n'}
              <span className="text-on-surface-variant/60">// Accessing high-frequency telemetry</span>{'\n'}
              <span className="text-primary-fixed-dim">const</span> {`{ accelerometer }`} = <span className="text-primary-fixed-dim">await</span> useSensors();
            </pre>
          </div>
        </div>

        {/* Card: Google Gemini */}
        <div className="md:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-surface-container-low to-surface-dim min-h-[340px]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-tertiary-container/10 rounded-lg border border-tertiary-container/20">
                <Sparkles className="w-5 h-5 text-tertiary-container" />
              </div>
              <h2 className="font-display text-xl font-bold text-on-surface">Gemini 2.5 Flash</h2>
            </div>
            <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Instant biological insights via Google’s most efficient model. Real-time form correction overlays and workout optimization without the latency of larger LLMs.
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs font-display">
            <span className="text-tertiary-container font-semibold">Latency: &lt;450ms</span>
            <Zap className="w-4 h-4 text-tertiary-container fill-tertiary-container" />
          </div>
        </div>

        {/* Card: Victory Native charts simulation */}
        <div className="md:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between min-h-[320px]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-fixed-dim/10 rounded-lg border border-primary-fixed-dim/20">
                <Cpu className="w-5 h-5 text-primary-fixed-dim" />
              </div>
              <h2 className="font-display text-xl font-bold text-on-surface">Victory Native</h2>
            </div>
          </div>

          <div className="h-28 mb-4 flex items-end gap-1.5 px-2">
            <div className="flex-1 bg-primary-fixed-dim/20 h-1/2 rounded-t-sm animate-pulse"></div>
            <div className="flex-1 bg-primary-fixed-dim/40 h-3/4 rounded-t-sm animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="flex-1 bg-primary-fixed-dim/60 h-2/3 rounded-t-sm animate-pulse" style={{ animationDuration: '2.5s' }}></div>
            <div className="flex-1 bg-primary-fixed-dim/30 h-1/2 rounded-t-sm animate-bounce" style={{ animationDuration: '4s' }}></div>
            <div className="flex-1 bg-primary-fixed-dim/80 h-full rounded-t-sm animate-pulse" style={{ animationDuration: '1.8s' }}></div>
            <div className="flex-1 bg-primary-fixed-dim/50 h-3/4 rounded-t-sm animate-bounce" style={{ animationDuration: '3.2s' }}></div>
          </div>

          <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
            High-performance data visualization rendering at 60FPS using Skia-based rendering for complex biometric trends.
          </p>
        </div>

        {/* Card: Local Storage image */}
        <div className="md:col-span-8 glass-card rounded-2xl p-6 overflow-hidden relative min-h-[320px] flex items-center">
          <div className="flex flex-col md:flex-row gap-6 items-center w-full">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="font-display text-xl font-bold text-on-surface">100% Local Privacy</h2>
              </div>
              
              <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-4 leading-relaxed">
                Your biometric data never leaves your device. We leverage <span className="text-white font-semibold">AsyncStorage</span> and <span className="text-white font-semibold">SecureStore</span> for on-device persistence. No cloud sync, no tracking, no compromises.
              </p>

              <div className="flex gap-2">
                <span className="font-mono text-[9px] font-bold bg-white/5 px-2.5 py-1 rounded border border-white/10 text-on-surface-variant">AES-256</span>
                <span className="font-mono text-[9px] font-bold bg-white/5 px-2.5 py-1 rounded border border-white/10 text-on-surface-variant">Zero-Knowledge</span>
              </div>
            </div>

            <div className="w-full md:w-56 h-40 bg-surface-container-highest rounded-xl border border-white/5 overflow-hidden flex items-center justify-center p-3 select-none pointer-events-none self-center">
              <img 
                alt="Abstract Local Security illustration" 
                className="w-full h-full object-cover opacity-60 rounded" 
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIexoE0qhqTjMrAPSVHyxK3neLo62HeJ2xmidRCVoPULBSe1MYYOs89tjUbynFGMNVuOPBSHnhKlx-rUuZR3T64MfuwwtTCJhSE511YrkVDflbynEsa0FtSqyGpSi22vrYbX0ZwleCFM72B2KtolvscibNv3n_N0f5Endqc8sDhANax5nQol9OzAtsyDI2YPJ8XhU0y_x-sQA8nDqkl5n4qMGtluvd6QoU0pvwWg6vH5Bq_S8zJNzaSbJl9ghsf9BnFFS-dfToUWY"
              />
            </div>
          </div>
        </div>

        {/* Detailed manifest table card */}
        <div className="md:col-span-12 glass-card rounded-2xl p-6 overflow-x-auto">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
            <h2 className="font-display text-lg font-bold text-on-surface">Full Dependency manifest</h2>
            <span className="font-mono text-[10px] text-on-surface-variant/50">package.json v1.0.42</span>
          </div>

          <table className="w-full text-left font-sans text-xs">
            <thead>
              <tr className="text-on-surface-variant/70 border-b border-white/5 uppercase tracking-widest text-[10px] grid grid-cols-4 pb-2 font-display">
                <th>Dependency</th>
                <th>Version</th>
                <th>Role</th>
                <th>Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {DEPENDENCY_DATA.map((dep, idx) => (
                <tr 
                  key={idx}
                  onClick={() => onShowModal(dep.name, `Library usage details for ${dep.name}. Serves as the principal ${dep.role} running on version ${dep.version} matching maximum hardware acceleration rules.`)}
                  className="hover:bg-white/5 transition-colors cursor-pointer grid grid-cols-4 py-3 items-center"
                >
                  <td className="font-mono font-bold text-[#00daf3]">{dep.name}</td>
                  <td className="text-on-surface-variant">{dep.version}</td>
                  <td className="text-white">{dep.role}</td>
                  <td className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${dep.perfColor === 'primary' ? 'bg-primary-fixed-dim' : 'bg-tertiary-container'}`}></span>
                    <span className="text-on-surface">{dep.performance}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* System Status Banner */}
      <section className="mt-8 glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border-primary-fixed-dim/20">
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-primary-fixed-dim animate-spin" style={{ animationDuration: '8s' }} />
          <span className="font-display text-sm text-on-surface">Build Status: <span className="text-primary-fixed-dim font-bold tracking-wider">STABLE</span></span>
        </div>

        <div className="flex gap-8 justify-center w-full md:w-auto text-center md:text-left">
          <div>
            <p className="text-[10px] uppercase text-on-surface-variant tracking-wider font-semibold font-display">Bundle Size</p>
            <p className="font-mono text-white text-sm font-bold mt-0.5">18.4 MB</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-on-surface-variant tracking-wider font-semibold font-display">Runtime Memory</p>
            <p className="font-mono text-white text-sm font-bold mt-0.5">122 MB</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-on-surface-variant tracking-wider font-semibold font-display">Min OS</p>
            <p className="font-mono text-white text-sm font-bold mt-0.5">iOS 14+ / A11</p>
          </div>
        </div>
      </section>

    </div>
  );
}
