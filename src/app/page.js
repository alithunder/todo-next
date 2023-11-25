"use client"
import Image from 'next/image'
import Header from './componets/header/header'
import Main from './componets/main/main'
import Card from './componets/card/card'
import { useAppStore } from "../store";
export default function Home() {
  const {row ,setRow} = useAppStore();
  const handleDelete = (id) => {
    setRow(row.filter((el) => el.id !== id));
  };
  return (
    <div>
      <Header/>
      <Main/>
      {
        row.map((el)=>{
          return(
            <Card text={el} handleDelete={() => handleDelete(el.id)}/>
          )
        })
      }
      <div className='container'><h3>total list {row.length}</h3></div>

      </div>
  )
}
