export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="max-w-4xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Tiki Taka Toe. All rights reserved.</p>
      </div>
    </footer>
  );
}
