'use client';
import { APIProvider } from '@vis.gl/react-google-maps';
import { ThemeProvider } from 'components/ui/theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY}>
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
