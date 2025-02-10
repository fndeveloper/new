import React, { useState } from 'react';

function Calculator() {
  // State hooks for the form inputs
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [numofguest, setNumofGuest] = useState(0);
  const [eventDate, setEventDate] = useState('');
  const [timing, setTiming] = useState('');
  const [menu, setMenu] = useState('');
  const [decor, setDecor] = useState('');
  const [soundSystem, setSoundSystem] = useState('');
  const [venue, setVenue] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();  // Prevent the form from submitting and page reload

    let pricePerGuest = 0;

    // Calculate the price based on timing
    if (timing === 'Lunch') {
      pricePerGuest = 500;
    } else if (timing === 'Dinner') {
      pricePerGuest = 1000;
    }

    // Calculate total price
    const calculatedPrice = numofguest * pricePerGuest;
    setTotalPrice(calculatedPrice);

    console.log("Form Submitted with Data:", {
      name,
      contact,
      eventCategory,
      numofguest,
      eventDate,
      timing,
      menu,
      decor,
      soundSystem,
      venue,
      totalPrice
    });
  };

  return (
    <>
      <div className="container-fluid bg py-5 d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-white py-5 mt-5 text-center">Calculate Now</h2>
      </div>

      <div className="bg">
        <div className="container mt-4">
          <div className="event-form">
            <h4 className="text-center mb-3">Event Planning Form</h4>
            <form onSubmit={handleFormSubmit}>
              <div className="row g-3">
                {/* Name Input */}
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Contact Input */}
                <div className="col-md-6">
                  <label htmlFor="contact" className="form-label">Contact Detail</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    placeholder="Contact No. or Email"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>

                {/* Event Category */}
                <div className="col-md-6">
                  <label htmlFor="eventCategory" className="form-label">Event Category</label>
                  <select
                    className="form-select"
                    id="eventCategory"
                    value={eventCategory}
                    onChange={(e) => setEventCategory(e.target.value)}
                  >
                    <option value="" disabled>Choose Event Type</option>
                    <option>Birthday</option>
                    <option>Corporate Event</option>
                    <option>Wedding</option>
                    <option>Conference</option>
                    <option>Catering Service</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div className="col-md-6">
                  <label htmlFor="guests" className="form-label">No. of Guests</label>
                  <input
                    type="number"
                    className="form-control"
                    id="guests"
                    placeholder="e.g. 200"
                    value={numofguest}
                    onChange={(e) => setNumofGuest(e.target.value)}
                  />
                </div>

                {/* Event Date */}
                <div className="col-md-6">
                  <label htmlFor="date" className="form-label">Date of Event</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </div>

                {/* Timing Options */}
                <div className="col-md-6">
                  <label className="form-label">Timing(s)</label>
                  <div className="d-flex">
                    {['Lunch', 'Dinner', 'Other'].map((item) => (
                      <div className="form-check me-3" key={item}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="timing"
                          id={item}
                          value={item}
                          checked={timing === item}
                          onChange={() => setTiming(item)}
                        />
                        <label className="form-check-label" htmlFor={item}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Menu Options */}
                <div className="col-md-6">
                  <label className="form-label">Menu Include?</label>
                  <div className="d-flex">
                    {['Yes', 'No'].map((item) => (
                      <div className="form-check me-3" key={item}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="menu"
                          id={item}
                          value={item}
                          checked={menu === item}
                          onChange={() => setMenu(item)}
                        />
                        <label className="form-check-label" htmlFor={item}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Décor Options */}
                <div className="col-md-6">
                  <label className="form-label">Décor</label>
                  <div className="d-flex flex-wrap">
                    {['Not', 'Below 50k', 'Upto 75k', '100k - 300k or above'].map((item) => (
                      <div className="form-check me-3" key={item}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="decor"
                          id={item}
                          value={item}
                          checked={decor === item}
                          onChange={() => setDecor(item)}
                        />
                        <label className="form-check-label" htmlFor={item}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sound System Options */}
                <div className="col-md-6">
                  <label className="form-label">Sound System</label>
                  <div className="d-flex">
                    {['Yes', 'No'].map((item) => (
                      <div className="form-check me-3" key={item}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="soundSystem"
                          id={item}
                          value={item}
                          checked={soundSystem === item}
                          onChange={() => setSoundSystem(item)}
                        />
                        <label className="form-check-label" htmlFor={item}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preferred Venue Options */}
                <div className="col-md-6">
                  <label className="form-label">Preferred Venue</label>
                  <div className="d-flex flex-wrap">
                    {['Hall', 'Marquee', 'Farmhouse / Outdoor', 'Client own venue'].map((item) => (
                      <div className="form-check me-3" key={item}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="venue"
                          id={item}
                          value={item}
                          checked={venue === item}
                          onChange={() => setVenue(item)}
                        />
                        <label className="form-check-label" htmlFor={item}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-calculate mt-3">
                CALCULATE
              </button>
            </form>
            <div className="mt-3">
              <h5>Total Price: ₹{totalPrice}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
