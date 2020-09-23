import React from "react";
import { Redirect } from "react-router-dom";

import AXDiscover from "@/pages/discover";
import AXFriend from "@/pages/friend";
import AXMine from "@/pages/mine";
import AXRanking from "@/pages/discover/c-pages/ranking";
import AXAlbum from "@/pages/discover/c-pages/album";
import AXArtist from "@/pages/discover/c-pages/artist";
import AXDjradio from "@/pages/discover/c-pages/djradio";
import AXRecommend from "@/pages/discover/c-pages/recommend";
import AXSongs from "@/pages/discover/c-pages/songs";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: AXDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: AXRecommend,
      },
      {
        path: "/discover/ranking",
        component: AXRanking,
      },
      {
        path: "/discover/songs",
        component: AXSongs,
      },
      {
        path: "/discover/artist",
        component: AXArtist,
      },
      {
        path: "/discover/album",
        component: AXAlbum,
      },
      {
        path: "/discover/djradio",
        component: AXDjradio,
      },
    ],
  },
  {
    path: "/friend",
    component: AXFriend,
  },
  {
    path: "/mine",
    component: AXMine,
  },
];

export default routes;
