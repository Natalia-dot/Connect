import { useEffect, useState } from 'react';
import { getRoomById } from '../services/room.service';
import { getPostById } from '../services/post.service';

export const useFetchDataUpdate = (id, route, user, navigate, setRoomType) => {
  const [post, setPost] = useState(null);
  const [postType, setPostType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (route.pathname.includes('/updateRoom')) {
        const data = await getRoomById(id);
        if(data.data.postedBy[0]._id.includes(user._id)) {
            // console.log(data);
            setPost(data.data);
            setRoomType(data.data.type)
        } else navigate(`/roomFinds/${id}`)
        
      } else if (route.pathname.includes('/updatePost')) {
        const data = await getPostById(id);
        if (data.data.author[0]._id.includes(user._id)) {
          setPost(data.data);
          setPostType(data.data.type);
        } else navigate(`/feed/${id}`);
      }
    };

    fetchData();
  }, [id, route, getRoomById, getPostById, user, navigate]);

  return { post, postType };
};
