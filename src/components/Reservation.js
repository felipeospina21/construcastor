import React,{useState, useEffect} from 'react';
import firebase from "gatsby-plugin-firebase"

const Reservation = ({dateSelected, timeSelected}) => {
  const [kiosks, setKiosks]=useState([])
  const [kioskSelected, setKioskSelected] = useState()

  useEffect(()=>{
    getKioskInfo()
  },[])

  const getKioskInfo = async () => {
    firebase
      .firestore()
      .collection("kioskos")
      .onSnapshot(querySnapshot => {
        const docs = []
        querySnapshot.forEach(doc => {
          docs.push({ ...doc.data(), id: doc.id })
        })
        setKiosks(docs)
      })
      // console.log(kiosks)
  }

  const setBooking = async () =>{
    firebase.firestore().collection("bookings").doc().set({
      bookinkInfo:{
        bookingDate:dateSelected,
        bookingTime: timeSelected,
        bookingKiosk: kioskSelected
      }
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

 
  return (
    <div>
      {kiosks.map((kiosk)=>{
        return(
          <div key={kiosk.id}>
            <h4>Kiosko # {kiosk.ref}</h4>
            <p>Capacidad: {kiosk.capacity} personas</p>
            <button onClick={()=>setKioskSelected(kiosk.id)}>seleccionar</button>
          </div>
        )
      })}

      <button onClick={()=>setBooking()}>save</button>
    </div>
  );
};

export default Reservation;