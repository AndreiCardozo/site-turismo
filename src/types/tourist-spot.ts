export interface TouristSpot {
  id: string;
  name: string;
  description: string;
  image: string;
  instagram?: string;
  address: string;
  hours: string;
  phone?: string;
  category: 'museum' | 'park' | 'theater' | 'sports' | 'culture' | 'historical' | 'education';
}