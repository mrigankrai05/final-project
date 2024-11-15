import { useState } from "react";
import EmergencyForm from "./components/EmergencyForm";
import AmbulanceList from "./components/AmbulanceList";
import ConfirmationModal from "./components/ConfirmatioModal";
import { Siren } from "lucide-react";

// Simulated ambulance data
const mockAmbulances = [
  { id: "A101", distance: 1.2, eta: 5, status: "available" },
  { id: "A102", distance: 2.5, eta: 8, status: "available" },
  { id: "A103", distance: 0.8, eta: 3, status: "busy" },
  { id: "A104", distance: 3.1, eta: 12, status: "available" },
] as const;

function App() {
  const [step, setStep] = useState<"form" | "select">("form");
  const [selectedAmbulance, setSelectedAmbulance] = useState<string | null>(
    null
  );
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFormSubmit = (data: any) => {
    console.log("Form data:", data);
    setStep("select");
  };

  const handleAmbulanceSelect = (id: string) => {
    setSelectedAmbulance(id);
    setShowConfirmation(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3">
            <Siren className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Emergency Ambulance Service</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {step === "form" ? (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Request Emergency Assistance
                </h2>
                <p className="text-gray-600">
                  Please provide your information to dispatch the nearest
                  ambulance
                </p>
              </div>
              <EmergencyForm onSubmit={handleFormSubmit} />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Select Available Ambulance
                </h2>
                <p className="text-gray-600">
                  Choose from nearby available ambulances
                </p>
              </div>
              <AmbulanceList
                ambulances={mockAmbulances as any}
                onSelect={handleAmbulanceSelect}
              />
            </div>
          )}
        </div>
      </main>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        ambulanceId={selectedAmbulance || ""}
      />
    </div>
  );
}

export default App;
