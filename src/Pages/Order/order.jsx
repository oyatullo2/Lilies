import { useContext } from "react";
import { MainProvider } from "../../Context/GlobaState";
export const Order = () => {
  const {closeCart, setCloseCart} = useContext(MainProvider);

  const showOrders = (e) => {
    if (e.target.id === "overlay") {
      setCloseCart(false);
    }
  };
  return (
    <>
      <div
      style={{display: closeCart ? "block" : "none"}}
        id="overlay"
        onClick={showOrders}
        className="w-full flex absolute top-0 right-0 bg-black/30 z-[-5px] h-screen max-h-full"
      >
        <div className="absolute top-0 right-0 bg-white w-full max-w-[760px] h-screen max-h-full">
          <div className="w-full h-screen max-h-full bg-white max-w-[760px] absolute top-0 right-0">
            <div className="w-full max-w-[700px] mx-auto flex h-full flex-col">
              <p className="text-[#00302E] font-[600] text-[17px] mb-[24px] mt-[50px]">
                Your Order
              </p>
              <div className="flex justify-between mb-[36px] w-full">
                <p className="text-[#000000B0] w-full text-[13px] font-[500]">
                  Item
                </p>
                <div className="w-full flex justify-around">
                  <p className="text-[#000000B0] text-[13px] font-[500]">Qty</p>
                  <p className="text-[#000000B0] text-[13px] font-[500]">
                    Unit Price
                  </p>
                  <p className="text-[#000000B0] text-[13px] font-[500]">
                    Status
                  </p>
                </div>
              </div>
              <div className="w-full gap-[40px] flex flex-col">
                <div className="w-full flex items-center justify-between">
                  <div className="w-full flex items-center gap-[15px]">
                    <img
                      src="/bon-vivant-qom5MPOER-I-unsplash 2.svg"
                      className="w-[70px] h-[70px]"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="text-[#00302E] text-[17px] font-[700]">
                        Stir Fry Pasta
                      </p>
                      <p className="text-[#C92C33] text-[13px] font-[600]">
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-evenly">
                    <p className="text-[17px] font-[700] text-[#00302E]">3</p>
                    <p className="text-[17px] font-[700] text-[#00302E]">
                      N,1000.00
                    </p>
                    <p className="text-[15px] font-[600] text-[#3A8F4D]">
                      Delivered
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="w-full flex items-center gap-[15px]">
                    <img
                      src="/bon-vivant-qom5MPOER-I-unsplash 2.svg"
                      className="w-[70px] h-[70px]"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="text-[#00302E] text-[17px] font-[700]">
                        Stir Fry Pasta
                      </p>
                      <p className="text-[#C92C33] text-[13px] font-[600]">
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-evenly">
                    <p className="text-[17px] font-[700] text-[#00302E]">3</p>
                    <p className="text-[17px] font-[700] text-[#00302E]">
                      N,1000.00
                    </p>
                    <p className="text-[15px] font-[600] text-[#3A8F4D]">
                      Delivered
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="w-full flex items-center gap-[15px]">
                    <img
                      src="/bon-vivant-qom5MPOER-I-unsplash 2.svg"
                      className="w-[70px] h-[70px]"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="text-[#00302E] text-[17px] font-[700]">
                        Stir Fry Pasta
                      </p>
                      <p className="text-[#C92C33] text-[13px] font-[600]">
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-evenly">
                    <p className="text-[17px] font-[700] text-[#00302E]">3</p>
                    <p className="text-[17px] font-[700] text-[#00302E]">
                      N,1000.00
                    </p>
                    <p className="text-[15px] font-[600] text-[#FF3A44]">
                      Cooking
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="w-full flex items-center gap-[15px]">
                    <img
                      src="/bon-vivant-qom5MPOER-I-unsplash 2.svg"
                      className="w-[70px] h-[70px]"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="text-[#00302E] text-[17px] font-[700]">
                        Stir Fry Pasta
                      </p>
                      <p className="text-[#C92C33] text-[13px] font-[600]">
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-evenly">
                    <p className="text-[17px] font-[700] text-[#00302E]">3</p>
                    <p className="text-[17px] font-[700] text-[#00302E]">
                      N,1000.00
                    </p>
                    <p className="text-[15px] font-[600] text-[#FF3A44]">
                      Cooking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
