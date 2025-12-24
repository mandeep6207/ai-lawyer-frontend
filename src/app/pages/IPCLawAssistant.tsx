import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, BookOpen, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const sampleSections = [
  { section: '302', title: 'Murder', description: 'Punishment for murder - Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine.', bailable: false, cognizable: true, punishment: 'Death or Life Imprisonment' },
  { section: '304A', title: 'Causing death by negligence', description: 'Whoever causes the death of any person by doing any rash or negligent act not amounting to culpable homicide.', bailable: true, cognizable: true, punishment: 'Up to 2 years imprisonment or fine or both' },
  { section: '354', title: 'Assault or criminal force to woman with intent to outrage her modesty', description: 'Whoever assaults or uses criminal force to any woman, intending to outrage or knowing it to be likely that he will thereby outrage her modesty.', bailable: false, cognizable: true, punishment: 'Up to 5 years imprisonment or fine or both' },
  { section: '376', title: 'Rape', description: 'Whoever commits rape shall be punished with rigorous imprisonment of either description for a term which shall not be less than ten years.', bailable: false, cognizable: true, punishment: 'Minimum 10 years imprisonment' },
  { section: '420', title: 'Cheating', description: 'Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person.', bailable: false, cognizable: true, punishment: 'Up to 7 years imprisonment and fine' }
];

export default function IPCLawAssistant() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState(sampleSections[0]);

  const handleSearch = (query: string) => {
    const found = sampleSections.find(s => s.section.includes(query) || s.title.toLowerCase().includes(query.toLowerCase()));
    if (found) {
      setSelectedSection(found);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl text-[#1a2847] mb-2">IPC Law Assistant</h1>
            <p className="text-gray-600">Search and understand Indian Penal Code sections in simple language</p>
          </div>

          {/* Search */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by IPC section number or crime type (e.g., 302, murder, theft...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12"
                  />
                </div>
                <Button onClick={() => handleSearch(searchQuery)} className="bg-[#1a2847] hover:bg-[#2a3857] px-8 h-12">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Section List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="bg-[#1a2847] text-white">
                  <CardTitle>Popular IPC Sections</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {sampleSections.map((section) => (
                      <button
                        key={section.section}
                        onClick={() => setSelectedSection(section)}
                        className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                          selectedSection.section === section.section ? 'bg-blue-50 border-l-4 border-[#1a2847]' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#1a2847] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                            <span>{section.section}</span>
                          </div>
                          <div>
                            <p className="text-[#1a2847]">Section {section.section}</p>
                            <p className="text-sm text-gray-600">{section.title}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section Details */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="bg-[#1a2847] text-white">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-8 h-8" />
                    <div>
                      <CardTitle>IPC Section {selectedSection.section}</CardTitle>
                      <p className="text-sm text-gray-300">{selectedSection.title}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg text-[#1a2847] mb-3">Simple Explanation</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedSection.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-gray-50">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {selectedSection.bailable ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                          <span className="text-sm">Bailable</span>
                        </div>
                        <p className={`text-xl ${selectedSection.bailable ? 'text-green-600' : 'text-red-600'}`}>
                          {selectedSection.bailable ? 'Yes' : 'No'}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {selectedSection.cognizable ? (
                            <CheckCircle className="w-5 h-5 text-orange-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-gray-600" />
                          )}
                          <span className="text-sm">Cognizable</span>
                        </div>
                        <p className={`text-xl ${selectedSection.cognizable ? 'text-orange-600' : 'text-gray-600'}`}>
                          {selectedSection.cognizable ? 'Yes' : 'No'}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#1a2847] mb-3">Punishment</h3>
                    <Card className="bg-red-50 border-2 border-red-200">
                      <CardContent className="p-4">
                        <p className="text-gray-700">{selectedSection.punishment}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#1a2847] mb-3">Key Terms Explained</h3>
                    <div className="space-y-2">
                      <Card className="bg-blue-50">
                        <CardContent className="p-3">
                          <p className="text-sm"><strong>Bailable:</strong> The accused can be released on bail</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-blue-50">
                        <CardContent className="p-3">
                          <p className="text-sm"><strong>Cognizable:</strong> Police can arrest without a warrant</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-yellow-50 border-2 border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">
                      <p className="mb-1">This information is for educational purposes only and does not constitute legal advice.</p>
                      <p>For actual legal matters, please consult a qualified lawyer.</p>
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
