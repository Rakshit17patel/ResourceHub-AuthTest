// src/App.js
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/sign-in"
          element={
            <SignIn
              routing="path"
              path="/sign-in"
              afterSignInUrl="/"
              signUpUrl="/sign-up"
            />
          }
        />
        <Route
          path="/sign-up"
          element={
            <SignUp
              routing="path"
              path="/sign-up"
              afterSignUpUrl="/"
              signInUrl="/sign-in"
            />
          }
        />

        {/* Protected Route */}
        <Route
          path="/"
          element={
            <SignedIn>
              <Home />
            </SignedIn>
          }
        />

        {/* Redirect unknown routes to sign-in */}
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </div>
  );
};

const NavBar = () => (
  <nav style={styles.nav}>
    <h2>Clerk Auth App</h2>
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link to="/sign-in" style={styles.link}>
          Sign In
        </Link>
        <Link to="/sign-up" style={styles.link}>
          Sign Up
        </Link>
      </SignedOut>
    </div>
  </nav>
);

const Home = () => (
  <div style={styles.container}>
    <h1>Welcome!</h1>
    <p>You are signed in.</p>
  </div>
);

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#282c34",
    color: "white",
  },
  link: {
    marginLeft: "1rem",
    color: "white",
    textDecoration: "none",
  },
  container: {
    textAlign: "center",
    marginTop: "2rem",
  },
};

export default App;
