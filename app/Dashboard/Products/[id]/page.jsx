import styles from "@/app/ui/dashboard/products/singleproduct/singleproduct.module.css";
import Image from "next/image";
const SingleProductPage =  () => {
return (
  <div className={styles.container}>
  <div className={styles.infoContainer}>
    <div className={styles.imgContainer}>
      <Image src="/noavatar.png" alt="" fill />
    </div>
    Iphone
  </div>
  <div className={styles.formContainer}>
    <form  className={styles.form}>
      <input type="hidden" name="id" value="12" />
      <label>Title</label>
      <input type="text" name="title" placeholder="Iphone" />
      <label>Price</label>
      <input type="number" name="price" placeholder="$23"/>
      <label>Stock</label>
      <input type="number" name="stock" placeholder="23" />
      <label>Color</label>
      <input
        type="text"
        name="color"
        placeholder="red"
      />
      <label>Size</label>
      <textarea
        type="text"
        name="size"
        placeholder="small"
      />
      <label>Cat</label>
      <select name="cat" id="cat">
        <option value="kitchen">Kitchen</option>
        <option value="computers">Computers</option>
      </select>
      <label>Description</label>
      <textarea
        name="desc"
        id="desc"
        rows="10"
        placeholder="lorhaiusdasusah"
      ></textarea>
      <button>Update</button>
    </form>
  </div>
</div>
  );}
export default SingleProductPage;