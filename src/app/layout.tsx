import './page.css'; // assuming the CSS file is in the same directory as your component

export const metadata = {
  title: 'Token Selector',
  description: 'Select a token in the list',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
