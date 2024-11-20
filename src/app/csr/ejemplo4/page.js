'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function Page() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
            const data = await res.json();

            const lista = data.results.map((pokemon) => {
                const id = pokemon.url.split('/').slice(-2, -1);
                return { ...pokemon, id };
            });

            setPokemons(lista);
        };

        fetchData();
    }, []);

    return (
        <>
            <h2 className="text-xl font-bold text-center">Ejemplo 4: CSR React</h2>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id} className="py-20 text-center">
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                            alt={pokemon.name}
                            className="mx-auto"
                            width={200}
                            height={200}
                        />
                        <b>{pokemon.name}:</b> {pokemon.id}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Page;
