import { supabase } from "../lib/superbase";

export const addInterviewPost = async (formData) => {
  const { username, title, experience, company, questions, tips, photo } = formData;
  const { data, error } = await supabase.from("interview").insert([
    {
      username,
      title,
      experience,
      company,
      questions,
      tips,
      photo,
    },
  ]);

  if (error) throw error;

  return data;
};
