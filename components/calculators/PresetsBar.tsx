'use client';

import React from 'react';
import { Sparkles, Shirt, FileText, Flame, Coffee } from 'lucide-react';

export interface PresetItem {
  id: string;
  name: string;
  price: number;
  cost: number;
  shipping: number;
  icon: React.ReactNode;
}

export interface PresetsBarProps {
  onSelectPreset: (preset: { price: number; cost: number; shipping: number }) => void;
}

export const PRESETS: PresetItem[] = [
  {
    id: 'tshirt',
    name: 'Custom T-Shirt',
    price: 24.99,
    cost: 7.50,
    shipping: 4.50,
    icon: <Shirt className="w-3.5 h-3.5" />,
  },
  {
    id: 'digital',
    name: 'Digital Planner',
    price: 9.99,
    cost: 0.00,
    shipping: 0.00,
    icon: <FileText className="w-3.5 h-3.5" />,
  },
  {
    id: 'candle',
    name: 'Handmade Candle',
    price: 34.99,
    cost: 8.20,
    shipping: 5.50,
    icon: <Flame className="w-3.5 h-3.5" />,
  },
  {
    id: 'mug',
    name: 'POD Mug',
    price: 18.99,
    cost: 5.80,
    shipping: 4.00,
    icon: <Coffee className="w-3.5 h-3.5" />,
  },
];

export const PresetsBar: React.FC<PresetsBarProps> = ({ onSelectPreset }) => {
  return (
    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
        <Sparkles className="w-3.5 h-3.5 text-brand-500" /> One-Click Industry Presets:
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelectPreset({ price: p.price, cost: p.cost, shipping: p.shipping })}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-brand-50 dark:bg-slate-800 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 active:scale-95"
          >
            {p.icon}
            <span>{p.name}</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${p.price}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
