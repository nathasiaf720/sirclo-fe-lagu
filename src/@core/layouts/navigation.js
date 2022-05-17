import {
  Layers,
  TrendingUp,
  Home,
  Music
} from "react-feather";

export const navigationData = [
  {
    id: "home",
    title: "Home",
    icon: <Home size={24} />,
    href: "/home",
  },
  {
    id: "top_tracks",
    title: "Top Tracks",
    icon: <Music size={25} />,
    href: "/top_tracks",
  },
  {
    id: "top_artists",
    title: "Top Artists",
    icon: <TrendingUp size={25} />,
    href: "/top_artists",
  },
];
