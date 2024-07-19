import React, { useState } from 'react';

interface SortingDropdownProps {
  onSort: (sortBy: string) => void;
}

const SortingDropdown: React.FC<SortingDropdownProps> = ({ onSort }) => {
  const [sortBy, setSortBy] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
    onSort(selectedSortBy);
  };

  return (
    <div className="max-w-sm mx-auto mt-4">
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={sortBy}
        onChange={handleChange}>
        <option value="">Ordenar por...</option>
        <option value="priceAsc">Preço: Menor para Maior</option>
        <option value="priceDesc">Preço: Maior para Menor</option>
      </select>
    </div>
  );
};

export default SortingDropdown;
