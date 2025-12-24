import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, AlertTriangle, Shield, FileText } from 'lucide-react';

const crimeData2023 = [
  { category: 'Rape', cases: 31516 },
  { category: 'Dowry Deaths', cases: 7618 },
  { category: 'Assault', cases: 84041 },
  { category: 'Kidnapping', cases: 110311 },
  { category: 'Domestic Violence', cases: 132882 },
  { category: 'Cyber Crime', cases: 8195 }
];

const trendData = [
  { year: '2019', total: 405861 },
  { year: '2020', total: 371503 },
  { year: '2021', total: 428278 },
  { year: '2022', total: 445256 },
  { year: '2023', total: 445563 }
];

export default function WomenCrimesAnalytics() {
  const [selectedYear, setSelectedYear] = useState('2023');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl text-[#1a2847] mb-2">Crimes Against Women in India - Analytics</h1>
            <p className="text-gray-600">Data-driven insights from National Crime Records Bureau (NCRB)</p>
          </div>

          {/* Year Selector */}
          <div className="mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <label className="text-[#1a2847]">Select Year:</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                      <SelectItem value="2019">2019</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-l-4 border-pink-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Cases (2023)</p>
                    <p className="text-3xl text-[#1a2847] mt-2">445,563</p>
                    <p className="text-xs text-green-600 mt-1">↑ 0.07% from 2022</p>
                  </div>
                  <AlertTriangle className="w-12 h-12 text-pink-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Rape Cases</p>
                    <p className="text-3xl text-[#1a2847] mt-2">31,516</p>
                    <p className="text-xs text-gray-600 mt-1">Per 100,000 women: 4.6</p>
                  </div>
                  <Shield className="w-12 h-12 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Dowry Deaths</p>
                    <p className="text-3xl text-[#1a2847] mt-2">7,618</p>
                    <p className="text-xs text-gray-600 mt-1">IPC Section 304B</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-orange-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Charge Sheet Rate</p>
                    <p className="text-3xl text-[#1a2847] mt-2">76.7%</p>
                    <p className="text-xs text-gray-600 mt-1">National Average</p>
                  </div>
                  <FileText className="w-12 h-12 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bar Chart - Crime Types */}
          <Card className="mb-8">
            <CardHeader className="bg-[#1a2847] text-white">
              <CardTitle>Crime Distribution by Type ({selectedYear})</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={crimeData2023}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="cases" fill="#ff6b9d" name="Number of Cases" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Source: National Crime Records Bureau (NCRB) - Crime in India {selectedYear}
              </p>
            </CardContent>
          </Card>

          {/* Line Chart - Trends */}
          <Card className="mb-8">
            <CardHeader className="bg-[#1a2847] text-white">
              <CardTitle>Year-wise Trend of Crimes Against Women</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="total" stroke="#1a2847" strokeWidth={3} name="Total Cases" />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Source: National Crime Records Bureau (NCRB) - Multiple Years Data
              </p>
            </CardContent>
          </Card>

          {/* State-wise Data Placeholder */}
          <Card className="mb-8">
            <CardHeader className="bg-[#1a2847] text-white">
              <CardTitle>State-wise Data Visualization</CardTitle>
            </CardHeader>
            <CardContent className="p-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl text-[#1a2847] mb-2">India Map Visualization</h3>
                <p className="text-gray-600">Interactive map showing state-wise crime distribution (Future Feature)</p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="bg-yellow-50 border-2 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-[#1a2847] mb-3">Data Sources & Disclaimer</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Data source: National Crime Records Bureau (NCRB), Ministry of Home Affairs</li>
                <li>• This data is for educational and awareness purposes only</li>
                <li>• Numbers may not reflect unreported cases</li>
                <li>• For official statistics, please refer to NCRB official reports</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
