import React from 'react';
import { minions } from '../data/minions';
import MinionCard from './MinionCard';

export default function MinionGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Meet the Minions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {minions.map((minion) => (
          <MinionCard key={minion.id} minion={minion} />
        ))}
      </div>
    </div>
  );
}