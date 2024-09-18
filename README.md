# AI Email Writer Frontend

This is the frontend application for the **AI Email Writer** project, a platform that enables users to generate various email styles (e.g., formal, casual, apologetic) and handle donations through Stripe integration. The project is built using React, integrating third-party services like Stripe for payment processing.

## Features

- **AI-Generated Emails**: Create and generate emails with various tones using the AI email writer.
- **Donation Banner**: Allows users to donate via Stripe with customizable donation amounts.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Form Validation**: Validates input fields before submission.
- **Error Handling**: Provides feedback on payment errors or form submission issues.
- **SweetAlert Integration**: Displays success messages for form submissions and payment completions.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Stripe**: For handling secure payment processing.
- **React Stripe.js**: To integrate Stripe's payment elements into the frontend.
- **Bootstrap**: For faster styling.
- **React Bootstrap**: To integrate bootstrap into react app.
- **CSS**: Custom styles for the frontend components.
- **Web3Forms**: For handling form submissions (such as contact forms).
- **SweetAlert**: For alert dialogs on form submission success.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed.
- Access to a Stripe account to set up payment processing and for API keys.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Wlyates00/ai-email-scribe-Frontend
   cd ai-email-writer-Frontend
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

## Environment Variable

Create a .env file at the root of your project with the following environment variables:

```env
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## Running the App

To run the app use:

```bash
npm start
```

This will start the app on `http://localhost:3000`
