let BASE_URL = 'http://localhost:3001/'

if(process.env.NODE_ENV === 'production') {
    BASE_URL = 'https://mern-haus-380e6c20d7e0.herokuapp.com//'
}

export { BASE_URL }
