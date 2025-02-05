function fetchUserData(){
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reject({name : "ChaiCode", url : "https://chaicode.com"})
        }, 3000);
    })
}

async function getUserData(){
    try {
        console.log('Fetching user data...');
        const userData = await fetchUserData()
        console.log("User data fetched successfully");
        
        console.log("User data: ", userData);
        
        
    } catch (error) {
        console.log("Error fetching data : ",error);
    }
}
getUserData();