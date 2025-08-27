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
  Settings,
  Share2,
  Heart,
  ArrowLeft,
  RotateCw,
  Smile
} from 'lucide-react';

const Watch = () => {
  const { id } = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [message, setMessage] = useState('');
  const [showChat, setShowChat] = useState(true);

  // Mock data
  const movie = {
    id: id || '1',
    title: 'Spider-Man: No Way Home',
    thumbnail: '/api/placeholder/800/450',
    duration: 148,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.2,
    year: 2021,
    description: 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero.',
    videoUrl: 'https://sample-videos.com/zip/10/webm/720/SampleVideo_1280x720_1mb.webm'
  };

  const participants = [
    { id: '1', name: 'John Doe', avatar: '', isOnline: true },
    { id: '2', name: 'Sarah Smith', avatar: '', isOnline: true },
    { id: '3', name: 'Mike Johnson', avatar: '', isOnline: false },
    { id: '4', name: 'Emma Wilson', avatar: '', isOnline: true },
  ];

  const messages = [
    { id: '1', user: 'John Doe', message: 'This is amazing! 🔥', timestamp: '2:30 PM', avatar: '' },
    { id: '2', user: 'Sarah Smith', message: 'The graphics are incredible', timestamp: '2:32 PM', avatar: '' },
    { id: '3', user: 'Mike Johnson', message: 'Best Spider-Man movie ever!', timestamp: '2:35 PM', avatar: '' },
    { id: '4', user: 'Emma Wilson', message: 'I love this scene!', timestamp: '2:38 PM', avatar: '' },
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const sendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateTime = () => setCurrentTime(video.currentTime);
      const updateDuration = () => setDuration(video.duration);
      
      video.addEventListener('timeupdate', updateTime);
      video.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        video.removeEventListener('timeupdate', updateTime);
        video.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="glass border-b p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/movies">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Movies
              </Link>
            </Button>
            <div>
              <h1 className="text-lg md:text-xl font-semibold">{movie.title}</h1>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{movie.year}</span>
                <span>•</span>
                <span>{formatTime(movie.duration * 60)}</span>
                <span>•</span>
                <Badge variant="secondary" className="text-xs">{movie.rating}/10</Badge>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Share</span>
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Like</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Video Player Section */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden bg-black">
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={movie.thumbnail}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={movie.videoUrl} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                  <div className="p-4 space-y-4">
                    {/* Progress Bar */}
                    <div className="w-full bg-white/20 h-1 rounded-full">
                      <div 
                        className="bg-primary h-full rounded-full transition-all duration-300"
                        style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                      />
                    </div>
                    
                    {/* Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={togglePlay}
                          className="text-white hover:bg-white/20"
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </Button>
                        
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleMute}
                            className="text-white hover:bg-white/20"
                          >
                            {isMuted || volume === 0 ? 
                              <VolumeX className="w-4 h-4" /> : 
                              <Volume2 className="w-4 h-4" />
                            }
                          </Button>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-16 accent-primary"
                          />
                        </div>
                        
                        <span className="text-white text-sm">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-2 bg-primary/20 px-3 py-1 rounded-full">
                          <RotateCw className="w-4 h-4 text-primary animate-spin" />
                          <span className="text-white text-sm">Synced</span>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20"
                        >
                          <Settings className="w-4 h-4" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20"
                        >
                          <Maximize className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Movie Info */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {movie.genre.map((genre) => (
                    <Badge key={genre} variant="secondary">{genre}</Badge>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{movie.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Participants & Chat */}
          <div className="space-y-6">
            {/* Participants */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Watching ({participants.length})</h3>
                  </div>
                  <Button variant="ghost" size="sm">
                    <span className="text-primary">+ Invite</span>
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {participants.map((participant) => (
                    <div key={participant.id} className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={participant.avatar} />
                          <AvatarFallback>{participant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                          participant.isOnline ? 'bg-success' : 'bg-muted'
                        }`} />
                      </div>
                      <span className="text-sm font-medium">{participant.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card className="flex-1">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Live Chat</h3>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowChat(!showChat)}
                  >
                    {showChat ? 'Hide' : 'Show'}
                  </Button>
                </div>
                
                {showChat && (
                  <>
                    <ScrollArea className="h-64 p-4">
                      <div className="space-y-4">
                        {messages.map((msg) => (
                          <div key={msg.id} className="flex space-x-3">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={msg.avatar} />
                              <AvatarFallback className="text-xs">
                                {msg.user.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium">{msg.user}</span>
                                <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                              </div>
                              <p className="text-sm text-foreground break-words">{msg.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    
                    <div className="border-t p-4">
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Type a message..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                          className="flex-1"
                        />
                        <Button size="sm" onClick={sendMessage} disabled={!message.trim()}>
                          <Send className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Smile className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;