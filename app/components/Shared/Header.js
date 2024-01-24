import { abril, roboto } from '@/app/fonts'
import React from 'react'
import { mainMenu } from './Menu'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";

export default function Header() {
  
  return (
    <div className='xl:container mx-auto py-4'>
      <nav className="flex items-center justify-between">
        <div className={`text-4xl text-heading_color ${abril.className}`}>VH News.</div>
        <ul className="flex space-x-4">
          {mainMenu.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className={`hover:text-heading_color  text-xl text-menu_item_color ${roboto.className}`}>
              {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative mt-4">
      <input
        type="search"
        placeholder="Search Here..."
        className="w-full border border-[#757575] px-6 py-3 rounded-full focus:outline-none focus:border-blue-500"
      />
      <div className="absolute right-6 top-3">
        <FaSearch size={30} />
      </div>
    </div>
    </div>
  )
}
