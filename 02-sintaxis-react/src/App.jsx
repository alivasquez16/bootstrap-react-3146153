//Importar los estilos y el componente InfoCard
import { InfoCard } from "./components/InfoCard"
import { UserCard } from "./components/UserCard"
import { ListaCanciones } from "./components/ListaCanciones"
import "./App.css"



export function App () {
  return (
    <div>
      <h1>App</h1>
      <InfoCard />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/788.jpeg" 
      userName="Mr. Cookie President"
      />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/598.jpeg" 
      userName="Biblesaurus"
      />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/197.jpeg" 
      userName="Kyle"
      />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/691.jpeg" 
      userName="Scarecrow Beth"
      />
      <ListaCanciones 
      songName="TU VAS SIN"
      artist="Rels B"
      miniature="https://i1.sndcdn.com/artworks-JQ8fK1l5XhX7-0-t500x500.jpg"
      />
      <ListaCanciones 
      songName="Dembow"
      artist="Danny Ocean"
      miniature="https://i1.sndcdn.com/artworks-000283695530-259ojl-t500x500.jpg"
      />
      <ListaCanciones 
      songName="Humo"
      artist="Rupatrupa"
      miniature="http://i.scdn.co/image/ab67616d0000b273e940e244cb8f6fcabf879ab2"
      />
      <ListaCanciones 
      songName="La danza del Fuego"
      artist="Mago de Oz"
      miniature="https://i.scdn.co/image/ab67616d0000b2733e782d96dc4cbe7950a274a9"
      />
    </div>
  )
}