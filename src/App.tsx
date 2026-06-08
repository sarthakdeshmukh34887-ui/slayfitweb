import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import FeaturesView from './components/FeaturesView';
import TechSpecsView from './components/TechSpecsView';
import FAQView from './components/FAQView';
import { 
  X, 
  Smartphone, 
  Sparkles, 
  Check, 
  QrCode, 
  Download, 
  Info,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');

  // Modal setup
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  // Download simulation trigger
  const [downloadStep, setDownloadStep] = useState<'idle' | 'generating' | 'ready'>('idle');

  // Scrolling top reset helper
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };

  const handleDownloadClick = () => {
    setModalTitle('Frictionless App Delivery');
    setModalContent('');
    setModalOpen(true);
    setDownloadStep('generating');
    setTimeout(() => {
      setDownloadStep('ready');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-on-surface select-none relative custom-scrollbar flex flex-col justify-between" id="app-root">
      
      {/* Aesthetic glowing background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#121414_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-50 z-0"></div>
      
      {/* Background neon ambient shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00daf3]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-tertiary-container/3 blur-[160px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col justify-between flex-grow">
        {/* Navigation Head */}
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onDownloadClick={handleDownloadClick}
        />

        {/* Content Body Space */}
        <main className="pt-24 pb-12 flex-grow min-h-[60vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {activeTab === 'home' && (
                <HomeView 
                  setActiveTab={setActiveTab} 
                  onDownloadClick={handleDownloadClick}
                  onShowModal={handleOpenModal}
                />
              )}
              {activeTab === 'features' && (
                <FeaturesView 
                  onShowModal={handleOpenModal}
                />
              )}
              {activeTab === 'specs' && (
                <TechSpecsView 
                  onShowModal={handleOpenModal}
                />
              )}
              {activeTab === 'faq' && (
                <FAQView />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Unified Interactive Footer */}
        <Footer 
          setActiveTab={setActiveTab} 
          onModalClick={handleOpenModal} 
        />
      </div>

      {/* Floating Global Modal Portal Custom overlay container */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* Backdrop layer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-surface-container rounded-2xl border border-white/10 w-full max-w-lg p-6 relative z-10 shadow-2xl overflow-hidden font-sans"
            >
              {/* Decorative accent top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-fixed-dim via-primary-container to-tertiary-container"></div>
              
              {/* Header block */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary-fixed-dim" />
                  {modalTitle}
                </h3>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="bg-white/5 hover:bg-white/10 p-1.5 rounded-lg text-on-surface-variant hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic Content selection */}
              {modalTitle === 'Frictionless App Delivery' ? (
                <div className="space-y-4">
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    SlayFit is designed to compile directly to binary. Click below to begin simulated downloading or synchronize with target physical hardware.
                  </p>

                  {downloadStep === 'generating' && (
                    <div className="py-6 text-center">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-primary-fixed-dim border-t-transparent mb-3"></div>
                      <p className="text-xs font-semibold text-primary">Simulating target build compilation...</p>
                    </div>
                  )}

                  {downloadStep === 'ready' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      {/* Dual selectors list */}
                      <div className="grid grid-cols-2 gap-3">
                        <a 
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("Downloading simulated APK production bundle successfully to local desktop.");
                          }}
                          className="p-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex flex-col items-center justify-center text-center group cursor-pointer transition-colors"
                        >
                          <Download className="w-6 h-6 text-primary-fixed-dim group-hover:scale-110 transition-transform mb-2" />
                          <span className="font-display text-xs font-bold text-white">Direct APK</span>
                          <span className="text-[9px] text-on-surface-variant font-medium mt-0.5">v1.0.42 • 18.4MB</span>
                        </a>

                        <div className="p-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex flex-col items-center justify-center text-center group cursor-pointer transition-colors">
                          <QrCode className="w-6 h-6 text-tertiary shadow-pink mb-2" />
                          <span className="font-display text-xs font-bold text-white">F-Droid Repo</span>
                          <span className="text-[9px] text-on-surface-variant font-medium mt-0.5">Verified Open</span>
                        </div>
                      </div>

                      {/* Fake live barcode mockup graphic */}
                      <div className="bg-[#0c0f0f] border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2">
                        <div className="w-24 h-24 bg-white p-2 rounded relative flex items-center justify-center">
                          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-red-500 animate-pulse"></div>
                          <img 
                            className="w-full h-full object-contain pointer-events-none select-none"
                            alt="Mock download validation QR code"
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://lh3.googleusercontent.com/&color=121414&bgcolor=ffffff"
                          />
                        </div>
                        <p className="text-[10px] text-on-surface-variant/80 font-mono tracking-tight text-center">
                          Scan QR Code on your mobile to synchronize APK core instantly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="space-y-3 font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  <p>{modalContent}</p>
                  
                  {/* Decorative specs details block if matches specific keys */}
                  {modalTitle.includes('Premium') && (
                    <div className="bg-surface-container-high/60 p-3 rounded-lg border border-white/5 space-y-1 mt-2">
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                        <span className="text-primary-fixed-dim">Hardware Stream Link</span>
                        <span className="text-emerald-400">Offline ready</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                        <span className="text-primary-fixed-dim">Sampling rate</span>
                        <span className="text-emerald-400">100Hz constant</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Spacer bottom line trigger */}
              <div className="mt-6 flex justify-end gap-2 shrink-0">
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-primary-fixed text-on-primary-fixed font-bold font-display px-4 py-2 rounded-lg text-xs hover:opacity-90 active:scale-95 transition-all text-center cursor-pointer"
                >
                  Acknowledge Cues
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
