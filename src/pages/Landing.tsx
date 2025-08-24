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
import movieCollage from '@/assets/movie-posters-collage.jpg';
import posterSpiderman from '@/assets/poster-spiderman.jpg';
import posterDarkKnight from '@/assets/poster-darkknight.jpg';
import posterAvengers from '@/assets/poster-avengers.jpg';

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
        
        {/* Floating Movie Posters Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-float" style={{ animationDelay: '0s' }}>
            <img src={posterSpiderman} alt="" className="w-20 md:w-32 rounded-lg rotate-12" />
          </div>
          <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <img src={posterDarkKnight} alt="" className="w-16 md:w-28 rounded-lg -rotate-6" />
          </div>
          <div className="absolute bottom-20 left-32 animate-float" style={{ animationDelay: '2s' }}>
            <img src={posterAvengers} alt="" className="w-18 md:w-24 rounded-lg rotate-6" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 glass inline-block">
                ✨ Now in Beta
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Watch Together,
                <span className="text-gradient block">Anywhere</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience synchronized video streaming with friends and family. 
                Create watch parties, chat in real-time, and never watch alone again.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center lg:justify-start">
                <Button size="lg" asChild className="btn-hero w-full sm:w-auto">
                  <Link to="/register">
                    Start Watching Free
                    <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="btn-glass w-full sm:w-auto">
                  <Play className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="animate-float">
                <img 
                  src={movieCollage} 
                  alt="Popular Movies on SyncStream" 
                  className="rounded-2xl shadow-large hover-tilt w-full h-auto"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 glass p-3 md:p-4 rounded-xl animate-pulse-glow">
                <Users className="w-4 md:w-6 h-4 md:h-6 text-primary" />
                <span className="block text-xs md:text-sm font-medium mt-1">1.2k Online</span>
              </div>
              
              <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 glass p-3 md:p-4 rounded-xl animate-pulse-glow">
                <RotateCw className="w-4 md:w-6 h-4 md:h-6 text-secondary" />
                <span className="block text-xs md:text-sm font-medium mt-1">99.9% Sync</span>
              </div>
              
              {/* Popular Movies Floating Cards */}
              <div className="absolute top-1/4 -left-4 md:-left-8 glass p-2 md:p-3 rounded-lg animate-float hidden sm:block" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 md:w-12 h-8 md:h-12 bg-gradient-primary rounded"></div>
                  <div>
                    <div className="text-xs md:text-sm font-medium">Popular Now</div>
                    <div className="text-xs text-muted-foreground">Spider-Man</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 -right-4 md:-right-8 glass p-2 md:p-3 rounded-lg animate-float hidden sm:block" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 md:w-12 h-8 md:h-12 bg-gradient-secondary rounded"></div>
                  <div>
                    <div className="text-xs md:text-sm font-medium">Trending</div>
                    <div className="text-xs text-muted-foreground">Dark Knight</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">SyncStream</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Built for seamless synchronized streaming with features that bring people together
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-glass card-hover hover-tilt">
                <CardContent className="p-4 md:p-6">
                  <div className="bg-gradient-primary p-3 rounded-xl w-fit mb-4">
                    <feature.icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-gradient-primary text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6 shadow-glow">
                  {step.step}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              What Users <span className="text-gradient">Say</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join thousands of happy streamers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-glass card-hover">
                <CardContent className="p-4 md:p-6">
                  <div className="flex mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="text-sm md:text-base font-semibold">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Streaming Together?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 px-4">
            Join the community and never watch alone again
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <Link to="/register">
                <Check className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                Sign Up Free
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto">
              <Play className="mr-2 w-4 md:w-5 h-4 md:h-5" />
              Try Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-primary p-2 rounded-xl">
                  <Play className="w-5 md:w-6 h-5 md:h-6 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold text-gradient">SyncStream</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                The ultimate platform for synchronized video streaming and social watching.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Product</h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/demo" className="hover:text-primary transition-colors">Demo</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Company</h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Support</h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 md:mt-12 pt-6 md:pt-8 text-center text-sm md:text-base text-muted-foreground">
            <p>&copy; 2024 SyncStream. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;