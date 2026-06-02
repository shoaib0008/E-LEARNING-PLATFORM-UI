import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CoursePlayer from './pages/CoursePlayer';
import MyCourses from './pages/MyCourses';
import Discover from './pages/Discover';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="course/:id" element={<CoursePlayer />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="discover" element={<Discover />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
