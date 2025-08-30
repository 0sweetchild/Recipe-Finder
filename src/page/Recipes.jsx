import React from 'react'

function Recipes() {
  // Recipe list (can expand later)
  const recipes = [
    {
      name: "Food One",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Food Two",
      image: "https://via.placeholder.com/150/92c952"
    },
    {
      name: "Food Three",
      image: "https://via.placeholder.com/150/771796"
    }
  ];

  return (
    <>
      <div className="p-10">
        <span className="text-2xl font-bold">What would you eat today?</span>

        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {recipes?.map((food, index) => (
            <div 
              key={index} 
              className="shadow-md w-60 h-72 rounded-xl p-4 flex flex-col items-center bg-white hover:scale-105 transition-transform"
            >
              <img 
                src={food?.image ?? "https://via.placeholder.com/150"} 
                alt={food?.name ?? "Unknown Food"}  
                className="w-40 h-40 object-cover rounded-lg"
              />
              <span className="mt-3 font-semibold">
                {food?.name ?? "Unnamed Dish"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Recipes
