import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import {routes} from './routes';
import { Fragment } from 'react';

function App() {
  return ( 
    <Router>
      <div className="App">
        <Routes>
          {/* Thêm route mặc định */}
          <Route
            path="/"
            element={<Navigate to="/student" />}
          />
          
          {routes.map((route, index) => {
            const Page = route.component;
            let Layout = Fragment;
            if (route.layout) {
                Layout = route.layout;
            }
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <Layout>
                            <Page />
                        </Layout>
                    }
                />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;