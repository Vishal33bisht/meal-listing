import { useEffect, useState } from "react";

function App() {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Meals Recipes App
      </h1>

    </div>
  );
}

export default App;