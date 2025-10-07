# Lowase Web Platform

Nigeria's premier Venture Capital education and consulting marketplace platform.

## Features

- **Animated Landing Page**: Dynamic text cycling through different user types
- **Leather Brown Theme**: Professional dark theme with warm accents
- **Multi-User Focused**: Serves VC consultants, startups, trainers, and investors
- **Interactive Components**: Quiz, consultant marketplace, pitch optimizer
- **Mobile Responsive**: Optimized for all devices
- **Next.js 15**: Latest React framework with App Router

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build
```bash
npm run build
```

### Deploy to AWS Amplify
1. Connect your repository to AWS Amplify
2. The `amplify.yml` file will handle the build configuration
3. Set environment variables in Amplify console

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your-paystack-key
NEXT_PUBLIC_AGORA_APP_ID=your-agora-app-id
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable components
│   ├── landing/        # Landing page sections
│   ├── layout/         # Header and footer
│   └── ui/             # UI components
├── lib/                # Utilities
├── hooks/              # Custom hooks
├── types/              # TypeScript types
└── styles/             # Global styles
```

## Deployment

This project is configured for AWS Amplify deployment with:
- ✅ `amplify.yml` build configuration
- ✅ `_redirects` file for routing
- ✅ Environment variables support
- ✅ Static export capability
- ✅ Optimized build process

## License

Private - All rights reserved