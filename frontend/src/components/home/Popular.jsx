import MoviesCard from "@/components/card/movie";

const poster = [
    { image: 'https://image.tmdb.org/t/p/original/c0VpT2UiEEwd5vODup31WfXenzb.jpg', title: 'Aquaman' },
    { image: 'https://cf.ltkcdn.net/movies/images/orig/193840-4050x6000-Batman-Vs-Superman-Dawn-of-Justice-Poster.jpg', title: 'Dawn of Justice' }
]

const Popular = () => {
    return (
        <>
            {
                [1, 2].map((element, index) =>
                    <MoviesCard key={index} data={poster[index]} />
                )
            }
        </>
    )
}

export default Popular;