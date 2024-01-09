import useFetch from './useFetch';

const CustomHook=()=>{
    const data=useFetch('https://jsonplaceholder.typicode.com/users')
    return(
    <>
    {data.map((res)=>{
        return(
            <div key={res.id}>
                {res.id}. {res.name}
            </div>
        )     
    })}
    </>)
}

export default CustomHook