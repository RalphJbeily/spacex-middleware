const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/capsules', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/capsules')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/capsules/:serial', (req, res) => {
  axios
    .get(`https://api.spacexdata.com/v3/capsules/${req.params.serial}`)
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/cores', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/cores')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/cores/:serial', (req, res) => {
  axios
    .get(`https://api.spacexdata.com/v3/cores/${req.params.serial}`)
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/dragons', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/dragons')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/dragons/:id', (req, res) => {
  axios
    .get(`https://api.spacexdata.com/v3/dragons/${req.params.id}`)
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/history', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/history')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/history/:id', (req, res) => {
  axios
    .get(`https://api.spacexdata.com/v3/history/${req.params.id}`)
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/info', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/info')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/launches', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/launches')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/launches/:flight', (req, res) => {
  axios
    .get(`https://api.spacexdata.com/v3/launches/${req.params.flight}`)
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/launches/past', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/launches/past')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/launches/upcoming', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/launches/upcoming')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/launches/latest', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/launches/latest')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/launches/next', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/launches/next')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/launchpads', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/launchpads')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/launchpads/:site', (req, res) => {
  axios
    .get(`https://api.spacexdata.com/v3/launchpads/${req.params.site}`)
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/missions', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/missions')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/missions/:id', (req, res) => {
  axios
    .get(`https://api.spacexdata.com/v3/missions/${req.params.id}`)
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/payloads', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/payloads')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/payloads/:id', (req, res) => {
  axios
    .get(`https://api.spacexdata.com/v3/payloads/${req.params.id}`)
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/rockets', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/rockets')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/rockets/:id', (req, res) => {
  axios
    .get(`https://api.spacexdata.com/v3/rockets/${req.params.id}`)
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/roadster', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/roadster')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/ships', (req, res) => {
  axios
    .get('https://api.spacexdata.com/v3/ships')
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.get('/ships/:id', (req, res) => {
  axios
    .get(`https://api.spacexdata.com/v3/ships/${req.params.id}`)
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('Error:', err);
    });
});

app.listen(port, error => {
  if (!error) {
    console.log(`Server is listening on port ${port}`);
  } else {
    console.error('Error:', error);
  }
});
