/* Total visisted */
const totalVisited = document.getElementById("visited");

function updateVisited() {
    fetch('https://api.countapi.xyz/update/aaryan-shaikh/portfolio/?amount=1')
        .then(res => res.json())
        .then(res => {
            totalVisited.innerHTML = res.value;
        });
}
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    swal({
        title: "Opps!!",
        text: "You see this is a Desktop Application, so it would be better if you open me on your PC!!",
        icon: "warning",
        buttons: {
            confirm: "Okay! Got it!"
        }
    }).then(val => {
        if (val) {
            window.close('', '_parent', '');
        }
    });
} else {
    updateVisited();
}
/* Loader */

$(window).on("load", function () {
    $("#faba").fadeIn("slow");
    $(".loader-wrapper").fadeOut("slow");
    // tutorial
    if (!isMobile) {
        introJs().setOptions({
                steps: [{
                        position: "right",
                        intro: "Hey There! Welcome to my portfolio 😎.(Please Note!! You cannot interact with anything except the 'next' and 'back' buttons until the tutorial is completed!! If you want to skip or close this tutorial you can click that 'X' button) Well there are many things going on here so I'll give you a quick walkthrough! let's continue!",
                        element: document.querySelector('#myimg')
                    },
                    {
                        position: "right",
                        intro: "If you want to give me a follow up, all my social media links are available with this little guy!😏. Oh I totally forgot! You can also use left and right keys to navigate!!",
                        element: document.querySelector('.action')
                    },
                    {
                        position: "left",
                        intro: "If you get confused 😵, remember to try Hovering it! I've added a lots of effects so try finding out all of them!✌️",
                        element: document.querySelector('.phead')
                    },
                    {
                        position: "top",
                        intro: "Like this one here 👇",
                        element: document.querySelector('.tul')
                    },
                    {
                        position: "left",
                        intro: "There you go. You found me!!😄 Good! You can always drop me a message! I'll be happy to hear from You!😏",
                        element: document.querySelector('.contactform')
                    },
                    {
                        position: "center",
                        intro: "And finally if you're like me who doesn't like scrolling 😥, there's a black button on your right which will scroll you back all the way to the top!!"
                    },
                    {
                        position: "right",
                        intro: "Also that navigation bar is not for show 😂, you can use it to navigate through my website!! Well That's about it for me! Don't forget to press CTRL+K to find all the cheats you can use in my website!!! Have Fun! ✌️",
                        element: document.querySelector('#myimg')
                    }
                ],
                showProgress: true,
                showBullets: false,
                disableInteraction: true,
                exitOnOverlayClick: false,
                exitOnEsc: false,
                nextToDone: true
            }).onexit(function () {
                swal({
                    title: "You're one of the " + totalVisited.innerHTML +
                        " people who have visited my website!!",
                    icon: "success",
                });
            })
            .start();
    }
    /* background */
    particlesJS.load('himg', 'particle-cfg.json');
    introJs.fn.oncomplete(function () {
        swal({
            title: "You're one of the " + totalVisited.innerHTML +
                " people who have visited my website!!",
            icon: "success",
        });
    });

    /*counter*/

    lax.init()
    lax.addDriver('scrollY', function () {
        return window.scrollY
    });
});
/* No Copy */
function rclick() {
    swal({
        title: "Oye Oye Oye!! No right-clicking and downloading stuff😂😂😂!!",
        buttons: {
            confirm: "Okay! Got it!"
        }
    });
    return false;
}
Mousetrap.bind(['ctrl+shift+i'], function (e) {
    swal({
        title: "Why copy my code when you can build something Bad-Ass of your own!!!",
        buttons: {
            confirm: "Yeah! Cool!"
        }
    });
    return false;
});
/* Cheats */
Mousetrap.bind(['ctrl+k'], function (e) {
    swal({
        title: "Cheats!!",
        text: "1. goodbye -> closes the website\n2. iliketocode -> opens up my Github!\n3. followmeup -> opens up my Instagram\n4. popthehood -> List of all the libraries I've used in this website!\n5. iwannaplay -> opens up my game you can download in itch.io(for other games you can click on my projects)",
        icon: "warning"
    });
    return false;
});
Mousetrap.bind('g o o d b y e', function () {
    swal({
        title: "Thank you for visiting my website!!",
        buttons: {
            confirm: "Yeah! Sure!"
        }
    }).then(val => {
        if (val) {
            window.close('', '_parent', '');
        }
    });
});
Mousetrap.bind('i l i k e t o c o d e', function () {
    window.open("https://github.com/AaryanShaikh/");
});
Mousetrap.bind('f o l l o w m e u p', function () {
    window.open("https://www.instagram.com/its.me.cypher/");
});
Mousetrap.bind('i w a n n a p l a y', function () {
    window.open("https://0code.itch.io/the-unknown");
});
var libCheck = false;
Mousetrap.bind('p o p t h e h o o d', function () {
    swal({
        title: "Libraries!!",
        text: "Here's all the libraries I've used!...can't see? Try to scratch the screen using your mouse!!! And don't forget to press CTRL + L to close this!!",
        icon: "warning"
    });
    document.getElementById('scratch').style.display = 'flex';
    libCheck = true;
    return false;
});
Mousetrap.bind(['ctrl+l'], function () {
    document.getElementById('scratch').style.display = 'none';
    libCheck = false;
    return false;
});

// scratch card
function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('scratch');
}

