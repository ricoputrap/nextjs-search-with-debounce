import useProductContext from '@/hooks/useProductContext'
import useSearch from '@/hooks/useSearch';
import { ActionType } from '@/store/types';
import React from 'react'

const SearchBar = () => {
  const { search, handleChange } = useSearch();

  return (
    <div className="w-full">
      <input
        value={search}
        onChange={handleChange}
        className="
          bg-gray-50 border border-gray-300 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block w-full p-2.5"
        placeholder="Search product..."
      />
    </div>
  )
}

export default SearchBar