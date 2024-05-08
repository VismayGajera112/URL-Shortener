"use client"

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [inputUrl, setInputUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleChange = (event) => {
    setInputUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/create-short-url', { long_url: inputUrl, user_id: "e0dba740-fc4b-4977-872c-d360239e6b1a" });
      setShortenedUrl(response.data['short_url']);
    } catch (error) {
      console.error('Error creating short URL:', error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    alert('URL copied to clipboard!');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black', flexDirection: 'column' }}>
      <h1 style={{color: 'white', margin: '4rem'}}>Welcome to the URL Shortener ❤️</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', width: '60%' }}>
        <input
          type="text"
          placeholder="Enter URL"
          value={inputUrl}
          onChange={handleChange}
          style={{ padding: '20px', fontSize: '20px', borderRadius: '5px', border: 'none', width: '100%', boxSizing: 'border-box' }}
        />
        <button type="submit" style={{ padding: '15px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: 'white', color: 'black', cursor: 'pointer', marginTop: '20px' }}>Shorten</button>
      </form>
      <div style={{ marginTop: '20px', color: 'white', textAlign: 'center' }}>
        {shortenedUrl && (
          <div>
            <p style={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '2rem' }}>Shortened URL:</p>
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', marginRight: '16px', fontSize: '1rem' }}>{shortenedUrl}</a>
            <button onClick={handleCopy} style={{ padding: '10px 15px', fontSize: '14px', borderRadius: '5px', border: 'none', backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Copy</button>
          </div>
        )}
      </div>
    </div>
  );
}
