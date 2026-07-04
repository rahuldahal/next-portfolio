import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
  IconRss,
  IconWorld,
  IconBrandYoutube,
  type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";

const MAP: Record<string, ComponentType<IconProps>> = {
  github: IconBrandGithub,
  x: IconBrandX,
  twitter: IconBrandX,
  linkedin: IconBrandLinkedin,
  email: IconMail,
  mail: IconMail,
  rss: IconRss,
  youtube: IconBrandYoutube,
  site: IconWorld,
  stanford: IconWorld,
};

export function SocialIcon({
  label,
  size = 16,
  className,
}: {
  label: string;
  size?: number;
  className?: string;
}) {
  const Icon = MAP[label.toLowerCase()] ?? IconWorld;
  return <Icon size={size} stroke={1.75} className={className} aria-hidden />;
}
