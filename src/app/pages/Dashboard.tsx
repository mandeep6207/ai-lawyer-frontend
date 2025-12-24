import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen, BarChart3, Gavel, Brain, Shield, TrendingUp, AlertCircle, User, CheckCircle } from 'lucide-react';
import { Progress } from '../components/ui/progress';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-[#1a2847] mb-8">Legal Intelligence Dashboard</h1>
          
          {/* Welcome Card */}
          <Card className="mb-8 border-l-4 border-[#ff9933]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#1a2847] rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl text-[#1a2847]">Welcome back, User</h2>
                    <p className="text-gray-600">Role: Student | Purpose: Learning Indian Law</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Profile Completion</p>
                  <Progress value={100} className="w-32 mt-2" />
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                    <CheckCircle className="w-4 h-4" /> 100% Complete
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Cards */}
          <h2 className="text-2xl text-[#1a2847] mb-6">Tools & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link to="/tools/ipc-assistant" className="group">
              <Card className="hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-200 h-full">
                <CardHeader className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-8 h-8" />
                    <CardTitle>IPC Law Assistant</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">Search and understand IPC sections with AI-powered simple explanations.</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm">Explore →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/tools/supreme-court" className="group">
              <Card className="hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-200 h-full">
                <CardHeader className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <div className="flex items-center gap-3">
                    <Gavel className="w-8 h-8" />
                    <CardTitle>Supreme Court Explorer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">Search Supreme Court judgments and get AI-simplified explanations.</p>
                  <div className="flex items-center text-purple-600 group-hover:text-purple-700">
                    <span className="text-sm">Explore →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/analytics/women-crimes" className="group">
              <Card className="hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-200 h-full">
                <CardHeader className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-8 h-8" />
                    <CardTitle>Women Crimes Analytics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">Visualize data about crimes against women with interactive charts.</p>
                  <div className="flex items-center text-pink-600 group-hover:text-pink-700">
                    <span className="text-sm">View Analytics →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/tools/case-predictor" className="group">
              <Card className="hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-200 h-full">
                <CardHeader className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                  <div className="flex items-center gap-3">
                    <Brain className="w-8 h-8" />
                    <CardTitle>Case Outcome Predictor</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">Educational AI model for understanding potential case outcomes (Prototype).</p>
                  <div className="flex items-center text-indigo-600 group-hover:text-indigo-700">
                    <span className="text-sm">Try It →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Card className="border-2 border-gray-200 h-full">
              <CardHeader className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  <CardTitle>Legal Awareness</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Know Your Rights, FAQs, and essential legal information.</p>
                <div className="flex items-center text-green-600">
                  <span className="text-sm">Coming Soon</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 h-full">
              <CardHeader className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" />
                  <CardTitle>Crime Trends (IPC)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Analyze year-wise crime statistics across different IPC sections.</p>
                <div className="flex items-center text-orange-600">
                  <span className="text-sm">Coming Soon</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Overview */}
          <h2 className="text-2xl text-[#1a2847] mb-6">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total IPC Sections</p>
                    <p className="text-3xl text-[#1a2847] mt-2">511</p>
                  </div>
                  <BookOpen className="w-12 h-12 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">SC Judgments</p>
                    <p className="text-3xl text-[#1a2847] mt-2">10,000+</p>
                  </div>
                  <Gavel className="w-12 h-12 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Crime Reports</p>
                    <p className="text-3xl text-[#1a2847] mt-2">5,000+</p>
                  </div>
                  <BarChart3 className="w-12 h-12 text-pink-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <Card className="bg-yellow-50 border-2 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <p className="text-[#1a2847] mb-2">Important Disclaimer</p>
                  <p className="text-sm text-gray-700">
                    This platform is for educational purposes only. The information provided does not constitute legal advice. 
                    For actual legal matters, please consult a qualified legal professional.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
