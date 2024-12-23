import { Navbar } from '../../components/Navbar'

export default function Login() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded bg-gray-700 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input type="password" id="password" className="w-full p-2 rounded bg-gray-700 text-white" required />
          </div>
          <button type="submit" className="w-full bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded transition duration-300">
            Accedi
          </button>
        </form>
      </main>
    </div>
  )
}

