import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Users, 
  Play, 
  MessageCircle, 
  TrendingUp, 
  Clock,
  Calendar,
  Star,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const recentRooms = [
    {
      id: '1',
      title: 'Marvel Movie Marathon',
      thumbnail: '/api/placeholder/400/225',
      participants: 8,
      isLive: true,
      lastWatched: '2 hours ago'
    },
    {
      id: '2',
      title: 'Classic Horror Night',
      thumbnail: '/api/placeholder/400/225',
      participants: 5,
      isLive: false,
      lastWatched: '1 day ago'
    },
    {
      id: '3',
      title: 'Anime Binge Session',
      thumbnail: '/api/placeholder/400/225',
      participants: 12,
      isLive: true,
      lastWatched: '3 hours ago'
    }
  ];

  const quickStats = [
    { label: 'Watch Hours', value: '247', icon: Clock, change: '+12%' },
    { label: 'Rooms Joined', value: '23', icon: Users, change: '+5%' },
    { label: 'Friends Online', value: '8', icon: Star, change: '+2%' },
    { label: 'This Week', value: '15h', icon: Calendar, change: '+20%' }
  ];

  const recentActivity = [
    {
      user: 'Sarah Johnson',
      action: 'joined your room',
      room: 'Marvel Movie Marathon',
      time: '5 minutes ago',
      avatar: '/api/placeholder/32/32'
    },
    {
      user: 'Mike Chen',
      action: 'started watching',
      room: 'Sci-Fi Classics',
      time: '1 hour ago',
      avatar: '/api/placeholder/32/32'
    },
    {
      user: 'Emily Davis',
      action: 'sent you a message',
      room: 'Horror Night',
      time: '2 hours ago',
      avatar: '/api/placeholder/32/32'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, <span className="text-gradient">John</span>! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to watch something amazing with your friends?
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card className="card-glass card-hover bg-gradient-primary text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create a Room</h3>
                  <p className="opacity-90 mb-4">Start a new watch party with friends</p>
                  <Button variant="secondary" asChild>
                    <Link to="/room/create">
                      <Plus className="mr-2 w-4 h-4" />
                      Create Room
                    </Link>
                  </Button>
                </div>
                <div className="bg-white/20 p-4 rounded-xl">
                  <Plus className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glass card-hover bg-gradient-secondary text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Join a Room</h3>
                  <p className="opacity-90 mb-4">Enter a room code to join friends</p>
                  <Button variant="secondary" asChild>
                    <Link to="/join">
                      <Users className="mr-2 w-4 h-4" />
                      Join Room
                    </Link>
                  </Button>
                </div>
                <div className="bg-white/20 p-4 rounded-xl">
                  <Users className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="card-glass">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Rooms */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Rooms</h2>
              <Button variant="outline" asChild>
                <Link to="/rooms">
                  View All
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {recentRooms.map((room) => (
                <Card key={room.id} className="card-glass card-hover overflow-hidden">
                  <div className="relative">
                    <img 
                      src={room.thumbnail} 
                      alt={room.title}
                      className="w-full h-32 object-cover"
                    />
                    {room.isLive && (
                      <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                        🔴 LIVE
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{room.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{room.participants} watching</span>
                      </div>
                      <span>{room.lastWatched}</span>
                    </div>
                    <Button className="w-full btn-hero" asChild>
                      <Link to={`/room/${room.id}`}>
                        <Play className="mr-2 w-4 h-4" />
                        {room.isLive ? 'Join Now' : 'Continue'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Activity Feed</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="p-4 border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={activity.avatar} alt={activity.user} />
                          <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span>
                            {' '}{activity.action}{' '}
                            <span className="text-primary">{activity.room}</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/activity">
                      <MessageCircle className="mr-2 w-4 h-4" />
                      View All Activity
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;