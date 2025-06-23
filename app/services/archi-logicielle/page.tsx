'use client';

import { motion } from '@/lib/motions';

export default function ArchitectureLogicielle() {
  return (
    <main className="bg-gradient-to-b from-[#e8dcf4] to-[#f9f7fc] min-h-screen text-gray-800 flex items-center justify-center px-6 md:px-20">
      <div className="text-center max-w-3xl py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#a27bc2] mb-6"
        >
          Concevoir des solutions logicielles robustes et évolutives
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg leading-relaxed"
        >
          Experts en Next.js, Node.js, Supabase, GraphQL et CI/CD, nous créons des architectures logicielles performantes, modulaires et maintenables. Profitez d’une base technique saine pour faire évoluer vos projets.
        </motion.p>
      </div>
    </main>
  );
}
