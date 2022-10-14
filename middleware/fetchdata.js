

const fetchdata = (req, res, next) => {
const id =  req.header('i-d');
if (!id) {
    res.status(401).send({error:'please authenticate using a valid token'});
}
try {
    const data =  id;
    req.notes = data.notes;
    next();
} catch (error) {
    res.status(401).send({error:'please authenticate using a valid token'}); 
}
}
module.exports = fetchdata