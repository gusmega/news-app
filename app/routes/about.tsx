import type { Route } from './+types/about'

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About - New React Router App' },
    { name: 'description', content: 'About React Router!' },
  ]
}

export default function About() {
  return <p className='text-center'>About</p>
}
