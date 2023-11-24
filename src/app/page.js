"use client"
import Image from 'next/image'
import Header from './componets/header/header'
import Main from './componets/main/main'
import Card from './componets/card/card'
import { useAppStore } from "../store";
export default function Home() {
  const {row } = useAppStore();
  return (
    <div>
      <Header/>
      <Main/>
      {
        row.map((el)=>{
          return(
            
            <Card text={el}/>
          )
        })
      }
      </div>
  )
}
