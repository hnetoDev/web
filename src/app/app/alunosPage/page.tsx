'use client'
import { Aluno } from "@/app/types"
import { CardAluno } from "./components/cardAluno"
import { IoPersonAddOutline } from "react-icons/io5";
import { FaAward, FaBackward, FaForward, FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import './style.css'
import {useSwipeable} from 'react-swipeable'
import Swipeable from "../_componnents/swipeable";
import { useEffect, useState } from "react";
import { Alunos } from "./components/alunos";
import { CaixaPesquisa } from "./components/caixaPesquisa";



export default function AlunosPage(){
  const [data,setData] = useState<Aluno[]>();

  useEffect(()=>{

    async function getData(){
      const data = await fetch('http://localhost:8000/api/user',{
      method:'GET',
  });
   const resUser: Aluno[] = await data.json()
   setData(resUser)
    }
    
   getData()

  },[])
  let count = 0
  return(
    
    <div className="flex flex-col h-screen w-full space-y-5 css p-10">
      <h1 className="text-3xl font-bold text-white text-center">Alunos Cadastrados no TEA</h1>
      <CaixaPesquisa/>
      <div className="text-zinc-300 mt-3 ">
        <h1 className="text-center text-zinc-300">Arraste para direita para editar</h1>
        
      </div>
      <div className="w-full h-max m-auto  p-6 ">
        <div className="flex h-10 ">
          <div className="w-16 flex">
            <h1 className="text-white m-auto">Foto</h1>
          </div>
          <div className="w-32 flex">
            <h1 className="text-white m-auto max-sm:ml-16">Nome</h1>
          </div>
          <div className=" w-72 max-sm:invisible flex">
            <h1 className="text-white m-auto ml-40">Email</h1>
          </div>
          <div className="w-28 ml-3 max-sm:invisible flex">
            <h1 className="text-white m-auto">Status</h1>
          </div>
        </div>
        {data ? <Alunos data={data!}/> : null}
      </div>
    </div>
  )
}