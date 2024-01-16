import '@/styles/app.scss';

/// <reference path="./types/global.d.ts" />
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import { poppins, rubik } from '@/constant/font';
import { JSXElementConstructor, ReactElement } from 'react';
import { notFound } from 'next/navigation';
export const metadata: Metadata = {
  title: 'Socialize',
  description: 'Socialize make by Venn.',
};
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactElement<any, any>;
  params: any;
}) {
  let messages;

  try {
    // messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
