import { User, Bell, Activity, ChevronRight, LogOut } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Screen } from '../../App';
import sahelLogo from 'figma:asset/b6b82356c56afc4d51279aff1309cadb8de167eb.png';

interface PatientDashboardProps {
  navigate: (screen: Screen) => void;
}

export default function PatientDashboard({ navigate }: PatientDashboardProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 sm:px-6 py-6 sm:py-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5">
              <img src={sahelLogo} alt="Sahel" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-white">Welcome back,</h3>
              <p className="text-teal-100 text-sm">Sarah Johnson</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('notifications')} className="relative">
              <Bell className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                3
              </span>
            </button>
            <button onClick={() => navigate('welcome')} className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors active:scale-95">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Action Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 rounded-full p-3">
              <Activity className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-slate-900">Need Emergency Care?</h3>
              <p className="text-slate-600 text-sm">Start your ER visit assessment</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('start-visit')}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 active:scale-98 transition-transform"
          >
            Start ER Visit
          </Button>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-6 space-y-6 pb-8">
        {/* Quick Access Menu */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
          <h3 className="text-slate-900 mb-4">Quick Access</h3>
          
          <div className="space-y-2">
            <button 
              onClick={() => navigate('patient-profile')}
              className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-slate-900">My Profile</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>

            <button 
              onClick={() => navigate('notifications')}
              className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 rounded-full p-2">
                  <Bell className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-slate-900">Notifications</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-red-500 rounded-full">3</Badge>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}