function draw() {
    strokeWeight(40);
    smooth();
    if (mouseIsPressed === true && libCheck === true) {
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
}
/*3d*/
Array.from(document.querySelectorAll('.imgbxth')).forEach((e) => {
    const imgs = Array.from(e.querySelectorAll('img'));
    new hoverEffect({
        parent: e,
        intensity: 1,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage: 'displacement/1.jpg' /*{4,7,10,14,}*/
    });
})
/*auto typing*/
var typed2 = new Typed('#animate', {
    strings: ['<span id="wh">I\'m a</span> Game Developer', '<span id="wh">I\'m a</span> Web Developer',
        '<span id="wh">I\'m a</span> Graphics Designer', '<span id="wh">I\'m a</span> Video Editor'
    ],
    typeSpeed: 30,
    backSpeed: 50,
    smartBackspace: true,
    loop: true
});
/*navigation*/

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
/*fab button*/

function actionToggle() {
    var action = document.querySelector('.action');
    action.classList.toggle('active')
}
/*up navigation*/
window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scrollup');
    scroll.classList.toggle("active", window.scrollY > 500);
})

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
/*scrolldown navigation*/
function scrollDown() {
    window.location = "#about";
    //window.scrollBy(0,690)
}
/*content appearing outta nowhere!!!*/
var s = skrollr.init();
/*projects selection*/
$(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.box').show('1000');
        } else {
            $('.box').not('.' + value).hide('1000');
            $('.box').filter('.' + value).show('1000');
        }
    })
    //adding active class on selection
    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
})

/* Contact me */
function submitD() {
    var first = document.getElementById("first").value;
    var msg = document.getElementById("msg").value;
    var last = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    if (first && msg && last && email) {
        var epat = new RegExp(/^([\w\d\.])+\@([\w\d\.])+\.(in|com)$/);
        if (email.match(epat)) {
            var npat = new RegExp(/^[A-Za-z]+$/)
            if (first.match(npat) && last.match(npat)) {
                swal({
                    title: "Are you sure the details are correct?",
                    icon: "warning",
                    buttons: {
                        cancel: "No I'm not sure...",
                        confirm: "Yes I'm sure!"
                    }
                }).then(val => {
                    if (val) {
                        swal({
                            title: "Thanks!!",
                            text: "I've got your message!!",
                            icon: "success"
                        });
                        document.getElementById("first").value = "";
                        document.getElementById("last").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("msg").value = "";
                        Email.send({
                            SecureToken: "308d5264-29cc-4a82-88d9-748811e6c547",
                            To: 'aayanshaikh27638@gmail.com',
                            From: email,
                            Subject: "This is the subject",
                            Body: "Name: " + first + " " + last + "\nMessage:" + msg
                        }).then(

                        );
                    } else {
                        swal({
                            text: "No Problem! check and come back!"
                        });
                    }
                });
            } else {
                swal({
                    title: "Incorrect Name!",
                    text: "Oops!! It seems like you've entered incorrect name!!",
                    icon: "warning"
                });
                document.getElementById("first").value = "";
                document.getElementById("last").value = "";
            }
        } else {
            swal({
                title: "Incorrect Email!",
                text: "Oops!! It seems like you've entered incorrect Email!!",
                icon: "warning"
            });
            document.getElementById("email").value = "";
        }
    } else {
        swal({
            title: "Fields are blank!!",
            text: "Hey! hey! You don't need to rush. Make sure you fill all the details!!",
            icon: "warning"
        });
    }
}
/* progress */
var progbar = document.getElementById("progbar");
var totalht = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    var prog = (window.pageYOffset / totalht) * 100;
    progbar.style.height = prog + "%";
}
/* chat bubbles */
var chatbub = anime.timeline({
    easing: 'easeOutExpo',
    loop: true
});
chatbub
    .add({
        targets: '.cbr-txt2',
        duration: 1,
        scale: 0
    })
    .add({
        targets: '.cbr2',
        duration: 1,
        scale: 0
    })
    .add({
        targets: '.cbr-txt',
        duration: 1,
        scale: 0
    })
    .add({
        targets: '.cbr',
        duration: 1,
        scale: 0
    })
    .add({
        targets: '.cbl-txt2',
        duration: 1,
        scale: 0
    })
    .add({
        targets: '.cbl2',
        duration: 1,
        scale: 0
    })
    .add({
        targets: '.cbl',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.cbl-txt',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.cbl-txt',
        duration: 500,
        delay: 5000,
        scale: 0
    })
    .add({
        targets: '.cbl',
        duration: 500,
        delay: 0,
        scale: 0
    })
    .add({
        targets: '.cbr',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.cbr-txt',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.cbr-txt',
        duration: 500,
        delay: 5000,
        scale: 0
    })
    .add({
        targets: '.cbr',
        duration: 500,
        delay: 0,
        scale: 0
    })
    .add({
        targets: '.cbl2',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.cbl-txt2',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.cbl-txt2',
        duration: 500,
        delay: 5000,
        scale: 0
    })
    .add({
        targets: '.cbl2',
        duration: 500,
        delay: 0,
        scale: 0
    })
    .add({
        targets: '.cbr2',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.cbr-txt2',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.cbr-txt2',
        duration: 500,
        delay: 5000,
        scale: 0
    })
    .add({
        targets: '.cbr2',
        duration: 500,
        delay: 0,
        scale: 0
    })