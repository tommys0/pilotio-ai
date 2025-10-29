import { Airport } from "@/types/airport";

interface AirportInfoProps {
  airport: Airport;
}

export default function AirportInfo({ airport }: AirportInfoProps) {
  return (
    <div className="space-y-1">
      <h3 className="text-xl font-bold text-gray-800">
        {airport.name || "Unknown Airport"}
      </h3>
      <div className="text-sm text-gray-600 space-y-0.5">
        <p>
          <span className="font-semibold">GPS Code:</span>{" "}
          {airport["gps-code"] || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Municipality:</span>{" "}
          {airport.municipality || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Code:</span> {airport.code || "N/A"}
        </p>
      </div>
    </div>
  );
}
