"use client";
import { vySearchScript } from "@/lib/vyApi";
import {
  BuildingOffice2Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const exchanges = ["ALL", "NSE", "NFO", "BSE"];

const SearchScript = () => {
  const [exch, setExch] = useState("ALL");
  const [text, setText] = useState("");
  const [slist, setSlist] = useState([]);

  const search = async () => {
    let token =
      "bcdb7319b7c154a118c2b36b5ff892aac3ad577bce7c93ec44a908dd2b6f680a";
    try {
      const data = await vySearchScript(
        "flattrade",
        "FT006654",
        text,
        exch,
        token
      );
      setSlist(data.value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (text.length < 3) return;
    const timeoutId = setTimeout(() => {
      search();
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div className="flex items-stretch w-96 rounded-md border border-gray-900">
      <div>
        <label htmlFor="exch" className="sr-only">
          Exchange
        </label>
        <div className="relative">
          <select
            name="exch"
            id="exch"
            value={exch}
            onChange={(e) => {
              setExch(e.target.value);
              setText("");
              setSlist([]);
            }}
            className="peer py-1 pl-10 pr-1 border-r rounded-md border-gray-300"
          >
            {exchanges.map((exchange) => (
              <option key={exchange} value={exchange}>
                {exchange}
              </option>
            ))}
          </select>
          <BuildingOffice2Icon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 peer-hover:text-gray-900" />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="script" className="sr-only">
          Script
        </label>
        <div className="relative">
          <input
            name="script"
            id="script"
            type="text"
            className="peer py-1 pl-10 pr-1 rounded-md w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 peer-hover:text-gray-900" />
          <div className="absolute h-48 inset-x-0 boreder shadow-md rounded-b-md z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchScript;
