import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data';
import { Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Categories list derived dynamically
  const categories = ['All', 'AI Coach & Accuracy', 'Data Privacy', 'Capabilities & Compatibility'];

  // Accordion toggle handler
  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Filter FAQ items
  const filteredFAQ = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 font-sans">
      
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl font-extrabold text-on-surface leading-tight mb-3">
          Frequently Answered <span className="text-primary-fixed-dim electric-glow">Cues</span>
        </h1>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
          Need details on model calibrations, differential biosync algorithms, or zero-knowledge encryption specifications? Read our technical core parameters.
        </p>
      </header>

      {/* Interactive Controls Panel */}
      <div className="space-y-6 mb-12">
        {/* Search Input bar */}
        <div className="relative bg-surface-container-low p-2 rounded-xl flex items-center border border-white/5 shadow-inner">
          <Search className="w-5 h-5 text-on-surface-variant ml-3" />
          <input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none focus:ring-0 flex-grow font-sans text-sm px-3 text-white placeholder-on-surface-variant/50" 
            placeholder="Search questions or keywords..." 
            type="text"
          />
        </div>

        {/* Categories Tab selectors */}
        <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar text-xs font-display">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedId(null); // Collapsing existing on category change
              }}
              className={`px-4 py-2 rounded-lg cursor-pointer transition-all border shrink-0 whitespace-nowrap uppercase tracking-wider font-semibold ${
                activeCategory === cat
                  ? 'bg-primary-fixed-dim text-on-primary-fixed border-primary-fixed-dim font-bold shadow-[0_0_12px_rgba(0,218,243,0.25)]'
                  : 'bg-surface-container-high border-white/5 text-on-surface-variant hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Core */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="glass-card rounded-xl border border-white/5 overflow-hidden transition-all"
              >
                {/* Header click strip */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-5 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors gap-4"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary-fixed-dim shrink-0 mt-0.5" />
                    <span className="font-display text-sm md:text-base font-semibold leading-snug text-white">
                      {item.question}
                    </span>
                  </div>
                  <div>
                    {expandedId === item.id ? (
                      <ChevronUp className="w-5 h-5 text-primary-fixed-dim" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-on-surface-variant" />
                    )}
                  </div>
                </button>

                {/* Expanded answers content */}
                {expandedId === item.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-on-surface-variant/95 border-t border-white/5 font-sans leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-surface-container-low rounded-xl border border-white/5"
            >
              <HelpCircle className="w-12 h-12 text-outline/30 mx-auto mb-4" />
              <p className="font-display text-base font-semibold text-white">No questions found</p>
              <p className="text-on-surface-variant text-xs mt-1">Try clarifying your terms or resetting categories.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
