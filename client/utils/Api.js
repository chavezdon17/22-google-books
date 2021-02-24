import axios form "axios";

export default {
    getSearchedBooks: function(query){
        return axios.get('https:/www.googleapis.com/books/v1/volumes?q= + ${query}' )
    },
    getBooks: function (){
        return axios.get("/api/books");
    },
    getBook: function(id){
        return axios.get("/api/books/" +id);
    },
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    }
};