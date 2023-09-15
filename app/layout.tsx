import type { Metadata } from 'next';
import React from "react";
import HeaderLayout from "../component/headerLayout";
import FooterLayout from "../component/footerLayout";
import "../styles/style.scss";

export const metadata: Metadata = {
  title: '서브웨이 레시피',
  description: '서브웨이 베스트 레시피 모음집',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <HeaderLayout/>
        {children}
        <FooterLayout/>
      </body>
    </html>
  )
}
