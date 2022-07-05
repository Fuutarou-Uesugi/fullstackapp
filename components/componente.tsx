import {gql, useQuery} from '@apollo/client'
import Parrafo from './listaeparrafoscoete'

interface Coete {
    id : string
    dragon: {
        description: string
    }
}
const script= gql`
{
    capsules(limit: 4) {
      id
      dragon {
        description
      }
    }
  }
`
export const Componente = () => {
    const {data,loading,error} = useQuery(script)

    if (error) return <>
            <p>error</p>
        </>

    return <>
        {
            loading
            ? <p className='uppercase'>esperando</p>
            : data.capsules.map(( {id,dragon}:Coete) => {
                return <Parrafo key={id} dragon={dragon}/>
            })
        }
    </>
}