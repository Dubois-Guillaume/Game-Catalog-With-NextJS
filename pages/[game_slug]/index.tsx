import { GetServerSideProps } from "next";
import Image from "next/image";

const DisplayGameInformation: React.FC<{ gameInfo }> = ({ gameInfo }) => {
  // console.log("gameInfo", gameInfo);

  return (
    <div>
      <p>{gameInfo.name}</p>
      <Image
        width={`${gameInfo.cover_width}`}
        height={`${gameInfo.cover_height}`}
        src={`${gameInfo.cover_url}`}
        alt="cover du jeux"
      />
      <p>{gameInfo.games_platforms[0].platform.name}</p>
    </div>
  );
};

export default DisplayGameInformation;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `http://videogame-api.fly.dev/games/slug/${context.params.game_slug}`
  );
  const gameInfo = await response.json();

  console.log("gameInfo", gameInfo.games_platforms[0].platform);

  return {
    props: {
      gameInfo: gameInfo,
    },
  };
};
