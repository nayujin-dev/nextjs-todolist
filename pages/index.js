import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <div className="todo">
          <form className="todo_form">
            <div className="todo_area">
              <input className="todo_input" placeholder="오늘의 할일은?" value={input} onChange={e=> setInput(e.target.value)} />
            </div>
            <div className="todo_footer">
              <button className="todo_button">작성하기</button>
              <button type="button" className="todo_button" onClick={()=>setInput("")}>삭제</button>
            </div>
          </form>
        </div> */}
        <p>My todolist</p>
        <Link href="/Home">
          <a>check your todolist</a>
        </Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}

import React from "react";
// import ReactDOM from "react-dom";
import App from "../components/App";
// import "./styles.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   //document.getElementById("root")
// );