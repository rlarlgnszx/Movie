import Head from "next/head";
export default function Kiru({title}){
    return (
        <div>
            <Head>
                <title>{title} | NEXT MOVIE</title>
            </Head>
        </div>
    )
}