// components/Announcements.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnnouncements } from '../redux/announcementsSlice';  // Redux eylemlerini ekleyin
import { Link } from 'react-router-dom';

const Announcements = () => {
  const dispatch = useDispatch();
  const announcements = useSelector((state) => state.announcements.list);

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);

  return (
    <div>
      <h2>Duyurular</h2>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            <Link to={`/announcements/${announcement.id}`}>{announcement.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
