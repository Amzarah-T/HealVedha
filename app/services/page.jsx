'use client'

import { useEffect, useRef, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "@/components/icons";


export default function ServicesPage() {
  const [results, setResults] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch('http://localhost:3000/api/public/services', { cache: 'no-store' })
    const data = await res.json();

    setResults(data.result);
    setFilteredData(data.result);
  }


  const filter = (event) => {
    event.preventDefault();
    const searchVal = searchRef.current.value;
    const mainResult = results;

    const dt = mainResult.filter(dt => {
      const isMatched = dt.titleEn.includes(searchVal) | dt.titleSn.includes(searchVal) | dt.titleTm.includes(searchVal);

      return isMatched;
    })

    setFilteredData(dt);
  }

  return (
    <div>
      <h1 className="text-foreground text-3xl">Services and Treatments</h1>
      <div className="flex min-h-screen flex-col items-center pt-10">
        <form onSubmit={filter} className="flex gap-5 container items-center pb-5 md:w-96 w-full">
          <SearchIcon className='text-2xl' />
          <Input ref={searchRef} type="text" label="Search" onChange={filter} />
          <Button type="submit">Search</Button>
        </form>

        <ul className="space-y-6 flex flex-col md:flex-row gap-10 grid-cols-2 flex-wrap">
          {filteredData.map((dataObject) => (
            <li key={dataObject.id} className="p-6 bg-white rounded-lg shadow-md min-w-64 flex-1">
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${dataObject.image})` }}
              ></div>
              <h2 className="text-2xl font-semibold my-2">{dataObject.titleEn}</h2>
              <p className="text-gray-700">{dataObject.titleTm}</p>
              <p className="text-gray-700">{dataObject.titleSn}</p>
            </li>
          ))}
          {filteredData.length === 0 ? <div className="p-24 text-xl">Sorry...! <br /> Data not found!</div> : <></>}
        </ul>
      </div>
    </div>
  );
}