import React from "react";
import { NotificationType } from "../assets/mock/db";

type Props = {
  notification: NotificationType;
  markNotificationAsRead: (notification: NotificationType) => void;
};

const Notification = ({ notification, markNotificationAsRead }: Props) => {
  return (
    <div
      className={`p-4 rounded-[10px] flex cursor-pointer justify-between ${
        notification?.isRead ? "bg-white" : "bg-blue-100 bg-opacity-40"
      }`}
      onClick={() => {
        markNotificationAsRead(notification);
      }}
    >
      <div
        className={`flex ${
          notification?.privateMessage
            ? "items-start"
            : "md:items-center items-start"
        }`}
      >
        <img src={notification?.profile} height={60} width={60} alt="" />
        <div className="ml-4">
          <h6 className="text-[16px]">
            <span className="font-extrabold text-gray-800">
              {notification?.userName}{" "}
            </span>
            <span className="text-gray-500 font-medium">
              {notification?.activity}{" "}
            </span>
            <span
              className={`font-bold ${
                notification?.joinedGroup ? "text-na-blue" : "text-gray-500"
              }`}
            >
              {notification?.postName && notification?.postName}{" "}
              {notification?.joinedGroup && notification?.joinedGroup}{" "}
            </span>
            {!notification?.isRead && (
              <i className="material-icons text-[10px] text-na-red">circle</i>
            )}
          </h6>
          <h6 className="text-[16px] text-gray-500 font-medium">
            {notification?.time}
          </h6>
          {notification?.privateMessage && (
            <div className="border p-4 rounded-[5px] mt-2">
              {notification?.privateMessage}
            </div>
          )}
        </div>
      </div>
      {notification?.commentedPicture && (
        <img
          src={notification?.commentedPicture}
          className={`h-[40px]`}
          alt=""
        />
      )}
    </div>
  );
};

export default Notification;
