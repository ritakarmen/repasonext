import Link from 'next/link'
import MainLayout from '../../components/layout/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
        <h1 className="title">
          Welcome to <Link href="https://nextjs.org">Contact!</Link>
        </h1>
    </MainLayout>
  )
}
