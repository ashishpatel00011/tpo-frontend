import { supabase } from "../lib/superbase";

export const getInterviewPosts = async () => {
  const { data, error } = await supabase
    .from("interview")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const updateInterviewPost = async (id, updatedPost) => {
  const { title, experience, questions, tips } = updatedPost;

  if (!title || !experience || !questions || !tips) {
      throw new Error("All fields (title, experience, questions, tips) are required for updating the post.");
  }

  const { data, error } = await supabase
    .from("interview")
    .update({
        title,
        experience,
        questions,
        tips
    })
    .match({ id: id }); 

  if (error) {
      console.error("Error updating post:", error);
      throw error;
  }

  return data;
};
