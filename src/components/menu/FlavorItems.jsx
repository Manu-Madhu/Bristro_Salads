import Card from "./Card";

const FlavorItems = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-col items-center font-primaryFont pt-5  md:pt-20 p-5">
      <div className="py-10 text-center">
        <p className="text-4xl tracking-wider uppercase">{data?.title}</p>
      </div>

      <div className="max-w-[1280px] mx-auto mt-9 md:mt-14 
      grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {data?.data?.map((item) => (
          <Card key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FlavorItems;
