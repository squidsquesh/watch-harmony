import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Star, 
  Play, 
  Calendar,
  Clock,
  Users
} from 'lucide-react';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const genres = ['all', 'action', 'comedy', 'drama', 'horror', 'sci-fi', 'romance', 'thriller'];

  const movies = [
    {
      id: 1,
      title: 'Inception',
      year: 2010,
      genre: 'sci-fi',
      rating: 8.8,
      duration: '148 min',
      thumbnail: '/api/placeholder/300/450',
      description: 'A thief who steals corporate secrets through dream-sharing technology.',
      activeRooms: 3,
      totalWatchers: 42
    },
    {
      id: 2,
      title: 'The Dark Knight',
      year: 2008,
      genre: 'action',
      rating: 9.0,
      duration: '152 min',
      thumbnail: '/api/placeholder/300/450',
      description: 'Batman faces the Joker in this epic superhero thriller.',
      activeRooms: 5,
      totalWatchers: 67
    },
    {
      id: 3,
      title: 'Parasite',
      year: 2019,
      genre: 'thriller',
      rating: 8.6,
      duration: '132 min',
      thumbnail: '/api/placeholder/300/450',
      description: 'A dark comedy thriller about class conflict in South Korea.',
      activeRooms: 2,
      totalWatchers: 28
    },
    {
      id: 4,
      title: 'La La Land',
      year: 2016,
      genre: 'romance',
      rating: 8.0,
      duration: '128 min',
      thumbnail: '/api/placeholder/300/450',
      description: 'A jazz musician and an aspiring actress fall in love in Los Angeles.',
      activeRooms: 1,
      totalWatchers: 15
    },
    {
      id: 5,
      title: 'Get Out',
      year: 2017,
      genre: 'horror',
      rating: 7.7,
      duration: '104 min',
      thumbnail: '/api/placeholder/300/450',
      description: 'A psychological horror film about racial tensions.',
      activeRooms: 4,
      totalWatchers: 51
    },
    {
      id: 6,
      title: 'The Grand Budapest Hotel',
      year: 2014,
      genre: 'comedy',
      rating: 8.1,
      duration: '99 min',
      thumbnail: '/api/placeholder/300/450',
      description: 'The adventures of a legendary concierge and his protégé.',
      activeRooms: 2,
      totalWatchers: 23
    }
  ];

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         movie.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Discover <span className="text-gradient">Movies</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Find your next favorite movie to watch with friends
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search movies..."
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

        {/* Movies Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <Card key={movie.id} className="card-glass card-hover overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="w-full btn-hero mb-2">
                      <Play className="mr-2 w-4 h-4" />
                      Watch Now
                    </Button>
                    <div className="flex items-center justify-between text-white text-xs">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{movie.totalWatchers}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{movie.activeRooms} active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating Badge */}
                <Badge className="absolute top-2 right-2 bg-black/70 text-white border-none">
                  <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                  {movie.rating}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-1">{movie.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{movie.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{movie.duration}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {movie.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {movie.genre.toUpperCase()}
                  </Badge>
                  <div className="text-xs text-muted-foreground">
                    {movie.activeRooms > 0 ? (
                      <span className="text-success">{movie.activeRooms} rooms</span>
                    ) : (
                      <span>No active rooms</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-muted/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No movies found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;