import { Link, NavLink } from 'react-router'

import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from './navigation-menu'

export function Navbar() {
  return (
    <nav className='bg-background/95 text-foreground supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 h-14 outline-1 drop-shadow-md backdrop-blur outline-dashed'>
      <div className='main-container flex h-full items-center'>
        <NavLink to='/' className='mr-2 text-xl font-extrabold'>
          News<span className='text-purple-700'>Aggregator</span>
        </NavLink>
        <div className='flex w-full flex-1 justify-end'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link to='/'>Home</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to='about'>About</Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}
