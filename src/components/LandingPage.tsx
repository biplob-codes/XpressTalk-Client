import { MessageCircle, Users, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-8 w-8 text-slate-900" />
              <span className="text-xl font-bold text-slate-900">
                XpressTalk
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Connect with everyone,
            <br />
            <span className="text-slate-600">chat anywhere</span>
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Experience seamless communication with our modern chat platform.
            Fast, secure, and designed for the way you connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="w-full bg-black text-white sm:w-auto px-8 py-3 text-base">
              Sign Up Free
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-3 text-base"
            >
              Login
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why choose XpressTalk?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built for modern communication with features that matter
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-slate-600">
                Instant message delivery with real-time synchronization across
                all your devices.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Secure & Private
              </h3>
              <p className="text-slate-600">
                End-to-end encryption ensures your conversations stay private
                and secure.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Team Friendly
              </h3>
              <p className="text-slate-600">
                Perfect for teams with group chats, file sharing, and
                collaboration tools.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="bg-slate-50 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              Join thousands of users who trust XpressTalk for their daily
              communication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="w-full bg-black text-white sm:w-auto px-8 py-3 text-base">
                Create Account
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-3 text-base"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <MessageCircle className="h-6 w-6 text-slate-600" />
              <span className="text-lg font-semibold text-slate-900">
                XpressTalk
              </span>
            </div>
            <div className="flex space-x-6 text-slate-600">
              <a href="#" className="hover:text-slate-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-500">
            <p>&copy; 2025 XpressTalk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
