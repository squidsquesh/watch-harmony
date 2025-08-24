import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Star, 
  Play, 
  Calendar,
  Users,
  CheckCircle,
  Clock
} from 'lucide-react';

const Series = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const genres = ['all', 'drama', 'comedy', 'sci-fi', 'crime', 'fantasy', 'documentary'];

  const series = [
    {
      id: 1,
      title: 'Breaking Bad',
      year: 2008,
      endYear: 2013,
      genre: 'crime',
      rating: 9.5,
      seasons: 5,
      episodes: 62,
      thumbnail: '/api/placeholder/300/450',
      description: 'A high school chemistry teacher turned methamphetamine manufacturer.',
      activeRooms: 8,
      totalWatchers: 156,
      watchProgress: 85,
      isCompleted: false
    },
    {
      id: 2,
      title: 'Stranger Things',
      year: 2016,
      endYear: null,
      genre: 'sci-fi',
      rating: 8.7,
      seasons: 4,
      episodes: 42,
      thumbnail: '/api/placeholder/300/450',
      description: 'Kids in a small town face supernatural forces and government conspiracies.',
      activeRooms: 12,
      totalWatchers: 203,
      watchProgress: 100,
      isCompleted: true
    },
    {
      id: 3,
      title: 'The Office',
      year: 2005,
      endYear: 2013,
      genre: 'comedy',
      rating: 8.9,
      seasons: 9,
      episodes: 201,
      thumbnail: '/api/placeholder/300/450',
      description: 'A mockumentary about office employees at a paper company.',
      activeRooms: 15,
      totalWatchers: 298,
      watchProgress: 45,
      isCompleted: false
    },
    {
      id: 4,
      title: 'Game of Thrones',
      year: 2011,
      endYear: 2019,
      genre: 'fantasy',
      rating: 9.3,
      seasons: 8,
      episodes: 73,
      thumbnail: '/api/placeholder/300/450',
      description: 'Noble families vie for control of the Iron Throne.',
      activeRooms: 6,
      totalWatchers: 89,
      watchProgress: 62,
      isCompleted: false
    },
    {
      id: 5,
      title: 'The Crown',
      year: 2016,
      endYear: null,
      genre: 'drama',
      rating: 8.6,
      seasons: 6,
      episodes: 60,
      thumbnail: '/api/placeholder/300/450',
      description: 'The reign of Queen Elizabeth II from the 1940s to modern times.',
      activeRooms: 4,
      totalWatchers: 72,
      watchProgress: 0,
      isCompleted: false
    },
    {
      id: 6,
      title: 'Planet Earth',
      year: 2006,
      endYear: 2016,
      genre: 'documentary',
      rating: 9.4,
      seasons: 2,
      episodes: 22,
      thumbnail: '/api/placeholder/300/450',
      description: 'Stunning nature documentary series about life on Earth.',
      activeRooms: 3,
      totalWatchers: 45,
      watchProgress: 100,
      isCompleted: true
    }
  ];

  const filteredSeries = series.filter(show => {
    const matchesSearch = show.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         show.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || show.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const continueWatching = series.filter(show => show.watchProgress > 0 && !show.isCompleted);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            TV <span className="text-gradient">Series</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Binge-watch your favorite series with friends
          </p>
        </div>

        {/* Continue Watching */}
        {continueWatching.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Continue Watching</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {continueWatching.map((show) => (
                <Card key={`continue-${show.id}`} className="card-glass card-hover">
                  <CardContent className="p-4">
                    <div className="flex space-x-3">
                      <img
                        src={show.thumbnail}
                        alt={show.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm mb-1 line-clamp-1">{show.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          S{Math.ceil(show.watchProgress / 20)}:E{Math.ceil(show.watchProgress / 5)}
                        </p>
                        <Progress value={show.watchProgress} className="h-1 mb-2" />
                        <p className="text-xs text-muted-foreground">
                          {show.watchProgress}% complete
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search TV series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedGenre(genre)}
                className={selectedGenre === genre ? "bg-gradient-primary" : "btn-glass"}
              >
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Series Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSeries.map((show) => (
            <Card key={show.id} className="card-glass card-hover overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={show.thumbnail}
                  alt={show.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="w-full btn-hero mb-2">
                      <Play className="mr-2 w-4 h-4" />
                      {show.watchProgress > 0 ? 'Continue' : 'Start'} Watching
                    </Button>
                    <div className="flex items-center justify-between text-white text-xs">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{show.totalWatchers}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{show.activeRooms} active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating Badge */}
                <Badge className="absolute top-2 right-2 bg-black/70 text-white border-none">
                  <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                  {show.rating}
                </Badge>

                {/* Completed Badge */}
                {show.isCompleted && (
                  <Badge className="absolute top-2 left-2 bg-success text-success-foreground border-none">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Watched
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-1">{show.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{show.year}{show.endYear ? `-${show.endYear}` : '-Present'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{show.seasons}S</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {show.description}
                </p>
                
                {/* Progress bar for started series */}
                {show.watchProgress > 0 && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>{show.watchProgress}%</span>
                    </div>
                    <Progress value={show.watchProgress} className="h-1" />
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {show.genre.toUpperCase()}
                  </Badge>
                  <div className="text-xs text-muted-foreground">
                    {show.activeRooms > 0 ? (
                      <span className="text-success">{show.activeRooms} rooms</span>
                    ) : (
                      <span>No active rooms</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSeries.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-muted/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No series found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Series;