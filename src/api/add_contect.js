import { supabase } from "../lib/superbase";
export const addcontect = async (formData) => {
  const { name, email, type, number, subject, message } = formData;

  const { data, error } = await supabase.from("contact").insert([
    {
      name,
      email,
      type,
      number,
      subject,
      message,
    },
  ]);

  if (error) throw error;

  return data;
};
