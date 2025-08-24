import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Play, 
  Search, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  Moon,
  Sun
} from 'lucide-react';

interface HeaderProps {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const isLoggedIn = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <header className="glass border-b backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-primary p-1.5 md:p-2 rounded-xl">
              <Play className="w-5 md:w-6 h-5 md:h-6 text-white" />
            </div>
            <span className="text-lg md:text-2xl font-bold text-gradient">SyncStream</span>
          </Link>

          {/* Navigation */}
          {isLoggedIn && (
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Dashboard
              </Link>
              <Link 
                to="/movies" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/movies' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Movies
              </Link>
              <Link 
                to="/series" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/series' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Series
              </Link>
              <Link 
                to="/chat-rooms" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/chat-rooms' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Chat Rooms
              </Link>
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hover:bg-primary/10 transition-colors h-8 w-8 md:h-10 md:w-10"
            >
              {darkMode ? (
                <Sun className="w-4 md:w-5 h-4 md:h-5" />
              ) : (
                <Moon className="w-4 md:w-5 h-4 md:h-5" />
              )}
            </Button>

            {/* Search */}
            {isLoggedIn && (
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 h-8 w-8 md:h-10 md:w-10 hidden sm:inline-flex">
                <Search className="w-4 md:w-5 h-4 md:h-5" />
              </Button>
            )}

            {/* Notifications */}
            {isLoggedIn && (
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 relative h-8 w-8 md:h-10 md:w-10 hidden md:inline-flex">
                <Bell className="w-4 md:w-5 h-4 md:h-5" />
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            )}

            {/* User Menu or Auth Buttons */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 md:h-10 md:w-10 rounded-full">
                    <Avatar className="h-8 w-8 md:h-10 md:w-10">
                      <AvatarImage src="/api/placeholder/32/32" alt="User" />
                      <AvatarFallback className="text-xs md:text-sm">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 md:w-56 glass" align="end" forceMount>
                  <div className="flex flex-col space-y-1 p-2">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john@example.com</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-1 md:space-x-2">
                <Button variant="ghost" asChild className="text-sm hidden sm:inline-flex">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild className="bg-gradient-primary hover:opacity-90 text-xs md:text-sm px-2 md:px-4">
                  <Link to="/register">
                    <span className="hidden sm:inline">Get Started</span>
                    <span className="sm:hidden">Join</span>
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;