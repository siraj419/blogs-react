import { createContext, useContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

export const PostsContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState("create");

  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  // const [date, setDate] = useState('');

    const [postData, setPostData] = useState({
        title: "",
        content: "",
        date: "",
    });
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [editPostId, setEditPostId] = useState(null);
    const [deletePostId, setDeletePostId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (editPostId !== null) {
        const post = posts.find((post) => post.id === editPostId);
        setPostData({
            title: post.title,
            content: post.content,
            date: post.date,
        });
        handleOpenModal("edit");
        }
    }, [editPostId]);

    useEffect(() => {
        if (searchTerm === "") return setFilteredPosts(posts);
        const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filteredPosts);
    }, [searchTerm, posts]);

    const handleSubmit = () => {
        if (modalType === "edit" && editPostId !== null) {
        setPosts(
            posts.map((post) =>
            post.id === editPostId ? { ...post, ...postData } : post
            )
        );
        setEditPostId(null);
        setIsOpen(false);
        return;
        }

    setPosts([
        ...posts,
        {
            id: Math.floor(Math.random() * 100000),
            ...postData,
        },
    ]);
    setIsOpen(false);

    setPostData({
        title: "",
        content: "",
        date: "",
    });
    };

    const handleOpenModal = (type) => {
        setIsOpen(true);
        setModalType(type);
    };

    const deletePost = () => {
        setPosts(posts.filter((post) => post.id !== deletePostId));
        setDeletePostId(null);
    };
    return (
        <PostsContext.Provider
            value={{
            setSearchTerm,
            setEditPostId,
            setDeletePostId,
            setIsOpen,
            postData,
            setPostData,
            onSubmit: handleSubmit,
            deletePost,
            type: modalType,
            filteredPosts,
            isOpen,
            deletePostId,
            handleOpenModal
        }}
    >
        {children}
    </PostsContext.Provider>

);};
