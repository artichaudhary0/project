import { Employee, AttendanceRecord } from '../types';

export const employees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    position: 'Software Engineer',
    department: 'Engineering',
    joinDate: '2023-01-15',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    position: 'Product Manager',
    department: 'Product',
    joinDate: '2023-03-20',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
];

export const attendance: AttendanceRecord[] = [
  {
    id: '1',
    employeeId: '1',
    date: '2024-03-19',
    checkIn: '09:00',
    checkOut: '17:00',
    status: 'present'
  },
  {
    id: '2',
    employeeId: '2',
    date: '2024-03-19',
    checkIn: '09:30',
    checkOut: '17:30',
    status: 'late'
  },
];