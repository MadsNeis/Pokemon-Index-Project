'use client'

import pokeData from '@/data/pokemon_data.json';

import { pokeCard, mapPokeCard } from '@/types/pokeCards';

import PokeTable from "@/components/pokeTable";

import Image from 'next/image';

export default function Home() {

  const cards = pokeData.map((data)=>mapPokeCard(data))
  console.log(cards)

  return (
    <div>
      {/* {cards.map((card: pokeCard, i)=>(
        <Image alt={card.name} key={i} width={50} src={card.image} />
      ))} */}
      <PokeTable cards={cards}/>
    </div>
  );
}
