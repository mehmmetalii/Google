import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';

export const AppRoutess = () => {
  return (
    <div style={{ marginLeft: '15px' }}>
      <RouterRoutes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </RouterRoutes>
    </div>
  );
};