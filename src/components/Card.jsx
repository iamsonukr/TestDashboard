
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/features/CartSlice";
import CardsData from "./CardData";
import "./Style.css";

function Card() {
  const dispatch = useDispatch();


  // add to cart
  const send = (e) => {
    dispatch(addToCart(e))
    toast.success("Item added in your cart")
  }



  return (
    <div className="w-full h-full px-[8vw] py-[5vw] pb-[15vw] md:px-[5vw] md:py-[2vw] md:pb-[5vw]">
      <div className="grid grid-cols-1 gap-[5vw] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-[2vw]">
        {CardsData.map((element, index) => (
          <div key={index} className="hover w-full bg-transparent border-2 shadow-lg rounded-[5vw] md:rounded-2xl overflow-hidden p-[5vw] md:p-[2vw]">
            <div className="w-full h-1/2 overflow-hidden rounded-[5vw] md:rounded-2xl">
              <img className="w-full h-full object-cover" src={element.imgdata} alt={element.title} />
            </div>
            <div className="w-full h-1/2 flex flex-col items-start justify-center px-[2vw] gap-[1vw] py-[3vw] md:py-2 md:gap-0 md:px-2">
              <h1 className="text-[6vw] md:text-[1.5vw] font-medium">{element.title}</h1>
              <h1 className="text-[6vw] md:text-[1.5vw] font-medium bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text text-transparent">
                ${element.price}
              </h1>
              <p className="text-[5vw] md:text-[1vw]">{element.desc}</p>
              <button onClick={() => send(element)} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
             
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;





