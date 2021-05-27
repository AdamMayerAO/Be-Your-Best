export default{
    API_ENDPOINT: process.env.NODE_ENV === 'production'?
     'https://bybserver.herokuapp.com/'
     :
     'http://localhost:8000'
    
}
