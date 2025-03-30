import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`border rounded-lg shadow-sm p-4 bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`pb-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function CardDescription({ children, className = "text-gray-500 text-sm" }) {
  return <p className={className}>{children}</p>;
}
