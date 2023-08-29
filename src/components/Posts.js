import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa'; // Import only Facebook and Twitter icons

const Posts = ({ posts }) => {
  const handleShareFacebook = (url, caption) => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(caption)}`;
    window.open(shareUrl, '_blank');
  };

  const handleShareTwitter = (url, text, caption) => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text + ' ' + caption)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <div className='posts-container'>
      {posts?.map(post => (
        <div className="posts-box" key={post.id}>
          <div className="posts-img">
            <Link to={`/article/${post.slug}`}>
              <img src={post.coverPhoto.url} alt="" />
            </Link>
            <div className="categories">
              {post.categories?.map(category => (
                <Link
                  to={`/posts/${category.slug}`}
                  key={category.id}
                  className="category"
                  style={{ background: category.color.css }}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="posts-text">
            <div className="category-time">
              {post.categories?.map(category => (
                <Link
                  to={`/posts/${category.slug}`}
                  key={category.id}
                  style={{ color: category.color.css }}
                >
                  {category.name}
                </Link>
              ))}
              <span className='published-time'>
                {new Date(post.updatedAt).toDateString()}
              </span>
            </div>

            <Link to={`/article/${post.slug}`}>
              <h3>{post.title}</h3>
            </Link>

            <p className='excerpt'>{post.description}</p>

            <div className="share-buttons">
              <div className="share-button">
                <button
                  className="dark-bg"
                  onClick={() => handleShareFacebook(
                    `https://touristique-web-app.vercel.app/article/${post.slug}`,
                    'Read this post.' // Short description for Facebook
                  )}
                >
                  <FaFacebook /> Share to Facebook
                </button>
              </div>
              <div className="share-button">
                <button
                  className="dark-bg"
                  onClick={() => handleShareTwitter(
                    `https://touristique-web-app.vercel.app/article/${post.slug}`,
                    post.title,
                    'Read this post.' // Short description for Twitter
                  )}
                >
                  <FaTwitter /> Share to Twitter
                </button>
              </div>
              {/* You can add more share buttons for other platforms here */}
            </div>

            {/* Open Graph Meta Tags */}
            <meta property="og:url" content={`https://touristique-web-app.vercel.app/article/${post.slug}`} />
            <meta property="og:image" content={post.coverPhoto.url} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.description} />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:url" content={`https://touristique-web-app.vercel.app/article/${post.slug}`} />
            <meta name="twitter:image" content={post.coverPhoto.url} />
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.description} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
