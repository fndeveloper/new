import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../assets/temp_logo.png"

function Calculator() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [numofguest, setNumofGuest] = useState(0);
  const [eventDate, setEventDate] = useState("");
  const [timing, setTiming] = useState("");
  const [menu, setMenu] = useState("");
  const [soundSystem, setSoundSystem] = useState("");
  const [venue, setVenue] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let pricePerGuest = timing === "Lunch" ? 500 : timing === "Dinner" ? 1000 : 0;
    let eventCost = eventCategory === "Wedding" ? 10000 : 
                    eventCategory === "Birthday" ? 5000 : 
                    eventCategory === "Corporate Event" ? 5000 : 
                    eventCategory === "Conference" ? 3000 : 0;
    let soundCost = soundSystem === "Yes" ? 10000 : 0;

    const calculatedPrice = numofguest * pricePerGuest + eventCost + soundCost;
    setTotalPrice(calculatedPrice);
    setShowPopup(true);
  };

  const downloadInvoice = () => {
    const invoiceElement = document.getElementById("invoice");

    html2canvas(invoiceElement, { backgroundColor: "#fff" }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`Invoice_${name}.pdf`);
    });
  };

  return (
    <div className="py-5 my-5">
    <div className="container my-5 py-5">
      <h2>Event Cost Calculator</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Name" className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Contact" className="form-control mb-2" value={contact} onChange={(e) => setContact(e.target.value)} />
        
        <select className="form-select mb-2" value={eventCategory} onChange={(e) => setEventCategory(e.target.value)}>
          <option value="">Select Event</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Corporate Event</option>
          <option>Conference</option>
        </select>

        <input type="number" placeholder="Number of Guests" className="form-control mb-2" value={numofguest} onChange={(e) => setNumofGuest(e.target.value)} />
        <input type="date" className="form-control mb-2" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />

        <div className="mb-2">
          <label>Timing: </label>
          <input type="radio" name="timing" value="Lunch" onChange={(e) => setTiming(e.target.value)} /> Lunch
          <input type="radio" name="timing" value="Dinner" onChange={(e) => setTiming(e.target.value)} /> Dinner
        </div>

        <div className="mb-2">
          <label>Menu Included?</label>
          <input type="radio" name="menu" value="Yes" onChange={(e) => setMenu(e.target.value)} /> Yes
          <input type="radio" name="menu" value="No" onChange={(e) => setMenu(e.target.value)} /> No
        </div>

        <div className="mb-2">
          <label>Sound System?</label>
          <input type="radio" name="soundSystem" value="Yes" onChange={(e) => setSoundSystem(e.target.value)} /> Yes
          <input type="radio" name="soundSystem" value="No" onChange={(e) => setSoundSystem(e.target.value)} /> No
        </div>

        <button type="submit" className="btn btn-primary">Calculate</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Invoice</h3>
            <div id="invoice" className="invoice-container">
          <h1 className="text-center display-3">MAM DASIY</h1>
              <h2>Event Invoice</h2>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Contact:</strong> {contact}</p>
              <p><strong>Event Type:</strong> {eventCategory}</p>
              <p><strong>Guests:</strong> {numofguest}</p>
              <p><strong>Timing:</strong> {timing}</p>
              <p><strong>Menu Included:</strong> {menu}</p>
              <p><strong>Sound System:</strong> {soundSystem}</p>
              <p><strong>Total Price:</strong> ₹{totalPrice}</p>
            </div>
            <button className="btn btn-success" onClick={downloadInvoice}>Download Invoice</button>
            <button className="btn btn-danger" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Add CSS */}
      <style>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          width: 300px;
        }
        .invoice-container {
          background: #fff;
          padding: 10px;
          border-radius: 5px;
          text-align: left;
        }
        button {
          margin: 10px;
        }
      `}</style>
    </div>
    </div>
  );
}

export default Calculator;
