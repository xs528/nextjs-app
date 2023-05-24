import './globals.css'

export const metadata = {
  title: 'All By Nextjs',
  description: 'all by nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" data-theme="dark">
      <body>{children}</body>
    </html>
  )
}
