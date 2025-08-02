export default function navbar() {
  return (
    <>
      <div className="navbar flex flex-row justify-center items-center gap-4 font-bold m-4">
        <div className="nav-item hover:text-teal-300">Home</div>
        <div className="nav-item hover:text-teal-300">About</div>
        <div className="nav-item hover:text-teal-300">My Art</div>
      </div>
    </>
  );
}
