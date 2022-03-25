import { GetServerSideProps } from "next";
import Image from "next/image";

const DisplayGameInformation: React.FC<{ gameInfo }> = ({ gameInfo }) => {
  console.log("gameInfo", gameInfo);

  return (
    <div>
      <p>{gameInfo.name}</p>
      <Image
        width={`${gameInfo.game_screenshots[0].width}`}
        height={`${gameInfo.game_screenshots[0].height}`}
        src={`${gameInfo.game_screenshots[0].url}`}
        alt="cover du jeux"
      />
    </div>
  );
};

export default DisplayGameInformation;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `http://videogame-api.fly.dev/games/slug/${context.params.game_slug}`
  );
  const gameInfo = await response.json();

  console.log("gameInfo", gameInfo);

  return {
    props: {
      gameInfo: gameInfo,
    },
  };
};
