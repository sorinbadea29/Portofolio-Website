
// Check for theme in local storage

let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

// ____________________________________________________


let themeDots = document.querySelectorAll('.theme-dot')

for(var i=0; themeDots.length>i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log(mode)
        setTheme(mode);
    })
}


// themeDots.forEach(dot => dot.addEventListener('click', () => {
//     console.log(dot)
//     let mode = this.dataset.mode
//     console.log('option clicked: ', mode)
//     setTheme(mode);
// }));


function setTheme(mode) {
    switch(mode) {
        case "blue":
            document.getElementById('theme-style').href = 'blue.css'
            break;

        case "green":
            document.getElementById('theme-style').href = 'green.css'
            break;
            
        case "purple":
            document.getElementById('theme-style').href = 'purple.css'
            break;

        default:
            document.getElementById('theme-style').href = 'default.css'
        }

        localStorage.setItem('theme', mode)
    } 


// -------------------------OR-------------------------------------
 

// function setTheme(mode){
// 	if(mode == 'light'){
// 		document.getElementById('theme-style').href = 'default.css'
// 	}

// 	if(mode == 'blue'){
// 		document.getElementById('theme-style').href = 'blue.css'
// 	}

// 	if(mode == 'green'){
// 		document.getElementById('theme-style').href = 'green.css'
// 	}

// 	if(mode == 'purple'){
// 		document.getElementById('theme-style').href = 'purple.css'
// 	}

// 	localStorage.setItem('theme', mode)
// }









