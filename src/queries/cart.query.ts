import {
    collection,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../configs";
import { ICart } from "../interfaces";
import { getUserById } from "./user.query";
import { getProductById } from "./product.query";

export const getAllCarts = async () => {
    try {
        const docs = (await getDocs(collection(db, "carts"))).docs as ICart[];
        return docs;
    } catch (error) {
        console.error(error);
    }
};

export const getCartById = async (id: string) => {
    try {
        const q = query(collection(db, "carts"), where("_id", "==", id));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    } catch (error) {
        console.error(error);
    }
};

export const addToCart = async (userId: string, productId: string) => {
    try {
        const user = await getUserById("users", userId);
        const product = await getProductById(productId);

        if (!user || !product) throw new Error("Not found");
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, {
            carts: [...(user.carts || []), product],
        });
    } catch (err) {
        console.error(err);
    }
};
