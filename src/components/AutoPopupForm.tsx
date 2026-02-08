import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img112 from "../../public/assets/Website Cover Photo - 2026-02-03T190551.100.webp";


const STORAGE_KEY = "auto_popup_form_data";
export default function AutoPopupForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    confirm: false,
  });
  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);


  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    // If data already exists, never open popup
    if (savedData) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);


  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = async (e: any) => {
  e.preventDefault();

  if (!form.confirm) {
    alert("Please confirm the information is correct.");
    return;
  }

  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("phone", form.phone);
  formData.append("pincode", form.pincode);
  formData.append("confirm", String(form.confirm));

  try {
    await fetch(
      "https://formsubmit.co/ajax/livettainterior@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(form)
    );
    e.target.reset();
    setOpen(false);
  } catch (error) {
    console.error(error);
  }
};


  return (
   <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      
    >
      <motion.form
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.9, opacity: 0 }}
  onSubmit={handleSubmit}
  className="relative bg-white/10 backdrop-blur-xl rounded-4xl 
             w-full max-w-[300px] mx-4 text-white shadow-2xl"
>

  {/* Image + Form Wrapper */}
  <div className="flex flex-col items-center">
    <img
      src={img112}
      loading="lazy"
      className="rounded-4xl px-2 pt-2 w-full object-cover"
    />

    {/* Inputs */}
    <div className="space-y-4 flex flex-col items-center w-full p-6">
      <input
        name="name"
        placeholder="Full Name"
        required
        onChange={handleChange}
        className="w-full p-3 rounded-full bg-white/20 
                   placeholder-white/70 focus:outline-none placeholder:text-[10px]"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
        className="w-full p-3 rounded-full bg-white/20 
                   placeholder-white/70 focus:outline-none placeholder:text-[10px]"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        pattern="[0-9]{10}"
        required
        onChange={handleChange}
        className="w-full p-3 rounded-full bg-white/20 
                   placeholder-white/70 focus:outline-none placeholder:text-[10px]"
      />

      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        pattern="[0-9]{6}"
        required
        onChange={handleChange}
        className="w-full p-3 rounded-full bg-white/20 
                   placeholder-white/70 focus:outline-none placeholder:text-[10px]"
      />

      <label className="flex items-center gap-2 text-[10px] text-white/80 self-start">
        <input
          type="checkbox"
          name="confirm"
          onChange={handleChange}
          required
          className="accent-white cursor-pointer"
        />
        I confirm the above information is correct
      </label>
    </div>
  </div>

  {/* Submit */}
  {/* Submit + Close */}
<div className="flex justify-center gap-4 mt-6 p-6">
  <button
    type="button"
    onClick={() => setOpen(false)}
    className="px-6 py-2 bg-white/10 hover:bg-white/20 
               rounded-full transition cursor-pointer text-white/80"
  >
    Close
  </button>

  <button
    type="submit"
    className="px-6 py-2 bg-white/30 hover:bg-white/40 
               rounded-full transition cursor-pointer"
  >
    Submit
  </button>
</div>

</motion.form>

    </motion.div>
  )}
</AnimatePresence>

  );
}
