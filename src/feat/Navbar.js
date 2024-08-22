const Navbar = () => {
  return (
    <div className="grid grid-cols-3 p-8">
      <div className="p-4 bg-green-200 text-center">Nebula - dock</div>
      <div className="p-4 bg-green-200 text-center flex justify-center">
        <div className="bg-purple-300 mx-8">Configurations</div>
        <div className="bg-red-200">Student Dashboard</div>
      </div>
      <div className="p-4 bg-green-200">Unlock A Hint</div>
    </div>
  );
};

export default Navbar;
