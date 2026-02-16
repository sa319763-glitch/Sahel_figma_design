import { ArrowLeft, Search, Plus, Edit, UserX, UserCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { useState } from 'react';
import { Screen } from '../../App';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface UserManagementProps {
  navigate: (screen: Screen) => void;
}

export default function UserManagement({ navigate }: UserManagementProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [userType, setUserType] = useState<'patient' | 'staff'>('patient');

  const patientUsers = [
    {
      id: 'PAT-001',
      name: 'Ahmed Al-Rashid',
      email: 'ahmed.alrashid@email.com',
      phone: '+966 50 123 4567',
      status: 'active',
      registrationDate: '2024-01-15',
      lastVisit: '2 days ago',
    },
    {
      id: 'PAT-002',
      name: 'Fatima Hassan',
      email: 'fatima.hassan@email.com',
      phone: '+966 50 234 5678',
      status: 'active',
      registrationDate: '2024-02-10',
      lastVisit: '1 week ago',
    },
    {
      id: 'PAT-003',
      name: 'Mohammed Al-Saud',
      email: 'mohammed.saud@email.com',
      phone: '+966 50 345 6789',
      status: 'active',
      registrationDate: '2023-12-05',
      lastVisit: '3 weeks ago',
    },
    {
      id: 'PAT-004',
      name: 'Sarah Al-Mutairi',
      email: 'sarah.almutairi@email.com',
      phone: '+966 50 456 7890',
      status: 'inactive',
      registrationDate: '2023-11-20',
      lastVisit: '2 months ago',
    },
  ];

  const staffUsers = [
    {
      id: 'STF-001',
      name: 'Dr. Mohammed Al-Saud',
      email: 'mohammed.alsaud@kfmc.sa',
      role: 'Medical Staff',
      status: 'active',
      department: 'Emergency Medicine',
      lastLogin: '2 hours ago',
    },
    {
      id: 'STF-002',
      name: 'Nurse Fatima Hassan',
      email: 'fatima.hassan@kfmc.sa',
      role: 'Medical Staff',
      status: 'active',
      department: 'Emergency Medicine',
      lastLogin: '30 mins ago',
    },
    {
      id: 'STF-003',
      name: 'Sarah Al-Mutairi',
      email: 'sarah.almutairi@kfmc.sa',
      role: 'Receptionist',
      status: 'active',
      department: 'Front Desk',
      lastLogin: '1 hour ago',
    },
    {
      id: 'STF-004',
      name: 'Admin Abdullah',
      email: 'abdullah@kfmc.sa',
      role: 'Admin',
      status: 'active',
      department: 'Administration',
      lastLogin: '5 mins ago',
    },
    {
      id: 'STF-005',
      name: 'Dr. Aisha Ibrahim',
      email: 'aisha.ibrahim@kfmc.sa',
      role: 'Medical Staff',
      status: 'inactive',
      department: 'Emergency Medicine',
      lastLogin: '2 days ago',
    },
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Admin':
        return <Badge className="bg-purple-100 text-purple-700 border-purple-200">Admin</Badge>;
      case 'Medical Staff':
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Medical Staff</Badge>;
      case 'Receptionist':
        return <Badge className="bg-green-100 text-green-700 border-green-200">Receptionist</Badge>;
      default:
        return <Badge className="bg-slate-100 text-slate-700 border-slate-200">{role}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
      : <Badge className="bg-slate-100 text-slate-700 border-slate-200">Inactive</Badge>;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 sm:px-6 py-6 sm:py-8 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate('admin-dashboard')} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-white mb-1">User Management</h2>
            <p className="text-teal-100 text-sm">Manage all patient and staff accounts</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input
            type="text"
            placeholder="Search by name, ID, or email..."
            className="pl-11 rounded-xl h-12 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <Tabs defaultValue="patients" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="patients">Patient Users</TabsTrigger>
            <TabsTrigger value="staff">Staff Users</TabsTrigger>
          </TabsList>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-4">
            {/* Add Patient Button */}
            <Button
              onClick={() => {
                setUserType('patient');
                setIsAddUserOpen(true);
              }}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add New Patient
            </Button>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{patientUsers.length}</h3>
                <p className="text-slate-600 text-xs">Total Patients</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{patientUsers.filter(u => u.status === 'active').length}</h3>
                <p className="text-slate-600 text-xs">Active</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{patientUsers.filter(u => u.status === 'inactive').length}</h3>
                <p className="text-slate-600 text-xs">Inactive</p>
              </div>
            </div>

            {/* Patient List */}
            <div className="space-y-3">
              {patientUsers.map((user) => (
                <div key={user.id} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="text-slate-900">{user.name}</h4>
                        {getStatusBadge(user.status)}
                      </div>
                      <p className="text-slate-600 text-sm mb-1">{user.email}</p>
                      <p className="text-slate-500 text-xs">ID: {user.id} • {user.phone}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-slate-600 text-xs mb-1">Registered</p>
                      <p className="text-slate-900 text-sm">{user.registrationDate}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-slate-600 text-xs mb-1">Last Visit</p>
                      <p className="text-slate-900 text-sm">{user.lastVisit}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setUserType('patient');
                        setIsEditUserOpen(true);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 text-blue-600 hover:bg-blue-50 py-2 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button
                      className={`flex-1 flex items-center justify-center gap-2 ${user.status === 'active' ? 'text-red-600 hover:bg-red-50' : 'text-green-600 hover:bg-green-50'} py-2 rounded-lg transition-colors`}
                    >
                      {user.status === 'active' ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                      <span className="text-sm">{user.status === 'active' ? 'Deactivate' : 'Activate'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Staff Tab */}
          <TabsContent value="staff" className="space-y-4">
            {/* Add Staff Button */}
            <Button
              onClick={() => {
                setUserType('staff');
                setIsAddUserOpen(true);
              }}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add New Staff Member
            </Button>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{staffUsers.length}</h3>
                <p className="text-slate-600 text-xs">Total Staff</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{staffUsers.filter(u => u.status === 'active').length}</h3>
                <p className="text-slate-600 text-xs">Active</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{staffUsers.filter(u => u.status === 'inactive').length}</h3>
                <p className="text-slate-600 text-xs">Inactive</p>
              </div>
            </div>

            {/* Staff List */}
            <div className="space-y-3">
              {staffUsers.map((user) => (
                <div key={user.id} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="text-slate-900">{user.name}</h4>
                        {getStatusBadge(user.status)}
                      </div>
                      <p className="text-slate-600 text-sm mb-1">{user.email}</p>
                      <p className="text-slate-500 text-xs">ID: {user.id}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {getRoleBadge(user.role)}
                    <Badge variant="outline" className="text-slate-700 border-slate-300">
                      {user.department}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <p className="text-slate-500 text-xs">Last login: {user.lastLogin}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setUserType('staff');
                          setIsEditUserOpen(true);
                        }}
                        className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className={`${user.status === 'active' ? 'text-red-600 hover:bg-red-50' : 'text-green-600 hover:bg-green-50'} p-2 rounded-lg transition-colors`}
                      >
                        {user.status === 'active' ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Add User Dialog */}
      <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New {userType === 'patient' ? 'Patient' : 'Staff Member'}</DialogTitle>
            <DialogDescription>
              Create a new {userType === 'patient' ? 'patient' : 'staff'} account.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="new-name">Full Name</Label>
              <Input id="new-name" placeholder="Enter full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-email">Email Address</Label>
              <Input id="new-email" type="email" placeholder={userType === 'patient' ? 'email@example.com' : 'email@kfmc.sa'} />
            </div>
            {userType === 'patient' ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="new-phone">Phone Number</Label>
                  <Input id="new-phone" placeholder="+966 50 123 4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-national-id">National ID</Label>
                  <Input id="new-national-id" placeholder="National ID Number" />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="new-staff-id">Staff ID</Label>
                  <Input id="new-staff-id" placeholder="STF-XXXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-role">Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="medical">Medical Staff</SelectItem>
                      <SelectItem value="receptionist">Receptionist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-department">Department</Label>
                  <Input id="new-department" placeholder="e.g., Emergency Medicine" />
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600" onClick={() => setIsAddUserOpen(false)}>
              Create Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={isEditUserOpen} onOpenChange={setIsEditUserOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit {userType === 'patient' ? 'Patient' : 'Staff Member'}</DialogTitle>
            <DialogDescription>
              Update {userType === 'patient' ? 'patient' : 'staff'} account information.
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Full Name</Label>
                <Input id="edit-name" defaultValue={selectedUser.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-email">Email Address</Label>
                <Input id="edit-email" type="email" defaultValue={selectedUser.email} />
              </div>
              {userType === 'patient' ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="edit-phone">Phone Number</Label>
                    <Input id="edit-phone" defaultValue={selectedUser.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-status">Status</Label>
                    <Select defaultValue={selectedUser.status}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="edit-role">Role</Label>
                    <Select defaultValue={selectedUser.role.toLowerCase().replace(' ', '-')}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="medical-staff">Medical Staff</SelectItem>
                        <SelectItem value="receptionist">Receptionist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-department">Department</Label>
                    <Input id="edit-department" defaultValue={selectedUser.department} />
                  </div>
                </>
              )}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditUserOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600" onClick={() => setIsEditUserOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
