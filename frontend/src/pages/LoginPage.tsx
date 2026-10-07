import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

export const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className=" rounded-lg bg-[#1d1c1c] h-68 w-200 mb-4 opacity-100 p-8 flex flex-col gap-4 ">
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
</div>
</div>
  );
}