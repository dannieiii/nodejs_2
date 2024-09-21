const main ={
    index: (req, res)=>{
        res.render('index');
    },
    about: (req, res)=>{
        res.render('about');
    },
    projects: (req, res)=>{
        res.render('projects');
    },
    blogs: (req, res)=>{
        res.render('blogs');
    },
    service: (req, res)=>{
        res.render('service');
    },
    team: (req, res)=>{
        res.render('team');
    },
    time: (req, res)=>{
        res.render('time');
    },
    faq: (req, res)=>{
        res.render('faq');
    },
    clients: (req, res)=>{
        res.render('clients');
    },
    careers: (req, res)=>{
        res.render('careers');
    },
    contact: (req, res)=>{
        res.render('contact');
    },

    
};

module.exports = main;