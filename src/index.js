import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
// import HomePage from "./pages/homePage";
// import MoviePage from "./pages/movieDetailsPage";
// import ActorPage from "./pages/actorDetailsPage";
// import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
// import MovieReviewPage from "./pages/movieReviewPage";
// import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
// import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import MoviesContextProvider from "./contexts/moviesContext";
// import AddMovieReviewPage from "./pages/addMovieReviewPage";
// import TrendingMoviesPage from "./pages/trendingMoviesPage";
// import SignUpWithEmail from "./components/firebaseAuth/signUpWithEmail";
// import Login from "./components/firebaseAuth/login";
// import UserProfile from "./components/firebaseAuth/userProfile";
// import PasswordReset from "./components/firebaseAuth/passwordReset";
import { AuthProvider } from "./contexts/authContext";
import SearchResultPage from "./pages/searchResultPage";

const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const ActorPage = lazy(() => import("./pages/actorDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"));
const SiteHeader = lazy(() => import("./components/siteHeader"));
const MoviesContextProvider = lazy(() => import("./contexts/moviesContext"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const TrendingMoviesPage = lazy(() => import("./pages/trendingMoviesPage"));
const SignUpWithEmail = lazy(() => import("./components/firebaseAuth/signUpWithEmail"));
const Login = lazy(() => import("./components/firebaseAuth/login"));
const UserProfile = lazy(() => import("./components/firebaseAuth/userProfile"));
const PasswordReset = lazy(() => import("./components/firebaseAuth/passwordReset"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading page</h1>}>
          <MoviesContextProvider>
            <AuthProvider>
              <SiteHeader />
              <Routes>
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                <Route
                  path="/movies/favorites"
                  element={<FavoriteMoviesPage />}
                />
                <Route
                  path="/movies/upcoming"
                  element={<UpcomingMoviesPage />}
                />
                <Route
                  path="/movies/trending/:timeWindow"
                  element={<TrendingMoviesPage />}
                />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/actors/:id" element={<ActorPage />} />
                <Route path="/signup" element={<SignUpWithEmail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<UserProfile />} />
                <Route path="/password/reset" element={<PasswordReset />} />
                <Route path="/search/:keyword" element={<SearchResultPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </AuthProvider>
          </MoviesContextProvider>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
