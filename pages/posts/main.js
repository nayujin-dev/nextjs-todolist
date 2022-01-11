import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function main() {
    return (
      <Layout>
      <Head>
        <title>My todolist</title>
      </Head>
        <h1>My todolist</h1>
        <h2>
          <Link href="/">
            <a>Back to main page</a>
          </Link>
        </h2>
      </Layout> 
    )
    
  }

  //default로 내보내야함!