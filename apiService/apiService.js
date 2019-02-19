

class ApiService {
  
    getQuestions = () => {
        return fetch('https://opentdb.com/api.php?amount=1&type=boolean')
        .then(res => res.json())
        
    
    }


}

export const apiService = new ApiService(); 

