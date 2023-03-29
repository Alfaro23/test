import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Routes>

        <Route path='/'
          // element={<Header />}
        >
    
          <Route index
            element={<Login />}
          />

        </Route>

      </Routes>
    </>

  );
}

export default App;
