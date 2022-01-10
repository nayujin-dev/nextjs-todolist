import Link from 'next/link'

export default function Home() {
    return (
      <>
        <h1>My todolist</h1>
        <h2>
          <Link href="/">
            <a>Back to main page</a>
          </Link>
        </h2>
      </> 
    )
    
  }

  //default로 내보내야함!