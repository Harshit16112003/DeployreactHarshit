import React from 'react';
import './Blogs.css'; // Import the CSS file for styling

const Blogs = () => {
  const blogArticles = [
    {
      id: 1,
      title: 'Understanding React Components',
      description:
        'React components are the foundational building blocks of any React application. Discover how to create reusable, maintainable components.',
      link: '#',
    },
    {
      id: 2,
      title: 'JavaScript ES6: Key Features',
      description:
        'Dive into ES6 features like arrow functions, template literals, destructuring, and more to write cleaner, modern JavaScript code.',
      link: '#',
    },
    {
      id: 3,
      title: '10 Tips for Clean and Efficient Code',
      description:
        'Learn the principles of writing clean and efficient code to improve maintainability and readability for your projects.',
      link: '#',
    },
    {
      id: 4,
      title: 'CSS Flexbox: A Beginner’s Guide',
      description:
        'Master the basics of Flexbox and create responsive, flexible layouts with ease. Perfect for beginners and experienced developers alike.',
      link: '#',
    },
    {
      id: 5,
      title: 'Getting Started with Node.js',
      description:
        'A beginner’s introduction to Node.js, its architecture, and how you can use it to build scalable backend applications.',
      link: '#',
    },
  ];

  return (
    <div className="blogs-container">
      <h1>Blog Articles</h1>
      <div className="blog-list">
        {blogArticles.map((article) => (
          <article key={article.id} className="blog-item">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link} className="read-more">
              Read More
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
