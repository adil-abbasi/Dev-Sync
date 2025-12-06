import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <h1 className="text-3xl font-bold">Dashboard (protected)</h1>
      </div>
    </>
  );
};

export default Dashboard;
