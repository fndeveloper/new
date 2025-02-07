import React from 'react'

function Calculator() {
  return (
<>
{/* MAIN START */}
<div className="container-fluid bg py-5 d-flex flex-column align-items-center justify-content-center">
  <h2 className='text-white py-5 mt-5 text-center'>Calculate Now </h2>
</div>
{/* MAIN END */}

<div className='bg'>
      <div className="container mt-4">
  <div className="event-form">
    <h4 className="text-center mb-3">Event Planning Form</h4>
    <form>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            required=""
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="contact" className="form-label">
            Contact Detail
          </label>
          <input
            type="text"
            className="form-control"
            id="contact"
            placeholder="Contact No. or Email"
            required=""
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="eventCategory" className="form-label">
            Event Category
          </label>
          <select className="form-select" id="eventCategory" required="">
            <option selected="" disabled="">
              Choose Event Type
            </option>
            <option>Birthday</option>
            <option>Corporate Event</option>
            <option>Wedding</option>
            <option>Conference</option>
            <option>Catering Service</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="guests" className="form-label">
            No. of Guests
          </label>
          <input
            type="number"
            className="form-control"
            id="guests"
            placeholder="e.g. 200"
            required=""
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="date" className="form-label">
            Date of Event
          </label>
          <input type="date" className="form-control" id="date" required="" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Timing(s)</label>
          <div className="d-flex">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="timing"
                id="lunch"
                defaultValue="Lunch"
              />
              <label className="form-check-label" htmlFor="lunch">
                Lunch
              </label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="timing"
                id="dinner"
                defaultValue="Dinner"
              />
              <label className="form-check-label" htmlFor="dinner">
                Dinner
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="timing"
                id="other"
                defaultValue="Other"
              />
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Menu Include?</label>
          <div className="d-flex">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="menu"
                id="menuYes"
                defaultValue="Yes"
              />
              <label className="form-check-label" htmlFor="menuYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="menu"
                id="menuNo"
                defaultValue="No"
              />
              <label className="form-check-label" htmlFor="menuNo">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Décor</label>
          <div className="d-flex flex-wrap">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="decor"
                id="decorNone"
                defaultValue="Not required"
              />
              <label className="form-check-label" htmlFor="decorNone">
                Not required
              </label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="decor"
                id="decor50k"
                defaultValue="Below 50k"
              />
              <label className="form-check-label" htmlFor="decor50k">
                Below 50k
              </label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="decor"
                id="decor75k"
                defaultValue="Upto 75k"
              />
              <label className="form-check-label" htmlFor="decor75k">
                Upto 75k
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="decor"
                id="decor100k"
                defaultValue="100k - 300k or above"
              />
              <label className="form-check-label" htmlFor="decor100k">
                100k - 300k or above
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Sound System</label>
          <div className="d-flex">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="soundSystem"
                id="soundYes"
                defaultValue="Yes"
              />
              <label className="form-check-label" htmlFor="soundYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="soundSystem"
                id="soundNo"
                defaultValue="No"
              />
              <label className="form-check-label" htmlFor="soundNo">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Preferred Venue</label>
          <div className="d-flex flex-wrap">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="venue"
                id="hall"
                defaultValue="Hall"
              />
              <label className="form-check-label" htmlFor="hall">
                Hall
              </label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="venue"
                id="marquee"
                defaultValue="Marquee"
              />
              <label className="form-check-label" htmlFor="marquee">
                Marquee
              </label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="venue"
                id="outdoor"
                defaultValue="Farmhouse / Outdoor"
              />
              <label className="form-check-label" htmlFor="outdoor">
                Farmhouse / Outdoor
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="venue"
                id="clientVenue"
                defaultValue="Client own venue"
              />
              <label className="form-check-label" htmlFor="clientVenue">
                Client own venue
              </label>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-calculate mt-3">
        CALCULATE
      </button>
    </form>
  </div>
</div>

    </div>
</>
  )
}

export default Calculator
