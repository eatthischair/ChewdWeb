'use client';
import { APIProvider } from '@vis.gl/react-google-maps';
import { ThemeProvider } from 'components/ui/theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  if (!apiKey) throw new Error('Missing NEXT_PUBLIC_API_KEY');

  return (
    <APIProvider apiKey={apiKey}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </APIProvider>
  );
}
