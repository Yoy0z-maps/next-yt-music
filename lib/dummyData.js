import { getRandomInt } from "./utils";

export const dummyAllSongList = [
  {
    name: "A Poem Titled You",
    channelId: 1,
    channel: "Youtube Special",
    src: "/music/조유리 - A Poem Titled You.mp4",
    imageSrc: "/img/apoemtitledyou.jpg",
  },
  {
    name: "Bye bye my blue",
    channelId: 2,
    channel: "Yuri Playlist",
    src: "/music/조유리 - Bye bye my blue.mp4",
    imageSrc: "/img/yuriplaylist.jpg",
  },
  {
    name: "Down (Juicy Juicy)",
    channelId: 3,
    channel: "Yuri OST",
    src: "/music/조유리 - DOWN (Juicy Juicy).mp4.mp4",
    imageSrc: "/img/down.jpg",
  },
  {
    name: "Express moon",
    channelId: 4,
    channel: "JOYURI OFFICIAL",
    src: "/music/조유리 - Express moon.mp4",
    imageSrc: "/img/glassy.jpg",
  },
  {
    name: "Glassy",
    channelId: 4,
    channel: "JOYURI OFFICIAL",
    src: "/music/조유리 - Glassy.mp4",
    imageSrc: "/img/glassy.jpg",
  },
  {
    name: "Lemon Black Tea",
    channelId: 4,
    channel: "JOYURI OFFICIAL",
    src: "/music/조유리 - Lemon Black Tea.mp4",
    imageSrc: "/img/loveall.jpg",
  },
  {
    name: "Love Shhh!",
    channelId: 4,
    channel: "JOYURI OFFICIAL",
    src: "/music/조유리 - Love Shhh!.mp4",
    imageSrc: "/img/major.jpg",
  },
  {
    name: "Loveable",
    channelId: 4,
    channel: "JOYURI OFFICIAL",
    src: "/music/조유리 - Loveable.mp4",
    imageSrc: "/img/minor.jpg",
  },
  {
    name: "Rolla Skates",
    channelId: 4,
    channel: "JOYURI OFFICIAL",
    src: "/music/조유리 - Rolla Skates.mp4",
    imageSrc: "/img/major.jpg",
  },
  {
    name: "TAXI",
    channelId: 4,
    channel: "JOYURI OFFICIAL",
    src: "/music/조유리 - TAXI.mp4",
    imageSrc: "/img/loveall.jpg",
  },
  {
    name: "White",
    channelId: 1,
    channel: "Youtube Special",
    src: "/music/조유리 - White.mp4",
    imageSrc: "/img/white.jpg",
  },
  {
    name: "가끔",
    channelId: 2,
    channel: "Yuri Playlist",
    src: "/music/조유리 - 가끔.mp4",
    imageSrc: "/img/sometimes.jpg",
  },
  {
    name: "도망가자",
    channelId: 2,
    channel: "Yuri Playlist",
    src: "/music/조유리 - 도망가자.mp4",
    imageSrc: "/img/run.jpg",
  },
  {
    name: "어떻게 지내",
    channelId: 2,
    channel: "Yuri Playlist",
    src: "/music/조유리 - 어떻게 지내.mp4",
    imageSrc: "/img/how.jpg",
  },
  {
    name: "지금껏 그랬듯 앞으로도 계속",
    channelId: 2,
    channel: "Yuri Playlist",
    src: "/music/조유리 - 지금껏 그랬듯 앞으로도 계속.mp4",
    imageSrc: "/img/still.jpg",
  },
  {
    name: "Luv Luv Luv",
    channelId: 3,
    channel: "Yuri OST",
    src: "/music/조유리 - Luv Luv Luv.mp4",
    imageSrc: "/img/luvluvluv.jpg",
  },
  {
    name: "한 페이지가 될 수 있게",
    channelId: 1,
    channel: "Youtube Special",
    src: "/music/조유리 - Time of our life.mp4",
    imageSrc: "/img/page.jpg",
  },
];

export const getSongsBychannel = (channel) => {
  return dummyAllSongList.filter((song) => song.channel === channel);
};

// playlist
export const dummyPlaylistArray = [
  {
    id: 1,
    owner: "Youtube Special",
    playlistName: "Youtube Special Playlist",
    songList: getSongsBychannel("Youtube Special"),
  },
  {
    id: 2,
    owner: "Yuri Playlist",
    playlistName: "Yuri's Playlist",
    songList: getSongsBychannel("Yuri Playlist"),
  },
  {
    id: 3,
    owner: "Yuri OST",
    playlistName: "Yuri's OST",
    songList: getSongsBychannel("Yuri OST"),
  },
  {
    id: 4,
    owner: "JOYURI OFFICIAL",
    playlistName: "JOYURI OFFICIAL Playlist",
    songList: getSongsBychannel("JOYURI OFFICIAL"),
  },
  {
    id: 5,
    owner: "John Han",
    playlistName: "John Han's playlist music",
    songList: [
      ...getSongsBychannel("Yuri Playlist"),
      ...getSongsBychannel("Yuri OST"),
      ...getSongsBychannel("JOYURI OFFICIAL"),
    ],
  },
];

