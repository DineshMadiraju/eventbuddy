export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b bg-white px-8 py-4">

      <h1 className="text-2xl font-bold text-blue-600">
        EventBuddy 🎉
      </h1>


      <div className="flex items-center gap-4">

        <span className="text-gray-600">
          Welcome, User
        </span>


        <button
          className="
          rounded-lg
          bg-gray-100
          px-4
          py-2
          hover:bg-gray-200
          "
        >
          Profile
        </button>

      </div>

    </nav>
  );
}