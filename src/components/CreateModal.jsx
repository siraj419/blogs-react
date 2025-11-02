import { X } from 'lucide-react'
import { useId } from 'react'
import { usePostsContext } from '../store/postsContext';

const CreateModal = () => {
    const uniqueId = useId();

    const {
        setIsOpen,
        type,
        onSubmit,
        postData,
        setPostData
    } = usePostsContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    }

    const handleChange = (field, value) => {
        setPostData({...postData, [field]: value});
    }

    return (
        <>
            <div className="z-\[9999] absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-10'
            >
                <X 
                    className='dark:text-white absolute top-7 right-5 hover:scale-115 cursor-pointer'
                    size={20}
                    onClick={()=>setIsOpen(false)}
                />

                <h2
                    className='text-xl font-bold dark:text-white'
                >
                    {type =='create' ? 'Create New Blog Post' : 'Update Blog Post'}
                </h2>
                <form
                    className='flex flex-col gap-3 mt-5'
                    onSubmit={handleSubmit}
                >
                    <div
                        className='flex flex-col gap-1 w-full'
                    >
                        <label className='dark:text-white' htmlFor={`title-${uniqueId}`}>
                            Title
                        </label>
                        <input
                            id={`title-${uniqueId}`}
                            type='text'
                            placeholder='Title'
                            className="px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-lg outline-none dark:bg-gray-800 dark:text-white"
                            value={postData.title}
                            onChange={(event)=>handleChange('title', event.target.value)}
                        />
                    </div>
                    <div
                        className='flex flex-col gap-1 w-full'
                    >
                        <label className='dark:text-white' htmlFor={`content-${uniqueId}`}>Content</label>
                        <textarea
                            id={`content-${uniqueId}`}
                            placeholder='Content'
                            className="px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-lg outline-none dark:bg-gray-800 dark:text-white"
                            rows={5}
                            value={postData.content}
                            onChange={(event)=>handleChange('content', event.target.value)}
                        />
                    </div>
                    <div
                        className='flex flex-col gap-1 w-full'
                    >
                        <label className='dark:text-white' htmlFor={`last-updated-${uniqueId}`}>Last Updated</label>
                        <input
                            id={`last-updated-${uniqueId}`}
                            type='date'
                            className="px-4 py-2 border border-gray-300 focus:border-blue-500 rounded-lg outline-none dark:bg-gray-800 dark:text-white"
                            value={postData.date}
                            onChange={(event)=>handleChange('date', event.target.value)}
                        />
                    </div>
                    <div
                        className='flex gap-3 justify-end mt-3'
                    >
                        <button
                            className={`px-4 py-2  text-white rounded-lg  transition ${type == 'create' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'}`}
                        >
                            {type == 'create' ? 'Create' : 'Save'}
                        </button>
                        <button
                            className='px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition'
                            onClick={()=>setIsOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default CreateModal