app.get("/dashboard", (req, res) => {
  const password = req.query.password;

  if (password !== DASHBOARD_PASSWORD) {
    return res.status(401).send("Access denied: Incorrect password");
  }

  let html = `<h1>Converso AI Live Tracker</h1>`;
  let total = 0;

  for (const site in visitors) {
    const users = visitors[site];
    const count = Object.keys(users).length;
    total += count;

    html += `<h2>${site}: ${count} users</h2>`;
    for (const u in users) {
      html += `<p>User on page: ${users[u].page}</p>`;
    }
  }

  html += `<h2>Total Online: ${total}</h2>`;

  res.send(html);
});
