import React from "react";
import { CheckCircle, X } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  ambulanceId: string;
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  ambulanceId,
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Ambulance Dispatched!
          </h3>
          <p className="text-gray-600">
            Ambulance unit {ambulanceId} has been dispatched to your location.
            Please stay calm and wait at your current location.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">
              Emergency services have been notified. If you need to contact the
              ambulance directly, please call:
            </p>
            <p className="text-lg font-semibold text-red-600 mt-2">
              Emergency: 911
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
