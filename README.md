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
    ├── app/      # Next.js app directory
        ├── about/
            └── page.tsx
        ├── api/
            ├── saveBlog/
                └── route.ts
            └── scrape/
                └── route.ts
        ├── savedBlogs/
            └── page.tsx
        ├── summary/
            ├── Loading.tsx
            └── page.tsx
        ├── favicon.ico
        ├── globals.css
        ├── layout.tsx
        └── page.tsx
    ├── components/     # Reusable UI components
        ├── general/
            ├── ParticleWrapper.tsx
            ├── summarySection.tsx
            ├── TextArea.tsx
            └── UserStatus.tsx
        ├── magicui/    # Magic UI Library Components
            ├── blur-fade.tsx
            ├── box-reveal.tsx
            ├── grid-pattern.tsx
            ├── interactive-grid-pattern.tsx
            ├── interactive-hover-button.tsx
            ├── meteors.tsx
            ├── particles.tsx
            ├── rainbow-button.tsx
            └── text-animate.tsx
        ├── ui/
            ├── avatar.tsx
            ├── badge.tsx
            ├── button.tsx
            ├── card.tsx
            ├── infinite-slider.tsx
            ├── input.tsx
            ├── label.tsx
            ├── popover.tsx
            ├── progressive-blur.tsx
            └── textarea.tsx
        ├── BlogCard.tsx
        ├── features-4.tsx
        ├── footer.tsx
        ├── header.tsx
        ├── hero-section.tsx
        ├── ResumeCard.tsx
        └── testimonials.tsx
    ├── lib/      # Utility functions and database files
        ├── generated/
            └── prisma/
                ├── runtime/
                    ├── edge-esm.js
                    ├── edge.js
                    ├── index-browser.d.ts
                    ├── index-browser.js
                    ├── library.d.ts
                    ├── library.js
                    ├── react-native.js
                    ├── wasm-compiler-edge.js
                    └── wasm-engine-edge.js
                ├── client.d.ts
                ├── client.js
                ├── default.d.ts
                ├── default.js
                ├── edge.d.ts
                ├── edge.js
                ├── index-browser.js
                ├── index.d.ts
                ├── index.js
                ├── package.json
                ├── query_engine-windows.dll.node
                ├── query_engine-windows.dll.node.tmp13372
                ├── schema.prisma
                ├── wasm.d.ts
                └── wasm.js
        ├── bigram_words.txt
        ├── CheckUser.ts
        ├── data.ts
        ├── db.ts
        ├── scrape.ts
        ├── trigram_words.txt
        ├── UrduWords.ts
        ├── utils.ts
        └── words.txt
    ├── prisma/
        ├── migrations/
            ├── 20250713185434_user_summary_create/
                └── migration.sql
            ├── 20250714150741_remove_blogtext_unique/
                └── migration.sql
            └── migration_lock.toml
        └── schema.prisma
    ├── public/      # Static Assets
        ├── images/
            ├── arham-avatar.jpeg
            ├── fast-university.png
            ├── hero-unsplash.jpg
            └── organic-objects.png
        ├── file.svg
        ├── globe.svg
        ├── next.svg
        └── window.svg
    ├── utils/       # Some Utility functions for Summary Logic and Translation
        ├── markdown.ts
        ├── markdownToHtml.ts
        ├── SummarizeLogic.tsx
        ├── textTranslate.ts
        └── validateEmail.ts
    ├── .gitignore
    ├── avatar.tsx
    ├── card.tsx
    ├── components.json
    ├── eslint.config.mjs
    ├── middleware.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── pnpm-workspace.yaml
    ├── postcss.config.mjs
    ├── README.md
    └── tsconfig.json
cz.json
README.md
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
