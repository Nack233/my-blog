'use client';

import React, { useState, useEffect } from 'react';

export default function DbTest() {
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking connection...');

  useEffect(() => {
    async function checkDbConnection() {
      try {
        const response = await fetch('/api/db-health');
        const data = await response.json();
        setConnectionStatus(data.status);
      } catch (error) {
        setConnectionStatus('Error checking database connection');
        console.error('Error:', error);
      }
    }

    checkDbConnection();
  }, []);

  return (
    <div>
      <h1>Database Connection Test</h1>
      <p>Status: {connectionStatus}</p>
    </div>
  );
}