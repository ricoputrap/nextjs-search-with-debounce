import ProductList from '@/components/ProductList'
import SearchBar from '@/components/SearchBar';
import useFetchData from '@/hooks/useFetchData'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useFetchData();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-96 flex flex-col gap-8">
        <SearchBar />
        <ProductList />
      </div>
    </main>
  )
}
