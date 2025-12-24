import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, Gavel, AlertCircle, Calendar, FileText } from 'lucide-react';

const sampleJudgments = [
  {
    id: 1,
    caseName: 'Kesavananda Bharati vs State of Kerala (1973)',
    date: '24 April 1973',
    summary: 'This landmark case established the basic structure doctrine, limiting Parliament\'s power to amend the Constitution.',
    aiExplanation: 'In simple terms: This case decided that while Parliament can change the Constitution, it cannot change its basic structure - the fundamental principles that make India a democracy. It\'s like saying you can renovate a house but you cannot remove its foundation.',
    citation: 'AIR 1973 SC 1461'
  },
  {
    id: 2,
    caseName: 'Vishaka vs State of Rajasthan (1997)',
    date: '13 August 1997',
    summary: 'This case laid down guidelines for prevention of sexual harassment of women at workplace.',
    aiExplanation: 'In simple terms: The Supreme Court created rules to protect women from sexual harassment at work. Every workplace must have a committee to handle complaints, and strict action must be taken against harassment.',
    citation: 'AIR 1997 SC 3011'
  },
  {
    id: 3,
    caseName: 'K.S. Puttaswamy vs Union of India (2017)',
    date: '24 August 2017',
    summary: 'Right to privacy recognized as a fundamental right under Article 21 of the Constitution.',
    aiExplanation: 'In simple terms: Your personal information and privacy are your fundamental right. The government and companies must protect your privacy and cannot misuse your personal data without valid reasons.',
    citation: 'AIR 2017 SC 4161'
  }
];

export default function SupremeCourtExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState(sampleJudgments[0]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl text-[#1a2847] mb-2">Supreme Court Judgment Explorer</h1>
            <p className="text-gray-600">Search and understand landmark Supreme Court judgments with AI-powered explanations</p>
          </div>

          {/* Search */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by case name, topic, or legal principle (e.g., privacy, fundamental rights...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12"
                  />
                </div>
                <Button className="bg-[#1a2847] hover:bg-[#2a3857] px-8 h-12">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="bg-[#1a2847] text-white">
                  <CardTitle>Landmark Judgments</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {sampleJudgments.map((judgment) => (
                      <button
                        key={judgment.id}
                        onClick={() => setSelectedCase(judgment)}
                        className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                          selectedCase.id === judgment.id ? 'bg-purple-50 border-l-4 border-[#1a2847]' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Gavel className="w-6 h-6 text-[#1a2847] flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-sm text-[#1a2847] leading-tight">{judgment.caseName}</p>
                            <p className="text-xs text-gray-600 mt-1">{judgment.date}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Case Details */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="bg-[#1a2847] text-white">
                  <div className="flex items-center gap-3">
                    <Gavel className="w-8 h-8" />
                    <div>
                      <CardTitle>{selectedCase.caseName}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {selectedCase.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {selectedCase.citation}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg text-[#1a2847] mb-3">Case Summary</h3>
                    <Card className="bg-gray-50">
                      <CardContent className="p-4">
                        <p className="text-gray-700 leading-relaxed">{selectedCase.summary}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#1a2847] mb-3 flex items-center gap-2">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm">AI Simplified</span>
                      Easy to Understand Explanation
                    </h3>
                    <Card className="bg-purple-50 border-2 border-purple-200">
                      <CardContent className="p-4">
                        <p className="text-gray-700 leading-relaxed">{selectedCase.aiExplanation}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#1a2847] mb-3">Why This Judgment Matters</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#ff9933] mt-1">•</span>
                        <span className="text-gray-700">This judgment has shaped Indian constitutional law</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ff9933] mt-1">•</span>
                        <span className="text-gray-700">It is frequently cited in subsequent cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ff9933] mt-1">•</span>
                        <span className="text-gray-700">It established important legal principles for citizens</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#1a2847] mb-3">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Fundamental Rights</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Constitutional Law</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Judicial Review</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-yellow-50 border-2 border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Disclaimer:</strong></p>
                      <p className="mb-1">• This is an AI-generated simplified explanation for educational purposes</p>
                      <p className="mb-1">• For legal proceedings, please refer to the complete judgment text</p>
                      <p>• Consult a qualified lawyer for legal advice</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
