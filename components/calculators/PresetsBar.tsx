'use client';

import React from 'react';
import { Sparkles, Shirt, FileText, Coffee, Package } from 'lucide-react';

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
    id: 'handmade-mug',
    name: '⚡ Handmade Mug',
    price: 24.99,
    cost: 6.50,
    shipping: 5.00,
    icon: <Coffee className="w-3.5 h-3.5 text-amber-500" />,
  },
  {
    id: 'pod-tshirt',
    name: '⚡ POD T-Shirt',
    price: 28.00,
    cost: 9.50,
    shipping: 4.50,
    icon: <Shirt className="w-3.5 h-3.5 text-brand-500" />,
  },
  {
    id: 'svg-digital',
    name: '⚡ SVG Digital Download',
    price: 8.99,
    cost: 0.00,
    shipping: 0.00,
    icon: <FileText className="w-3.5 h-3.5 text-emerald-500" />,
  },
  {
    id: 'wholesale-item',
    name: '⚡ Wholesale Item',
    price: 49.99,
    cost: 16.00,
    shipping: 6.50,
    icon: <Package className="w-3.5 h-3.5 text-purple-500" />,
  },
];

export const PresetsBar: React.FC<PresetsBarProps> = ({ onSelectPreset }) => {
  return (
    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
        <Sparkles className="w-3.5 h-3.5 text-brand-500" /> Preset One-Click Calculations:
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelectPreset({ price: p.price, cost: p.cost, shipping: p.shipping })}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-brand-50 dark:bg-slate-800 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200/80 dark:border-slate-700/80 text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 active:scale-95 shadow-xs"
          >
            {p.icon}
            <span>{p.name}</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">${p.price}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
