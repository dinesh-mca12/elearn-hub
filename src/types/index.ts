export interface User {
  uid: string;
  email: string;
  displayName?: string;
  role: 'teacher' | 'student';
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  teacherId: string;
  teacherName: string;
  students: string[];
  createdAt: Date;
  updatedAt: Date;
  isPublished: boolean;
}

export interface CourseContent {
  id: string;
  courseId: string;
  title: string;
  type: 'video' | 'document' | 'quiz';
  content: string | VideoContent | DocumentContent | QuizContent;
  order: number;
  createdAt: Date;
}

export interface VideoContent {
  url: string;
  duration?: number;
  thumbnail?: string;
}

export interface DocumentContent {
  url: string;
  filename: string;
  fileType: string;
  size: number;
}

export interface QuizContent {
  questions: QuizQuestion[];
  timeLimit?: number;
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options?: string[];
  correctAnswer: string | string[];
  points: number;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  chatId: string;
  attachments?: FileAttachment[];
  edited?: boolean;
  editedAt?: Date;
}

export interface Chat {
  id: string;
  type: 'group' | 'individual';
  name?: string;
  participants: string[];
  participantDetails: { [uid: string]: { name: string; avatar?: string } };
  lastMessage?: string;
  lastMessageTime?: Date;
  createdAt: Date;
}

export interface FileAttachment {
  id: string;
  filename: string;
  url: string;
  fileType: string;
  size: number;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  location?: string;
  attendees: string[];
  createdBy: string;
  meetingLink?: string;
  isZoomMeeting?: boolean;
  reminders?: EventReminder[];
}

export interface EventReminder {
  type: 'email' | 'popup';
  minutesBefore: number;
}

export interface ZoomMeeting {
  id: string;
  meetingId: string;
  passcode?: string;
  joinUrl: string;
  startUrl: string;
  topic: string;
  startTime: Date;
  duration: number;
  hostId: string;
  attendees: string[];
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'message' | 'event' | 'course' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  actionUrl?: string;
  createdAt: Date;
}

export interface AIConversation {
  id: string;
  userId: string;
  messages: AIMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}