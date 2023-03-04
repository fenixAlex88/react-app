import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();

  const course = courses.find((course) => course.slug === params.slug);
  useEffect(() => {
    if (!course) navigate('..', { relative: 'path' });
  }, [course, navigate]);

  // return (
  //   <>
  //     <NotFound />{' '}
  //     <Link to=".." relative="path">
  //       All courses
  //     </Link>{' '}
  //   </>
  // );

  return (
    <>
      <h1>{course?.title}</h1>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
