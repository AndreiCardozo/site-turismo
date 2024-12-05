import React from 'react';
import { X, Instagram, Clock, Phone, MapPin } from 'lucide-react';
import { TouristSpot } from '../types/tourist-spot';

interface SpotModalProps {
  spot: TouristSpot;
  onClose: () => void;
}

export function SpotModal({ spot, onClose }: SpotModalProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${spot.name} ${spot.address} Juiz de Fora MG`
  )}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={spot.image} 
            alt={spot.name} 
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-1"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{spot.name}</h2>
          <p className="text-gray-600 mb-6">{spot.description}</p>
          
          <div className="space-y-4">
            {spot.instagram && (
              <a 
                href={`https://instagram.com/${spot.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-600 hover:text-pink-700"
              >
                <Instagram size={20} />
                <span>{spot.instagram}</span>
              </a>
            )}
            
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <MapPin size={20} />
              <span>{spot.address}</span>
            </a>
            
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={20} />
              <span>{spot.hours}</span>
            </div>
            
            {spot.phone && (
              <a
                href={`tel:${spot.phone.replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
              >
                <Phone size={20} />
                <span>{spot.phone}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}