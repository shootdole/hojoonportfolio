'use client';

import Profile from '@/components/Profile';
import Introduce from '@/components/Introduce';
import TechSkill from '@/components/TechSkill';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-4">
        <Profile />
        <Introduce />
        <TechSkill />
      </div>
    </main>
  );
}