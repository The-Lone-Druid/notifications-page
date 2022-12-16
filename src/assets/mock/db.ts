import {
  AvatarAngelaGray,
  AvatarAnnaKim,
  AvatarJacobThompson,
  AvatarKimberlySmith,
  AvatarMarkWebber,
  AvatarNathanPeterson,
  AvatarRizkyHasanuddin,
  ImageChess
} from "../images";

export type NotificationType = {
  id: number;
  userName: string;
  profile: any;
  activity: string;
  postName?: string;
  time: string;
  privateMessage?: string;
  commentedPicture?: string;
  joinedGroup?: string;
  isRead: boolean;
};

export const notificationsData: NotificationType[] = [
  {
    id: 0,
    userName: "Mark Webber",
    profile: AvatarMarkWebber,
    activity: "reacted to your recent post",
    postName: "My first tournament today!",
    time: "1m ago",
    isRead: false
  },
  {
    id: 1,
    userName: "Angela Gray",
    profile: AvatarAngelaGray,
    activity: "followed you",
    time: "5m ago",
    isRead: false
  },
  {
    id: 2,
    userName: "Jacob Thompson",
    profile: AvatarJacobThompson,
    activity: "has joined your group",
    joinedGroup: "Chess Club",
    time: "1 day ago",
    isRead: false
  },
  {
    id: 3,
    userName: "Rizky Hasanuddin",
    profile: AvatarRizkyHasanuddin,
    activity: "sent you a private message",
    time: "5 days ago",
    privateMessage:
      "Hello, thanks for setting up the Chess Club. I've been a memeber for a few weeks now and I'm already having lots of fun and improving my game",
    isRead: false
  },
  {
    id: 4,
    userName: "Kimberly Smith",
    profile: AvatarKimberlySmith,
    activity: "commented on your picture",
    time: "1 week ago",
    commentedPicture: ImageChess,
    isRead: false
  },
  {
    id: 5,
    userName: "Nathan Peterson",
    profile: AvatarNathanPeterson,
    activity: "reacted to your recent post",
    postName: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    isRead: false
  },
  {
    id: 6,
    userName: "Anna Kim",
    profile: AvatarAnnaKim,
    activity: "left the group",
    joinedGroup: "Chess Club",
    time: "2 weeks ago",
    isRead: false
  }
];
