import { ToastType } from "@/store/useToastStore/types";

export interface ToastOptions {
  type?: ToastType;
  title: string;
  message?: string;
  duration?: number;
}
