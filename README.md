# Blog Focus ✒️

An AI-powered blog summarizer that helps you quickly digest and understand content from your favorite blogs with intelligent summaries and multilingual support.

## 🌟 Features

- **AI-Powered Summarization**: Automatically generate concise summaries of blog posts using advanced AI
- **Urdu Translation Support**: Static phrase mapping for Urdu translation of select blogs
- **User Authentication**: Secure login and registration system powered by Clerk
- **Personal Blog Library**: Save and organize your summarized blogs in your personal collection
- **Beautiful Notifications**: Elegant toast notifications for enhanced user experience
- **Responsive Design**: Modern, mobile-friendly interface built with Shadcn components

## Live App Usage

Visit the live application: [arham-blogfocus.vercel.app](https://arham-blogfocus.vercel.app)

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript & JavaScript
- **UI Components**: Shadcn/ui
- **Authentication**: Clerk
- **Database**: Neon (PostgreSQL)
- **Package Manager**: PNPM
- **Deployment**: Vercel

## 🏗️ Architecture

```
assignment-2/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utility functions and database
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
└── package.json
```

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/arham2003/Nexium_Arham_Assign2
   cd blog-focus
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Neon Database
   DATABASE_URL=your_neon_database_url

   # AI Service (if applicable)
   AI_API_KEY=your_ai_service_key
   ```

4. **Set up the database**

   ```bash
   pnpm db:push
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript compiler

## 📱 Usage

1. **Sign Up/Login**: Create an account or log in using Clerk authentication
2. **Add Blog URL**: Paste the URL of the blog post you want to summarize
3. **Generate Summary**: Click the summarize button to get an AI-generated summary
4. **Save to Library**: Save interesting summaries to your personal collection
5. **Urdu Translation**: For supported blogs, view content with Urdu phrase mapping
6. **Manage Collection**: View, organize, and delete saved blog summaries

## 🌐 Database Schema

The application uses Neon PostgreSQL with the following key tables:

- **users**: User profiles and authentication data
- **saved_blogs**: User's personal blog collection

## 🔐 Authentication

Authentication is handled by Clerk, providing:

- Email/password login
- Social login options
- Secure session management
- User profile management

## 🎨 UI Components

Built with Shadcn/ui components for a modern, accessible interface:

- Form components for user input
- Card layouts for blog summaries
- Navigation and layout components
- Toast notifications for user feedback

## 🚀 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

To deploy your own instance:

1. Fork this repository
2. Connect your Vercel account
3. Set up environment variables in Vercel dashboard
4. Deploy automatically on push to main

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Clerk for authentication services
- Neon for database hosting
- Vercel for deployment platform
- Shadcn for beautiful UI components

## Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

Made with ❤️ by [Arham]
