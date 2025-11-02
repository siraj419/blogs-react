import { NotebookPen } from "lucide-react";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";


// {
//     'id': 1,
//     'title': 'First Post',
//     'content': 'This is the first post',
//     'last_updated': '2022-01-01'
// }

const TopBar = () => {
    return (
        <div className="flex items-center justify-between h-18 bg-white dark:bg-black shadow-xl px-4 dark:shadow-gray-900">
            <div>
                <h1 className="text-2xl font-bold font-mono dark:text-white flex items-center gap-2">
                    <NotebookPen size={22}/>  Welcome to the BlogApp
                </h1>
            </div>
            <div className="flex items-center gap-3">
                <SearchBar />
                <ThemeToggle />
            </div>
        </div>
    )
}

export default TopBar;