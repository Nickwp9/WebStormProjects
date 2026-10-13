import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

export const RegisterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className=" rounded-lg bg-[#1d1c1c] h-95 w-200 mb-4 opacity-100 p-8 flex flex-col gap-4 ">
    <h1 className="text-3xl h-20">Register</h1>
  <input
    type="email"
    placeholder="Email"
    className="bg-neutral-800 text-[#f5f5f5] px-4 py-3 rounded-full border border-neutral-700 focus:outline-none focus:border-[#b7ff00]"
  />
  <input
    type="password"
    placeholder="Password"
    className="bg-neutral-800 text-[#f5f5f5] px-4 py-3 rounded-full border border-neutral-700 focus:outline-none focus:border-[#b7ff00]"
  />
  <input
  type = "password"
  placeholder="Confirm password"
  className="bg-neutral-800 text-[#f5f5f5] px-4 py-3 rounded-full border border-neutral-700 focus:outline-none focus:border-[#b7ff00]"></input>
  <br></br>
  <button className="h-15 w-50 flex justify-center mx-auto bg-[#b6ff00] text-black font-semibold py-3 rounded-md hover:opacity-90">Register</button>
</div>
</div>
  );
}