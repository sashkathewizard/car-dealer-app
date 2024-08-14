# Car Dealer App

## Overview

The Car Dealer App is a web application that allows users to filter and view vehicle models based on make and year. The app provides a user-friendly interface for selecting vehicle types and years, and then displays relevant vehicle models.

## Features

- **Vehicle Filtering:** Allows users to filter vehicle models based on make and year.
- **Dynamic Data Fetching:** Retrieves vehicle data from an external API.
- **Responsive Design:** Provides a user-friendly interface that adapts to different screen sizes.

## Setup and Configuration

### 1. Environment Variables

Create a `.env.local` file in the root directory to store your environment variables. For example:

```
NEXT_PUBLIC_API_URL=https://vpic.nhtsa.dot.gov/api/vehicles

```

### 2. Setup ESLint and Prettier

To maintain code quality and consistency, ESLint and Prettier are used in this project.

- **ESLint Configuration:** The ESLint configuration is in `.eslintrc.json` and is set up to use Next.js and Prettier.
- **Prettier Configuration:** The Prettier configuration is in `.prettierrc` and ensures consistent code formatting.

### 3. Install Dependencies

Install the required dependencies using npm:

```bash
npm install

```

### 4. Running the Application

To run the development server:

```bash
npm run dev

```

Visit `http://localhost:3000` in your browser to access the application.

### 5. Building the Application

To build the application for production:

```bash
npm run build

```

To start the production server:

```bash
npm start

```

## Contributing

If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
