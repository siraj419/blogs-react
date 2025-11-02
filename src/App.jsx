import { CirclePlus } from "lucide-react"
import TopBar from "./components/TopBar"
import BlogCard from "./components/BlogCard"
import CreateModal from "./components/CreateModal"
import DeleteModal from "./components/DeleteModal";
import { usePostsContext } from "./store/postsContext";


function App() {

  const {filteredPosts, isOpen, deletePostId, handleOpenModal} = usePostsContext();

  return (
      <div 
        className="bg-white dark:bg-black h-screen relative"
      >

          <TopBar  />
          <div className="flex justify-end">
              <button className="m-4 px-4 py-2 text-white rounded-lg hover:bg-gray-800 transition flex items-center gap-2 bg-gray-700 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300" onClick={()=>handleOpenModal('create')}>
                  <CirclePlus size={20}/> 
                  Add New
              </button> 
          </div>
          <div
            className="flex justify-center flex-wrap"
          >
            {
              filteredPosts.map(((post, index)=>{
                return <BlogCard 
                  key={index}
                  post={post}
              />
              }))
            }
            
          </div>

          {
            isOpen && <CreateModal 
            />
          }
          {
              deletePostId && <DeleteModal 
              />
          }
          
      </div>
  )
}

export default App;
