import { notFound } from 'next/navigation'

export const revalidate = 30

function HelloWorld() {
  return <h1>Hello World</h1>
}

export default function Home() {
  const currentSeconds = new Date().getSeconds()
  const isForceError = currentSeconds > 30

  const Component = <HelloWorld />

  if (isForceError) {
    notFound()
  }

  return Component
}
