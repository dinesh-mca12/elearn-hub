# ELearn Hub - Full-Stack E-Learning Platform

A comprehensive e-learning web application built with React, Firebase, and Tailwind CSS, featuring real-time chat, course management, calendar integration, Zoom meetings, and AI-powered assistance.

## 🚀 Features

### 🔐 Authentication System
- User registration and login with Firebase Auth
- Role-based access control (Teacher/Student)
- Protected routes and components
- Demo accounts for testing

### 📚 Course Management
- **Teachers**: Create, edit, and manage courses
- Upload videos, documents, and create quizzes
- Track student progress and engagement
- **Students**: Browse and enroll in courses
- Track learning progress and achievements

### 💬 Real-time Chat System
- Group and individual messaging
- File sharing capabilities
- Real-time message synchronization with Firestore
- Message history and search

### 📅 Calendar Integration
- Google Calendar API integration (coming soon)
- Event creation and scheduling
- Meeting reminders and notifications
- Course-related event management

### 🎥 Zoom Integration
- Direct Zoom meeting creation and joining (coming soon)
- Integration with course schedules
- Automatic meeting links

### 🤖 AI Assistant
- OpenAI-powered chatbot for doubt solving (coming soon)
- Context-aware responses
- Learning path recommendations

### 🎨 Modern UI/UX
- Dark theme with Tailwind CSS
- Responsive design for all devices
- Smooth animations and transitions
- Intuitive navigation and user experience

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons

### Backend & Services
- **Firebase Authentication** for user management
- **Firestore** for real-time database
- **Firebase Storage** for file uploads
- **Firebase Cloud Functions** for serverless logic
- **Firebase Hosting** for deployment

### External APIs
- **Google Calendar API** for calendar integration
- **Zoom API** for video conferencing
- **OpenAI API** for AI chatbot

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase CLI
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/dinesh-mca12/elearn-hub.git
cd elearn-hub
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable the following services:
   - Authentication (Email/Password)
   - Firestore Database
   - Storage
   - Hosting
3. Get your Firebase configuration from Project Settings > Web Apps

### 4. Environment Configuration

1. Copy the environment template:
```bash
cp .env.example .env.local
```

2. Fill in your Firebase configuration and API keys:
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 5. Deploy Firebase Security Rules

```bash
# Install Firebase CLI if you haven't
npm install -g firebase-tools

# Login to Firebase
firebase login

# Set your project
firebase use your-project-id

# Deploy Firestore rules and indexes
firebase deploy --only firestore:rules,firestore:indexes

# Deploy Storage rules
firebase deploy --only storage
```

### 6. Start Development Server

```bash
npm start
```

The application will open at `http://localhost:3000`

## 🎯 Demo Accounts

For testing purposes, you can use these demo accounts:

**Teacher Account:**
- Email: `teacher@demo.com`
- Password: `demo123`

**Student Account:**
- Email: `student@demo.com`
- Password: `demo123`

## 📁 Project Structure

```
elearn-hub/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Layout.tsx      # Main app layout
│   │   └── ProtectedRoute.tsx
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx # Authentication context
│   ├── pages/              # Main application pages
│   │   ├── Dashboard.tsx   # Main dashboard
│   │   ├── Login.tsx       # Login page
│   │   ├── SignUp.tsx      # Registration page
│   │   ├── Courses.tsx     # Course management
│   │   └── Chat.tsx        # Real-time chat
│   ├── config/             # Configuration files
│   │   └── firebase.ts     # Firebase configuration
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # App-wide type definitions
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   └── App.tsx             # Main app component
├── functions/              # Firebase Cloud Functions
├── firestore.rules         # Firestore security rules
├── storage.rules           # Firebase Storage rules
├── firebase.json           # Firebase configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to Firebase
firebase deploy
```

## 📖 API Integration Guide

### Google Calendar API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Calendar API
4. Create credentials (API Key)
5. Add the API key to your environment variables

### Zoom API Setup

1. Sign up at [Zoom Marketplace](https://marketplace.zoom.us/)
2. Create a new Server-to-Server OAuth app
3. Get your API Key and Secret
4. Add them to your environment variables

### OpenAI API Setup

1. Sign up at [OpenAI Platform](https://platform.openai.com/)
2. Generate an API key
3. Add it to your environment variables

## 🚀 Deployment

### Firebase Hosting

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

### Other Platforms

The built application in the `build/` folder can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## 🔒 Security

- Firestore security rules restrict data access based on user authentication and roles
- Storage rules prevent unauthorized file access
- Environment variables protect sensitive API keys
- Role-based access control for teacher/student features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/dinesh-mca12/elearn-hub/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🎉 Acknowledgments

- React team for the amazing framework
- Firebase team for the robust backend services
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons

---

**Happy Learning! 🚀**