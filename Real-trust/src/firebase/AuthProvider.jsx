import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState, useContext } from "react";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL4smNQqE5hunXEr8Ar3oaOAb_R46QpE8",
  authDomain: "real-trust-f9b61.firebaseapp.com",
  projectId: "real-trust-f9b61",
  storageBucket: "real-trust-f9b61.firebasestorage.app",
  messagingSenderId: "127950695292",
  appId: "1:127950695292:web:d1b06790e58b6b585f52f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create AuthContext
const AuthContext = createContext(null);

// Define the admin credentials
const ADMIN_EMAIL = "vopag49645@inikale.com";
const ADMIN_PASSWORD = "12345678@";

// AuthProvider to provide authentication context across the app
const AuthProvider = ({ children }) => {
  const authValue = useProvideAuth();
  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

// Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);

// Custom hook for managing authentication
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle admin login
  const signIn = async (email, password) => {
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      setError("Unauthorized access. Only admin can log in.");
      return;
    }

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      setError(null);
      return user;
    } catch (error) {
      setError("Invalid email or password.");
      console.error(error.message);
    }
  };

  // Function to handle logout
  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === ADMIN_EMAIL) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return { signIn, signOut: handleSignOut, user, error };
}

export default AuthProvider;
