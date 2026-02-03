import { defineStore } from "pinia";
import { ref } from "vue";
import { Toast } from "./types";

export const useToastStore = defineStore("toast", () => {
  const toasts = ref<Toast[]>([]);
  let toastId = 0;

  const showToast = (toast: Omit<Toast, "id">): number => {
    const id = ++toastId;
    const newToast: Toast = {
      id,
      ...toast,
      duration: toast.duration || 5000,
    };

    toasts.value.push(newToast);
    const duration = newToast.duration ?? 0;

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }

    return id;
  };

  const removeToast = (id: number): void => {
    const index = toasts.value.findIndex((toast) => toast.id === id);
    if (index !== -1) {
      toasts.value.splice(index, 1);
    }
  };

  const clearToasts = (): void => {
    toasts.value = [];
  };

  const success = (
    title: string,
    message?: string,
    duration?: number,
  ): number => {
    return showToast({ type: "success", title, message, duration });
  };

  const error = (
    title: string,
    message?: string,
    duration?: number,
  ): number => {
    return showToast({ type: "error", title, message, duration });
  };

  const warning = (
    title: string,
    message?: string,
    duration?: number,
  ): number => {
    return showToast({ type: "warning", title, message, duration });
  };

  const info = (title: string, message?: string, duration?: number): number => {
    return showToast({ type: "info", title, message, duration });
  };

  return {
    toasts,
    showToast,
    removeToast,
    clearToasts,
    success,
    error,
    warning,
    info,
  };
});
