import Image from "next/image";

interface AirportImageProps {
  image: string;
  name: string | null;
}

export default function AirportImage({ image, name }: AirportImageProps) {
  return (
    <div className="relative w-full h-48 bg-gray-200 rounded-t-lg overflow-hidden">
      <Image
        src={image}
        alt={name || "Airport"}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}
