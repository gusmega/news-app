import { Outlet } from 'react-router'

import { Navbar } from '~/components/ui/navbar'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className='main-container my-3'>
        <Outlet />
      </main>
    </>
  )
}
