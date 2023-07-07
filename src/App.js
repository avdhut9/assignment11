
import { useEffect, useState } from 'react';
import styles from "./App.module.css"
import axios from "axios"
import ProductPage from './components/productpage';


function App() {
  const[state,setstate]=useState([])
  useEffect(()=>{
getdata()
  },[])
  async function getdata(){
    try{
let data=await axios.get("https://api.unsplash.com/search/users?query=nas&client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg");
let x=data.data.results
let Newarr=[]


x.forEach((ele)=>{
  let newobj={profilePic:ele?.profile_image.large,profileUrl:ele?.links?.html,username:ele.username,fullname:ele.first_name,likes:ele?.total_likes,postid:ele?.id};
  Newarr.push(newobj)

})
 setstate([...Newarr])
    }catch(e){
      console.log(e)
    }
  }
  console.log(state)
  return (
    <div className={styles.main}>
 {state.map((ele)=>
 <ProductPage {...ele}/>
 )}
    </div>
  );
}

export default App;
