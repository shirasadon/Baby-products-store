import "../style/contact.css"

function Contact() {
  return(
<>

<div className="divContact" class="divContact row">

<div className="divChild" class="divChild col-sm">
  <p className="mainTitle" class="mainTitle">The Baby`s team is happy to be at your service for any inquiry or request</p>
<h3 className="contactus" class="contactus">
  Contact Information
  </h3>
  <p >
  <i class="bi bi-telephone-fill"></i>
  054-5543354
  </p>
  <p >
  <i class="bi bi-printer-fill"></i>
  04-5543354
  </p>
  <p >
  <i class="bi bi-geo-alt-fill"></i>
  Offices: Industrial Zone Haifa, zip code 2231123
  </p>
  <p>
  <i class="bi bi-envelope-plus-fill"></i>
shirasa199@gmail.com
  </p>
  <p className="paragraphService" class="paragraphService">Customer service response:<br/>
Sunday-Thursday: 10:00-17:00</p>
  </div>
  <div className="divLocation" class="divLocation col-sm"   >

  <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.2362400337543!2d35.06981468453441!3d32.81250498096117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db0cc8b17a251%3A0xdd3ca761dc2908ca!2z15DXlteV16gg16rXotep15nXmdeU!5e0!3m2!1siw!2sil!4v1668343920435!5m2!1siw!2sil" style={{width:"600px", height:"450px",  loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} ></iframe>
  </div>
</div>







</>
  ) 
}

export default Contact;