export const getAllPlaylist = async () => [...dummyPlaylistArray];

export const getPlaylistByOwner = (owner) => {
  return dummyPlaylistArray.filter((playlist) => playlist.owner === owner);
};

export const getPlaylistById = async (id) => {
  return dummyPlaylistArray.filter((playlist) => playlist.id === id)?.[0];
};

export const getSongListTop10 = async () =>
  dummyAllSongList.map((song, idx) => {
    return {
      rank: idx,
      prevRank: idx + getRandomInt(-3, 3),
      ...song,
    };
  });

// channel
export const dummyChannelList = [
  {
    id: 1,
    subscribers: 420000,
    name: "Youtube Special",
    songList: getSongsBychannel("Youtube Special"),
    playlistArray: getPlaylistByOwner("Youtube Special"),
  },
  {
    id: 2,
    subscribers: 370000,
    name: "Yuri Playlist",
    songList: getSongsBychannel("Yuri Playlist"),
    playlistArray: getPlaylistByOwner("Yuri Playlist"),
  },
  {
    id: 3,
    subscribers: 19000,
    name: "Yuri OST",
    songList: getSongsBychannel("Yuri OST"),
    playlistArray: getPlaylistByOwner("Yuri OST"),
  },
  {
    id: 4,
    subscribers: 410000,
    name: "JOYURI OFFICIAL",
    songList: getSongsBychannel("JOYURI OFFICIAL"),
    playlistArray: getPlaylistByOwner("JOYURI OFFICIAL"),
  },
  {
    id: 5,
    subscribers: 3900,
    name: "John Han",
    songList: [
      ...getSongsBychannel("Yuri Playlist"),
      ...getSongsBychannel("JOYURI OFFICIAL"),
    ],
    playlistArray: [
      ...getPlaylistByOwner("Yuri Playlist"),
      ...getPlaylistByOwner("JOYURI OFFICIAL"),
    ],
  },
];

export const getChannelById = async (id) => {
  return dummyChannelList.filter((channel) => channel.id === id)?.[0];
};

// home - 카테고리
export const homeCategoryList = [
  {
    label: "운동",
    src: "https://images.unsplash.com/photo-1487956382158-bb926046304a",
  },
  {
    label: "행복한 기분",
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    label: "에너지 충전",
    src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
  },
  {
    label: "휴식",
    src: "https://images.unsplash.com/photo-1528962862197-29c4f24ccc04",
  },
  {
    label: "집중",
    src: "https://images.unsplash.com/photo-1472745433479-4556f22e32c2",
  },
  {
    label: "출퇴근길",
    src: "https://images.unsplash.com/photo-1657073895095-b050616ab369",
  },
  {
    label: "로맨스",
    src: "https://images.unsplash.com/photo-1581700501514-95e559cff7e9",
  },
  {
    label: "파티",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    label: "슬픔",
    src: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc",
  },
  {
    label: "잠잘 때",
    src: "https://images.unsplash.com/photo-1429117237875-aa29229d99f0",
  },
];

// 분위기 및 장르
// Array.from(document.querySelectorAll("#items")[7].querySelectorAll("button")).map( el => el.textContent.replaceAll("\n","").trim())
export const dummyGenreList = [
  "잠잘 때",
  "인디 & 얼터너티브",
  "계절 변화를 위한 테마",
  "국내 발라드",
  "국내 록/얼터너티브",
  "슬픔",
  "연말연시",
  "아프리카",
  "출퇴근 & 등하교",
  "사랑 노래",
  "한국 힙합",
  "힙합",
  "국내 R&B",
  "2010년대",
  "R&B 및 소울",
  "록",
  "국내 댄스",
  "힘이 필요할 때",
  "편안한 분위기",
  "운동할 때",
  "OST & 뮤지컬",
  "파티 음악",
  "행복한 기분",
  "트로트",
  "Reggae & Caribbean",
  "집중할 때",
  "1980년대",
  "2000년대",
  "포크/어쿠스틱",
  "크리스마스",
  "1990년대",
  "Pop",
  "블랙 라이브즈 매터",
  "재즈",
  "클래식",
  "가족",
  "1970년대 음악",
  "아랍 음악",
  "1960년대",
  "댄스 & 일렉트로닉",
  "만도팝 및 캔터팝",
  "컨트리 & 아메리카나",
  "J팝",
  "블루스",
  "라틴",
  "메탈",
  "이라크 음악",
  "발리우드 & 인도",
];
