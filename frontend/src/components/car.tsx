
export interface CarType{
    id: number, 
    vehicle: string,
    type: string,
    color: string,
    fuel: string,
    manufacturer: string,
    mass: number,
    imageUrl: string,
    price: number,
    description: string,
    yearMade: number,
    horsePower: number
}

export default function Car({ car }: { car: CarType }) {
    return (
        <div>
            <h2>{car.id}</h2>
            <p>{car.vehicle}</p>
        </div>
    );
}