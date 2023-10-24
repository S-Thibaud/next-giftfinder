<Stage transition={props.transition}>
<div className="wrap">
  <Form>
    <h3>Please select a price range</h3>
    <div>
      <Typography id="slider-label" gutterBottom>
        Value: €{value[0]} - €{value[1]}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={250}
        valueLabelFormat={(value) => value.toString()}
        aria-labelledby="range-slider"
        className="w-96"
      />
    </div>
    <input className="textbox submit" type="submit" value="Submit"/>
  </Form>
</div>
</Stage>