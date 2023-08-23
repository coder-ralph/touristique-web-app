import { Link, useLocation } from 'react-router-dom'


const NavLinks = ({categories}) => {
  const { pathname } = useLocation();

  return (
    <ul className='menu-lists'>
      <label htmlFor="menu-btn" className='fa-solid fa-xmark' />

      <Link to="/">
        <li className={`${pathname === '/' ? 'active' : ''}`}>All Tourist Spots</li>
      </Link>

      {
        categories?.map(category => (
          <Link key={category.slug} to={`/posts/${category.slug}`}>
            <li className={ `/posts/${category.slug}` === pathname ? 'active' : '' }>
              {category.name}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default NavLinks
