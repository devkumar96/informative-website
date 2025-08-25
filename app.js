
const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: "Home",
    pageDescription: 'This is our informative website. Stay tuned for updates!'
  });
});

app.get('/about', (req, res) => res.render('about', { 
  title: 'About',
  'pageDescription': "This page showing the informaton of the"

}));

// Services route

app.get('/services', (req, res) =>{

  const services = [
    { name: 'Web Development', description: 'We build modern, responsive websites and web apps.' },
    { name: 'SEO Optimization', description: 'Improve your search engine rankings with our SEO services.' },
    { name: 'Digital Marketing', description: 'Boost your online presence with tailored marketing strategies.' },
    { name: 'Consulting', description: 'Get expert advice for your business and technology needs.' }
  ];
  res.render('services', { 
    title: 'Our Services',
    services: services

})});


  
app.get('/contact', (req, res) => res.render('contact', {
   title: 'Contact',
  pageDescription: 'This is our informative website. Stay tuned for updates!'
 }));

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



// Add these at the top with other requires
const bodyParser = require('body-parser');
const { deserialize } = require('v8');

// Add after express.static middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Add this route before app.listen
app.post('/submit-contact', (req, res) => {
    // In a real app, you would save this to a database
    console.log('Form submission received:', req.body);
    res.redirect('/contact?success=true');
});
