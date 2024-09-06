import React, { useState } from 'react';
import axios from 'axios';
import { copyToClipboard } from 'clipboard'; // Helper for copying the URL

const URLShortener = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [error, setError] = useState('');

    const shortenUrl = async () => {
        if (!inputUrl) {
            setError('Please enter a valid URL');
            return;
        }
        
        try {
            // Make request to the Bitly API
            const response = await axios.post(
                'https://api-ssl.bitly.com/v4/shorten',
                {
                    long_url: inputUrl
                },
                {
                    headers: {
                        'Authorization': `Bearer d969f87936292bcbfa7f238caa3164a21dc562ca`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            setShortenedUrl(response.data.link);
            setError('');
        } catch (err) {
            setError('Error shortening the URL. Please try again.');
        }
    };

    const copyToClipboardHandler = () => {
        copyToClipboard(shortenedUrl);
        alert('Shortened URL copied to clipboard!');
    };

    return (
        <div className="container">
            <h1>URL Shortener</h1>
            <input
                type="text"
                placeholder="Enter your URL"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="url-input"
            />
            <button onClick={shortenUrl} className="shorten-btn">Shorten</button>

            {shortenedUrl && (
                <div className="result">
                    <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
                    <button onClick={copyToClipboardHandler} className="copy-btn">Copy</button>
                </div>
            )}

            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default URLShortener;
