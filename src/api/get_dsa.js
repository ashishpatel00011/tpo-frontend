import { supabase } from "../lib/superbase";

export async function getArray() {
  try {
    const { data, error } = await supabase
      .from('arrays') 
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error in getArray:', error);
  }
}
export async function getbinery() {
  try {
    const { data, error } = await supabase
      .from('binery') 
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error in getArray:', error);
  }
}
export async function getmath() {
  try {
    const { data, error } = await supabase
      .from('math') 
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error in getArray:', error);
  }
}

export async function getstring() {
  try {
    const { data, error } = await supabase
      .from('strings') 
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error in getArray:', error);
  }
}
export async function getlogical() {
  try {
    const { data, error } = await supabase
      .from('logical') 
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error in getArray:', error);
  }
}
export async function getdp_graph() {
  try {
    const { data, error } = await supabase
      .from('Dp_Graph') 
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error in getArray:', error);
  }
}
export async function getsorting() {
  try {
    const { data, error } = await supabase
      .from('sorting') 
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error in getArray:', error);
  }
}
export async function getlinkedkist() {
  try {
    const { data, error } = await supabase
      .from('linkedlist') 
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error in getArray:', error);
  }
}