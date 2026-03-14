import {
  getAuth,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import { app } from './config';

export const auth = getAuth(app);

export async function signInWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function sendMagicLink(email: string) {
  const actionCodeSettings = {
    url: `${process.env.NEXT_PUBLIC_APP_URL}/login?finishSignIn=true`,
    handleCodeInApp: true,
  };
  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('emailForSignIn', email);
  }
}

export async function signOut() {
  return firebaseSignOut(auth);
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
