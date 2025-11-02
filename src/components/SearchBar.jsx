import { Search } from 'lucide-react'
import {usePostsContext } from '../store/postsContext';


const SearchBar = () => {

    const {setSearchTerm} = usePostsContext();
    return (
        <div className='relative'>
            <Search 
                className='absolute top-1/2 -translate-1/2 left-4 text-gray-400'
                size={20}
            />
            <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-lg outline-none dark:bg-gray-800 dark:text-white pl-8"
                onChange={(event)=>setSearchTerm(event.target.value)}
            />
        </div>
    )
}

export default SearchBar