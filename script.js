const cards = document.querySelectorAll('.course-card');

cards.forEach(card => {

card.addEventListener('mousemove', e => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

card.style.background =
`
radial-gradient(
circle at ${x}px ${y}px,
rgba(0,229,255,.15),
transparent 50%
)
`;

});

card.addEventListener('mouseleave', ()=>{

card.style.background='transparent';

});

});
