import React from 'react'
import Link from 'next/link'

const Home = () => (
  <main className="container h-full">
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold tracking-wide uppercase">
        Maybefullstack
      </h2>
      <div>
        <h3>Profiles</h3>
        <Link href="/profile/vera">
          <a>Vera's profile</a>
        </Link>
        <Link href="/profile/boris">
          <a>Boris' profile</a>
        </Link>
      </div>
    </div>
  </main>
)

export default Home
