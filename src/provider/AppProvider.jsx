import React,{Suspense}from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage';
import LoadingPage from '../components/LoadingPage';
import SearchProvider from '../contexts/SearchProvider';

const AppProvider = ({ children }) => {
    return (
        <Suspense fallback={<LoadingPage />}>
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <SearchProvider>
            <BrowserRouter>{children}</BrowserRouter>
            </SearchProvider>
        </ErrorBoundary>
        </Suspense>
    )
}

export default AppProvider