import { useRef } from "react";
import { useState, useEffect } from "react";

export function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput =  useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search===''
            return
        }
        if (search === '') {
         setError('No se puede buscar una Película en blanco')
         return
        }
        if (search.match(/^\d+$/)) {
          setError('No se puede buscar una Película con numeros')
          return
        }
        if (search.length <= 3){
          setError('El nombre de la Película debe ser mayor de 3 caracteres')
          return
        }
        setError(null)
      }, [search]);

      return { error, search, setSearch}
}
