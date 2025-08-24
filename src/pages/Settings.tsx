import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Bell, 
  Palette, 
  User, 
  Volume2, 
  Lock,
  Trash2,
  Download,
  Upload,
  Eye,
  EyeOff
} from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    roomInvites: true,
    friendRequests: true,
    roomUpdates: false,
    emailDigest: true,
    pushNotifications: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showOnlineStatus: true,
    allowDirectMessages: true,
    showWatchHistory: false
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Settings</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Customize your SyncStream experience
          </p>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 glass">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account" className="space-y-6">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Profile Information</span>
                </CardTitle>
                <CardDescription>
                  Update your account details and personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" className="glass" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" className="glass" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" className="glass" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="johndoe" className="glass" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    rows={3}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md glass"
                    placeholder="Tell us about yourself..."
                    defaultValue="Movie enthusiast and serial binge-watcher. Always up for a good sci-fi movie or horror night with friends!"
                  />
                </div>
                
                <Button className="btn-hero">
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="w-5 h-5" />
                  <span>Change Password</span>
                </CardTitle>
                <CardDescription>
                  Update your password to keep your account secure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      className="glass pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      className="glass pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" className="glass" />
                </div>
                
                <Button variant="outline" className="btn-glass">
                  Update Password
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Notification Preferences</span>
                </CardTitle>
                <CardDescription>
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="roomInvites" className="text-base font-medium">Room Invitations</Label>
                      <p className="text-sm text-muted-foreground">Get notified when friends invite you to rooms</p>
                    </div>
                    <Switch
                      id="roomInvites"
                      checked={notifications.roomInvites}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, roomInvites: checked }))}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="friendRequests" className="text-base font-medium">Friend Requests</Label>
                      <p className="text-sm text-muted-foreground">Get notified about new friend requests</p>
                    </div>
                    <Switch
                      id="friendRequests"
                      checked={notifications.friendRequests}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, friendRequests: checked }))}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="roomUpdates" className="text-base font-medium">Room Updates</Label>
                      <p className="text-sm text-muted-foreground">Get notified about activity in your rooms</p>
                    </div>
                    <Switch
                      id="roomUpdates"
                      checked={notifications.roomUpdates}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, roomUpdates: checked }))}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailDigest" className="text-base font-medium">Weekly Email Digest</Label>
                      <p className="text-sm text-muted-foreground">Receive a weekly summary of your activity</p>
                    </div>
                    <Switch
                      id="emailDigest"
                      checked={notifications.emailDigest}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailDigest: checked }))}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pushNotifications" className="text-base font-medium">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive push notifications on your devices</p>
                    </div>
                    <Switch
                      id="pushNotifications"
                      checked={notifications.pushNotifications}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, pushNotifications: checked }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Privacy Controls</span>
                </CardTitle>
                <CardDescription>
                  Manage your privacy and data sharing preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="profileVisible" className="text-base font-medium">Public Profile</Label>
                      <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
                    </div>
                    <Switch
                      id="profileVisible"
                      checked={privacy.profileVisible}
                      onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, profileVisible: checked }))}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="showOnlineStatus" className="text-base font-medium">Online Status</Label>
                      <p className="text-sm text-muted-foreground">Show when you're online to friends</p>
                    </div>
                    <Switch
                      id="showOnlineStatus"
                      checked={privacy.showOnlineStatus}
                      onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, showOnlineStatus: checked }))}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allowDirectMessages" className="text-base font-medium">Direct Messages</Label>
                      <p className="text-sm text-muted-foreground">Allow other users to send you direct messages</p>
                    </div>
                    <Switch
                      id="allowDirectMessages"
                      checked={privacy.allowDirectMessages}
                      onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, allowDirectMessages: checked }))}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="showWatchHistory" className="text-base font-medium">Public Watch History</Label>
                      <p className="text-sm text-muted-foreground">Show your watch history on your profile</p>
                    </div>
                    <Switch
                      id="showWatchHistory"
                      checked={privacy.showWatchHistory}
                      onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, showWatchHistory: checked }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="w-5 h-5" />
                  <span>Appearance & Display</span>
                </CardTitle>
                <CardDescription>
                  Customize how SyncStream looks and feels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">Theme</Label>
                    <p className="text-sm text-muted-foreground mb-3">Choose your preferred theme</p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 border-2 border-primary rounded-lg bg-background">
                        <div className="w-full h-16 bg-gradient-primary rounded mb-2"></div>
                        <p className="text-sm font-medium text-center">Light</p>
                      </div>
                      <div className="p-3 border-2 border-muted rounded-lg bg-card">
                        <div className="w-full h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded mb-2"></div>
                        <p className="text-sm font-medium text-center">Dark</p>
                      </div>
                      <div className="p-3 border-2 border-muted rounded-lg bg-card">
                        <div className="w-full h-16 bg-gradient-to-r from-primary to-secondary rounded mb-2"></div>
                        <p className="text-sm font-medium text-center">Auto</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Label className="text-base font-medium">Chat Text Size</Label>
                    <p className="text-sm text-muted-foreground mb-3">Adjust the size of chat messages</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="btn-glass">Small</Button>
                      <Button size="sm" className="bg-gradient-primary">Medium</Button>
                      <Button variant="outline" size="sm" className="btn-glass">Large</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Reduce Motion</Label>
                      <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Management */}
          <TabsContent value="data" className="space-y-6">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Data Management</span>
                </CardTitle>
                <CardDescription>
                  Export, import, or delete your account data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-medium mb-2">Export Your Data</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download a copy of your profile, watch history, and other data
                    </p>
                    <Button variant="outline" className="btn-glass">
                      <Download className="mr-2 w-4 h-4" />
                      Export Data
                    </Button>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h3 className="font-medium mb-2">Import Data</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Import your data from another streaming platform
                    </p>
                    <Button variant="outline" className="btn-glass">
                      <Upload className="mr-2 w-4 h-4" />
                      Import Data
                    </Button>
                  </div>
                  
                  <div className="p-4 border border-destructive/50 rounded-lg bg-destructive/5">
                    <h3 className="font-medium mb-2 text-destructive">Danger Zone</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Permanently delete your account and all associated data
                    </p>
                    <Button variant="destructive">
                      <Trash2 className="mr-2 w-4 h-4" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;