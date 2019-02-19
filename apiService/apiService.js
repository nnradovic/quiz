const axios = require('axios');

class ApiService {
  
    getQuestions = () => {
        return fetch('https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=boolean')
        .then(res => res.json())
        
    
    }


}

export const apiService = new ApiService(); 

