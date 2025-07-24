import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard"; //import the component as it appears o your file structure
import Settings from "./pages/SystemSettings/systemSettings"; //import the component as it appears o your file structure
import Logs from "./pages/ServiceLogs/serviceLogs"; //import the component as it appears o your file structure
import MainLayout from "./Layout/mainLayout"; //import the component as it appears o your file structure

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
