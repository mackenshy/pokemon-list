import { FC, ReactNode } from "react"
import Head from "next/head"
import Navbar from '../ui/Navbar';

type Props = {
  children: ReactNode,
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Jaime Gonzalez" />
        <meta name="description" content={`Información de pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es una página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>

      <Navbar />
      
      <main style={{
        padding: '0 20px'
      }}>
        { children }
      </main>
    </>
  )
}
