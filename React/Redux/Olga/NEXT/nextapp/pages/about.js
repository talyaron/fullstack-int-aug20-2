import Router from 'next/router'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

export default function About(){
    const lincClickHandler =()=> {
        Router.push('/')

    }
    return (
        <MainLayout>
        <Head>
            <title>Hello Next</title>
        </Head>
            <h1>About Page</h1>
            <button onClick={lincClickHandler}>Go back to home</button>
            <button onClick={() => Router.push('/posts')}>Go back to posts</button>
            </MainLayout>  
    )
    
}