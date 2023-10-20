import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Halo Worl</h1>
      <Link href='/auth'>Auth</Link>
      <></>
      <Link href='/standar-utama/user-management'>User Management</Link>

    </main>
  )
}
