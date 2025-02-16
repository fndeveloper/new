import React, { useState } from 'react';

function Calculator() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [numofguest, setNumofGuest] = useState(0);
  const [eventDate, setEventDate] = useState('');
  const [timing, setTiming] = useState('');
  const [menu, setMenu] = useState('');
  const [soundSystem, setSoundSystem] = useState('');
  const [venue, setVenue] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let pricePerGuest = timing === 'Lunch' ? 500 : timing === 'Dinner' ? 1000 : 0;
    let eventCost = eventCategory === 'Wedding' ? 10000 : eventCategory === 'Birthday' || eventCategory === 'Corporate Event' ? 5000 : eventCategory === 'Conference' ? 3000 : 0;
    let soundSystemCost = soundSystem === 'Yes' ? 10000 : 0;

    const calculatedPrice = numofguest * pricePerGuest + eventCost + soundSystemCost;
    setTotalPrice(calculatedPrice);
    setShowModal(true);
  };

  const downloadInvoice = () => {
    const invoiceContent = `Invoice\n\nName: ${name}\nContact: ${contact}\nEvent Category: ${eventCategory}\nGuests: ${numofguest}\nDate: ${eventDate}\nTiming: ${timing}\nMenu: ${menu}\nSound System: ${soundSystem}\nVenue: ${venue}\nTotal Budget: ₹${totalPrice}`;
    
    const blob = new Blob([invoiceContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Invoice.txt';
    link.click();
  };

  return (
    <>
      <div className="container-fluid bg py-5 d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-white py-5 mt-5 text-center">Calculate Now</h2>
      </div>
      <div className="container mt-4">
        <div className="event-form">
          <h4 className="text-center mb-3">Event Planning Form</h4>
          <form onSubmit={handleFormSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Contact</label>
                <input type="text" className="form-control" value={contact} onChange={(e) => setContact(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Event Category</label>
                <select className="form-select" value={eventCategory} onChange={(e) => setEventCategory(e.target.value)}>
                  <option value="" disabled>Choose Event Type</option>
                  <option>Birthday</option>
                  <option>Corporate Event</option>
                  <option>Wedding</option>
                  <option>Conference</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">No. of Guests</label>
                <input type="number" className="form-control" value={numofguest} onChange={(e) => setNumofGuest(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Timing</label>
                <select className="form-select" value={timing} onChange={(e) => setTiming(e.target.value)}>
                  <option value="" disabled>Select Timing</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Menu</label>
                <select className="form-select" value={menu} onChange={(e) => setMenu(e.target.value)}>
                  <option value="" disabled>Include Menu?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Sound System</label>
                <select className="form-select" value={soundSystem} onChange={(e) => setSoundSystem(e.target.value)}>
                  <option value="" disabled>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Preferred Venue</label>
                <select className="form-select" value={venue} onChange={(e) => setVenue(e.target.value)}>
                  <option value="" disabled>Select Venue</option>
                  <option>Hall</option>
                  <option>Marquee</option>
                  <option>Farmhouse / Outdoor</option>
                  <option>Client's own venue</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">CALCULATE</button>
          </form>
        </div>
      </div>
      {showModal && (
        <div className="modal show d-block bg-dark bg-opacity-50">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Total Budget</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Total Budget: ₹{totalPrice}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" onClick={downloadInvoice}>Download Invoice</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Calculator;
