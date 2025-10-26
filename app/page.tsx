'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Bell, Zap, Shield, Users } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { SignalCard } from './components/SignalCard';
import { PriceChart } from './components/PriceChart';
import { StatsGrid } from './components/StatsGrid';
import { ReputationBadge } from './components/ReputationBadge';

interface Signal {
  id: string;
  type: 'BUY' | 'SELL';
  price: number;
  confidence: number;
  timestamp: Date;
  status: 'active' | 'fulfilled' | 'invalidated';
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [signals, setSignals] = useState<Signal[]>([
    {
      id: '1',
      type: 'BUY',
      price: 74100,
      confidence: 87,
      timestamp: new Date(),
      status: 'active'
    },
    {
      id: '2',
      type: 'SELL',
      price: 76500,
      confidence: 92,
      timestamp: new Date(Date.now() - 3600000),
      status: 'fulfilled'
    }
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading BTC Signal AI...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="glass-effect border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">BTC Signal AI</h1>
                <p className="text-xs text-fg/60">AI-Powered Trading Signals</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-effect rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-fg/60 text-sm">Current Price</span>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-fg">$74,100.00</div>
            <div className="text-success text-sm mt-1">+$35 (24h)</div>
          </div>

          <div className="glass-effect rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-fg/60 text-sm">Active Signals</span>
              <Bell className="w-5 h-5 text-accent" />
            </div>
            <div className="text-3xl font-bold text-fg">3</div>
            <div className="text-accent text-sm mt-1">2 Buy, 1 Sell</div>
          </div>

          <div className="glass-effect rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-fg/60 text-sm">AI Confidence</span>
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-fg">87%</div>
            <div className="text-primary text-sm mt-1">High Accuracy</div>
          </div>
        </div>

        {/* Price Chart */}
        <div className="glass-effect rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-fg">Bitcoin Price Chart</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-md bg-primary/20 text-primary text-sm font-medium">
                1D
              </button>
              <button className="px-4 py-2 rounded-md text-fg/60 text-sm font-medium hover:bg-surface">
                1W
              </button>
              <button className="px-4 py-2 rounded-md text-fg/60 text-sm font-medium hover:bg-surface">
                1M
              </button>
            </div>
          </div>
          <PriceChart />
        </div>

        {/* Signals Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-fg">Active Signals</h2>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
              <Bell className="w-4 h-4" />
              Enable Notifications
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signals.map((signal) => (
              <SignalCard key={signal.id} signal={signal} />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <StatsGrid />

        {/* Community Section */}
        <div className="glass-effect rounded-lg p-8 mt-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold text-fg">Community Validation</h2>
              <p className="text-fg/60">Join traders validating signals and building reputation</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-surface/50">
              <div className="text-3xl font-bold text-primary mb-2">1,247</div>
              <div className="text-fg/60 text-sm">Active Traders</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-surface/50">
              <div className="text-3xl font-bold text-success mb-2">89%</div>
              <div className="text-fg/60 text-sm">Signal Accuracy</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-surface/50">
              <div className="text-3xl font-bold text-accent mb-2">$2.4M</div>
              <div className="text-fg/60 text-sm">Total Volume</div>
            </div>
          </div>
        </div>

        {/* Reputation Badge Example */}
        <div className="mt-8 flex justify-center">
          <ReputationBadge score={750} tier="gold" />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-fg/60 text-sm">
            <p>© 2024 BTC Signal AI. Built on Base with OnchainKit.</p>
            <p className="mt-2">AI-powered trading signals for the Farcaster community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
