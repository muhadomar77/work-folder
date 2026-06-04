const {test,expect}=require('@playwright/test');
test.describe('api testing Suite',()=>{

    test('insert data',{tag:'@P1'},async({request})=>{
        try{
          const newPost={
            "title": "foo",
            "body": "bar",
            "userId": 1
          }
          const response=await request.post('https://jsonplaceholder.typicode.com/posts',{
            data:newPost
          });
          expect(response.status()).toBe(201);
          const postData=await response.json();
          expect(postData.title).toBe('foo');
          console.log('Data inserted successfully:', postData);
        }
        catch(error)
        {
            console.error('Error inserting data:', error.message);
        }
    });

test('get user details',{tag:'@P2'},async ({request})=>{
    try{
             const response=await request.get('https://jsonplaceholder.typicode.com/users/1');
             expect(response.status()).toBe(200);
             const data=await response.json();
             expect(data.name).toBe('Leanne Graham');
             console.log('User details fetched successfully:', data);
    }
    catch(error){
        console.error('Error fetching user details:', error.message);
    }

});
test('update a post',{tag:'@P3'},async({request})=>{
  try{
    const updatedPost={
        id:1,
        title:"title updated",
        body:"body updated",
        userId:1,
    }
    const response=await request.put('https://jsonplaceholder.typicode.com/posts/1',{
        data:updatedPost
    });
    expect(response.status()).toBe(200);
    const putData=await response.json();
    expect(putData.title).toBe('title updated');
    console.log('Post updated successfully:', putData);
  }
  catch(error){
    console.error('Error updating post:', error.message);
  }
})
test('patch  a post',{tag:'@P4'},async({request})=>{
    try{
        const patchData={
            title:"patched title"
        }
        const response=await request.patch('https://jsonplaceholder.typicode.com/posts/1',{
            data:patchData
        });
        expect(response.status()).toBe(200);
        const patchedData=await response.json();
        expect(patchedData.title).toBe('patched title');
        console.log('Post patched successfully:', patchedData);

    }
    catch(error){
        console.error('Error patching post:', error.message);
    }
});
//delete a post 
 test('delete a post',{tag:'@P5'},async({request})=>{
  try{
          const res=await request.delete('https://jsonplaceholder.typicode.com/posts/1');
          expect(res.status()).toBe(200);
          console.log('Post deleted successfully');
  }
  catch(error){
    console.error('Error deleting post:', error.message);
  }
 })
});