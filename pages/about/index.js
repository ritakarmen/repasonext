import Link from 'next/link'
import MainLayout from '../../components/layout/MainLayout'

export default function About() {
  return (
    <MainLayout>
       <h1 className="title">
          Welcome to <Link href="https://nextjs.org">About!</Link>
        </h1>
    </MainLayout>
  )
}
