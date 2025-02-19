import { Book } from "@/types/types";
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:9000/api`,
});

export const getBooks = async (): Promise<Book[]> => {
    try{
        const response = await api.get(`/books`);
        return response.data;
    } catch (error) {
        console.error("책 목록 정보 불러오기 실패 ", error);
        throw error;
    }
};

export const getBook = async (id: number): Promise<Book> => {
    try{
        const response = await api.get(`/books/${id}`);
        return response.data;
    } catch (error) {
        console.error("책 정보 불러오기 실패 ", error);
        throw error;
    }
};

