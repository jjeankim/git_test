import "../app/styles/global.scss";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr" className={`${pretendard.variable}`}>
      <body className={`${pretendard.variable}`}>{children}</body>
    </html>
  );
}
