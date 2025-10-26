'use client';

import { TrendingUp, TrendingDown, Clock, Target } from 'lucide-react';

interface Signal {
  id: string;
  type: 'BUY' | 'SELL';
  price: number;
  confidence: number;
  timestamp: Date;
  status: 'active' | 'fulfilled' | 'invalidated';
}

interface SignalCardProps {
  signal: Signal;
}

export function SignalCard({ signal }: SignalCardProps) {
  const isBuy = signal.type === 'BUY';
  const statusColor = signal.status === 'active' ? 'text-accent' : signal.status === 'fulfilled' ? 'text-success' : 'text-danger';

  return (
    <div className="glass-effect rounded-lg p-6 hover:border-primary/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isBuy ? 'bg-success/20' : 'bg-danger/20'}`}>
            {isBuy ? (
              <TrendingUp className="w-6 h-6 text-success" />
            ) : (
              <TrendingDown className="w-6 h-6 text-danger" />
            )}
          </div>
          <div>
            <div className={`text-lg font-bold ${isBuy ? 'text-success' : 'text-danger'}`}>
              {signal.type} Signal
            </div>
            <div className="text-fg/60 text-sm">AI Confidence: {signal.confidence}%</div>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor} bg-current/10`}>
          {signal.status}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-fg/60 text-sm">
            <Target className="w-4 h-4" />
            Target Price
          </div>
          <div className="text-fg font-bold">${signal.price.toLocaleString()}</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-fg/60 text-sm">
            <Clock className="w-4 h-4" />
            Generated
          </div>
          <div className="text-fg/80 text-sm">
            {signal.timestamp.toLocaleTimeString()}
          </div>
        </div>

        <div className="w-full bg-surface rounded-full h-2 mt-4">
          <div
            className={`h-2 rounded-full ${isBuy ? 'bg-success' : 'bg-danger'}`}
            style={{ width: `${signal.confidence}%` }}
          ></div>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button className="flex-1 px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
          View Details
        </button>
        <button className="px-4 py-2 rounded-md border border-white/10 text-fg font-medium hover:bg-surface transition-colors">
          Share
        </button>
      </div>
    </div>
  );
}
