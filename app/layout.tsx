import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import React from "react";
import HeaderLayout from "../component/headerLayout";
import FooterLayout from "../component/footerLayout";
import "../styles/style.scss";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '서브웨이 레시피',
  description: '서브웨이 베스트 레시피 모음집',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <HeaderLayout/>
        {children}
        <FooterLayout/>
      </body>
    </html>
  )
}
