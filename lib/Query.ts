import axios from "axios";

export async function fetchArticles(){
    try {
        const articles = await axios.get('/api/articleFetch');
        return articles
    } catch (error) {
        console.log(error);
        return null
    }
}


export async function fetchOneArticle(id:number){
    try {
        const article = await axios.get(`/api/oneArticle/${id}`);
        return article
    } catch (error) {
        console.log(error);
        return null
    }
}