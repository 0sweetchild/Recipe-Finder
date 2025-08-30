// // import React from 'react'
// // import { useGetProductQuery } from '../services/productApi'

// // function Home() {

// // const { data:product } = useGetProductQuery();
// // console.log("product all data",data)

// //   return (
// //     < >
// //     <div className='bg-white h-screen w-screen'>
// //     <div >
// //      {/* {productApi.map((products) => (


// //      ))} */}
// //     </div>

// //     </div>
// //     </>
// //   )
// // }

// // export default Home



// import React from 'react'
// import { useGetProductQuery } from '../services/productApi'

// function Home() {
//   // Fetch products
//   const { data: products, isLoading, error } = useGetProductQuery();

//   if (isLoading) return <p className="text-center mt-10">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-500">Something went wrong!</p>;

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <h1 className="text-2xl font-bold mb-6">Products</h1>
      
//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         { products?.products?map((products) => (
//           <div 
          
//             className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
//           >
//             <h2 className="text-lg font-semibold text-gray-800 mb-2">{products?.name}</h2>
//             <p className="text-gray-600 text-sm mb-3">{products?.description}</p>
//             <p className="text-green-600 font-bold">Rs. {product?.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Home






import React from 'react'
import { useGetProductQuery } from '../services/productApi'

function Home() {
  // Fetch products
  const { data: products, isLoading, error } = useGetProductQuery();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Something went wrong!</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.products?.map((product) => (
          <div 
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{product?.name}</h2>
            <p className="text-gray-600 text-sm mb-3">{product?.description}</p>
            <p className="text-green-600 font-bold">Rs. {product?.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
