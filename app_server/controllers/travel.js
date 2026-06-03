const apiOptions = {
  server: 'http://localhost:3000'
};

const index = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways'
  });
};

const travel = async (req, res) => {
  try {
    const response = await fetch(`${apiOptions.server}/api/trips`);
    const data = await response.json();

    const trips = data.map((trip) => ({
  ...trip,
  start: new Date(trip.start).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
}));

    res.render('travel', {
      title: 'Travel',
      trips
    });
  } catch (err) {
    res.status(500).render('travel', {
      title: 'Travel',
      trips: []
    });
  }
};

module.exports = {
  index,
  travel
};