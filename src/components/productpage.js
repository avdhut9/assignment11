import styles from "./products.module.css"
export default function ProductPage({fullname,likes,postid,profilePic,profileUrl,username}){
    console.log(profilePic)
    return(
        <div className={styles.main} >
            <img src={profilePic}/>
            <p><span>Name</span>:{fullname}</p>
            <p><span>username</span>:{username}</p>
            <p><span>likes</span>:{likes}</p>
            <p><span>postid</span>:{postid}</p>
        </div>
    )
}