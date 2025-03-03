 "use server"
import { User ,Product} from "./model";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
export const addUser = async (formData) => {
   
    const { username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password:hashedPassword,
        phone,
        address,
        isAdmin,
        isActive,
      });
  
      await newUser.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user!");
    }
  
    revalidatePath("/Dashboard/Users");
    redirect("/Dashboard/Users");
  };
  export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update user!");
    }
  
    revalidatePath("/Dashboard/Users");
    redirect("/Dashboard/Users");
  };

  export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
    try {
      connectToDB();
      const newProduct = new Product({
        title,
        desc,
        price,
        stock,
        color,
        size,
      });
  
      await newProduct.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create product!");
    }
  
    revalidatePath("/Dashboard/Products");
    redirect("/Dashboard/Products");
  };
  export const deleteProduct = async (formData) => {
    const { id } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
  
  
      await Product.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create product!");
    }
  
    revalidatePath("/Dashboard/Products");
  
  };

  export const deleteUser = async (formData) => {
    const { id } =
      Object.fromEntries(formData);
    try {
      connectToDB();
      await User.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create product!");
    }
  
    revalidatePath("/Dashboard/Products");
  
  };