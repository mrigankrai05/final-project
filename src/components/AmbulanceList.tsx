import React from 'react';
import { Ambulance } from 'lucide-react';

interface AmbulanceUnit {
  id: string;
  distance: number;
  eta: number;
  status: 'available' | 'busy';
}

interface AmbulanceListProps {
  ambulances: AmbulanceUnit[];
  onSelect: (id: string) => void;
}

export default function AmbulanceList({ ambulances, onSelect }: AmbulanceListProps) {
  return (
    <div className="space-y-4 w-full max-w-md">
      <h2 className="text-lg font-semibold text-gray-800">Nearby Ambulances</h2>
      <div className="space-y-3">
        {ambulances.map((ambulance) => (
          <div
            key={ambulance.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${ambulance.status === 'available' ? 'bg-green-100' : 'bg-gray-100'}`}>
                <Ambulance className={`w-6 h-6 ${ambulance.status === 'available' ? 'text-green-600' : 'text-gray-400'}`} />
              </div>
              <div>
                <p className="font-medium text-gray-800">Unit {ambulance.id}</p>
                <p className="text-sm text-gray-500">
                  {ambulance.distance.toFixed(1)} km away • {ambulance.eta} mins ETA
                </p>
              </div>
            </div>
            {ambulance.status === 'available' && (
              <button
                onClick={() => onSelect(ambulance.id)}
                className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
              >
                Select
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}