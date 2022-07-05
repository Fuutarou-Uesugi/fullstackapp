interface Props{
    dragon: {
        description: string
    }
}
export default function Parrafo ({dragon}:Props){
    return <>
        <p className="
        bg-neutral-800 text-indigo-600 p-6 w-3/6
        "> {dragon.description}</p>
    </>
} 