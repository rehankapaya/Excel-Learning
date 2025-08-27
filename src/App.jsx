import React from 'react'
import ExcelMastery from './pages/ExcelMastery';
import SectionPage from './pages/SectionPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <ExcelMastery />,
  },
  {
    path: "/section/:id",
    element: <SectionPage />,

  },
]);

  return (
    <div>
      <RouterProvider router={router} />;
      
    </div>
  )
}
