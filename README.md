# URL Shortener

## Overview

URL Shortener is a simple React application that allows users to shorten long URLs using the Bitly API. Users can enter a URL, click "Shorten", and receive a shortened link that can be copied to the clipboard. This application provides a user-friendly interface and leverages the Bitly API for URL shortening.

## Features

- Enter a long URL to shorten it.
- Copy the shortened URL to the clipboard with a single click.
- Display error messages for invalid URLs or failed requests.

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making HTTP requests to the Bitly API.
- **Bitly API**: For shortening URLs.
- **CSS**: For styling the application.

## Installation

To get started with the URL Shortener application, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ber-zakii/url-shortener.git

2. **Navigate to the Project Directory**

    ```bash
    cd url-shortener
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```
4. **Add Your Bitly API Key**
Replace the placeholder API key in the URLShortener component with your own Bitly API key.

    ```bash
    'Authorization': `Bearer YOUR_BITLY_API_KEY`,
    ```

5. **Start the Development Server**

    ```bash
    npm start
    ```

. Your application should now be running on http://localhost:5173.

## Usage

. Enter a long URL in the input field.
. Click the "Shorten" button.
. Copy the shortened URL by clicking the "Copy" button.

## Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request if you have suggestions for improvements or bug fixes