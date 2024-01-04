import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import { Layout } from "./components/shared/layout";
import { Dashboard } from './components/Dashboard';
import { Invoices } from './components/Invoices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='/invoices' element={<Invoices />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
