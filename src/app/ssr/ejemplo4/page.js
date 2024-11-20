import Image from 'next/image';

export const dynamic = 'force-dynamic';

async function fetchPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100'); 
  const data = await res.json();

  const lista = data.results.map((pokemon) => {
    const id = pokemon.url.split('/').slice(-2, -1);
    return { ...pokemon, id };
  });

  return lista
}



export default async function Page() {
  const pokemons = await fetchPokemons()

  return (
    <>
      <h2 className="text-xl font-bold text-center">Ejemplo 4: SSR Next</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} className="py-20 text-center">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <b>{pokemon.name}:</b> {pokemon.id}
          </li>
        ))}
      </ul>
    </>
  );
}
