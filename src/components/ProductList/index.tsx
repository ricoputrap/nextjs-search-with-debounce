import useData from '@/hooks/useData'
import useProductContext from '@/hooks/useProductContext'
import React from 'react'

const ProductList: React.FC = () => {
  const data = useData();

  return (
    <div className="flex flex-col gap-3 w-full">
      {data.map((item) => (
        <div key={item.id} className="bg-gray-100 p-2 rounded-lg">
          { item.name }
        </div>
      ))}
    </div>
  )
}

export default ProductList