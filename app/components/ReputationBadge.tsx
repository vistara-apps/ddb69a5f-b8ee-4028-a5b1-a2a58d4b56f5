'use client';

import { Award } from 'lucide-react';

interface ReputationBadgeProps {
  score: number;
  tier: 'bronze' | 'silver' | 'gold';
}

export function ReputationBadge({ score, tier }: ReputationBadgeProps) {
  const tierColors = {
    bronze: 'from-orange-600 to-orange-400',
    silver: 'from-gray-400 to-gray-200',
    gold: 'from-yellow-600 to-yellow-400'
  };

  return (
    <div className="glass-effect rounded-lg p-6 max-w-sm">
      <div className="flex items-center gap-4">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tierColors[tier]} flex items-center justify-center`}>
          <Award className="w-8 h-8 text-white" />
        </div>
        <div>
          <div className="text-fg/60 text-sm">Reputation Score</div>
          <div className="text-3xl font-bold text-fg">{score}</div>
          <div className="text-accent text-sm capitalize">{tier} Tier</div>
        </div>
      </div>
    </div>
  );
}
