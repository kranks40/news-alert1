"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term={input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between item-center py-1"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className=" flex-1 outline-none w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 bg-transparent dark:text-orange-400"
      />

      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400 bg-slate-600 text-orange px-10 h-9 rounded-full dark:bg-slate-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
