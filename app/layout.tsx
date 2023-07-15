export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-surface-100">
      <head>
        <meta name="theme-color" content="#121212" />
      </head>
      <body>{children}</body>
    </html>
  );
}
