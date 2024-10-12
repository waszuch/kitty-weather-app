import React, { useState, KeyboardEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Input } from "@/components/ui/input";
import { BiSearch  } from 'react-icons/bi';
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
    },
  });

  const handleSearch = () => {
    mutation.mutate(inputValue);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-[70%] flex items-center">
      <Input 
      placeholder='Search for a city...'
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <BiSearch
        size={60}
        className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
        onClick={handleSearch}
      />
   
    </div>
  );
};

export default SearchBar;