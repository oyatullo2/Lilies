export const Profile = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="w-full max-w-[1150px] mx-auto flex mt-[15px] justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <img className="w-[50px] h-[50px]" src="/40w 1 (1).svg" alt="" />
            <p className="text-[#00302E] font-[600] text-[19px]">
              Good morning, Oghenevwede!
            </p>
          </div>
          <i className="fa-solid fa-bars text-black font-[700] text-[20px]"></i>
        </div>
        <div className="w-full max-w-[200px] bg-red-600"></div>
      </div>
    </>
  );
};
