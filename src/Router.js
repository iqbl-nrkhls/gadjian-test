import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import Layout from 'components/layout'

import Personnel from 'components/screen/personnel'

export default function Router() {
  return (
    <HashRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/personnel" />} />
            <Route path="/personnel" element={<Personnel />} />
          </Routes>
      </Layout>
    </HashRouter>
  );
}