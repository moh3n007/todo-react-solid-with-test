# Todo App (SOLID with Tests)

This is a small todo app with SOLID principle and tests using `React` + `Vite` + `Typescript`.

## Install Dependencies

Run the following command to install all the required dependencies:

```bash
npm install
```

## Running the Application

Run the following command to start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```bash
http://localhost:5173
```

You should see the project in your browser.

## Running Tests

To run all tests using Vitest:

```bash
npm run test
```

This will show the results of the tests.

The project contains three test files:

- `TodoApp.test.tsx` (for the main app)
- `TodoInput.test.tsx` (for the input component)
- `TodoList.test.tsx` (for the list component)

## Project Notes

- The project is built following the SOLID principles.
- Focus is given to tests and file organization.
- Minimal attention was given to the UI, and styling is done using `tailwindCSS`.
- `react-hook-form` and `yup` are used for form handling and validation.
- Testing is implemented using `Vitest` and `React Testing Library`.

## Preferences

- [React hook form](https://react-hook-form.com/):
  - Performance: Works by leveraging uncontrolled components, reducing the overhead of state management.
  - Ease of Use: Offers a clean API for handling form validation, submissions, and resetting.
  - Integration: Easily integrates with validation libraries like yup for schema-based validation.
  - Flexibility: Supports a wide range of input types and custom components.
- [Yup](https://github.com/jquense/yup):
  - Declarative Validation: Allows you to define validation schemas in a clear, readable manner.
  - Integration: Works seamlessly with react-hook-form using its resolver, simplifying form validation logic.
  - Comprehensive Features: Supports nested object validation, custom rules, and asynchronous validation.
  - Error Handling: Centralized error management ensures consistent validation behavior.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/):
  - User-Centric: Tests components as users interact with them, ensuring real-world reliability.
  - Simplicity: Provides a clean API for querying DOM elements without focusing on implementation details.
  - Best Practices: Aligns with React's principles of testing behavior over implementation, making your tests resilient to refactors.
- [Vite](https://vite.dev/):
  - Speed: Uses native ES modules and a blazing-fast development server to eliminate slow rebuild times.
  - Modern Features: Supports JavaScript and CSS imports natively, making it future-proof.
