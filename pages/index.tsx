import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import { getDatabase } from "../src/database";
import Link from "next/link";

const DisplayGameNameFromAPI: React.FC<{ gamesArray }> = ({ gamesArray }) => {
  return (
    <div>
      <Link href="/api/auth/login">Login</Link>
      <ul>
        {gamesArray.map((game) => {
          return (
            <li key={game.name}>
              <a href={`/${game.slug}`}>{game.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayGameNameFromAPI;

export const getServerSideProps: GetServerSideProps = async () => {
  // const mongodb = await getDatabase();

  // const games = await mongodb.collection("Games").find().toArray();

  // console.log(games);

  const APIGames = await fetch("http://videogame-api.fly.dev/games");
  const gamesArray = await APIGames.json();

  // console.log(21, gamesArray.games);

  return {
    props: {
      gamesArray: gamesArray.games,
      // games: games,
    },
  };
};
