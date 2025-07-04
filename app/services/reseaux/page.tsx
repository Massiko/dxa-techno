'use client';

import { motion } from '@/lib/motions';


export default function Reseaux() {
  return (
    <main className="bg-gradient-to-b from-[#e8dcf4] to-[#f9f7fc] min-h-screen text-gray-800 flex items-center justify-center px-6 md:px-20">
      <div className="text-center max-w-3xl py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#a27bc2] mb-8 text-center"
      >
        Notre expertise en infrastructures réseau
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg max-w-3xl mx-auto leading-relaxed"
      >
        De la conception à la sécurisation de vos infrastructures, DXA Technologies vous accompagne : LAN, WAN, SD-WAN, VPN, pare-feu, supervision SNMP, interconnexion cloud. Nos ingénieurs certifiés assurent une continuité de service optimale.
      </motion.p>
      </div>
    </main>
  );
}