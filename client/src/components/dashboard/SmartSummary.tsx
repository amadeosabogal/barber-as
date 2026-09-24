import React from 'react';
import { mockData } from '../../data/mockData';
import { Sparkles } from 'lucide-react';

const SmartSummary = () => {
  return (
    <div className="bg-gradient-to-r from-primary/20 to-surface border border-primary/30 rounded-xl p-5 mb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Sparkles className="w-24 h-24 text-primary" />
      </div>
      <div className="relative z-10 flex gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-text-primary mb-1">Resumen del negocio</h3>
          <p className="text-text-secondary leading-relaxed">
            {mockData.smartSummary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartSummary;
