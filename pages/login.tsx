import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error
    setError("");

    // Validasi email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email not valid");
      return;
    }

    alert("Login Success!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-amber-500">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder=" Your Password"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
        >
          Login
        </button>
        <a
          href="/"
          className="flex justify-center w-full mt-4 px-4 py-2  text-black rounded hover:ring-2 hover:ring-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
        >
          Back
        </a>
      </form>
    </div>
  );
};

export default Login;
