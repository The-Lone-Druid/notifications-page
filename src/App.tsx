import React from "react";
import { AvatarMarkWebber } from "./assets/images";
import { notificationsData, NotificationType } from "./assets/mock/db";
import Notification from "./components/Notification";

function App() {
  const [notifications, setNotifications] = React.useState<
    NotificationType[] | null | any
  >(null);

  React.useEffect(() => {
    setNotifications(notificationsData);
  }, []);

  const notificationsCount = () => {
    let unreadNotificationsLength =
      notifications && notifications.length > 0
        ? notifications?.filter(
            (notification: NotificationType) => !notification.isRead
          )
        : [];
    return <div>{unreadNotificationsLength.length}</div>;
  };

  const markNotificationAsRead = (notification: NotificationType) => {
    let notificationsCpy = [...notifications];

    notificationsCpy.map((currNotification) => {
      if (currNotification.id === notification?.id) {
        currNotification.isRead = true;
      }
    });

    setNotifications(notificationsCpy);
  };

  const markAllAsRead = () => {
    let notificationsCpy = [...notifications];

    notificationsCpy.map((currNotification) => {
      currNotification.isRead = true;
    });

    setNotifications(notificationsCpy);
  };

  return (
    <div className="py-[80px]">
      <div className="max-w-[800px] mx-auto md:px-8 px-3 py-8 bg-white rounded-[20px]">
        <div className="flex items-center justify-between">
          <h2 className="text-na-blue text-[28px] font-bold flex items-center">
            Notifications
            <div className="notifications-count bg-na-blue px-3 py-1 text-white text-[14px] ml-2 rounded-[8px]">
              {notifications && notifications.length > 0
                ? notificationsCount()
                : null}
            </div>
          </h2>
          <button
            className="text-gray-500"
            onClick={() => {
              markAllAsRead();
            }}
          >
            Mark all as read
          </button>
        </div>
        <div className="mt-4 flex flex-col md:gap-[20px] gap-[10px]">
          {notifications && notifications.length > 0
            ? notifications.map(
                (notification: NotificationType, index: number) => (
                  <Notification
                    notification={notification}
                    markNotificationAsRead={markNotificationAsRead}
                  />
                )
              )
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
