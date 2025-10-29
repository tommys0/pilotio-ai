"use client";

import { Airport } from "@/types/airport";
import AirportImage from "./AirportImage";
import AirportInfo from "./AirportInfo";
import ShowCoordinatesButton from "./ShowCoordinatesButton";
import CoordinateDisplay from "./CoordinateDisplay";
import FavoriteButton from "./FavoriteButton";

interface AirportCardProps {
  airport: Airport;
  isFavorite: boolean;
  showCoordinates: boolean;
  onToggleFavorite: () => void;
  onToggleCoordinates: () => void;
}

export default function AirportCard({
  airport,
  isFavorite,
  showCoordinates,
  onToggleFavorite,
  onToggleCoordinates,
}: AirportCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
      <AirportImage image={airport.image} name={airport.name} />

      <div className="p-4">
        <div className="flex justify-between items-start">
          <AirportInfo airport={airport} />
          <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
        </div>

        <ShowCoordinatesButton
          isVisible={showCoordinates}
          onToggle={onToggleCoordinates}
        />

        {showCoordinates && (
          <CoordinateDisplay lat={airport.lat} long={airport.long} />
        )}
      </div>
    </div>
  );
}
