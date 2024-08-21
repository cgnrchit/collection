// Sample users data
const users = [
    { username: 'anchal', password:'anch',branch: 'anchal'},
    { username: 'budhanoor', password:'budh',branch: 'budhanoor'},
    { username: 'chengannur', password:'chen',branch: 'chengannur'},
    { username: 'tbroad', password:'chry',branch: 'tbroad'},
    { username: 'elavumthitta', password:'elav',branch: 'elavumthitta'},
    { username: 'erumeli', password:'erum',branch: 'erumeli'},
    { username: 'karakkad', password:'kara',branch: 'karakkad'},
    { username: 'kply', password:'karu',branch: 'karunagappally'},
    { username: 'kottukadu ', password:'kott',branch: 'kottukadu'},
    { username: 'kurichy ', password:'kuri',branch: 'kurichy'},
    { username: 'mararit', password:'mara',branch: 'mararithottam'},
    { username: 'neduvathoor', password:'nedu',branch: 'neduvathoor'},
    { username: 'padanilam ', password:'pada',branch: 'padanilam'},
    { username: 'pallippad', password:'pall',branch: 'pallippad'},
    { username: 'pannikkaru', password:'pann',branch: 'pannikkarukadavu'},
    { username: 'parumala', password:'paru',branch: 'parumala'},
    { username: 'pazhakulam ', password:'pazh',branch: 'pazhakulam'},
    { username: 'puthen', password:'puth',branch: 'puthenchanda'},
    { username: 'thrikkuna', password:'thri',branch: 'thrikkunnapuzha'},
    { username: 'thevalakara', password:'thev',branch: 'thevalakara'},
    { username: 'vazhuvadi', password:'vazh',branch: 'vazhuvadi'},

    { username: 'cheriyanad', password:'cher',branch: 'cheriyanad'},
    { username: 'chettikul', password:'chet',branch: 'chettikulangara'},
    { username: 'chunakkara', password:'chun',branch: 'chunakkara'},
    { username: 'chungapara ', password:'chun',branch: 'chungapara'},
    { username: 'edappon ', password:'edap',branch: 'edappon'},
    { username: 'edathitta ', password:'edat',branch: 'edathitta'},
    { username: 'ennakkad ', password:'enna',branch: 'ennakkad'},
    { username: 'kadapra', password:'kada',branch: 'kadapra'},
    { username: 'kakanad ', password:'kaka',branch: 'kakanad'},
    { username: 'kallumood ', password:'kall',branch: 'kallumood'},
    { username: 'kangazha', password:'kang',branch: 'kangazha'},
    { username: 'kodumon ', password:'kodu',branch: 'kodumon'},
    { username: 'kollakadavu ', password:'koll',branch: 'kollakadavu'},
    { username: 'konni', password:'konn',branch: 'konnimarket'},
    { username: 'koodal ', password:'kood',branch: 'koodal'},
    { username: 'kotta', password:'kott',branch: 'kotta'},
    { username: 'kulanada', password:'kula',branch: 'kulanada'},
    { username: 'kulikam', password:'kuli',branch: 'kulikampalam'},
    { username: 'kunnamt', password:'kunn',branch: 'kunnamthanam'},
    { username: 'kunni', password:'kunn',branch: 'kunnikkuzhy'},
    { username: 'mannar ', password:'mann',branch: 'mannar'},
    { username: 'nariya', password:'nari',branch: 'nariyapuram'},
    { username: 'omalloor', password:'omal',branch: 'omalloor'},
    { username: 'pallickal', password:'pall',branch: 'pallickal'},
    { username: 'pandalam', password:'pand',branch: 'pandalam'},
    { username: 'pandanad ', password:'pand',branch: 'pandanad'},
    { username: 'perumpetty', password:'peru',branch: 'perumpetty'},
    { username: 'punthala ', password:'punt',branch: 'punthala'},
    { username: 'puramattom ', password:'pura',branch: 'puramattom'},
    { username: 'sooranad ', password:'soor',branch: 'sooranad'},
    { username: 'thattaram', password:'that',branch: 'thattarambalam'},
    { username: 'thiruvalla ', password:'thir',branch: 'thiruvalla'},
    { username: 'ullanadu', password:'ulla',branch: 'ullanadu'},
    { username: 'vallakali ', password:'vall',branch: 'vallakali'},
    { username: 'venmony ', password:'venm',branch: 'venmony'},
    { username: 'vettiyar', password:'vett',branch: 'vettiyar'}
    
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Find user with matching username and password
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Store branch information in localStorage
        localStorage.setItem('branchName', user.branch);

        // Redirect to branch page
        window.location.href = 'index11.html';
    } else {
        alert('Invalid username or password');
    }
});