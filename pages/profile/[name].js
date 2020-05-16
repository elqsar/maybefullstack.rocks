import React from 'react'
import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <div>
      Hello, {name}
    </div>
  )
}

export default Profile
