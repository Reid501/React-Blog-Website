import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum....', author: 'Alex', id: 1 },
        {title: 'Welcome party', body: 'Lorem ipsum....', author: 'Dave', id: 2 },
        {title: 'Web Dev top tips', body: 'Lorem ipsum....', author: 'Dev', id: 3 }
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;