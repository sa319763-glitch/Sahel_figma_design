import { ArrowLeft, Save, Plus, Edit, Trash2, Building2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface SystemSettingsProps {
  navigate: (screen: Screen) => void;
}

export default function SystemSettings({ navigate }: SystemSettingsProps) {
  const [isAddHospitalOpen, setIsAddHospitalOpen] = useState(false);
  const [isEditHospitalOpen, setIsEditHospitalOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<any>(null);

  const hospitals = [
    {
      id: 'HOSP-001',
      name: 'King Fahad Medical City',
      code: 'KFMC',
      address: 'King Fahad Road, Riyadh',
      phone: '+966 11 288 9999',
      status: 'Active',
      erCapacity: 20,
      latitude: '24.7136',
      longitude: '46.6753',
    },
    {
      id: 'HOSP-002',
      name: 'King Abdulaziz Medical City',
      code: 'KAMC',
      address: 'Makkah Al Mukarramah Branch Rd, Riyadh',
      phone: '+966 11 252 0088',
      status: 'Active',
      erCapacity: 25,
      latitude: '24.7854',
      longitude: '46.6221',
    },
    {
      id: 'HOSP-003',
      name: 'Prince Sultan Military Medical City',
      code: 'PSMMC',
      address: 'Makkah Al Mukarramah Rd, Riyadh',
      phone: '+966 11 477 7714',
      status: 'Active',
      erCapacity: 18,
      latitude: '24.7689',
      longitude: '46.6978',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-4 sm:px-6 py-6 sm:py-8 rounded-b-3xl">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('admin-dashboard')} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-white mb-1">System Settings</h2>
            <p className="text-teal-100 text-sm">Configure hospitals and system preferences</p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <Tabs defaultValue="hospitals" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Hospitals Tab */}
          <TabsContent value="hospitals" className="space-y-4">
            <Button
              onClick={() => setIsAddHospitalOpen(true)}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add New Hospital
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{hospitals.length}</h3>
                <p className="text-slate-600 text-xs">Total Hospitals</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{hospitals.filter(h => h.status === 'Active').length}</h3>
                <p className="text-slate-600 text-xs">Active</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <h3 className="text-slate-900 mb-1">{hospitals.reduce((acc, h) => acc + h.erCapacity, 0)}</h3>
                <p className="text-slate-600 text-xs">Total ER Capacity</p>
              </div>
            </div>

            {/* Hospitals List */}
            <div className="space-y-3">
              {hospitals.map((hospital) => (
                <div key={hospital.id} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <Building2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        <h4 className="text-slate-900">{hospital.name}</h4>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${hospital.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                          {hospital.status}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm mb-1">Code: {hospital.code} • ID: {hospital.id}</p>
                      <p className="text-slate-500 text-xs">{hospital.address}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-slate-600 text-xs mb-1">Contact</p>
                      <p className="text-slate-900 text-sm">{hospital.phone}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-slate-600 text-xs mb-1">ER Capacity</p>
                      <p className="text-slate-900 text-sm">{hospital.erCapacity} patients</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-slate-600 text-xs mb-1">Location</p>
                    <p className="text-slate-900 text-sm">Lat: {hospital.latitude}, Long: {hospital.longitude}</p>
                  </div>

                  <div className="flex gap-2 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setSelectedHospital(hospital);
                        setIsEditHospitalOpen(true);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 text-blue-600 hover:bg-blue-50 py-2 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm">Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Display Preferences</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Show Patient Wait Times</p>
                    <p className="text-slate-600 text-xs">Display estimated wait times to patients</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Show Queue Position</p>
                    <p className="text-slate-600 text-xs">Display position number in queue</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Real-time Updates</p>
                    <p className="text-slate-600 text-xs">Enable live queue updates for patients</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>Update Interval (seconds)</Label>
                  <Input type="number" defaultValue="30" />
                  <p className="text-slate-500 text-xs">How often to refresh queue information</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Operational Settings</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Maximum Queue Capacity</Label>
                  <Input type="number" defaultValue="20" />
                  <p className="text-slate-500 text-xs">Maximum number of patients in ER queue</p>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Automatic Triage</p>
                    <p className="text-slate-600 text-xs">Enable AI-based triage assignment</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Staff Notifications</p>
                    <p className="text-slate-600 text-xs">Send notifications to staff devices</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Patient Self Check-in</p>
                    <p className="text-slate-600 text-xs">Allow patients to check-in via app</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Language & Localization</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Default Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                      <SelectItem value="both">Bilingual (EN/AR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Time Zone</Label>
                  <Select defaultValue="riyadh">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="riyadh">Riyadh (AST, UTC+3)</SelectItem>
                      <SelectItem value="dubai">Dubai (GST, UTC+4)</SelectItem>
                      <SelectItem value="cairo">Cairo (EET, UTC+2)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Date Format</Label>
                  <Select defaultValue="dd-mm-yyyy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Time Format</Label>
                  <Select defaultValue="24h">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                      <SelectItem value="24h">24-hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-900 mb-4">Data & Privacy</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Anonymize Reports</p>
                    <p className="text-slate-600 text-xs">Remove patient identifiers from reports</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Activity Logging</p>
                    <p className="text-slate-600 text-xs">Log all user activities for audit</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-slate-900">Data Encryption</p>
                    <p className="text-slate-600 text-xs">Encrypt sensitive patient data</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>Backup Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Every Hour</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full h-12 flex items-center justify-center gap-2 mt-6">
          <Save className="w-5 h-5" />
          Save All Settings
        </Button>
      </div>

      {/* Add Hospital Dialog */}
      <Dialog open={isAddHospitalOpen} onOpenChange={setIsAddHospitalOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Hospital</DialogTitle>
            <DialogDescription>
              Register a new hospital in the Sahel ER system.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="new-hospital-name">Hospital Name</Label>
              <Input id="new-hospital-name" placeholder="Enter hospital name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-hospital-code">Hospital Code</Label>
              <Input id="new-hospital-code" placeholder="e.g., KFMC" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-hospital-address">Address</Label>
              <Input id="new-hospital-address" placeholder="Full hospital address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-hospital-phone">Contact Number</Label>
              <Input id="new-hospital-phone" placeholder="+966 XX XXX XXXX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-hospital-capacity">ER Capacity</Label>
              <Input id="new-hospital-capacity" type="number" placeholder="Maximum patients in ER" defaultValue="20" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new-hospital-lat">Latitude</Label>
                <Input id="new-hospital-lat" placeholder="24.7136" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-hospital-long">Longitude</Label>
                <Input id="new-hospital-long" placeholder="46.6753" />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-slate-900">Show on Patient Map</p>
                <p className="text-slate-600 text-xs">Display hospital in patient selection map</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddHospitalOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600" onClick={() => setIsAddHospitalOpen(false)}>
              Add Hospital
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Hospital Dialog */}
      <Dialog open={isEditHospitalOpen} onOpenChange={setIsEditHospitalOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Hospital</DialogTitle>
            <DialogDescription>
              Update hospital information and settings.
            </DialogDescription>
          </DialogHeader>
          {selectedHospital && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-hospital-name">Hospital Name</Label>
                <Input id="edit-hospital-name" defaultValue={selectedHospital.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-hospital-code">Hospital Code</Label>
                <Input id="edit-hospital-code" defaultValue={selectedHospital.code} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-hospital-address">Address</Label>
                <Input id="edit-hospital-address" defaultValue={selectedHospital.address} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-hospital-phone">Contact Number</Label>
                <Input id="edit-hospital-phone" defaultValue={selectedHospital.phone} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-hospital-capacity">ER Capacity</Label>
                <Input id="edit-hospital-capacity" type="number" defaultValue={selectedHospital.erCapacity} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-hospital-lat">Latitude</Label>
                  <Input id="edit-hospital-lat" defaultValue={selectedHospital.latitude} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-hospital-long">Longitude</Label>
                  <Input id="edit-hospital-long" defaultValue={selectedHospital.longitude} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-hospital-status">Status</Label>
                <Select defaultValue={selectedHospital.status.toLowerCase()}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-slate-900">Show on Patient Map</p>
                  <p className="text-slate-600 text-xs">Display hospital in patient selection map</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditHospitalOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600" onClick={() => setIsEditHospitalOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
