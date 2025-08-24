import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Users, 
  MessageCircle, 
  Hash,
  Clock,
  Star,
  Mic,
  MicOff,
  Volume2
} from 'lucide-react';

const ChatRooms = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'general', 'movies', 'gaming', 'music', 'sports', 'tech'];

  const chatRooms = [
    {
      id: 1,
      name: 'Marvel Movie Discussions',
      category: 'movies',
      description: 'Talk about all things Marvel Universe',
      members: 1247,
      online: 89,
      isLive: true,
      hasVoice: true,
      isFeatured: true,
      lastActivity: '2 minutes ago',
      moderators: ['Sarah J.', 'Mike C.']
    },
    {
      id: 2,
      name: 'Horror Movie Night',
      category: 'movies',
      description: 'Share scares and discuss horror films',
      members: 567,
      online: 34,
      isLive: false,
      hasVoice: false,
      isFeatured: false,
      lastActivity: '15 minutes ago',
      moderators: ['Emily D.']
    },
    {
      id: 3,
      name: 'Gaming Central',
      category: 'gaming',
      description: 'All things gaming - news, reviews, discussions',
      members: 2134,
      online: 156,
      isLive: true,
      hasVoice: true,
      isFeatured: true,
      lastActivity: '1 minute ago',
      moderators: ['Alex R.', 'Jordan P.', 'Sam L.']
    },
    {
      id: 4,
      name: 'Indie Music Discovery',
      category: 'music',
      description: 'Discover and share amazing indie music',
      members: 892,
      online: 67,
      isLive: true,
      hasVoice: false,
      isFeatured: false,
      lastActivity: '5 minutes ago',
      moderators: ['Taylor M.']
    },
    {
      id: 5,
      name: 'Tech Talk Daily',
      category: 'tech',
      description: 'Latest tech news and innovations',
      members: 1456,
      online: 98,
      isLive: false,
      hasVoice: true,
      isFeatured: false,
      lastActivity: '30 minutes ago',
      moderators: ['Chris B.', 'Alex K.']
    },
    {
      id: 6,
      name: 'Sports Central Hub',
      category: 'sports',
      description: 'All sports, all the time',
      members: 1678,
      online: 123,
      isLive: true,
      hasVoice: true,
      isFeatured: true,
      lastActivity: '3 minutes ago',
      moderators: ['David W.', 'Maria S.']
    },
    {
      id: 7,
      name: 'General Chat',
      category: 'general',
      description: 'Random conversations and good vibes',
      members: 3421,
      online: 234,
      isLive: true,
      hasVoice: false,
      isFeatured: false,
      lastActivity: '1 minute ago',
      moderators: ['Jamie L.', 'Casey R.']
    }
  ];

  const filteredRooms = chatRooms.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || room.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredRooms = filteredRooms.filter(room => room.isFeatured);
  const regularRooms = filteredRooms.filter(room => !room.isFeatured);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Chat <span className="text-gradient">Rooms</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Join conversations and connect with the community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search chat rooms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-primary" : "btn-glass"}
              >
                <Hash className="w-3 h-3 mr-1" />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Rooms */}
        {featuredRooms.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-500" />
              Featured Rooms
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRooms.map((room) => (
                <Card key={`featured-${room.id}`} className="card-glass card-hover border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg flex items-center space-x-2">
                          <span>{room.name}</span>
                          {room.isLive && (
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          )}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {room.category}
                        </Badge>
                      </div>
                      {room.hasVoice && (
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Volume2 className="w-4 h-4 text-primary" />
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {room.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>{room.members.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-success">{room.online} online</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">{room.lastActivity}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-1">Moderators:</p>
                      <div className="flex -space-x-2">
                        {room.moderators.slice(0, 3).map((mod, index) => (
                          <Avatar key={index} className="w-6 h-6 border-2 border-background">
                            <AvatarImage src={`/api/placeholder/24/24`} />
                            <AvatarFallback className="text-xs">{mod.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                        ))}
                        {room.moderators.length > 3 && (
                          <div className="w-6 h-6 bg-muted rounded-full border-2 border-background flex items-center justify-center">
                            <span className="text-xs">+{room.moderators.length - 3}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Button className="w-full btn-hero">
                      <MessageCircle className="mr-2 w-4 h-4" />
                      Join Room
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Rooms */}
        <div>
          <h2 className="text-2xl font-bold mb-4">All Rooms</h2>
          <div className="space-y-4">
            {regularRooms.map((room) => (
              <Card key={room.id} className="card-glass hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="bg-gradient-primary p-3 rounded-xl text-white">
                        <Hash className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-semibold">{room.name}</h3>
                          {room.isLive && (
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-success">LIVE</span>
                            </div>
                          )}
                          {room.hasVoice && (
                            <Badge variant="outline" className="text-xs">
                              <Volume2 className="w-3 h-3 mr-1" />
                              Voice
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-2 line-clamp-1">
                          {room.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <Badge variant="secondary" className="text-xs">
                            {room.category}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{room.members.toLocaleString()} members</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>{room.online} online</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{room.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="btn-hero">
                      <MessageCircle className="mr-2 w-4 h-4" />
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-muted/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No rooms found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatRooms;