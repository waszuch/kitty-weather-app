import React from 'react';
import { Input } from "@/components/ui/input";
import { BiSearch, BiCurrentLocation } from 'react-icons/bi';

const SearchBar: React.FC = () => {
  return (
    <div className="w-[70%] flex items-center">
      <Input />
      <BiSearch
        size={60}
        className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
      />
      <BiCurrentLocation
        size={60}
        className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
      />
      
    </div>
  );
};

export default SearchBar;