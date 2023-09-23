import useProductContext from '@/hooks/useProductContext'
import React from 'react'

const ProductList: React.FC = () => {
  const {
    state: { data }
  } = useProductContext();

  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <div key={item.id} className="bg-slate-100 p-2 w-96 rounded-lg">
          { item.name }
        </div>
      ))}
    </div>
  )
}

export default ProductList