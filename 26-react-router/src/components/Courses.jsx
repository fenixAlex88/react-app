import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import courses from '../data/courses';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) return sortedCourses;
  sortedCourses.sort((prev, next) => (prev[key] > next[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(query).length > 1 || !SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : `Courses`}</h1>
      <ul>
        {sortedCourses.map(({ id, title, slug }) => (
          <li key={id}>
            <Link to={slug} className="courseLink">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Courses;
