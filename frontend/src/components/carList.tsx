import { useEffect, useState } from "react";
import CarCard from "./Car";
import { Car } from "./Car";
import { useNavigate } from "react-router-dom";
import RoutingService from "../services/RoutingService";
import "../index.css";

export default function CarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const BACKEND_URL = "http://localhost:3000/carcatalog";
  const navigate = useNavigate();

  const fetchCars = () => {
    setLoading(true);
    setError(null);
    fetch(`${BACKEND_URL}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        RoutingService.navigateToError(navigate);
      });
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div>
      {loading && <p>Loading cars...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
