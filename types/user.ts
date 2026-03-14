export interface AppUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  hasAccess: boolean;
  role: 'student' | 'admin';
  createdAt: string;
}
