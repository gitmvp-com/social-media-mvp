import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import './globals.css';

const App = () => {
  return (
    <main className="flex h-screen">
      <div className="flex flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
