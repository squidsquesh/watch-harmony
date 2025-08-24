import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Camera, 
  Settings, 
  Trophy, 
  Clock, 
  Users, 
  Play, 
  Star,
  Calendar,
  MessageCircle,
  Share2
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userStats = {
    totalWatchTime: 247,
    roomsJoined: 45,
    roomsCreated: 12,
    friendsConnected: 28,
    favoriteGenre: 'Sci-Fi'
  };

  const recentActivity = [
    {
      type: 'room_joined',
      title: 'Joined "Marvel Movie Marathon"',
      time: '2 hours ago',
      participants: 8
    },
    {
      type: 'room_created',
      title: 'Created "Horror Classics Night"',
      time: '1 day ago',
      participants: 5
    },
    {
      type: 'friend_added',
      title: 'Connected with Sarah Johnson',
      time: '2 days ago',
      participants: null
    },
    {
      type: 'room_completed',
      title: 'Finished watching "Inception"',
      time: '3 days ago',
      participants: 6
    }
  ];

  const watchHistory = [
    {
      title: 'Inception',
      type: 'Movie',
      duration: '148 min',
      completedAt: '2 days ago',
      rating: 5,
      thumbnail: '/api/placeholder/100/150'
    },
    {
      title: 'Breaking Bad',
      type: 'Series',
      duration: 'S5:E16',
      completedAt: '1 week ago',
      rating: 5,
      thumbnail: '/api/placeholder/100/150'
    },
    {
      title: 'The Matrix',
      type: 'Movie',
      duration: '136 min',
      completedAt: '2 weeks ago',
      rating: 4,
      thumbnail: '/api/placeholder/100/150'
    }
  ];

  const achievements = [
    {
      title: 'Movie Buff',
      description: 'Watched 50+ movies',
      icon: Play,
      earned: true,
      progress: 100
    },
    {
      title: 'Social Butterfly',
      description: 'Connected with 25+ friends',
      icon: Users,
      earned: true,
      progress: 100
    },
    {
      title: 'Night Owl',
      description: 'Watch after midnight 10 times',
      icon: Clock,
      earned: false,
      progress: 70
    },
    {
      title: 'Room Master',
      description: 'Create 20 successful rooms',
      icon: Trophy,
      earned: false,
      progress: 60
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="card-glass mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/api/placeholder/128/128" alt="Profile" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full bg-primary hover:bg-primary/90"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold">John Doe</h1>
                    <p className="text-muted-foreground">@johndoe</p>
                  </div>
                  <Badge variant="secondary" className="bg-gradient-primary text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 max-w-md">
                  Movie enthusiast and serial binge-watcher. Always up for a good sci-fi movie or horror night with friends! 🎬
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.totalWatchTime}h</div>
                    <div className="text-sm text-muted-foreground">Watch Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.roomsJoined}</div>
                    <div className="text-sm text-muted-foreground">Rooms Joined</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.roomsCreated}</div>
                    <div className="text-sm text-muted-foreground">Rooms Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.friendsConnected}</div>
                    <div className="text-sm text-muted-foreground">Friends</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button onClick={() => setIsEditing(!isEditing)} className="btn-hero">
                    <Settings className="mr-2 w-4 h-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="btn-glass">
                    <Share2 className="mr-2 w-4 h-4" />
                    Share Profile
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Content */}
        <Tabs defaultValue="activity" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass">
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="history">Watch History</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        {activity.type === 'room_joined' && <Users className="w-5 h-5 text-primary" />}
                        {activity.type === 'room_created' && <Play className="w-5 h-5 text-primary" />}
                        {activity.type === 'friend_added' && <Users className="w-5 h-5 text-primary" />}
                        {activity.type === 'room_completed' && <Trophy className="w-5 h-5 text-primary" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{activity.time}</span>
                          {activity.participants && (
                            <span>{activity.participants} participants</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Watch History Tab */}
          <TabsContent value="history">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle>Watch History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {watchHistory.map((item, index) => (
                    <div key={index} className="flex space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium mb-1 line-clamp-1">{item.title}</h3>
                        <div className="text-sm text-muted-foreground mb-2">
                          <div>{item.type} • {item.duration}</div>
                          <div>{item.completedAt}</div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-lg border-2 transition-colors ${
                        achievement.earned
                          ? 'border-primary bg-primary/5'
                          : 'border-muted bg-muted/20'
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-lg ${
                          achievement.earned ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                        }`}>
                          <achievement.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statistics Tab */}
          <TabsContent value="stats">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle>Viewing Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Favorite Genre</span>
                    <Badge variant="secondary">{userStats.favoriteGenre}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Sci-Fi</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Action</span>
                      <span>25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Horror</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Comedy</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glass">
                <CardHeader>
                  <CardTitle>Activity Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">247h</div>
                    <div className="text-muted-foreground">Total Watch Time</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">This Week</span>
                      </div>
                      <span className="font-medium">15h 30m</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Avg. Session</span>
                      </div>
                      <span className="font-medium">2h 15m</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Messages Sent</span>
                      </div>
                      <span className="font-medium">1,247</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;