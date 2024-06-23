import React from 'react';
import useForm from './useForm';
import validate from './validate';

const EventRegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    age: '',
    isAttendingWithGuest: 'no',
    guestName: '',
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, validate);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder='Enter your name '
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder='Enter your email address'
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder='Enter your age'
          value={values.age}
          onChange={handleChange}
        />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <div>
        <label>Are you attending with a guest?</label>
        <select
          name="isAttendingWithGuest"
          value={values.isAttendingWithGuest}
          onChange={handleChange}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      {values.isAttendingWithGuest === 'yes' && (
        <div>
          <label>Guest Name:</label>
          <input
            type="text"
            name="guestName"
            value={values.guestName}
            onChange={handleChange}
          />
          {errors.guestName && <p>{errors.guestName}</p>}
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventRegistrationForm;
