import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'AZVD Technology Services',
  description: 'AZVD Technology Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
