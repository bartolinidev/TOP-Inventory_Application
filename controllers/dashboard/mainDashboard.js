const mainDashboard = (req, res) => {
  res.render('dashboard/dashboard', {
    title: 'Dashboard',
  });
};

module.exports = mainDashboard;
