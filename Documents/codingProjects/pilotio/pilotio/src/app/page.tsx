"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import FavoriteAirportList from "@/components/FavoriteAirportList";
import AirportList from "@/components/AirportList";
import { Airport } from "@/types/airport";
import airportsData from "./data.json";

export default function Home() {
  const airports: Airport[] = airportsData as Airport[];

  // State for favorite airport IDs
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // State for which airports have visible coordinates
  const [visibleCoordinates, setVisibleCoordinates] = useState<
    Record<string, boolean>
  >({});

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteAirports");
    if (savedFavorites) {
      setFavoriteIds(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favoriteAirports", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  // Toggle favorite status
  const handleToggleFavorite = (airportId: string) => {
    setFavoriteIds((prev) =>
      prev.includes(airportId)
        ? prev.filter((id) => id !== airportId)
        : [...prev, airportId]
    );
  };

  // Toggle coordinate visibility
  const handleToggleCoordinates = (airportId: string) => {
    setVisibleCoordinates((prev) => ({
      ...prev,
      [airportId]: !prev[airportId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 pb-12">
        <FavoriteAirportList
          airports={airports}
          favoriteIds={favoriteIds}
          visibleCoordinates={visibleCoordinates}
          onToggleFavorite={handleToggleFavorite}
          onToggleCoordinates={handleToggleCoordinates}
        />

        <AirportList
          airports={airports}
          favoriteIds={favoriteIds}
          visibleCoordinates={visibleCoordinates}
          onToggleFavorite={handleToggleFavorite}
          onToggleCoordinates={handleToggleCoordinates}
        />
      </main>
    </div>
  );
}
