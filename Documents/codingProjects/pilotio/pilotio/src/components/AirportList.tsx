"use client";

import { Airport } from "@/types/airport";
import AirportCard from "./AirportCard";

interface AirportListProps {
  airports: Airport[];
  favoriteIds: string[];
  visibleCoordinates: Record<string, boolean>;
  onToggleFavorite: (airportId: string) => void;
  onToggleCoordinates: (airportId: string) => void;
}

export default function AirportList({
  airports,
  favoriteIds,
  visibleCoordinates,
  onToggleFavorite,
  onToggleCoordinates,
}: AirportListProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Všechna letiště
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {airports.map((airport) => (
          <AirportCard
            key={airport.id}
            airport={airport}
            isFavorite={favoriteIds.includes(airport.id)}
            showCoordinates={visibleCoordinates[airport.id] || false}
            onToggleFavorite={() => onToggleFavorite(airport.id)}
            onToggleCoordinates={() => onToggleCoordinates(airport.id)}
          />
        ))}
      </div>
    </section>
  );
}
