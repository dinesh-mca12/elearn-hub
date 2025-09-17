import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Chat from './pages/Chat';

// Placeholder components for other features
const Calendar = () => (
  <div className="card">
    <h1 className="text-2xl font-bold text-white mb-4">Calendar</h1>
    <p className="text-gray-400">Calendar integration with Google Calendar API coming soon!</p>
    <div className="mt-6 bg-gray-700/50 rounded-lg p-6 text-center">
      <p className="text-gray-300">This feature will include:</p>
      <ul className="mt-3 space-y-2 text-gray-400 text-sm">
        <li>• Event creation and management</li>
        <li>• Google Calendar synchronization</li>
        <li>• Meeting scheduling</li>
        <li>• Reminders and notifications</li>
      </ul>
    </div>
  </div>
);

const Meetings = () => (
  <div className="card">
    <h1 className="text-2xl font-bold text-white mb-4">Zoom Meetings</h1>
    <p className="text-gray-400">Zoom integration for virtual meetings coming soon!</p>
    <div className="mt-6 bg-gray-700/50 rounded-lg p-6 text-center">
      <p className="text-gray-300">This feature will include:</p>
      <ul className="mt-3 space-y-2 text-gray-400 text-sm">
        <li>• Create and join Zoom meetings</li>
        <li>• Direct integration with courses</li>
        <li>• Automatic meeting links</li>
        <li>• Recording management</li>
      </ul>
    </div>
  </div>
);

const AIChat = () => (
  <div className="card">
    <h1 className="text-2xl font-bold text-white mb-4">AI Assistant</h1>
    <p className="text-gray-400">AI-powered chatbot for doubt solving coming soon!</p>
    <div className="mt-6 bg-gray-700/50 rounded-lg p-6 text-center">
      <p className="text-gray-300">This feature will include:</p>
      <ul className="mt-3 space-y-2 text-gray-400 text-sm">
        <li>• OpenAI GPT integration</li>
        <li>• Context-aware responses</li>
        <li>• Code explanation and debugging</li>
        <li>• Learning path recommendations</li>
      </ul>
    </div>
  </div>
);

const Students = () => (
  <div className="card">
    <h1 className="text-2xl font-bold text-white mb-4">Student Management</h1>
    <p className="text-gray-400">Manage your students and track their progress.</p>
    <div className="mt-6 bg-gray-700/50 rounded-lg p-6 text-center">
      <p className="text-gray-300">This feature will include:</p>
      <ul className="mt-3 space-y-2 text-gray-400 text-sm">
        <li>• Student enrollment management</li>
        <li>• Progress tracking</li>
        <li>• Grade management</li>
        <li>• Communication tools</li>
      </ul>
    </div>
  </div>
);

const Settings = () => (
  <div className="card">
    <h1 className="text-2xl font-bold text-white mb-4">Settings</h1>
    <p className="text-gray-400">Customize your account settings and preferences.</p>
    <div className="mt-6 bg-gray-700/50 rounded-lg p-6 text-center">
      <p className="text-gray-300">This feature will include:</p>
      <ul className="mt-3 space-y-2 text-gray-400 text-sm">
        <li>• Profile management</li>
        <li>• Notification preferences</li>
        <li>• Theme customization</li>
        <li>• Privacy settings</li>
      </ul>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-900">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="courses" element={<Courses />} />
              <Route path="chat" element={<Chat />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="meetings" element={<Meetings />} />
              <Route path="ai-chat" element={<AIChat />} />
              <Route 
                path="students" 
                element={
                  <ProtectedRoute requiredRole="teacher">
                    <Students />
                  </ProtectedRoute>
                } 
              />
              <Route path="settings" element={<Settings />} />
            </Route>
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
