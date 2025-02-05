function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data fetched")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data fetched")
        }, 3000);
    })
}


async function getBlogData() {
    try {
        console.log("fetching blod data...");
        // const blogData = await fetchPostData();
        // const commonData = await fetchCommentData();
        // console.log(blogData);
        // console.log(commonData);
        // another way to handle more fetching at a time

        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData(),
        ]);
        console.log(postData);
        console.log(commentData);
        
        console.log("fetchdata complete ");
        
        
    } catch (error) {
        console.error("Error Fetching blog data", error);
        
    }
    
}

getBlogData();