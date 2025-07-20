const Heading = ({ children }: any) => {
  return (
    <h2 className="text-sm sm:text-m text-nowrap font-bold uppercase border-4 py-1 px-4 text-center w-fit tracking-widest ">
      {children}
    </h2>
  );
};

export default Heading;
