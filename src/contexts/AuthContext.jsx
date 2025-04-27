import React, { createContext, useContext, useState, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

// Create the authentication context
const AuthContext = createContext();

// Hook to use the auth context
export function useAuth() {
	return useContext(AuthContext);
}

// Provider component that wraps the app and makes auth object available to any child component
export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Register a new user
	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	// Sign in an existing user
	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	// Sign out the current user
	function logout() {
		return signOut(auth);
	}

	// Update user profile
	function updateUserProfile(user, data) {
		return updateProfile(user, data);
	}

	// Set up a listener for auth state changes
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		// Clean up the listener on unmount
		return unsubscribe;
	}, []);

	// Value object to be provided to consumers of the context
	const value = {
		currentUser,
		signup,
		login,
		logout,
		updateUserProfile,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
