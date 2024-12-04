// import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
// import { useState } from "react";

// const input = [
//   {
//     title: "Basic Cleaning",
//     desc: "asd",
//     price: 23,
//   },
//   {
//     title: "Deep Cleaning",
//     desc: "asd",
//     price: 23,
//   },
//   {
//     title: "Office Cleaning",
//     desc: "asd",
//     price: 23,
//   },
//   {
//     title: "Basic Cleaning",
//     desc: "asd",
//     price: 23,
//   },
//   {
//     title: "Basic Cleaning",
//     desc: "asd",
//     price: 23,
//   },
//   {
//     title: "Basic Cleaning",
//     desc: "asd",
//     price: 23,
//   },
// ];

// function Card() {
//   const [counts, setCounts] = useState(Array(input.length).fill(0));

//   function handleAdd(index) {
//     setCounts((prevCounts) =>
//       prevCounts.map((count, i) => (i === index ? count + 1 : count))
//     );
//   }

//   function handleSub(index) {
//     setCounts((prevCounts) =>
//       prevCounts.map((count, i) =>
//         i === index && count > 0 ? count - 1 : count
//       )
//     );
//   }

//   return (
//     <div className="w-full h-full px-[8vw] py-[5vw] pb-[15vw] md:px-[5vw] md:py-[2vw] md:pb-[5vw]">
//       <div
//         className="grid grid-cols-1 gap-[5vw] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
//         md:gap-[2vw]"
//       >
//         {input.map((data, index) => (
//           <div
//             key={index}
//             className="w-full h-full bg-transparent border-2 shadow-lg rounded-[5vw] md:rounded-2xl overflow-hidden p-[5vw] md:p-[2vw]"
//           >
//             <div className="w-full h-1/2 overflow-hidden rounded-[5vw] md:rounded-2xl">
//               <img
//                 className="w-full h-full object-cover"
//                 src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 alt=""
//               />
//             </div>
//             <div className="w-full h-1/2 flex flex-col items-start justify-center px-[2vw] gap-[1vw] py-[3vw] md:py-2 md:gap-0 md:px-2">
//               <h1 className="text-[6vw] md:text-[1.5vw] font-medium">
//                 {data.title}
//               </h1>
//               <h1 className="text-[6vw] md:text-[1.5vw] font-medium bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text text-transparent">
//                 ${data.price}
//               </h1>
//               <p className="text-[5vw] md:text-[1vw]">{data.desc}</p>
//               <div
//                 className="flex rounded-md font-semibold mt-[2vw] md:mt-[1vw] text-lg gap-[1px] "
//               >
//                 <button
//                   className="w-10 h-7 text-lg md:w-12 md:h-9 rounded-l-full md:text-2xl bg-transparent flex items-center hover:shadow-lg hover:border hover:border-gray-200 hover:bg-gray-100 justify-center p-3"
//                   onClick={() => handleAdd(index)}
//                 >
//                   <PlusIcon/>
//                 </button>
//                 <span className="w-10 h-7 text-lg md:w-12 md:h-9 bg-transparent flex items-center justify-center md:text-2xl">{counts[index]}</span>
//                 <button
//                   className="w-10 h-7 text-lg md:w-12 md:h-9 md:text-2xl rounded-r-full hover:shadow-lg hover:border hover:border-gray-200 hover:bg-gray-100 bg-transparent flex items-center justify-center p-3"
//                   onClick={() => handleSub(index)}
//                 >
//                   <MinusIcon/>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Card;






import "./Style.css"
import CardsData from "./CardData";
import { addToCart } from "../Redux/features/CartSlice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';


const Home = () => {
    const dispatch = useDispatch();


    // add to cart
    const send = (e) => {
        dispatch(addToCart(e))
        toast.success("Item added in your cart")
    }

        return (
            <> <section className="item_section mt-4 container">
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {
                        CardsData.map((element) => {
                            return (
                                <>
                                    <Card className="hove  w-[22rem] mb-4 rounded-[10px] cursor-pointer ">
                                    
                                        <Card.Img variant="top" className="rounded-lg mt-5 h-64" src={element.imgdata} alt="Loading..." />
                                        <div className="card_body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h4 className="mt-2 text-[18px] text-[rgba(17,17,17,0.849)] tracking-[0.5px] font-medium" >{element.title}</h4>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <h5 className="text-[15px] tracking-[0.4px] font-normal text-[rgba(17,17,17,0.849)]">{element.desc}</h5>
                                                <span className="text-[15px] tracking-[0.4px] text-[rgba(17,17,17,0.849)]">{element.price}</span>
                                            </div>
                                            <div className="border-b-2 border-black ;
}"></div>
                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                {/* <Button onClick={() => { send(element) }} style={{ width: "150px", background: "#ff3054db", border: 'none' }} variant="outline-light" className="mt-2 mb-2">Add To Cart</Button> */}
                                                <button onClick={() => { send(element) }} style={{ width: "150px", background: "#2D56A2", border: 'none',  }}  className="mt-2 rounded-sm text-blue-300 mb-2">Add To Cart

                                                </button>
                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }

                </div>
            </section>

            </>
        )
    }

    export default Home