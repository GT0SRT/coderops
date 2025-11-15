import React from 'react'

const Header = () => {
  return (
    <div className="text-md md:text-sm font-bold grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-1">repeating image transition</div>
      <div className='col-span-1'>
        <a href="#" class="relative group transition duration-600">
        more info
        <span class="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out origin-right group-hover:origin-left"></span>
        </a>
        <span>, </span>
        <a href="#" class="relative group transition duration-600">
        code
        <span class="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out origin-right group-hover:origin-left"></span>
        </a>
        <span>, </span>
        <a href="#" class="relative group transition duration-600">
         all demos
        <span class="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out origin-right group-hover:origin-left"></span>
        </a>
      </div>
      <div className='col-span-1'>
        <a href="#" class="relative group transition duration-600">
        page-transition
        <span class="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out origin-right group-hover:origin-left"></span>
        </a>
        <span>, </span>
        <a href="#" class="relative group transition duration-600">
        repetition
        <span class="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out origin-right group-hover:origin-left"></span>
        </a>
        <span>, </span>
        <a href="#" class="relative group transition duration-100">
         grid
        <span class="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out origin-right group-hover:origin-left"></span>
        </a>        
      </div>
      <div className='col-span-1 ml-auto md:pl-7'>
        Divi AI: On demand content creation,
        code writing & image generation.
      </div>
    </div>
  )
}

export default Header