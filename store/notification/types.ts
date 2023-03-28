export interface Notification {
  id: number;
  userAvatar: string;
  userName: string;
  post: string;
  directFilename: string;
}

export interface NotificationState {
  notifications: Notification[];
  notificationCount: number;
  isNotificationRead: boolean;
  getNotificationCountStatus: "idle" | "loading" | "succeeded" | "failed";
  markNotificationReadStatus: "idle" | "loading" | "succeeded" | "failed";
  status: "idle" | "loading" | "succeeded" | "failed";
  getNotificationCountError: string | null;
  markNotificationReadError: string | null;
  error: string | null;
}
