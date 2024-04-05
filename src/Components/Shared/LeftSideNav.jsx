import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold mb-5">All category</h2>
      </div>

      <div>
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="text-lg ml-3 mb-2 block px-3 py-4 hover:bg-gray-100 rounded-lg font-semibold text-gray-500 hover:text-black"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
