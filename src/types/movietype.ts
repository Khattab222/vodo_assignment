

export type TMovie = {
    backdrop_path:string
    id:number
    original_title:string
    overview:string
    poster_path:string
    media_type:string
    adult:boolean
    title:string
    original_language:string
    genre_ids:number[]
    popularity:number
    release_date:string
    video:boolean
    vote_average:number
    vote_count:number
    production_companies?:{name:string}[]
    production_countries?:{name:string}[]
    homepage?:string



}