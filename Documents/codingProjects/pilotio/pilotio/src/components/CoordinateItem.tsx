"use client";

interface CoordinateItemProps {
  label: string;
  value: number;
}

export default function CoordinateItem({ label, value }: CoordinateItemProps) {
  const handleClick = async () => {
    alert(`${label}: ${value}`);

    // Bonus: Copy to clipboard
    try {
      await navigator.clipboard.writeText(value.toString());
      console.log("Coordinate copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm font-medium"
    >
      {label}: {value}
    </button>
  );
}
