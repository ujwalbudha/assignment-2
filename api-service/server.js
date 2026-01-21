const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.json({ message: 'API Service is running' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API service listening on port ${PORT}`);
});
