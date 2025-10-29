"use client";

import { Airport } from "@/types/airport";
import AirportCard from "./AirportCard";

interface FavoriteAirportListProps {
  airports: Airport[];
  favoriteIds: string[];
  visibleCoordinates: Record<string, boolean>;
  onToggleFavorite: (airportId: string) => void;
  onToggleCoordinates: (airportId: string) => void;
}

export default function FavoriteAirportList({
  airports,
  favoriteIds,
  visibleCoordinates,
  onToggleFavorite,
  onToggleCoordinates,
}: FavoriteAirportListProps) {
  const favoriteAirports = airports.filter((airport) =>
    favoriteIds.includes(airport.id)
  );

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Oblíbená letiště
      </h2>

      {favoriteAirports.length === 0 ? (
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">
            Zatím nemáte žádná oblíbená letiště. Přidejte letiště kliknutím na
            ❤️ ikonku.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteAirports.map((airport) => (
            <AirportCard
              key={airport.id}
              airport={airport}
              isFavorite={true}
              showCoordinates={visibleCoordinates[airport.id] || false}
              onToggleFavorite={() => onToggleFavorite(airport.id)}
              onToggleCoordinates={() => onToggleCoordinates(airport.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
