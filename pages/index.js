import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Kiru from "../components/KIRU";
export default function Home() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const onClick = (movie) => {
    router.push(`/movies/${movie.original_title}/${movie.id}`);
  };
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=39777787d740b38fac0a88cac55d6f8d`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <>
    <Kiru title={"POPULAR MOVIE"}/>
    <div className="container">
      
      {!movies && <h4>Loding...</h4>}
      
      {movies?.map((movie) => (
        <div onClick={() => onClick(movie)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
        .title2 {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
        }
      `}</style>
    </div>
    </>
  );
}

// export async function getServerSideProps(){
// back-end server function()
// ex) get Html for movie  not for js to download server and rendering

// }
