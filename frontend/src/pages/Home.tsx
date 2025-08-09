import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-4">Welcome to Tiki Taka Toe!</h2>
      <p className="mb-4">Click Play to start the game.</p>
      <a href="/game" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Play Now
      </a>
    </MainLayout>
  );
}
