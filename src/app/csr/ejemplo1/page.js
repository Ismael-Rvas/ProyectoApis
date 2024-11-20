'use client'

import { useEffect, useState } from "react"


function Page() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [num, setNum] = useState(Math.floor(Math.random() * 100))
    const [hora, setHora] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setIsLoaded(true)
        console.log(num, hora);
    }, [])

    if (isLoaded) return (
        <>
            <h2 className="text-xl font-bold text-center">Ejemplo 1: CSR React</h2>
            <p className="text-8xl font-bold text-center">
                {num}
            </p>
            <p className="text-8xl font-bold text-center">
                {hora}
            </p>
        </>
    )
}

export default Page  
