

export default async function getCar(id:string) {

    await new Promise( (resolve) => setTimeout(resolve, 5000) )

    const response = await fetch(`http://localhost:5000/api/v1/cars/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch cars")
    }
    
    return await response.json()
}