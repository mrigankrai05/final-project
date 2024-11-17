import React from 'react';
import { MapPin, Phone, User, Home, AlertCircle } from 'lucide-react';

interface EmergencyFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  phone: string;
  address: string;
  emergency: string;
}

export default function EmergencyForm({ onSubmit }: EmergencyFormProps) {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    phone: '',
    address: '',
    emergency: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <User className="w-4 h-4 mr-2" />
          Full Name
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <Phone className="w-4 h-4 mr-2" />
          Phone Number
        </label>
        <input
          type="tel"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <Home className="w-4 h-4 mr-2" />
          Address
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <AlertCircle className="w-4 h-4 mr-2" />
          Emergency Description
        </label>
        <textarea
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          rows={3}
          value={formData.emergency}
          onChange={(e) => setFormData({ ...formData, emergency: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
      >
        <MapPin className="w-5 h-5" />
        <span>Request Nearest Ambulance</span>
      </button>
    </form>
  );
}