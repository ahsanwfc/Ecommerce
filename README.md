E-Commerce Website:
This is a dynamic e-commerce website built with React. The website features reusable components, dynamic data management, and a fully functional contact form integrated with EmailJS. Environment variables are securely managed using a .env file.

1. Features

- Dynamic Data Handling: All product and site data are managed in a central assets.js file, making it easy to update and maintain.
- Contact Us Integration: The EmailJS library is integrated to handle customer inquiries through the contact form.
- Environment Variables: Sensitive information like service IDs and keys are stored securely in a .env file.
- Responsive Design: Optimized for mobile and desktop users with a user-friendly interface.

2. Technologies Used

- React: For building the user interface.
- EmailJS: For sending emails directly from the front-end.
- JavaScript: Core programming language for dynamic functionality.
- CSS/Tailwind.css: Styling the application.
- Vite: As the development environment and build tool.

3. Installation and Setup

- git clone https://github.com/ahsanwfc/Ecommerce.git
- cd your-repo-name

4. Install Dependencies

- Make sure you have Node.js installed
- npm install

5. Create a .env File

- VITE_SERVICE_ID=your_service_id
- VITE_TEMPLATE_ID=your_template_id
- VITE_PUBLIC_KEY=your_user_id

6. Run the Development Server

- npm run dev
