import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  BookOpen,
  Users,
  MessageSquare,
  Calendar,
  TrendingUp,
  Clock,
  Award,
  Activity
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();

  const isTeacher = currentUser?.role === 'teacher';

  // Mock data for demonstration
  const stats = isTeacher
    ? [
        { icon: BookOpen, label: 'Active Courses', value: '12', change: '+2 this month' },
        { icon: Users, label: 'Total Students', value: '248', change: '+15 this week' },
        { icon: MessageSquare, label: 'Messages', value: '34', change: '12 unread' },
        { icon: Activity, label: 'Engagement', value: '87%', change: '+5% from last week' },
      ]
    : [
        { icon: BookOpen, label: 'Enrolled Courses', value: '8', change: '2 in progress' },
        { icon: Clock, label: 'Study Hours', value: '24h', change: 'This week' },
        { icon: Award, label: 'Completed', value: '6', change: '3 certificates earned' },
        { icon: TrendingUp, label: 'Progress', value: '75%', change: 'Overall completion' },
      ];

  const recentActivities = isTeacher
    ? [
        'New student enrolled in "React Fundamentals"',
        'Quiz submitted for "JavaScript Basics"',
        'Meeting scheduled for tomorrow at 2 PM',
        'Course "Advanced React" published',
        'New message from John Doe',
      ]
    : [
        'Completed "Introduction to TypeScript" lesson',
        'New assignment available in "React Hooks"',
        'Upcoming meeting: "Project Discussion" at 3 PM',
        'Quiz due tomorrow for "JavaScript Basics"',
        'New course "Vue.js Essentials" available',
      ];

  const upcomingEvents = [
    { title: 'React Workshop', time: 'Today, 2:00 PM', type: 'meeting' },
    { title: 'JavaScript Quiz Due', time: 'Tomorrow, 11:59 PM', type: 'assignment' },
    { title: 'Weekly Team Meeting', time: 'Friday, 10:00 AM', type: 'meeting' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-2">
          Welcome back, {currentUser?.displayName}!
        </h1>
        <p className="text-primary-100">
          {isTeacher
            ? "Here's what's happening with your courses today."
            : "Ready to continue your learning journey?"}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                <p className="text-green-400 text-sm mt-1">{stat.change}</p>
              </div>
              <div className="bg-primary-500/20 p-3 rounded-lg">
                <stat.icon className="h-6 w-6 text-primary-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700/50 rounded-lg">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Upcoming Events</h2>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                <div>
                  <p className="text-white font-medium">{event.title}</p>
                  <p className="text-gray-400 text-sm">{event.time}</p>
                </div>
                <div className={`px-2 py-1 rounded text-xs ${
                  event.type === 'meeting' 
                    ? 'bg-blue-500/20 text-blue-300' 
                    : 'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {event.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {isTeacher ? (
            <>
              <button className="flex flex-col items-center p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
                <BookOpen className="h-8 w-8 text-primary-400 mb-2" />
                <span className="text-sm text-gray-300">Create Course</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
                <Users className="h-8 w-8 text-green-400 mb-2" />
                <span className="text-sm text-gray-300">Manage Students</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
                <Calendar className="h-8 w-8 text-blue-400 mb-2" />
                <span className="text-sm text-gray-300">Schedule Meeting</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
                <MessageSquare className="h-8 w-8 text-purple-400 mb-2" />
                <span className="text-sm text-gray-300">View Messages</span>
              </button>
            </>
          ) : (
            <>
              <button className="flex flex-col items-center p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
                <BookOpen className="h-8 w-8 text-primary-400 mb-2" />
                <span className="text-sm text-gray-300">Browse Courses</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
                <MessageSquare className="h-8 w-8 text-green-400 mb-2" />
                <span className="text-sm text-gray-300">Join Chat</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
                <Calendar className="h-8 w-8 text-blue-400 mb-2" />
                <span className="text-sm text-gray-300">View Schedule</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors">
                <Award className="h-8 w-8 text-yellow-400 mb-2" />
                <span className="text-sm text-gray-300">Achievements</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;