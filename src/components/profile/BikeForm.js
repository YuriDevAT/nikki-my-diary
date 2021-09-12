import React from 'react';

const BikeForm = ({
  bike,
  model,
  displacement,
  times,
  category,
  price,
  onAddFormSubmit,
  onDisplacementChange,
  onModelChange,
  onBrandChange,
  onTimesChange,
  onCategoryChange,
  onPriceChange,
}) => (
  <form onSubmit={onAddFormSubmit} className="bike-form">
    <fieldset>
      <legend>Let&apos;s sell a bike</legend>
      <label htmlFor="title">Brand</label>
      <input
        type="text"
        id="brand"
        name="brand"
        onChange={onBrandChange}
        value={bike}
        required
        placeholder="Add a brand"
      />
      <label htmlFor="model">Model</label>
      <input
        type="text"
        id="model"
        name="model"
        onChange={onModelChange}
        value={model}
        required
        placeholder="Add a model"
      />
      <label htmlFor="title">Displacement in cc</label>
      <input
        type="text"
        id="displacement"
        name="displacement"
        onChange={onDisplacementChange}
        value={displacement}
        required
        placeholder="Add displacement"
      />
      <label htmlFor="title">Times in ps</label>
      <input
        type="text"
        id="times"
        name="times"
        onChange={onTimesChange}
        value={times}
        required
        placeholder="Add times"
      />
      <label htmlFor="title">Category</label>
      <input
        type="text"
        id="category"
        name="category"
        onChange={onCategoryChange}
        value={category}
        required
        placeholder="Add a category"
      />
      <label htmlFor="title">Price</label>
      <input
        type="text"
        id="price"
        name="price"
        onChange={onPriceChange}
        value={price}
        required
        placeholder="Add a price"
      />
      <input type="submit" value="Add Bike" />
    </fieldset>
  </form>
);

export default BikeForm;
