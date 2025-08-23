import React, { useState } from "react";

const longText: string = `
React is a JavaScript library for building user interfaces.
It lets you create reusable UI components.
React uses a virtual DOM to optimize rendering.
JSX is a syntax extension used with React.
Components can be functional or class-based.
React state allows dynamic data handling.
Props are used to pass data between components.
Hooks let you use state and other features in functional components.
The useEffect hook is used for side effects.
React apps can be built using Create React App.
React Router is used for client-side routing.
Redux is often used for global state management.
Context API is another way to share state.
React Developer Tools is a useful browser extension.
You can lazy load components in React.
Error boundaries help catch rendering errors.
React StrictMode helps with identifying potential issues.
React supports portals for rendering outside root DOM node.
Testing can be done using tools like Jest and React Testing Library.
React is maintained by Meta and the open-source community.
`;


const ClipboardComponent: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(longText.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#121212",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#1e1e1e",
          borderRadius: "8px",
          padding: "20px",
          width: "100%",
          maxWidth: "700px",
          color: "#e0e0e0",
          boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        <h2 style={{ marginBottom: "15px", fontSize: "20px" }}>
          📋 React Notes (20 Lines)
        </h2>

        <pre
          style={{
            background: "#2a2a2a",
            padding: "15px",
            borderRadius: "5px",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            fontSize: "14px",
            lineHeight: "1.5",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {longText}
        </pre>

        <div style={{ marginTop: "15px" }}>
          <button
            onClick={handleCopy}
            style={{
              padding: "8px 16px",
              background: "#3a86ff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Copy to Clipboard
          </button>
          {copied && (
            <span style={{ marginLeft: "10px", color: "#4caf50" }}>
              Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClipboardComponent;
