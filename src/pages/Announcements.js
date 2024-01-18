import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnnouncements,
  getAnnouncementById,
  addNewAnnouncement,
  removeAnnouncement,
  updateExistingAnnouncement,
} from "../store/actions/announcementAction";
import axios from "axios";

const AnnouncementsComponent = () => {
  const dispatch = useDispatch();
  const announcements = useSelector(
    (state) => state.announcement.announcements.items
  );
  const selectedAnnouncement = useSelector(
    (state) => state.announcement.selectedAnnouncement
  );
  const loading = useSelector((state) => state.announcement.loading);
  const error = useSelector((state) => state.announcement.error);

  useEffect(() => {
   dispatch(getAnnouncements());
  }, [dispatch]); // Boş bağımlılık dizisi, sadece bir kez çalıştırılmasını sağlar

  const handleGetAnnouncementById = (id) => {
    // Belirli bir duyuruyu al
    dispatch(getAnnouncementById(id));
  };

  const handleAddNewAnnouncement = (newAnnouncement) => {
    // Yeni duyuru ekle
    dispatch(addNewAnnouncement(newAnnouncement));
  };

  const handleRemoveAnnouncement = (id) => {
    // Duyuruyu sil
    dispatch(removeAnnouncement(id));
  };

  const handleUpdateAnnouncement = (updatedAnnouncement) => {
    // Duyuruyu güncelle
    dispatch(updateExistingAnnouncement(updatedAnnouncement));
  };

  if (loading) {

    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log("Annoucnementsss ", announcements);
  return (
    <div>
      <h2>Announcements</h2>
      <ul>
        {announcements  &&
          announcements.map((announcement) => (
            <li
              key={announcement.id}
              onClick={() => handleGetAnnouncementById(announcement.id)}
            >
              {announcement.name}
            </li>
          ))}
      </ul>

      {selectedAnnouncement && (
        <div>
          <h3>Selected Announcement</h3>
          <p>{selectedAnnouncement.title}</p>
          <button
            onClick={() => handleRemoveAnnouncement(selectedAnnouncement.id)}
          >
            Remove Announcement
          </button>
          <button
            onClick={() =>
              handleUpdateAnnouncement({
                id: selectedAnnouncement.id,
                title: "Updated Title",
              })
            }
          >
            Update Announcement
          </button>
        </div>
      )}
      <div>
        <h3>Add New Announcement</h3>
        <button
          onClick={() =>
            handleAddNewAnnouncement({
              id: Math.random(),
              title: "New Announcement",
            })
          }
        >
          Add Announcement
        </button>
      </div>
    </div>
  );
};

export default AnnouncementsComponent;
