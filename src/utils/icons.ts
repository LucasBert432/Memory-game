import * as Icons from "lucide-vue-next";
import type { Component } from "vue";

export const ICONS = {
  PLAY: Icons.Gamepad2,
  INFO: Icons.Info,
  HOME: Icons.Home,
  REFRESH: Icons.RefreshCw,
  USER: Icons.User,
  HEART: Icons.Heart,
  STAR: Icons.Star,
  MOON: Icons.Moon,
  SUN: Icons.Sun,
  DROPLET: Icons.Droplet,
  FLAG: Icons.Flag,
  KEY: Icons.Key,
  LOCK: Icons.Lock,
  BELL: Icons.Bell,
  MUSIC: Icons.Music,
  AWARD: Icons.Award,
  TROPHY: Icons.Trophy,
  MEDAL: Icons.Medal,
  ZAP: Icons.Zap,
  SMARTPHONE: Icons.Smartphone,
  RANKING: Icons.TrendingUp,
  SUCCESS: Icons.CheckCircle,
  ERROR: Icons.XCircle,
  WARNING: Icons.AlertCircle,
  LOADING: Icons.Loader2,
} as const;

export type IconName = keyof typeof ICONS;

export const getIcon = (name: IconName): Component => {
  return ICONS[name];
};
