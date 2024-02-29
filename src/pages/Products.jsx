import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const Products = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const maybeIdStr = id ? `and the id is: ${id}` : ''

    const handleNavigation = () => {
        navigate(-1)
    }

  return (
    <div>
      <h1>Products</h1>

      <p>{`You are at ${location.pathname} ${maybeIdStr}`}</p>
      <button onClick={handleNavigation}>Click me</button>
    </div>
  )
}

export default Products
