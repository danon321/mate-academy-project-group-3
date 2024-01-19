import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from "./MainPage";

export const AppRouter: React.FC = () => {
    return (
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    )
  }
