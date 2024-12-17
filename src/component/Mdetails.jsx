import image1 from "../image/profile1.jpg"
import image2 from "../image/profile2.jpg"
import image3 from "../image/profile3.jpg"
import image4 from "../image/profile4.jpg"
import Message from "./Message"


function Mdetails(){

    var msglist = [{
        Name: "Jessica Koe",
        Msg: "Hey, Joel, I here to help you out please ...",
        img: image1,
        time: 11.26
      },
      
      {
        Name: "Komeial Bolger",
        Msg: "I will send you all documents as soon a...",
        img: image2,
        time: 12.34
      },
      {
        Name: "Tamaara Suiale",
        Msg: "Are you going to business trip next week..",
        img: image3,
        time: 8.43
      },
      {
        Name: "Sam Neilson",
        Msg: "I suggest to start new business",
        img: image4,
        time: 9.06
      },
      
      {
        Name: "Caroline Nexon",
        Msg: "We need to start new reseatch center",
        img: image1,
        time: 11.26
      },
      {
        Name: "Caroline Nexon",
        Msg: "We need to start new reseatch center",
        img: image2,
        time: 3.46
      },
      {
        Name: "Caroline Nexon",
        Msg: "We need to start new reseatch center",
        img: image3,
        time: 7.16
      },
      
      {
        Name: "Tamaara Suiale",
        Msg: "Are you going to business trip next week..",
        img: image3,
        time: 7.16
      },
      {
        Name: "Sam Neilson",
        Msg: "I suggest to start new business",
        img: image4,
        time: 7.16
      },
      
      {
        Name: "Caroline Nexon",
        Msg: "We need to start new reseatch center",
        img: image1,
        time: 7.16
      },
      {
        Name: "Caroline Nexon",
        Msg: "We need to start new reseatch center",
        img: image2,
        time: 7.16
      },
      ]
      
    return msglist.map((item) =>{return(

        <Message Name={item.Name} Msg={item.Msg} img={item.img} time={item.time}></Message>
    )})
}
export default Mdetails