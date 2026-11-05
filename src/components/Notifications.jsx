
import React, { useState } from "react";
import {
  IoNotificationsOutline,
  IoCheckmarkDoneOutline,
  IoTrashOutline,
} from "react-icons/io5";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Assignment",
      message: "A new Mathematics assignment has been uploaded.",
      date: "Today, 10:30 AM",
      type: "Assignment",
      read: false,
    },
    {
      id: 2,
      title: "Assignment Reminder",
      message: "Your Science assignment is due tomorrow.",
      date: "Today, 09:15 AM",
      type: "Reminder",
      read: false,
    },
    {
      id: 3,
      title: "Assignment Reviewed",
      message: "Your English assignment has been reviewed by your teacher.",
      date: "Yesterday, 02:45 PM",
      type: "Success",
      read: true,
    },
    {
      id: 4,
      title: "New Announcement",
      message: "The school annual examination timetable has been published.",
      date: "Yesterday, 11:00 AM",
      type: "Announcement",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case "Assignment":
        return "bg-blue-100 text-blue-700";

      case "Reminder":
        return "bg-orange-100 text-orange-700";

      case "Success":
        return "bg-green-100 text-green-700";

      case "Announcement":
        return "bg-purple-100 text-purple-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 md:p-8 bg-amber-50">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Notifications
          </h1>

          <p className="text-gray-500 mt-2">
            Stay updated with your assignments and school announcements.
          </p>
        </div>

        <button
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <IoCheckmarkDoneOutline size={20} />
          Mark all as read
        </button>

      </div>

      {/* Notification Summary */}
      <div className="bg-white rounded-2xl p-5 shadow-md mb-6 flex items-center gap-4">

        <div className="bg-amber-100 p-4 rounded-xl">
          <IoNotificationsOutline
            size={30}
            className="text-amber-600"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {unreadCount} Unread Notifications
          </h2>

          <p className="text-sm text-gray-500">
            You have {notifications.length} total notifications.
          </p>
        </div>

      </div>

      {/* Notification List */}
      <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">

        <h2 className="text-xl font-semibold text-gray-800 mb-5">
          Recent Notifications
        </h2>

        <div className="flex flex-col gap-4">

          {notifications.length > 0 ? (
            notifications.map((notification) => (

              <div
                key={notification.id}
                className={`border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition ${
                  notification.read
                    ? "bg-white border-gray-200"
                    : "bg-amber-50 border-amber-300"
                }`}
              >

                <div className="flex gap-3 items-start">

                  <div className="bg-amber-100 p-3 rounded-full">
                    <IoNotificationsOutline
                      size={22}
                      className="text-amber-600"
                    />
                  </div>

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-2">

                      <h3 className="font-semibold text-gray-800">
                        {notification.title}
                      </h3>

                      {!notification.read && (
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      )}

                      <span
                        className={`text-xs px-3 py-1 rounded-full ${getTypeStyle(
                          notification.type
                        )}`}
                      >
                        {notification.type}
                      </span>

                    </div>

                    <p className="text-sm text-gray-600 mt-2">
                      {notification.message}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                      {notification.date}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3 sm:self-center">

                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Mark as read
                    </button>
                  )}

                  <button
                    onClick={() =>
                      deleteNotification(notification.id)
                    }
                    className="p-2 rounded-lg text-red-500 hover:bg-red-50"
                    title="Delete notification"
                  >
                    <IoTrashOutline size={20} />
                  </button>

                </div>

              </div>

            ))
          ) : (

            <div className="text-center py-16">
              <IoNotificationsOutline
                size={50}
                className="mx-auto text-gray-300 mb-3"
              />

              <h3 className="text-lg font-semibold text-gray-700">
                No Notifications
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                You are all caught up!
              </p>
            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Notifications;
