import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught error in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-6 text-center text-red-500">Something went wrong 😬</div>;
    }

    return this.props.children;
  }
}
