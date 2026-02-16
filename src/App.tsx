import { useState } from 'react';
import WelcomeScreen from './components/patient/WelcomeScreen';
import LoginRegister from './components/patient/LoginRegister';
import ForgotPassword from './components/patient/ForgotPassword';
import OTPVerification from './components/patient/OTPVerification';
import PatientProfile from './components/patient/PatientProfile';
import PatientDashboard from './components/patient/PatientDashboard';
import StartVisitForm from './components/patient/StartVisitForm';
import HospitalSelection from './components/patient/HospitalSelection';
import QueueStatus from './components/patient/QueueStatus';
import Notifications from './components/patient/Notifications';
import StaffLogin from './components/staff/StaffLogin';
import StaffDashboard from './components/staff/StaffDashboard';
import PatientDetails from './components/staff/PatientDetails';
import QueueManagement from './components/staff/QueueManagement';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import PatientOverview from './components/admin/PatientOverview';
import SystemSettings from './components/admin/SystemSettings';

export type Screen = 
  | 'welcome'
  | 'patient-login'
  | 'forgot-password'
  | 'otp-verification'
  | 'patient-profile'
  | 'patient-dashboard'
  | 'start-visit'
  | 'hospital-selection'
  | 'queue-status'
  | 'notifications'
  | 'staff-login'
  | 'staff-dashboard'
  | 'patient-details'
  | 'queue-management'
  | 'admin-login'
  | 'admin-dashboard'
  | 'user-management'
  | 'patient-overview'
  | 'system-settings';

export interface TriageData {
  severity: 'green' | 'yellow' | 'orange' | 'red';
  symptoms: string[];
  vitalSigns?: {
    heartRate?: string;
    bloodPressure?: string;
    temperature?: string;
  };
  estimatedWait: number;
  hospital: string;
  position: number;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [triageData, setTriageData] = useState<TriageData | null>(null);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handlePatientSelect = (patientId: string) => {
    setSelectedPatientId(patientId);
    navigate('patient-details');
  };

  // Mock triage data for queue status
  const mockTriageData: TriageData = {
    severity: 'yellow',
    symptoms: ['Chest Pain', 'Difficulty Breathing'],
    estimatedWait: 30,
    hospital: 'City General Hospital',
    position: 3,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {currentScreen === 'welcome' && <WelcomeScreen navigate={navigate} />}
      {currentScreen === 'patient-login' && <LoginRegister navigate={navigate} />}
      {currentScreen === 'forgot-password' && <ForgotPassword navigate={navigate} />}
      {currentScreen === 'otp-verification' && <OTPVerification navigate={navigate} />}
      {currentScreen === 'patient-profile' && <PatientProfile navigate={navigate} />}
      {currentScreen === 'patient-dashboard' && <PatientDashboard navigate={navigate} />}
      {currentScreen === 'start-visit' && <StartVisitForm navigate={navigate} />}
      {currentScreen === 'hospital-selection' && <HospitalSelection navigate={navigate} />}
      {currentScreen === 'queue-status' && <QueueStatus navigate={navigate} data={mockTriageData} />}
      {currentScreen === 'notifications' && <Notifications navigate={navigate} />}
      {currentScreen === 'staff-login' && <StaffLogin navigate={navigate} />}
      {currentScreen === 'staff-dashboard' && <StaffDashboard navigate={navigate} onPatientSelect={handlePatientSelect} />}
      {currentScreen === 'patient-details' && selectedPatientId && <PatientDetails navigate={navigate} patientId={selectedPatientId} />}
      {currentScreen === 'queue-management' && <QueueManagement navigate={navigate} />}
      {currentScreen === 'admin-login' && <AdminLogin navigate={navigate} />}
      {currentScreen === 'admin-dashboard' && <AdminDashboard navigate={navigate} />}
      {currentScreen === 'user-management' && <UserManagement navigate={navigate} />}
      {currentScreen === 'patient-overview' && <PatientOverview navigate={navigate} />}
      {currentScreen === 'system-settings' && <SystemSettings navigate={navigate} />}
    </div>
  );
}

export default App;