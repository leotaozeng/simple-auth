exports.getUserContent = (req, res) => {
  res.status(200).send('User Content.')
}

exports.getModeratorContent = (req, res) => {
  res.status(200).send('Admin Content.')
}

exports.getAdminContent = (req, res) => {
  res.status(200).send('Moderator Content.')
}
