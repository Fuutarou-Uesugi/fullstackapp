
import {gql, useQuery} from '@apollo/client'
interface Coete {
    ships: Array<Iconos>
}
interface Iconos{
    name : string
    home_port: string
    image: string
}
const script= gql`
{
    launchesPast(limit: 10) {
      ships {
        name
        home_port
        image
      }
    }
  }
`
export const CoetesImagen = () => {
    const {data,loading,error} = useQuery(script)
    return <>
        {
            loading
            ? <p>cargando el componente</p>
            : data.launchesPast.map( ( {ships}: Coete) => {
                return ships.map( ({home_port,image,name}) => {
                    return <div className='
                    m-5 bg-neutral-600 p-6 rounded hover:bg-indigo-500 transition
                    ' key={image}>
                        <h1>{home_port}</h1>
                        <img src={image}></img>
                        <img src={image}>otra imagen con errore en el linter</img>
                        <img src={image}>otro desde una rama diferente</img>
                        <img src={image}>otro desde una rama diferente 2</img>
                        <img src={image} alt='este texto pasara la prueba de codacy'>esta es otra imagen</img>
                        <p>{name}</p>
                    </div>
                })
            })
        }
    </>
}