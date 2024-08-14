'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type VehicleType = {
  MakeId: number;
  MakeName: string;
};

const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 2014 },
  (_, i) => currentYear - i,
);

export default function Home() {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/GetMakesForVehicleType/car?format=json`,
    )
      .then((response) => response.json())
      .then((data) => {
        setVehicleTypes(data.Results);
        setLoading(false);
      });
  }, []);

  const handleNext = () => {
    if (selectedType && selectedYear) {
      router.push(`/result/${selectedType}/${selectedYear}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Filter Vehicles
      </h1>

      <div className="mb-6 bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
        <label htmlFor="type" className="block text-gray-700 mb-2">
          Select Vehicle Type:
        </label>
        <select
          id="type"
          value={selectedType ?? ''}
          onChange={(e) => setSelectedType(Number(e.target.value) || null)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Vehicle Type</option>
          {vehicleTypes.map((type) => (
            <option key={type.MakeId} value={type.MakeId}>
              {type.MakeName}
            </option>
          ))}
        </select>
        <label htmlFor="year" className="block text-gray-700 mb-2">
          Select Model Year:
        </label>
        <select
          id="year"
          value={selectedYear ?? ''}
          onChange={(e) => setSelectedYear(Number(e.target.value) || null)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Model Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleNext}
        disabled={selectedType === null || selectedYear === null}
        className={`mt-6 p-2 rounded-md text-white ${selectedType && selectedYear ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-500 cursor-not-allowed'}`}
      >
        Next
      </button>

      {loading && <p className="text-gray-600">Loading vehicle types...</p>}
    </div>
  );
}
