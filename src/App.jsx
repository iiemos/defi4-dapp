import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/AppShell";
import { BusinessDialogProvider } from "./components/BusinessDialog";
import Dashboard from "./pages/Dashboard";
import Growth from "./pages/Growth";
import NodeCenter from "./pages/NodeCenter";
import Profile from "./pages/Profile";
import Queue from "./pages/Queue";
import Staking from "./pages/Staking";
import Support from "./pages/Support";
import VotePage from "./pages/VotePage";

export default function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <BusinessDialogProvider>
        <AppShell>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/queue" element={<Queue />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/nodes" element={<NodeCenter />} />
            <Route path="/vote" element={<VotePage />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppShell>
      </BusinessDialogProvider>
    </BrowserRouter>
  );
}
