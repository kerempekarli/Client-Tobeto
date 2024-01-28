import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAnnouncements,
  getAnnouncementById,
  addNewAnnouncement,
  removeAnnouncement,
  updateExistingAnnouncement,
} from '../../store/actions/announcementAction';

const AnnouncementsPage = () => {
  const dispatch = useDispatch();
  const announcements = useSelector((state) => state.announcement.announcements.items);
  const loading = useSelector((state) => state.announcement.loading);

  useEffect(() => {
    // Sayfa yüklenirken duyuruları al
    dispatch(getAnnouncements());
  }, [dispatch]);

  const handleAnnouncementClick = (id) => {
    // Duyuruya tıklandığında detayları al
    dispatch(getAnnouncementById(id));
  };

  const handleAddAnnouncement = () => {
    // Yeni duyuru ekle
    const newAnnouncement = {
      // Yeni duyuru bilgilerini buraya ekleyin
      // Örneğin: title, content, date vb.
    };
    dispatch(addNewAnnouncement(newAnnouncement));
  };

  const handleRemoveAnnouncement = (id) => {
    // Duyuruyu sil
    dispatch(removeAnnouncement(id));
  };

  const handleUpdateAnnouncement = (id, updatedAnnouncement) => {
    // Duyuruyu güncelle
    dispatch(updateExistingAnnouncement(updatedAnnouncement));
  };

  return (
    <div>
      <h1>Announcements</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {announcements.map((announcement) => (
            <li key={announcement.id} onClick={() => handleAnnouncementClick(announcement.id)}>
              {announcement.name}
            </li>
          ))}
        </ul>
      )}

      {/* <button onClick={handleAddAnnouncement}>Add New Announcement</button> */}

      {/* Duyuruların detaylarını göstermek için burada bir alan ekleyebilirsiniz */}
    </div>
  );
};

export default AnnouncementsPage;
