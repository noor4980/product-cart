import React from 'react'

function FilterItem({ item, removeFilter}) {
     
    return (
        <>
            <div className='bg-white flex items-center gap-[5px] px-8 py-2 rounded shadow-md'>
                <p className="px-4 py-2 mr-3 bg-[#e0ffff] rounded cursor-pointer hover:bg-red-400 " onClick={() => removeFilter(item)}>{item}</p>
            </div>
        </>
  )
}

export default FilterItem