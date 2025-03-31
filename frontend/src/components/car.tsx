import "../index.css";

export interface Car{
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


export default function CarCard({ car }: { car: Car }) {
    const imageFinalUrl = "http://localhost:3000" + car.imageUrl;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img src={imageFinalUrl} alt={car.vehicle} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-lg font-bold mt-2">{car.vehicle}</h2>
          <p className="text-gray-600">{car.manufacturer} - {car.yearMade}</p>
          <p className="text-gray-800 font-semibold">${car.price.toLocaleString()}</p>
        </div>
    );
}