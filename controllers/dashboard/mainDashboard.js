const mainDashboard = (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
  });
};

module.exports = mainDashboard;
