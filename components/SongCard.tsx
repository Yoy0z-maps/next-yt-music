import { TopSong } from "@/types";

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return <div>{song.name}</div>;
};

export default SongCard;
