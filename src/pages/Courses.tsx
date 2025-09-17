import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  BookOpen, 
  Plus, 
  Search, 
  Filter, 
  Play, 
  Users, 
  Clock,
  Star,
  Upload,
  FileText,
  Video
} from 'lucide-react';

const Courses: React.FC = () => {
  const { currentUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const isTeacher = currentUser?.role === 'teacher';

  // Mock course data
  const courses = [
    {
      id: '1',
      title: 'React Fundamentals',
      description: 'Learn the basics of React including components, props, and state management.',
      thumbnail: '/api/placeholder/300/200',
      instructor: 'John Doe',
      students: 45,
      duration: '8 hours',
      rating: 4.8,
      progress: isTeacher ? null : 75,
      lessons: 12,
      isPublished: true
    },
    {
      id: '2',
      title: 'Advanced JavaScript',
      description: 'Master advanced JavaScript concepts including closures, promises, and async/await.',
      thumbnail: '/api/placeholder/300/200',
      instructor: 'Jane Smith',
      students: 32,
      duration: '12 hours',
      rating: 4.9,
      progress: isTeacher ? null : 40,
      lessons: 18,
      isPublished: true
    },
    {
      id: '3',
      title: 'Node.js Backend Development',
      description: 'Build scalable backend applications with Node.js and Express.',
      thumbnail: '/api/placeholder/300/200',
      instructor: 'Mike Johnson',
      students: 28,
      duration: '15 hours',
      rating: 4.7,
      progress: isTeacher ? null : 0,
      lessons: 20,
      isPublished: false
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'enrolled' && !isTeacher) return matchesSearch && course.progress !== undefined;
    if (selectedFilter === 'completed' && !isTeacher) return matchesSearch && course.progress === 100;
    if (selectedFilter === 'published' && isTeacher) return matchesSearch && course.isPublished;
    if (selectedFilter === 'draft' && isTeacher) return matchesSearch && !course.isPublished;
    
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            {isTeacher ? 'My Courses' : 'Courses'}
          </h1>
          <p className="text-gray-400 mt-1">
            {isTeacher 
              ? 'Manage and create your courses' 
              : 'Discover and learn new skills'}
          </p>
        </div>
        
        {isTeacher && (
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Create Course</span>
          </button>
        )}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field w-full pl-10"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select 
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="input-field"
          >
            <option value="all">All Courses</option>
            {isTeacher ? (
              <>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </>
            ) : (
              <>
                <option value="enrolled">Enrolled</option>
                <option value="completed">Completed</option>
              </>
            )}
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="card hover:border-primary-500 transition-colors cursor-pointer">
            <div className="relative">
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <Video className="h-12 w-12 text-gray-500" />
              </div>
              
              {!isTeacher && course.progress !== undefined && (
                <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-sm text-white">
                  {course.progress}%
                </div>
              )}
              
              {isTeacher && (
                <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs ${
                  course.isPublished 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {course.isPublished ? 'Published' : 'Draft'}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white line-clamp-2">
                {course.title}
              </h3>
              
              <p className="text-gray-400 text-sm line-clamp-2">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>

              {!isTeacher && course.progress !== undefined && (
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-gray-400">
                  {course.lessons} lessons
                </span>
                
                <button className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 text-sm font-medium">
                  {isTeacher ? (
                    <>
                      <FileText className="h-4 w-4" />
                      <span>Manage</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      <span>Continue</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400">No courses found matching your criteria.</p>
          {isTeacher && (
            <button className="btn-primary mt-4 flex items-center space-x-2 mx-auto">
              <Plus className="h-4 w-4" />
              <span>Create Your First Course</span>
            </button>
          )}
        </div>
      )}

      {/* Upload Modal Placeholder (for teachers) */}
      {isTeacher && (
        <div className="fixed bottom-6 right-6">
          <button className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg">
            <Upload className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;