import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import YoutubeForm from  '../components/YoutubeForm' 
import { GrandParent } from '../components/Optimization/GrandParent'
import  Users from '../components/Users'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
 
const queryClient = new QueryClient()

export default function Home() {
  return (   
      <QueryClientProvider client={queryClient}>
          <div className={styles.container}>
            <Users />
          </div> 
          <ReactQueryDevtools initialIsOpen={false} /> 
          </QueryClientProvider>   
  )
}
