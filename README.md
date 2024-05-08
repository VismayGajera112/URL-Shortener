# URL Shortener

This is a simple URL shortener project written in Go. It allows users to shorten long URLs into shorter ones, making them easier to share and manage.

## Features

- **URL Shortening:** Convert long URLs into short, easy-to-share links.
- **Custom Short URLs:** Users can customize the shortened URLs to make them more memorable.
- **Redirects:** When users visit a shortened URL, they are redirected to the original long URL.
- **Statistics:** Track the number of times each shortened URL has been accessed.

## Installation

To run this project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/VismayGajera112/URL-Shortener.git
   ```

2. Navigate to the project directory:

   ```bash
   cd URL-Shortener
   ```

3. Install dependencies:

   ```bash
   go mod download
   ```

4. Build and run the project:

   ```bash
   go build
   ./URL-Shortener
   ```

## Usage

Once the project is running, you can access the URL shortener service through the provided API endpoints. Here are the main endpoints:

- **Shorten URL:** `/shorten` - Endpoint to shorten a long URL.
- **Redirect:** `/<short-code>` - Shortened URLs are accessed using this pattern, where `<short-code>` is the unique identifier for the shortened URL.

## Configuration

The project can be configured via environment variables or a configuration file. Ensure to set the following configuration options:

- `PORT`: Port on which the server will listen.
- `DATABASE_URL`: URL of the database to store URL mappings.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.
