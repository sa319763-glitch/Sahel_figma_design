import { useState } from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Screen } from '../../App';

interface StartVisitFormProps {
  navigate: (screen: Screen) => void;
}

export default function StartVisitForm({ navigate }: StartVisitFormProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const commonSymptoms = [
    'Chest Pain',
    'Difficulty Breathing',
    'Severe Headache',
    'High Fever',
    'Abdominal Pain',
    'Bleeding',
    'Dizziness',
    'Nausea',
    'Back Pain',
    'Cough',
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSubmit = () => {
    navigate('hospital-selection');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 py-4 sm:py-6 border-b border-slate-200 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('patient-dashboard')} className="text-teal-600 hover:bg-teal-50 rounded-lg p-2 transition-colors active:scale-95">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-slate-900">Start ER Visit</h2>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Emergency Warning */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-red-900 mb-1">Life-threatening emergency?</h4>
              <p className="text-red-700 text-sm">Call 911 immediately if you're experiencing a medical emergency</p>
            </div>
          </div>
        </div>

        {/* Symptoms Selection */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
          <h3 className="text-slate-900 mb-4">What are your symptoms?</h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {commonSymptoms.map((symptom) => (
              <button
                key={symptom}
                onClick={() => toggleSymptom(symptom)}
                className={`px-4 py-2.5 rounded-full border-2 transition-colors active:scale-95 ${
                  selectedSymptoms.includes(symptom)
                    ? 'bg-teal-500 border-teal-500 text-white'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-teal-300'
                }`}
              >
                {symptom}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <Label htmlFor="other-symptoms">Additional Details (Optional)</Label>
            <Textarea 
              id="other-symptoms"
              placeholder="Describe any other symptoms or concerns..."
              className="rounded-xl min-h-24 resize-none text-base"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="sticky bottom-0 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:static sm:bg-none sm:pt-0">
          <Button 
            onClick={handleSubmit}
            disabled={selectedSymptoms.length === 0}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-14 disabled:bg-slate-300 disabled:opacity-50 active:scale-98 transition-transform"
          >
            Continue to Hospital Selection
          </Button>
        </div>
      </div>
    </div>
  );
}