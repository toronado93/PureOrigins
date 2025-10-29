const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Sample API for products
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Fresh Tomatoes', unit: 'kg', price: '1.20' },
    { id: 2, name: 'Organic Lettuce', unit: 'pcs', price: '0.80' }
  ])
})

// Serve static files from client build if present
const clientDist = path.join(__dirname, '..', 'public')
app.use(express.static(clientDist))

app.get('*', (req, res) => {
  // If client built files exist, serve index.html; otherwise return a simple message
  const indexHtml = path.join(clientDist, 'index.html')
  if (require('fs').existsSync(indexHtml)) {
    res.sendFile(indexHtml)
  } else {
    res.send({ message: 'VegBiz server running. Build the client and place files in server/public to serve them.' })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
