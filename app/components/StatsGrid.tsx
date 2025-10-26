'use client';

import { Activity, TrendingUp, Users, Zap } from 'lucide-react';

export function StatsGrid() {
  const stats = [
    {
      icon: Activity,
      label: 'Win Rate',
      value: '89%',
      change: '+5%',
      positive: true
    },
    {
      icon: TrendingUp,
      label: 'Avg. Profit',
      value: '$1,247',
      change: '+12%',
      positive: true
    },
    {
      icon: Users,
      label: 'Community',
      value: '1.2K',
      change: '+234',
      positive: true
    },
    {
      icon: Zap,
      label: 'Signals Today',
      value: '8',
      change: '3 active',
      positive: true
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="glass-effect rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-fg/60 text-sm">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold text-fg mb-1">{stat.value}</div>
            <div className={`text-sm ${stat.positive ? 'text-success' : 'text-danger'}`}>
              {stat.change}
            </div>
          </div>
        );
      })}
    </div>
  );
}
