import React, { Component } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: {
    message?: string;
  };
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: {
        message: error.message,
      },
    };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div>
          <h3>Erro ao renderizar componente</h3>
          <p> {this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
