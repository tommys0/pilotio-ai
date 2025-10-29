"use client";

interface ShowCoordinatesButtonProps {
  isVisible: boolean;
  onToggle: () => void;
}

export default function ShowCoordinatesButton({ isVisible, onToggle }: ShowCoordinatesButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="w-full mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
    >
      {isVisible ? "Skrýt souřadnice" : "Zobrazit souřadnice"}
    </button>
  );
}
