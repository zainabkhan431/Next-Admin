'use client'
import React from 'react';
import styles from "./search.module.css";
import { MdSearch } from 'react-icons/md';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }) { 
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page",1); 
    if (e.target.value) {
      e.target.value.length>2 &&   params.set("q", e.target.value);
    
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params.toString()}`); 
    
  },300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
}
