import type { Metadata } from 'next';
import React from "react";
import "../styles/style.scss";
import Layout from "@/component/layout";
import "bootstrap/scss/bootstrap.scss";

export const metadata: Metadata = {
  title: '서브웨이 레시피',
  description: '서브웨이 베스트 레시피 모음집',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
