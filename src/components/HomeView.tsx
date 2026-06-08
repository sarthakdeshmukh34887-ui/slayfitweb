import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab, ChatMessage, ExerciseItem } from '../types';
import { INITIAL_CHAT, EXERCISE_LIBRARY } from '../data';
import { 
  Play, 
  Sparkles, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Fingerprint, 
  Send, 
  BarChart2, 
  Dumbbell, 
  Search, 
  Lock,
  ChevronRight,
  Brain,
  Database,
  Cpu,
  Tv
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: PageTab) => void;
  onDownloadClick: () => void;
  onShowModal: (title: string, content: string) => void;
}

export default function HomeView({ setActiveTab, onDownloadClick, onShowModal }: HomeViewProps) {
  // Sub-tab selection state inside showcase console
  const [consoleTab, setConsoleTab] = useState<'coach' | 'analytics' | 'library'>('coach');

  // Next Set Timer State
  const [timerSeconds, setTimerSeconds] = useState(90);
  const [timerActive, setTimerActive] = useState(false);

  // Biometric Unlock simulator state
  const [biometricStatus, setBiometricStatus] = useState<'idle' | 'scanning' | 'success'>('idle');

  // Interactive Custom Chat Simulator State
  const [chatMessages, setChatMessage] = useState<ChatMessage[]>(INITIAL_CHAT);
  const [inputText, setInputInputText] = useState('');
  const [isCoachTyping, setIsCoachTyping] = useState(false);

  // Search keyword inside interactive exercise library console
  const [exerciseQuery, setExerciseQuery] = useState('');

  // Handle Next Set Timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerActive(false);
      setTimerSeconds(90); // auto reset
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timerSeconds]);

  const toggleTimer = () => {
    setTimerActive(!timerActive);
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Run Biometric Unlock Simulation
  const triggerFingerprintScan = () => {
    if (biometricStatus !== 'idle') return;
    setBiometricStatus('scanning');
    setTimeout(() => {
      setBiometricStatus('success');
      setTimeout(() => {
        setBiometricStatus('idle');
      }, 2000);
    }, 1500);
  };

  // Chat message simulator logic
  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessage((prev) => [...prev, userMessage]);
    const userText = inputText;
    setInputInputText('');
    setIsCoachTyping(true);

    // Bot Response generation
    setTimeout(() => {
      let botResponse = "Excellent focus. Squeeze at the peak of the contraction to generate maximal tension. Your velocity looks perfect!";
      const textLower = userText.toLowerCase();

      if (textLower.includes('squat') || textLower.includes('leg')) {
        botResponse = "Form check reveals correct foot placement. Be sure to drive through your midfoot and maintain thoracic extension under load.";
      } else if (textLower.includes('deadlift') || textLower.includes('back')) {
        botResponse = "Keep the bar locked close to your shins. Maintain lats engagement to avoid any rounding at the spinal column.";
      } else if (textLower.includes('tired') || textLower.includes('fatigue') || textLower.includes('hard')) {
        botResponse = "Fatigue index evaluated. Let's modify the program dynamically: pull back today's working sets by 5% but keep high isometric control.";
      } else if (textLower.includes('bench') || textLower.includes('chest')) {
        botResponse = "Ensure constant leg drive during pressing. Keep the shoulder blades retracted and chest highly proud.";
      }

      const coachMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'coach',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessage((prev) => [...prev, coachMessage]);
      setIsCoachTyping(false);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 rounded-full border border-primary-fixed-dim/30 text-primary-fixed-dim font-display text-xs md:text-sm font-semibold mb-6 bg-primary-fixed-dim/5"
            >
              Beta Access Available
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              Your Workout.<br />
              <span className="text-primary-fixed-dim text-glow">AI-Engineered.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base md:text-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed"
            >
              Log workouts effortlessly, visualize progress with high-precision rendering at 60FPS, and unlock custom program recommendations backed by Gemini 2.5 Flash. Secure, offline-first, built for elite metrics.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button 
                onClick={onDownloadClick}
                className="flex items-center justify-center gap-2 bg-primary-fixed-dim text-on-primary-fixed px-6 py-3.5 rounded-xl font-display text-sm font-bold active:scale-95 transition-all shadow-[0_0_20px_rgba(0,218,243,0.3)] hover:opacity-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-on-primary-fixed" />
                Download for Android
              </button>
              <button 
                onClick={() => setActiveTab('features')}
                className="flex items-center justify-center gap-2 border border-outline/30 bg-white/5 hover:bg-white/10 px-6 py-3.5 rounded-xl font-display text-sm font-bold active:scale-95 transition-all cursor-pointer"
              >
                Explore Features
              </button>
            </motion.div>
          </div>

          {/* Right Phone mockup */}
          <div className="flex-grow flex-1 relative flex justify-center mt-8 md:mt-0">
            <div className="absolute -inset-6 bg-primary-fixed-dim/10 blur-[120px] rounded-full"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 w-full max-w-[360px] md:max-w-[400px] pointer-events-none select-none"
            >
              <img 
                alt="SlayFit Smartphone mockup view" 
                className="w-full h-auto drop-shadow-2xl opacity-100" 
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOMnPV7a0EFUx7ujOiEVfDOPY2NoL6rvaZaEZbOC6oxgg3BloVS3xMwO-QkRnwPPJCulzE8TxCc5d2F0cUwhisCdPZrRiYzx_7kimZSn_1LpJmUKNleJIQrTl5XX_yUaQ1bqJ4b57jweA0y_65MR0JMQG35ycDLbRQt5UC0SnaSJ9pbxD5bez8eQvsQF8xKEa0GVLraXdWLgjV9o10kbrBfvJVA5fIZzzepXjo9-d8rwTQvBnQLwURcf6iMO9XFVAEq6hmTLGcB0"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Bento Grid Features Layout */}
      <section className="py-20 border-t border-white/5">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Performance Features</h2>
          <p className="text-on-surface-variant text-sm md:text-base font-sans">Precision, latency, and bio-intelligence metrics calibrated for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Bento: AI-Powered Coaching */}
          <div className="md:col-span-8 glass-card rounded-2xl p-6 flex flex-col justify-between group h-[320px] overflow-hidden bento-glow">
            <div className="flex justify-between items-start">
              <div>
                <Sparkles className="w-8 h-8 text-primary-fixed-dim mb-4" />
                <h3 className="font-display text-xl font-bold text-on-surface">AI-Powered Coaching</h3>
                <p className="text-on-surface-variant text-xs md:text-sm mt-2 max-w-md font-sans">
                  On-demand insights, automated 4-week macros, and real-time form checks computed seamlessly via Google Gemini 2.5 Flash.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold text-primary-fixed-dim/70 bg-primary-fixed-dim/5 border border-primary-fixed-dim/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Gemini 2.5 Flash
              </span>
            </div>
            
            {/* Visual simulation - bars */}
            <div className="mt-6 h-20 flex items-end gap-2 overflow-hidden">
              <div className="flex-1 bg-primary-fixed-dim/20 rounded-t-lg h-[40%] group-hover:h-[65%] transition-all duration-500"></div>
              <div className="flex-1 bg-primary-fixed-dim/40 rounded-t-lg h-[75%] group-hover:h-[90%] transition-all duration-500 delay-75"></div>
              <div className="flex-1 bg-primary-fixed-dim/20 rounded-t-lg h-[30%] group-hover:h-[50%] transition-all duration-500 delay-150"></div>
              <div className="flex-grow flex-1 bg-primary-fixed-dim/60 rounded-t-lg h-[95%] group-hover:h-[80%] transition-all duration-500 delay-200"></div>
              <div className="flex-1 bg-primary-fixed-dim/30 rounded-t-lg h-[50%] group-hover:h-[70%] transition-all duration-500 delay-100"></div>
            </div>
          </div>

          {/* Bento: Intelligent Logging */}
          <div className="md:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between h-[320px] bento-glow">
            <div>
              <FileText className="w-8 h-8 text-primary-fixed-dim mb-4" />
              <h3 className="font-display text-xl font-bold text-on-surface">Intelligent Logging</h3>
              <p className="text-on-surface-variant text-xs md:text-sm mt-2 font-sans">
                Set tracking with automated haptic indicators and custom rest periods.
              </p>
            </div>

            {/* Micro interaction timer widget */}
            <div className="bg-surface-container-high p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-center text-xs font-display mb-2">
                <span className="text-white font-semibold">Active Rest Timer</span>
                <span className="text-primary-fixed-dim font-mono font-bold text-sm tracking-widest">{formatTime(timerSeconds)}</span>
              </div>
              
              <div className="h-1.5 bg-outline-variant/30 rounded-full overflow-hidden mb-3 relative">
                <motion.div 
                  className="h-full bg-primary-fixed-dim shadow-[0_0_8px_#00daf3]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(timerSeconds / 90) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <button
                onClick={toggleTimer}
                className="w-full py-1.5 bg-white/5 hover:bg-white/10 text-xs font-semibold rounded-lg font-display uppercase tracking-wider text-primary border border-primary-fixed-dim/10 active:scale-95 transition-all text-center cursor-pointer"
              >
                {timerActive ? 'Pause Rest' : 'Start Rest'}
              </button>
            </div>
          </div>

          {/* Bento: Progress Analytics */}
          <div className="md:col-span-6 glass-card rounded-2xl p-6 flex flex-col justify-between h-[320px] bento-glow">
            <div>
              <TrendingUp className="w-8 h-8 text-primary-fixed-dim mb-4" />
              <h3 className="font-display text-xl font-bold text-on-surface">Progress Analytics</h3>
              <p className="text-on-surface-variant text-xs md:text-sm mt-2 font-sans">
                Chart dynamic workload targets, volume spikes, and relative exertion history directly in high contrast.
              </p>
            </div>
            
            {/* Visual Oscilloscope graph */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-end justify-between h-24 gap-1">
              <div className="w-full bg-outline-variant/20 rounded-md h-[40%] hover:bg-primary-fixed-dim/50 cursor-pointer transition-colors duration-300"></div>
              <div className="w-full bg-outline-variant/20 rounded-md h-[55%] hover:bg-primary-fixed-dim/50 cursor-pointer transition-colors duration-300"></div>
              <div className="w-full bg-primary-fixed-dim/30 rounded-md h-[70%] hover:bg-primary-fixed-dim/50 cursor-pointer transition-colors duration-300"></div>
              <div className="w-full bg-primary-fixed-dim rounded-md h-full shadow-[0_0_12px_rgba(0,218,243,0.3)]"></div>
              <div className="w-full bg-primary-fixed-dim/60 rounded-md h-[78%] hover:bg-primary-fixed-dim/50 cursor-pointer transition-colors duration-300"></div>
              <div className="w-full bg-outline-variant/20 rounded-md h-[45%] hover:bg-primary-fixed-dim/50 cursor-pointer transition-colors duration-300"></div>
            </div>
          </div>

          {/* Bento: Local & Secure */}
          <div className="md:col-span-6 glass-card rounded-2xl p-6 flex items-center justify-between h-[320px] bento-glow">
            <div className="flex-1 pr-4">
              <ShieldCheck className="w-8 h-8 text-primary-fixed-dim mb-4" />
              <h3 className="font-display text-xl font-bold text-on-surface">Local &amp; Secure</h3>
              <p className="text-on-surface-variant text-xs md:text-sm mt-2 font-sans">
                Your data is stored 100% locally with AES-256 state encryption. Absolute zero cloud telemetry or public breaches, fully secure.
              </p>
              
              <button
                onClick={triggerFingerprintScan}
                className="mt-6 px-4 py-2 bg-primary/10 text-primary-fixed-dim border border-primary/20 hover:border-primary/40 rounded-xl text-xs font-semibold font-display transition-colors cursor-pointer"
              >
                {biometricStatus === 'idle' && 'Simulate Biometric Scan'}
                {biometricStatus === 'scanning' && 'Calibrating Scan...'}
                {biometricStatus === 'success' && 'Device Secure ✓'}
              </button>
            </div>

            {/* Interactive fingerprint scanner ring */}
            <div className="flex-shrink-0 flex items-center justify-center p-2 relative">
              <div className="absolute inset-0 bg-primary-fixed-dim/5 blur-xl rounded-full"></div>
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90 absolute">
                  <circle className="text-outline-variant/20" cx="56" cy="56" fill="transparent" r="48" stroke="currentColor" strokeWidth="6"></circle>
                  <motion.circle 
                    className="text-primary-fixed-dim" 
                    cx="56" 
                    cy="56" 
                    fill="transparent" 
                    r="48" 
                    stroke="currentColor" 
                    strokeWidth="6"
                    strokeDasharray="301.6"
                    initial={{ strokeDashoffset: 301.6 }}
                    animate={{ 
                      strokeDashoffset: biometricStatus === 'scanning' ? 120 : (biometricStatus === 'success' ? 0 : 251.2) 
                    }}
                    transition={{ duration: 1.2 }}
                    strokeLinecap="round"
                  />
                </svg>
                <motion.div 
                  animate={{ 
                    scale: biometricStatus === 'scanning' ? [1, 1.1, 1] : 1,
                    color: biometricStatus === 'success' ? '#00e5ff' : '#e2e2e2'
                  }}
                  transition={{ repeat: biometricStatus === 'scanning' ? Infinity : 0, duration: 0.8 }}
                  className="z-10 cursor-pointer pointer-events-auto hover:text-primary-fixed-dim transition-colors"
                  onClick={triggerFingerprintScan}
                >
                  <Fingerprint className="w-12 h-12" />
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Unified Performance Console Section */}
      <section className="py-20 bg-surface-container-low rounded-3xl p-6 md:p-12 border border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left selectors tab list */}
          <div className="md:col-span-5 h-full flex flex-col justify-center">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-on-surface mb-6">Unified Performance Console</h2>
            
            <div className="space-y-4">
              <button 
                onClick={() => setConsoleTab('coach')}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  consoleTab === 'coach'
                    ? 'border-primary-fixed-dim bg-white/5 shadow-[0_0_15px_rgba(0,218,243,0.1)]'
                    : 'border-transparent hover:bg-white/5'
                }`}
              >
                <h4 className="font-display text-base md:text-lg font-bold flex items-center gap-3">
                  <Brain className={`w-5 h-5 ${consoleTab === 'coach' ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`} />
                  AI Coach Chat
                </h4>
                <p className="text-on-surface-variant text-xs md:text-sm mt-1 font-sans">
                  Direct line to Gemini for live posture cues, form checks, and mental push.
                </p>
              </button>

              <button 
                onClick={() => setConsoleTab('analytics')}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  consoleTab === 'analytics'
                    ? 'border-primary-fixed-dim bg-white/5 shadow-[0_0_15px_rgba(0,218,243,0.1)]'
                    : 'border-transparent hover:bg-white/5'
                }`}
              >
                <h4 className="font-display text-base md:text-lg font-bold flex items-center gap-3">
                  <BarChart2 className={`w-5 h-5 ${consoleTab === 'analytics' ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`} />
                  Workout Analytics
                </h4>
                <p className="text-on-surface-variant text-xs md:text-sm mt-1 font-sans">
                  Track heatmaps, average weight targets, and dynamic volume progression.
                </p>
              </button>

              <button 
                onClick={() => setConsoleTab('library')}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  consoleTab === 'library'
                    ? 'border-primary-fixed-dim bg-white/5 shadow-[0_0_15px_rgba(0,218,243,0.1)]'
                    : 'border-transparent hover:bg-white/5'
                }`}
              >
                <h4 className="font-display text-base md:text-lg font-bold flex items-center gap-3">
                  <Dumbbell className={`w-5 h-5 ${consoleTab === 'library' ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`} />
                  Exercise Library
                </h4>
                <p className="text-on-surface-variant text-xs md:text-sm mt-1 font-sans">
                  300+ exercise lists complete with detailed eccentric and concentric advice.
                </p>
              </button>
            </div>
          </div>

          {/* Right Phone Console Box Screen */}
          <div className="md:col-span-7">
            <div className="glass-card aspect-[4/5] rounded-2xl p-6 relative overflow-hidden flex flex-col min-h-[420px] max-w-lg mx-auto bg-black/40">
              
              <AnimatePresence mode="wait">
                {consoleTab === 'coach' && (
                  <motion.div 
                    key="coach"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex flex-col h-full flex-grow text-xs"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4 shrink-0 pb-3 border-b border-white/5">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-primary-fixed-dim" />
                      </div>
                      <div>
                        <div className="font-display text-sm font-semibold text-white">SlayFit Coach</div>
                        <div className="text-[10px] text-primary-fixed-dim uppercase tracking-wider font-bold">Online</div>
                      </div>
                    </div>

                    {/* Messages Board */}
                    <div className="flex-1 space-y-3 overflow-y-auto mb-4 custom-scrollbar pr-1 max-h-[220px]">
                      {chatMessages.map(msg => (
                        <div 
                          key={msg.id}
                          className={`p-3 rounded-2xl max-w-[85%] border font-sans ${
                            msg.sender === 'coach'
                              ? 'bg-surface-container-high rounded-tl-none border-white/5 text-on-surface'
                              : 'bg-primary-container/20 text-white rounded-tr-none border-primary-container/20 ml-auto'
                          }`}
                        >
                          <p className="text-xs">{msg.text}</p>
                          <span className="text-[9px] text-on-surface-variant block text-right mt-1">{msg.time}</span>
                        </div>
                      ))}
                      {isCoachTyping && (
                        <div className="bg-surface-container-high/50 p-3 rounded-2xl rounded-tl-none max-w-[80%] border border-white/5 italic text-on-surface-variant text-xs-left">
                          SlayFit is analyzing form response...
                        </div>
                      )}
                    </div>

                    {/* Chat Form */}
                    <form onSubmit={handleSendMessage} className="mt-auto bg-surface-container-highest p-1.5 rounded-xl flex gap-2 items-center border border-white/10 shrink-0">
                      <input 
                        value={inputText}
                        onChange={(e) => setInputInputText(e.target.value)}
                        className="bg-transparent border-none outline-none focus:ring-0 flex-grow font-sans text-xs px-2 text-white" 
                        placeholder="Ask SlayFit (e.g. form cues limit tired...)" 
                        type="text"
                      />
                      <button 
                        type="submit"
                        className="bg-primary-fixed-dim text-on-primary-fixed hover:opacity-90 p-2 rounded-lg cursor-pointer active:scale-95 transition-all text-center flex items-center justify-center"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </motion.div>
                )}

                {consoleTab === 'analytics' && (
                  <motion.div 
                    key="analytics"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex flex-col h-full flex-grow text-xs"
                  >
                    <div className="font-display text-sm font-semibold mb-4 text-white pb-3 border-b border-white/5 flex justify-between items-center">
                      <span>Weekly Volume Distribution</span>
                      <span className="text-[10px] text-primary-fixed-dim font-mono uppercase tracking-wider">60FPS Skia</span>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      {/* Graphics bar list */}
                      <div className="flex items-end gap-2 h-36 bg-surface-container-lowest/30 rounded-xl p-4 border border-white/5 relative">
                        <div className="flex-1 bg-primary-fixed-dim/20 h-[50%] rounded-sm"></div>
                        <div className="flex-1 bg-primary-fixed-dim/40 h-[75%] rounded-sm"></div>
                        <div className="flex-1 bg-primary-fixed-dim h-full rounded-sm shadow-[0_0_8px_#00daf3]"></div>
                        <div className="flex-1 bg-primary-fixed-dim/60 h-[66%] rounded-sm"></div>
                        <div className="flex-1 bg-primary-fixed-dim/30 h-[50%] rounded-sm"></div>
                      </div>

                      {/* Score metrics */}
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                          <div className="text-[9px] text-on-surface-variant uppercase font-semibold font-display tracking-wider">Estimated 1RM Max weight</div>
                          <div className="text-xl font-bold font-display text-white mt-1">140 kg</div>
                          <p className="text-[9px] text-primary-fixed-dim mt-1">+4.2% since last block</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                          <div className="text-[9px] text-on-surface-variant uppercase font-semibold font-display tracking-wider">Weekly target adherence</div>
                          <div className="text-xl font-bold font-display text-primary-fixed-dim mt-1">98 %</div>
                          <p className="text-[9px] text-on-surface-variant mt-1">Status: Extreme Consistent</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {consoleTab === 'library' && (
                  <motion.div 
                    key="library"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex flex-col h-full flex-grow text-xs"
                  >
                    <div className="font-display text-sm font-semibold mb-3 text-white pb-3 border-b border-white/5 flex justify-between items-center">
                      <span>Interactive Exercise Library</span>
                      <span className="text-[10px] text-primary-fixed-dim font-mono uppercase tracking-wider">{EXERCISE_LIBRARY.length} Loaded</span>
                    </div>

                    {/* Search Field */}
                    <div className="relative mb-3 bg-surface-container-highest p-1 rounded-lg flex items-center border border-white/10">
                      <Search className="w-3.5 h-3.5 text-on-surface-variant ml-2" />
                      <input 
                        value={exerciseQuery}
                        onChange={(e) => setExerciseQuery(e.target.value)}
                        className="bg-transparent border-none outline-none focus:ring-0 flex-grow font-sans text-xs px-2 text-white" 
                        placeholder="Search exercises (e.g. press, bench, weighted...)" 
                        type="text"
                      />
                    </div>

                    {/* Exercise List */}
                    <div className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-1 max-h-[190px]">
                      {EXERCISE_LIBRARY.filter(item => item.name.toLowerCase().includes(exerciseQuery.toLowerCase())).map((item, idx) => (
                        <div 
                          key={idx}
                          onClick={() => {
                            if (item.locked) {
                              onShowModal('Premium Activation Required', "Weighted Dips represent a tier 3 calisthenics integration. Triggering activation unlocks eccentric joint angles and automatic microplate suggestions.");
                            } else {
                              onShowModal(item.name, `Form cues for ${item.name}: Maintain full structural lockout, enforce controlled eccentric patterns, and focus load path cleanly. Target group: ${item.focus}.`);
                            }
                          }}
                          className={`p-3 glass-card rounded-xl flex justify-between items-center cursor-pointer transition-all hover:translate-x-1 ${
                            item.locked ? 'opacity-50' : ''
                          }`}
                        >
                          <div>
                            <div className="font-display text-xs font-semibold text-white">{item.name}</div>
                            <div className="text-[9px] text-on-surface-variant flex gap-2 font-display uppercase tracking-widest mt-0.5">
                              <span>{item.type}</span>
                              <span>•</span>
                              <span>{item.focus}</span>
                            </div>
                          </div>
                          {item.locked ? (
                            <Lock className="w-3.5 h-3.5 text-tertiary-container" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-primary-fixed-dim" />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* Tech foundation components section */}
      <section className="py-20 border-t border-white/5 font-sans">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-12 text-center">Engineered for Performance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-6 glass-card rounded-xl bg-surface-container-low/40">
            <Tv className="w-8 h-8 text-primary-fixed-dim mx-auto mb-3" />
            <div className="font-display text-sm md:text-base font-semibold text-white">React Native</div>
            <div className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mt-1">Foundation</div>
          </div>
          <div className="text-center p-6 glass-card rounded-xl bg-surface-container-low/40">
            <Cpu className="w-8 h-8 text-primary-fixed-dim mx-auto mb-3" />
            <div className="font-display text-sm md:text-base font-semibold text-white">Gemini Pro</div>
            <div className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mt-1">Intelligence</div>
          </div>
          <div className="text-center p-6 glass-card rounded-xl bg-surface-container-low/40">
            <Database className="w-8 h-8 text-primary-fixed-dim mx-auto mb-3" />
            <div className="font-display text-sm md:text-base font-semibold text-white">AsyncStorage</div>
            <div className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mt-1">Data Persistence</div>
          </div>
          <div className="text-center p-6 glass-card rounded-xl bg-surface-container-low/40">
            <BarChart2 className="w-8 h-8 text-primary-fixed-dim mx-auto mb-3" />
            <div className="font-display text-sm md:text-base font-semibold text-white">Victory Native</div>
            <div className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mt-1">Visualization</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-fixed-dim/5 blur-3xl rounded-full"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Ready to transform your training?</h2>
          <p className="text-on-surface-variant text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Join the community of elite performance enthusiasts and optimize every single contraction. Log, learn, and grow.
          </p>
          <button 
            onClick={onDownloadClick}
            className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-display text-sm font-bold shadow-[0_0_30px_rgba(0,218,243,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 tracking-wider cursor-pointer"
          >
            Download APK Now
          </button>
        </div>
      </section>

    </div>
  );
}
