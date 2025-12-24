import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PersonalDetails from './pages/PersonalDetails';
import EducationDetails from './pages/EducationDetails';
import PurposeAwareness from './pages/PurposeAwareness';
import Dashboard from './pages/Dashboard';
import WomenCrimesAnalytics from './pages/WomenCrimesAnalytics';
import IPCLawAssistant from './pages/IPCLawAssistant';
import SupremeCourtExplorer from './pages/SupremeCourtExplorer';
import CaseOutcomePredictor from './pages/CaseOutcomePredictor';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding/personal" element={<PersonalDetails />} />
        <Route path="/onboarding/education" element={<EducationDetails />} />
        <Route path="/onboarding/purpose" element={<PurposeAwareness />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics/women-crimes" element={<WomenCrimesAnalytics />} />
        <Route path="/tools/ipc-assistant" element={<IPCLawAssistant />} />
        <Route path="/tools/supreme-court" element={<SupremeCourtExplorer />} />
        <Route path="/tools/case-predictor" element={<CaseOutcomePredictor />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
