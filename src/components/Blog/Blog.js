import React from 'react';
import './Blog.css';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable Microservices with Node.js',
      excerpt: 'Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for production-ready applications.',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'Backend',
      image: 'https://via.placeholder.com/400x250',
      link: '#'
    },
    {
      title: 'React Performance Optimization Techniques',
      excerpt: 'Discover advanced techniques to optimize your React applications, including code splitting, memoization, and lazy loading.',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Frontend',
      image: 'https://via.placeholder.com/400x250',
      link: '#'
    },
    {
      title: 'Understanding Database Indexing',
      excerpt: 'A comprehensive guide to database indexing strategies that can dramatically improve your application\'s query performance.',
      date: 'March 5, 2024',
      readTime: '10 min read',
      category: 'Database',
      image: 'https://via.placeholder.com/400x250',
      link: '#'
    },
    {
      title: 'CI/CD Best Practices for Modern Applications',
      excerpt: 'Explore continuous integration and deployment strategies that help teams ship code faster and more reliably.',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'DevOps',
      image: 'https://via.placeholder.com/400x250',
      link: '#'
    },
    {
      title: 'TypeScript: Beyond the Basics',
      excerpt: 'Deep dive into advanced TypeScript features including generics, decorators, and advanced type manipulation.',
      date: 'February 20, 2024',
      readTime: '9 min read',
      category: 'Programming',
      image: 'https://via.placeholder.com/400x250',
      link: '#'
    },
    {
      title: 'Securing Your REST APIs',
      excerpt: 'Essential security practices for protecting your REST APIs from common vulnerabilities and attacks.',
      date: 'February 15, 2024',
      readTime: '8 min read',
      category: 'Security',
      image: 'https://via.placeholder.com/400x250',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="section blog">
      <div className="container">
        <h2 className="section-title">Blog & Articles</h2>
        <p className="section-subtitle">Sharing knowledge and insights</p>
        
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <FaCalendar /> {post.date}
                  </span>
                  <span className="blog-read-time">
                    <FaClock /> {post.readTime}
                  </span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.link} className="blog-link">
                  Read More <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;