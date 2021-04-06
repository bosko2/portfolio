function getColor(item) {
    switch (item) {
        case 1:
            return '#01BA53'
        case 2:
            return '#eaf62d'
        case 3:
            return '#ff5d1e'
    }
}

// Listen for orientation changes

function test() {
    if (window.innerWidth > window.innerHeight) {
        return 35
    } else {
        console.log('test')
        return 70
    }
}

AOS.init();

anime({
    targets: '#arrow',
    translateY: '-5vh',
    direction:'alternate',
    loop:true
})

document.querySelector('#arrow').addEventListener('click',()=>{
    let len={prop1:0};
    anime({
        targets: len,
        prop1:window.innerHeight,
        update: ()=>{
            window.scroll(0,len.prop1)
        }
    })
})


a = Array.of(2, 1, 3, 3, 3, 2, 1, 2, 3)
a.forEach((item, index) => {
    document.addEventListener('aos:in:skill' + (index + 1).toString(), () => {
        document.getElementById('skill' + (index + 1).toString()).style.width = (10).toString() + 'vw';
        document.getElementById('skill' + (index + 1).toString()).style.backgroundColor = '#01BA53';
        anime({
            targets: '#skill' + (index + 1).toString(),
            width: (test() * item / 3).toString() + 'vw',
            backgroundColor: getColor(item),
            duration: 1500 + 20 * item * index,
            easing: 'easeOutBounce',
        })
    });
})

var b = document.querySelector('#mail');

function aB(s, d, e) {
    anime.remove(b);
    anime({
        targets: b,
        scale: s,
        duration: d,
        elasticity: e
    });
}

function eB() { aB(1.2, 800, 400) };
function lB() { aB(1.0, 800, 400) };

b.addEventListener('mouseenter', eB );
b.addEventListener('mouseleave', lB);