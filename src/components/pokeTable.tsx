//External Resources used were Mui.com and React.dev

import{ TableContainer, Table, TableHead, TableBody, TableCell } from "@mui/material"

import StyledTableRow from "./styledTableRow"

import StyledTableCell from "./styledTableCell"

import { pokeCard } from "@/types/pokeCards"

import Image from "next/image"

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

import { useState } from "react"

export default function PokeTable(props: {cards: pokeCard[]}){
    
    const [sortedCards, setSortedCards] = useState<pokeCard[]>([...props.cards])

    const [ascending, setAscending] = useState<boolean>(true)

    const [filteredTypes, setFilteredTypes] = useState<string[]>([])

    const [filteredAbilities, setFilteredAbilities] = useState<string[]>([])

    const [showShiny, setShowShiny] = useState<boolean>(false)

    function addTypeFilter(filter: string){
        setFilteredTypes(prev => 
            prev.includes(filter) ? prev.filter (f => f !== filter) : [...prev, filter]
        )
    }

    function addAbilityFilter(filter: string){
        setFilteredAbilities(prev => 
            prev.includes(filter) ? prev.filter (f => f !== filter) : [...prev, filter]
        )
    }

    function getTypeFromCost(cost: string, i: number){
        const known = ["grass", "poison", "fire", "flying", "water", "bug", "normal", "ground", "fairy", "fighting", "psychic", "ice", "ghost", "rock", "electric", "dragon", "dark", "steel"]
        if(known.includes(cost)){
            const isActive = filteredTypes.includes(cost)
            return (
                <span
                    key={`${cost}-${i}`}
                    onClick={() => addTypeFilter(cost)}

                    style={{
                        display: "inline-block",
                        marginRight: 6,
                        padding: "2px 8px",
                        borderRadius: 10,
                        cursor: "pointer",
                        userSelect: "none",
                        border: "1px solid rgba(0,0,0,0.1)",
                        backgroundColor: isActive ? "#1976d2" : "#f0f0f0",
                        color: isActive ? "white" : "black",
                        fontSize: 12,
                    }}
                >
                    {cost}
                </span>
            )
        }
    }

    function getAbilityTag(ability: string, i: number){
        const isActive = filteredAbilities.includes(ability)
        return (
          <span
            key={`${ability}-${i}`}
            onClick={() => addAbilityFilter(ability)}
            // style added with AI
            style={{
              display: "inline-block",
              marginRight: 6,
              padding: "2px 8px",
              borderRadius: 10,
              cursor: "pointer",
              userSelect: "none",
              border: "1px solid rgba(0,0,0,0.1)",
              backgroundColor: isActive ? "#1976d2" : "#f0f0f0",
              color: isActive ? "white" : "black",
              fontSize: 12,
            }}
          >
            {ability}
          </span>
        )
      }
      

    function sortID(col: "id"){
        if (col == "id")
        setSortedCards([...sortedCards.sort((a: pokeCard, b:pokeCard)=>ascending ? a[col] - b[col] : b[col] - a[col])])

        setAscending(!ascending)

    }

    function sortHP(col: "hp"){
        if (col == "hp")
        setSortedCards([...sortedCards.sort((a: pokeCard, b:pokeCard)=>ascending ? a[col] - b[col] : b[col] - a[col])])

        setAscending(!ascending)

    }

    function sortAttack(col: "attack"){
        if (col == "attack")
        setSortedCards([...sortedCards.sort((a: pokeCard, b:pokeCard)=>ascending ? a[col] - b[col] : b[col] - a[col])])

        setAscending(!ascending)

    }

    function sortDefense(col: "defense"){
        if (col == "defense")
        setSortedCards([...sortedCards.sort((a: pokeCard, b:pokeCard)=>ascending ? a[col] - b[col] : b[col] - a[col])])

        setAscending(!ascending)

    }
    function sortSAttack(col: "specialAttack"){
        if (col == "specialAttack")
        setSortedCards([...sortedCards.sort((a: pokeCard, b:pokeCard)=>ascending ? a[col] - b[col] : b[col] - a[col])])

        setAscending(!ascending)

    }

    function sortSDefense(col: "specialDefense"){
        if (col == "specialDefense")
        setSortedCards([...sortedCards.sort((a: pokeCard, b:pokeCard)=>ascending ? a[col] - b[col] : b[col] - a[col])])

        setAscending(!ascending)

    }

    function sortSpeed(col: "speed"){
        if (col == "speed")
        setSortedCards([...sortedCards.sort((a: pokeCard, b:pokeCard)=>ascending ? a[col] - b[col] : b[col] - a[col])])

        setAscending(!ascending)

    }

    function sortWeight(col: "weight"){
        if (col == "weight")
        setSortedCards([...sortedCards.sort((a: pokeCard, b:pokeCard)=>ascending ? a[col] - b[col] : b[col] - a[col])])

        setAscending(!ascending)

    }

    const filteredCards = sortedCards.filter(card => {
        const matchesType =
          filteredTypes.length === 0 ? true : filteredTypes.length === 1
              ? card.types.includes(filteredTypes[0])
              : filteredTypes.length === card.types.length && filteredTypes.every(t => card.types.includes(t))
      
        const matchesAbility =
          filteredAbilities.length === 0 ? true : filteredAbilities.length === 1
          ? card.abilities.includes(filteredAbilities[0])
          : filteredAbilities.length === card.abilities.length && filteredAbilities.every(a => card.abilities.includes(a))
      
        return matchesType && matchesAbility
      })

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell width={60}>id <UnfoldMoreIcon sx={{verticalAlign: "middle"}} onClick={()=>{sortID("id")}} /></StyledTableCell>
                        <StyledTableCell onClick={() => setShowShiny(s => !s)}>Image</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>{filteredTypes.length === 0 ? "Type":getTypeFromCost(filteredTypes[0], 0)}</StyledTableCell>
                        <StyledTableCell>Abilities</StyledTableCell>
                        <StyledTableCell>hp <UnfoldMoreIcon sx={{verticalAlign: "middle"}} onClick={()=>{sortHP("hp")}} /></StyledTableCell>
                        <StyledTableCell>Attack <UnfoldMoreIcon sx={{verticalAlign: "middle"}} onClick={()=>{sortAttack("attack")}} /></StyledTableCell>
                        <StyledTableCell>Defense <UnfoldMoreIcon sx={{verticalAlign: "middle"}} onClick={()=>{sortDefense("defense")}} /></StyledTableCell>
                        <StyledTableCell>Special Attack <UnfoldMoreIcon sx={{verticalAlign: "middle"}} onClick={()=>{sortSAttack("specialAttack")}} /></StyledTableCell>
                        <StyledTableCell>Special Defense <UnfoldMoreIcon sx={{verticalAlign: "middle"}} onClick={()=>{sortSDefense("specialDefense")}} /></StyledTableCell>
                        <StyledTableCell>Speed <UnfoldMoreIcon sx={{verticalAlign: "middle"}} onClick={()=>{sortSpeed("speed")}} /></StyledTableCell>
                        <StyledTableCell>Weight <UnfoldMoreIcon sx={{verticalAlign: "middle"}} onClick={()=>{sortWeight("weight")}} /></StyledTableCell>

                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        filteredCards.map((card, i)=>(
                            <StyledTableRow key={i}>
                                <StyledTableCell>{card.id}</StyledTableCell>
                                <StyledTableCell><Image alt={card.name} width={50} height={50} src={showShiny && card.shinyImage ? card.shinyImage : card.image}/></StyledTableCell>
                                <StyledTableCell>{card.name}</StyledTableCell>
                                <StyledTableCell>{card.types.map((t, idx)=> getTypeFromCost(t, idx))}</StyledTableCell>
                                <StyledTableCell>{card.abilities.map((a, idx) => getAbilityTag(a, idx))}</StyledTableCell>
                                <StyledTableCell>{card.hp}</StyledTableCell>
                                <StyledTableCell>{card.attack}</StyledTableCell>
                                <StyledTableCell>{card.defense}</StyledTableCell>
                                <StyledTableCell>{card.specialAttack}</StyledTableCell> 
                                <StyledTableCell>{card.specialDefense}</StyledTableCell>
                                <StyledTableCell>{card.speed}</StyledTableCell>
                                <StyledTableCell>{card.weight}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
