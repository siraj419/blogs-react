import { X } from 'lucide-react'
import { usePostsContext } from '../store/postsContext';

const DeleteModal = () => {

    const {setDeletePostId, deletePost} = usePostsContext();
    return (
         <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-10'
            >
                <X 
                    className='dark:text-white absolute top-7 right-5 hover:scale-115 cursor-pointer'
                    size={20}
                    onClick={()=>setDeletePostId(null)}
                />

                <h2
                    className='text-xl font-bold dark:text-white'
                >
                    Delete Post
                </h2>
                <p
                    className='text-gray-700 dark:text-gray-300'
                >
                    Are you sure you want to delete this post? This action cannot be undone.
                </p>
                <div className="flex justify-end gap-4 mt-4">
                    <button
                        className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                        onClick={deletePost}
                    >
                        Delete
                    </button>
                    <button
                        className="px-4 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300"
                        onClick={()=>setDeletePostId(null)}
                    >
                        Cancel
                    </button>
                </div>
        </div>
    )
}

export default DeleteModal