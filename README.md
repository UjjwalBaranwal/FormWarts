# FormWarts 🚀

A powerful and intuitive form builder application that allows users to easily create and manage forms with a drag-and-drop interface. This project aims to simplify the form creation process, making it accessible to both technical and non-technical users. With its rich set of features and customizable form elements, you can build complex forms in minutes.

## ✨ Key Features

- **Drag-and-Drop Interface:** Easily add and arrange form elements with a simple drag-and-drop interface.
- **Real-time Preview:** See how your form looks as you build it with a live preview.
- **Customizable Form Elements:** A wide range of form elements, including text fields, checkboxes, select dropdowns, and more, each with customizable properties.
- **Form Validation:** Ensure data integrity with built-in form validation.
- **Save, Preview, and Publish:** Save your progress, preview the form, and publish it when ready.
- **Shareable Forms:** Generate a shareable URL for easy distribution.
- **Easy Integration:** Seamlessly integrate the generated forms into your existing applications.
- **Authentication and Authorization:** Secure your forms with Clerk authentication middleware.

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - Next.js
    - @dnd-kit/core (Drag and Drop)
    - react-hook-form
    - @hookform/resolvers/zod
    - react-icons
    - react-confetti
    - sonner (Toast Notifications)
    - Shadcn UI 
- **Backend:**
    - Next.js API routes
- **Authentication:**
    - Clerk
- **Database:**
    - Prisma 
- **Validation:**
    - Zod
- **Other:**
    - TypeScript


## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (version >= 18)
- npm or yarn
- Clerk account and API keys (if authentication is enabled)
- Prisma CLI (if a database is used)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

3.  Set up environment variables:

    Create a `.env.local` file in the root directory and add the necessary environment variables. Example:

    ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
    CLERK_SECRET_KEY=<your_clerk_secret_key>
    DATABASE_URL="file:./dev.db" # Example for SQLite
    ```

4.  Run Prisma migrations (if applicable):

    ```bash
    npx prisma migrate dev
    npx prisma generate
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## 💻 Usage

1.  **Design Forms:** Use the drag-and-drop interface to add and arrange form elements.
2.  **Configure Elements:** Customize the properties of each form element in the properties panel.
3.  **Preview Forms:** Preview the form to see how it will look to users.
4.  **Save Forms:** Save your progress to continue editing later.
5.  **Publish Forms:** Publish the form to generate a shareable URL.
6.  **Share Forms:** Share the URL with users to collect responses.

## 📂 Project Structure

```
form-builder-app/
├── .next/                  # Next.js build output
├── components/             # React components
│   ├── context/            # Context providers
│   │   └── designerContext.tsx
│   ├── fields/             # Form element implementations
│   │   ├── CheckboxField.tsx
│   │   ├── SelectField.tsx
│   │   ├── TextField.tsx
│   │   └── TextAreaField.tsx
│   ├── hooks/              # Custom hooks
│   │   └── useDesigner.tsx
│   ├── Designer.tsx        # Main designer component
│   ├── DesignerSidebar.tsx # Sidebar with form elements
│   ├── FormBuilder.tsx     # Main form builder component
│   ├── FormElements.tsx    # Form element registry
│   ├── PreviewDialogBtn.tsx# Preview button component
│   ├── PublishedFormBtn.tsx# Publish button component
│   └── SaveFormBtn.tsx      # Save button component
├── lib/                    # Utility functions and types
│   ├── generated/          # Prisma generated code
│   │   └── prisma/
│   ├── idGenerator.ts    # ID generation logic
│   └── utils.ts          # Utility functions
├── middleware.ts           # Clerk middleware
├── next.config.js          # Next.js configuration
├── pages/                  # Next.js pages
│   └── api/              # API routes
├── prisma/                 # Prisma schema and migrations
├── public/                 # Static assets
├── styles/                 # CSS styles
└── tsconfig.json           # TypeScript configuration
```

## 📸 Screenshots

<img width="1894" height="978" alt="image" src="https://github.com/user-attachments/assets/9abf4fc5-b272-4d6d-8d35-c4af8f572256" />
<img width="1916" height="980" alt="image" src="https://github.com/user-attachments/assets/b7ce65db-11e0-4b38-bd97-4b5d300914ae" />
<img width="1919" height="859" alt="image" src="https://github.com/user-attachments/assets/1cefc247-858f-4c12-b353-5cdbe76b54cb" />
<img width="1918" height="988" alt="image" src="https://github.com/user-attachments/assets/752e7bf3-c329-4ad6-bf7c-fb8f5a41b86a" />


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or suggestions, feel free to contact us at [ujjwalbaranwal221715@gmail.com]

## 💖 Thanks Message

Thank you for using the FormWart! I hope it simplifies your form creation process and helps you build amazing forms.


