import { create } from "zustand";
import { getData } from "./scripts/manageLocalStorage";

const useStore = create((set) => ({
    today: getData(Date())
}))

export default useStore