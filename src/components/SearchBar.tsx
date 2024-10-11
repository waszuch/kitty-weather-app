import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Input } from "@/components/ui/input";
import { BiSearch, BiCurrentLocation } from 'react-icons/bi';
import { fetchWeatherData } from '../services/weatherApi';

interface SearchBarProps {
  onSearch: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const mutation = useMutation({
    mutationFn: fetchWeatherData,
    onSuccess: () => {
      onSearch(inputValue);
    },  });

  const handleSearchClick = () => {
    mutation.mutate(inputValue);
  };

  return (
    <div className="w-[70%] flex items-center">
      <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <BiSearch
        size={60}
        className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
        onClick={handleSearchClick}
      />
      <BiCurrentLocation
        size={60}
        className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
      />
    
    </div>
  );
};export default SearchBar;
