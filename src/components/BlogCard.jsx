import { CalendarRange, Pencil, Trash } from "lucide-react"
import { useContext } from "react";
import { usePostsContext } from "../store/postsContext";


const BlogCard = ({post}) => {
    const {setEditPostId, setDeletePostId} = usePostsContext();
    return (
        <div
            className="w-[300px] p-3 border border-gray-300 rounded-lg shadow-md m-4 dark:bg-gray-800"
            id={post.id}
        >
            <h2 className="text-2xl font-bold mb-2 dark:text-white text-center">
                {post.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
                {post.content}
            </p>
            <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <CalendarRange size={16}/> {post.date}
                </p>
                <div className="flex items-center gap-2">
                    <button
                        className="text-gray-400 hover:text-blue-500 cursor-pointer"
                        onClick={()=>setEditPostId(post.id)}
                    >
                        <Pencil size={16}/>
                    </button>
                    <button
                        className="text-gray-400 hover:text-red-500 cursor-pointer"
                        onClick={()=>setDeletePostId(post.id)}
                    >
                        <Trash size={16}  />
                    </button>
                </div>
            </div>
            {/* <div></div> */}
        </div>
    )
}

export default BlogCard