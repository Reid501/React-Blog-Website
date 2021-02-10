import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum....', author: 'Alex', id: 1 },
        {title: 'Welcome party', body: 'Lorem ipsum....', author: 'Dave', id: 2 },
        {title: 'Web Dev top tips', body: 'Lorem ipsum....', author: 'Alex', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Alex Blogs" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;