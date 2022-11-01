import React, { useEffect } from 'react';

import { main } from 'store/main';
import { useAppDispatch } from 'hooks/useAppDispatch';
import {useSelector} from "react-redux";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(main.selectors.posts)

  console.log(posts)

  useEffect(() => {
    dispatch(main.thunks.getPosts());
  }, []);

  return <div>1231</div>;
};

export default MainPage;
