import { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider());
    navigate('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white"
    >
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl w-[95%] max-w-sm shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Welcome back</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-900 focus:outline-none"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-900 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-medium"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-medium"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </motion.div>
  );
};

export default Login;
