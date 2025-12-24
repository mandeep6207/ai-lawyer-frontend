import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Brain, AlertTriangle, Shield, FileText } from 'lucide-react';

export default function CaseOutcomePredictor() {
  const [showPrediction, setShowPrediction] = useState(false);

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPrediction(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl text-[#1a2847] mb-2">Case Outcome Predictor (Prototype)</h1>
            <p className="text-gray-600">Educational AI model to understand potential case outcomes</p>
          </div>

          {/* Warning */}
          <Card className="mb-8 bg-red-50 border-2 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-red-800 mb-2">Important Notice - Educational Prototype Only</h3>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• This is a prototype educational tool for learning purposes</li>
                    <li>• Predictions are NOT legal advice and should NOT be relied upon for actual legal decisions</li>
                    <li>• Real case outcomes depend on numerous factors including evidence quality, legal representation, and judicial discretion</li>
                    <li>• Always consult a qualified lawyer for actual legal matters</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div>
              <Card>
                <CardHeader className="bg-[#1a2847] text-white">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Case Details Input
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handlePredict} className="space-y-6">
                    <div>
                      <Label htmlFor="caseType">Case Type *</Label>
                      <Select required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="criminal">Criminal Case</SelectItem>
                          <SelectItem value="civil">Civil Case</SelectItem>
                          <SelectItem value="family">Family Law</SelectItem>
                          <SelectItem value="property">Property Dispute</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="ipcSection">Relevant IPC/CPC Section</Label>
                      <Input id="ipcSection" placeholder="e.g., IPC 420 (Cheating)" className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="caseFacts">Case Facts Summary *</Label>
                      <Textarea
                        id="caseFacts"
                        required
                        placeholder="Briefly describe the case facts, circumstances, and key events..."
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="evidence">Evidence Available</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Quality of evidence" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strong">Strong (Documentary, Witnesses)</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="weak">Weak (Circumstantial)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="pastRecords">Past Criminal Record</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No Past Record</SelectItem>
                          <SelectItem value="minor">Minor Offenses</SelectItem>
                          <SelectItem value="serious">Serious Offenses</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full bg-[#1a2847] hover:bg-[#2a3857]">
                      <Brain className="w-5 h-5 mr-2" />
                      Predict Outcome
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Prediction Result */}
            <div>
              {showPrediction ? (
                <Card>
                  <CardHeader className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-6 h-6" />
                      AI Prediction Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="text-lg text-[#1a2847] mb-3">Possible Outcome</h3>
                      <Card className="bg-blue-50 border-2 border-blue-200">
                        <CardContent className="p-4">
                          <p className="text-xl text-blue-800 mb-2">65% Conviction Probability</p>
                          <p className="text-sm text-gray-700">Based on case facts and evidence strength</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="text-lg text-[#1a2847] mb-3">Key Factors Considered</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-sm text-gray-700">Strength of available evidence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-sm text-gray-700">Nature of the offense</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-sm text-gray-700">Legal precedents in similar cases</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-sm text-gray-700">Criminal history consideration</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg text-[#1a2847] mb-3">AI Reasoning</h3>
                      <Card className="bg-gray-50">
                        <CardContent className="p-4 text-sm text-gray-700">
                          <p className="mb-2">Based on the provided information:</p>
                          <p className="mb-2">
                            The evidence appears to be moderately strong with documentary support. 
                            Similar cases in the past have resulted in conviction rates between 60-70%. 
                            The severity of the offense and quality of evidence are key determinants.
                          </p>
                          <p className="text-xs text-gray-600 mt-3">
                            Note: This is a simplified educational model. Actual outcomes vary significantly.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="text-lg text-[#1a2847] mb-3">Possible Next Steps</h3>
                      <div className="space-y-2">
                        <Card className="bg-green-50">
                          <CardContent className="p-3">
                            <p className="text-sm text-gray-700">1. Gather all documentary evidence</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-green-50">
                          <CardContent className="p-3">
                            <p className="text-sm text-gray-700">2. Consult with a qualified lawyer immediately</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-green-50">
                          <CardContent className="p-3">
                            <p className="text-sm text-gray-700">3. Prepare witness statements if available</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Brain className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Enter case details and click "Predict Outcome"</p>
                    <p className="text-sm text-gray-400 mt-2">AI analysis will appear here</p>
                  </CardContent>
                </Card>
              )}

              <Card className="mt-6 bg-yellow-50 border-2 border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <div className="text-sm text-gray-700">
                      <p className="mb-2"><strong>Remember:</strong></p>
                      <p>This prediction is for educational understanding only. Real legal outcomes depend on numerous factors beyond AI analysis. Always seek professional legal counsel.</p>
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
