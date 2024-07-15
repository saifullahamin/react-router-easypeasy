import {
  About,
  Home,
  Missing,
  NewPost,
  PostPage,
  Layout,
  EditPost,
} from './components/Exporter';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch.js';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={<Home isLoading={isLoading} fetchError={fetchError} />}
          />

          <Route path='post'>
            <Route index element={<NewPost />} />
            <Route path=':id' element={<PostPage />} />
          </Route>

          <Route path='edit'>
            <Route path=':id' element={<EditPost />} />
          </Route>

          <Route path='about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
