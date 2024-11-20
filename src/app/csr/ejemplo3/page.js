'use client'
import { useState, useEffect } from "react";


function Page() {
    const [characters, setcharacter] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setcharacter(data.results));

    }, [])


    return (
        <>      
             <h2 className="text-xl font-bold text-center">Ejemplo 3: CSR React</h2>
            <ul>
                {
                    characters.map(character => (
                        <li key={character.id} className="py-20 text-center">
                            <img src={character.image} alt="foto" className="mx-auto" />
                            <b>{character.name}:</b> {character.created}
                        </li>
                    ))

                }
            </ul>
        </>
    )
}

export default Page  
