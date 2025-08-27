import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Users, 
  MessageCircle, 
  RotateCw, 
  Shield, 
  Zap,
  Star,
  ArrowRight,
  Check
} from 'lucide-react';
import heroImage from '@/assets/hero-streaming.jpg';
import moviePostersHero from '@/assets/movie-posters-hero.jpg';
import spidermanPoster from '@/assets/poster-spiderman.jpg';
import batmanPoster from '@/assets/poster-batman.jpg';
import avengersPoster from '@/assets/poster-avengers.jpg';

const Landing = () => {
  const features = [
    {
      icon: RotateCw,
      title: "Perfect Synchronization",
      description: "Watch together in perfect sync, no matter where you are in the world"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "React and chat in real-time while watching your favorite content"
    },
    {
      icon: Users,
      title: "Watch Parties",
      description: "Create private rooms for friends or join public watch parties"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is secure with end-to-end encryption and privacy controls"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized streaming with minimal latency for the best experience"
    },
    {
      icon: Play,
      title: "Multiple Sources",
      description: "Support for YouTube, personal files, and streaming services"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Create a Room",
      description: "Set up your watch party with custom settings and invite friends"
    },
    {
      step: "2",
      title: "Invite Friends",
      description: "Share your room link or send direct invitations to your contacts"
    },
    {
      step: "3",
      title: "Watch Together",
      description: "Enjoy synchronized viewing with real-time chat and reactions"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Movie Enthusiast",
      content: "SyncStream has revolutionized movie nights with my friends. Perfect sync every time!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Content Creator",
      content: "The best platform for hosting watch parties. The chat features are amazing!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Student",
      content: "Finally, a way to watch shows with friends across different time zones seamlessly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-12 md:py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 glass inline-flex">
                ✨ Now in Beta
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                Watch Together,
                <span className="text-gradient block">Anywhere</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience synchronized video streaming with friends and family. 
                Create watch parties, chat in real-time, and never watch alone again.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="btn-hero">
                  <Link to="/register">
                    Start Watching Free
                    <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="btn-glass">
                  <Play className="mr-2 w-4 h-4 lg:w-5 lg:h-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              {/* Main Hero Image */}
              <div className="animate-float relative">
                <img 
                  src={moviePostersHero} 
                  alt="Popular Movies on SyncStream" 
                  className="rounded-2xl shadow-large hover-tilt w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm rounded-full w-16 h-16 p-0"
                    asChild
                  >
                    <Link to="/movies">
                      <Play className="w-6 h-6 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Floating Movie Posters */}
              <div className="absolute -top-4 -right-2 md:-right-4 animate-pulse-glow hidden sm:block">
                <img 
                  src={spidermanPoster} 
                  alt="Spider-Man" 
                  className="w-16 md:w-20 lg:w-24 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
              
              <div className="absolute -bottom-4 -left-2 md:-left-4 animate-pulse-glow hidden sm:block">
                <img 
                  src={batmanPoster} 
                  alt="Batman" 
                  className="w-16 md:w-20 lg:w-24 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
              
              <div className="absolute top-1/2 -right-6 md:-right-8 transform -translate-y-1/2 animate-float hidden md:block" style={{ animationDelay: '1s' }}>
                <img 
                  src={avengersPoster} 
                  alt="Avengers" 
                  className="w-20 lg:w-24 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
              
              {/* Stats Floating Cards */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 glass p-3 lg:p-4 rounded-xl animate-pulse-glow">
                <Users className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                <span className="block text-xs lg:text-sm font-medium mt-1">1.2k Online</span>
              </div>
              
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 glass p-3 lg:p-4 rounded-xl animate-pulse-glow">
                <RotateCw className="w-5 h-5 lg:w-6 lg:h-6 text-secondary" />
                <span className="block text-xs lg:text-sm font-medium mt-1">99.9% Sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">SyncStream</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for seamless synchronized streaming with features that bring people together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-glass card-hover hover-tilt">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary p-3 rounded-xl w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-glow">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Users <span className="text-gradient">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of happy streamers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-glass card-hover">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Streaming Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the community and never watch alone again
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">
                <Check className="mr-2 w-5 h-5" />
                Sign Up Free
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Play className="mr-2 w-5 h-5" />
              Try Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-primary p-2 rounded-xl">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">SyncStream</span>
              </div>
              <p className="text-muted-foreground">
                The ultimate platform for synchronized video streaming and social watching.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/demo" className="hover:text-primary transition-colors">Demo</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SyncStream. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;