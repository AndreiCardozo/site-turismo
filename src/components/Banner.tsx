import React from 'react';
import { MapPin } from 'lucide-react';

export function Banner() {
  return (
    <div 
      className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9')`,
      }}
    >
      <div className="text-center text-white z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MapPin size={40} />
          <h1 className="text-5xl font-bold">Turismo em Juiz de Fora</h1>
        </div>
        <p className="text-xl text-gray-200">
          Descubra os lugares mais incríveis da Manchester Mineira
        </p>
      </div>
    </div>
  );
}