import {useEffect, userEffect, useState} from "react"
import { CarType } from "./car"
import Car from "./car";
import { CarType } from "./car";



export default function CarList(){

    const [cars, setCars] = useState<Car[]>([])
    const [error, setError] = useState(null);
    const [errorServer, setErrorServer] = useState("");
    const [loading, setLoading] = useState(true);


    const fetchCars = () => {
        setLoading(true)
        setError(null)
        fetch("http://localhost:3000/cars")
        .then((response) => {
            if(!response.ok){
                throw new Error(`Server responded with a status ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            setCars(data)
            setLoading(false)
        })
        .catch((error) => {
            setError(error.message)
            setLoading(false)
        });
    };


    useEffect(() => {
        fetchCars()
    }, [])

    return (
        <> 
        <div>
            {cars.map((car, index) => (
                 <Car car={car}></Car>
            ))}
        </div>
        </>
    )

}