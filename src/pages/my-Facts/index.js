const MyFacts = () => {
    return(
        <div style={{display:"flex", flexWrap:"wrap",  paddingTop:"60px", backgroundColor:"white", height:"800px", width:"1000px", gap:"300px" }}>

<div style={{width:"400px", height:"200px", border:"2px solid black",paddingLeft:"20px" , borderRadius:"1vh", backgroundColor:"whitesmoke", color:"black", fontFamily:"sans-serif"}} >
 <h2>My Fact 1</h2>
 <p>Elon Musk is richest person in the world</p>
 <p>2024-01-04T09:29:17.082Z</p>
    </div>
<div style={{width:"400px", height:"200px", border:"2px solid black", paddingLeft:"20px",borderRadius:"1vh", backgroundColor:"whitesmoke", color:"black", fontFamily:"sans-serif"}} >
<h2>My Fact 2</h2>
<p>Mark Zuckerberg created Facebook </p>
<p>2024-01-04T09:29:17.082Z</p>
    </div>

</div>
    )
}

export default MyFacts