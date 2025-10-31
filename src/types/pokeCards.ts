export type pokeCard = {
    id: number,
    image: string,
    shinyImage: string,
    name: string,
    types: string[],
    abilities: string[],
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number,
    weight: number,
}

export function mapPokeCard(data: any): pokeCard{
    return {
        id: data.id,
        image: data.image,
        shinyImage: data.shiny_image,
        name: data.name,
        types: data.types,
        abilities: data.abilities,
        hp: data.stats.hp,
        attack: data.stats.attack,
        defense: data.stats.defense,
        specialAttack: Number(data.stats['special-attack']),
        specialDefense: Number(data.stats['special-defense']),
        speed: data.stats.speed,
        weight: data.weight.pounds, 
    }
}