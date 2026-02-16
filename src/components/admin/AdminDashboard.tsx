import { LogOut, Users, Settings, AlertTriangle, TrendingUp, Shield, Activity } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Screen } from '../../App';
import sahelLogo from 'figma:asset/b6b82356c56afc4d51279aff1309cadb8de167eb.png';

interface AdminDashboardProps {
  navigate: (screen: Screen) => void;
}

export default function AdminDashboard({ navigate }: AdminDashboardProps) {
  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 sm:px-6 py-6 sm:py-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5">
              <img src={sahelLogo} alt="Sahel" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-white mb-1">Admin Dashboard</h2>
              <p className="text-teal-100 text-sm">System Administration</p>
            </div>
          </div>
          <button onClick={() => navigate('welcome')} className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors active:scale-95">
            <LogOut className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 text-center">
            <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">24</h3>
            <p className="text-teal-100 text-xs sm:text-sm">Staff Users</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 text-center">
            <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">142</h3>
            <p className="text-teal-100 text-xs sm:text-sm">Patient Users</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 text-center">
            <AlertTriangle className="w-5 sm:w-6 h-5 sm:h-6 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">3</h3>
            <p className="text-teal-100 text-xs sm:text-sm">Active Alerts</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 text-center">
            <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-white mx-auto mb-2" />
            <h3 className="text-white mb-1">98%</h3>
            <p className="text-teal-100 text-xs sm:text-sm">System Health</p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* System Status */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
          <h3 className="text-slate-900 mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-900">ER Queue System</span>
              </div>
              <Badge className="bg-green-100 text-green-700 border-green-200">Operational</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-900">Triage Algorithm</span>
              </div>
              <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-slate-900">Database Sync</span>
              </div>
              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Syncing</Badge>
            </div>
          </div>
        </div>

        {/* Admin Functions */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
          <h3 className="text-slate-900 mb-4">Administration</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button 
              onClick={() => navigate('user-management')}
              className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors active:scale-98 text-left"
            >
              <div className="bg-blue-500 rounded-full p-3">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-slate-900 mb-1">User Management</h4>
                <p className="text-slate-600 text-sm">Manage patient and staff accounts</p>
              </div>
            </button>

            <button 
              onClick={() => navigate('patient-overview')}
              className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors active:scale-98 text-left"
            >
              <div className="bg-purple-500 rounded-full p-3">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-slate-900 mb-1">Patient Overview</h4>
                <p className="text-slate-600 text-sm">Monitor current ER patients</p>
              </div>
            </button>

            <button 
              onClick={() => navigate('system-settings')}
              className="flex items-center gap-3 p-4 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors active:scale-98 text-left sm:col-span-2"
            >
              <div className="bg-slate-500 rounded-full p-3">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-slate-900 mb-1">System Settings</h4>
                <p className="text-slate-600 text-sm">Configure hospitals and preferences</p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
          <h3 className="text-slate-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <Shield className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 text-sm">New staff account created: Dr. Ahmed Al-Rashid</p>
                <p className="text-slate-500 text-xs mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <Settings className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 text-sm">Triage rules updated for Critical level</p>
                <p className="text-slate-500 text-xs mt-1">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <Activity className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 text-sm">System settings updated</p>
                <p className="text-slate-500 text-xs mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}