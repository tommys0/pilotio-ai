import CoordinateItem from "./CoordinateItem";

interface CoordinateDisplayProps {
  lat: number;
  long: number;
}

export default function CoordinateDisplay({ lat, long }: CoordinateDisplayProps) {
  return (
    <div className="mt-3 p-3 bg-gray-100 rounded-lg">
      <p className="text-sm font-semibold text-gray-700 mb-2">Souřadnice:</p>
      <div className="flex gap-2 flex-wrap">
        <CoordinateItem label="Lat" value={lat} />
        <CoordinateItem label="Long" value={long} />
      </div>
    </div>
  );
}
