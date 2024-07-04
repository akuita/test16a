import type { NextPageContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AttendanceSystemPage from '@components/pages/AttendanceSystem'

export async function getStaticProps(context: NextPageContext) {
  const { locale = 'en' } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['all'])),
      seo: {
        title: 'Attendance System',
        description: 'Manage your attendance records efficiently.',
      },
    },
  }
}

export default AttendanceSystemPage