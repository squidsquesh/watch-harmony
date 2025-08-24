import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Users, 
  MessageCircle, 
  Send,
  Heart,
  Laugh,
  Angry,
  Share,
  MoreHorizontal,
  ArrowLeft,
  Settings
} from 'lucide-react';

const Watch = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(23);
  const [message, setMessage] = useState('');
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLDivElement>(null);
  
  // Mock data
  const currentMovie = {
    id: id || '1',
    title: 'The Dark Knight',
    duration: '2h 32m',
    year: 2008,
    genre: 'Action, Crime, Drama',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    thumbnail: '/placeholder-movie.jpg'
  };

  const participants = [
    { id: '1', name: 'You', avatar: '', isOnline: true },
    { id: '2', name: 'Sarah M.', avatar: '', isOnline: true },
    { id: '3', name: 'Mike C.', avatar: '', isOnline: true },
    { id: '4', name: 'Emily D.', avatar: '', isOnline: false }
  ];

  const messages = [
    { id: '1', user: 'Sarah M.', message: 'This movie is incredible!', time: '23:14', avatar: '' },
    { id: '2', user: 'Mike C.', message: 'Heath Ledger\'s performance is legendary', time: '23:15', avatar: '' },
    { id: '3', user: 'Emily D.', message: 'The cinematography is amazing', time: '23:16', avatar: '' }
  ];

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
    setIsMuted(parseInt(e.target.value) === 0);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };

  const sendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}:${mins.toString().padStart(2, '0')}` : `${mins}:00`;
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timer);
  }, [showControls]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 bg-card/50 backdrop-blur-lg border-b border-border/50">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/movies">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Movies
            </Link>
          </Button>
          
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold">{currentMovie.title}</h1>
            <p className="text-sm text-muted-foreground">
              {currentMovie.year} • {currentMovie.genre} • {currentMovie.duration}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="status-online">
            <Users className="w-3 h-3 mr-1" />
            {participants.filter(p => p.isOnline).length} Online
          </Badge>
          
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        {/* Main Video Area */}
        <div className="flex-1 relative bg-black">
          {/* Video Player */}
          <div 
            ref={videoRef}
            className="relative w-full h-64 md:h-96 lg:h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center cursor-pointer"
            onClick={() => setShowControls(!showControls)}
            onMouseMove={() => setShowControls(true)}
          >
            {/* Video placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            
            {/* Play button overlay */}
            {!isPlaying && (
              <Button 
                size="lg" 
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/20 backdrop-blur-lg hover:bg-white/30 transition-all duration-300"
                onClick={togglePlay}
              >
                <Play className="w-8 h-8 text-white" />
              </Button>
            )}

            {/* Video Controls */}
            <div 
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 transition-opacity duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Progress Bar */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-white/70 mt-1">
                  <span>{formatTime(progress * 2)}</span>
                  <span>{currentMovie.duration}</span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={togglePlay}
                    className="text-white hover:bg-white/20"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </Button>

                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={toggleMute}
                      className="text-white hover:bg-white/20"
                    >
                      {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                    
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider hidden md:block"
                    />
                    
                    <span className="text-xs text-white/70 hidden md:block">{isMuted ? 0 : volume}%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Share className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Maximize className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sync Status */}
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="status-online glass">
                99.9% Synced
              </Badge>
            </div>
          </div>

          {/* Movie Info - Mobile */}
          <div className="p-4 md:p-6 bg-card lg:hidden">
            <h1 className="text-xl font-bold mb-2">{currentMovie.title}</h1>
            <p className="text-sm text-muted-foreground mb-3">
              {currentMovie.year} • {currentMovie.genre} • {currentMovie.duration}
            </p>
            <p className="text-sm leading-relaxed">{currentMovie.description}</p>
          </div>
        </div>

        {/* Chat Sidebar */}
        <div className="w-full lg:w-80 xl:w-96 bg-card border-t lg:border-t-0 lg:border-l border-border flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Live Chat
              </h3>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {/* Participants */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {participants.map((participant) => (
                <div key={participant.id} className="flex items-center gap-1 text-xs flex-shrink-0">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={participant.avatar} />
                    <AvatarFallback className="text-xs">
                      {participant.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className={participant.isOnline ? 'text-success' : 'text-muted-foreground'}>
                    {participant.name}
                  </span>
                  {participant.isOnline && (
                    <div className="w-2 h-2 bg-success rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="flex gap-3">
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarImage src={msg.avatar} />
                    <AvatarFallback className="text-xs">
                      {msg.user.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium truncate">{msg.user}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-sm text-foreground break-words">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Quick Reactions */}
          <div className="p-3 border-t border-border">
            <div className="flex gap-2 mb-3">
              {[Heart, Laugh, Angry].map((Icon, index) => (
                <Button key={index} variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Icon className="w-4 h-4" />
                </Button>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1"
              />
              <Button size="sm" onClick={sendMessage} disabled={!message.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Details - Desktop */}
      <div className="hidden lg:block p-6 bg-card/50 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-3">{currentMovie.title}</h2>
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <span>{currentMovie.year}</span>
            <span>•</span>
            <span>{currentMovie.genre}</span>
            <span>•</span>
            <span>{currentMovie.duration}</span>
          </div>
          <p className="text-foreground leading-relaxed max-w-3xl">{currentMovie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Watch;