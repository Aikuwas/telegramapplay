const data = [
    {
        title: 'first',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`
    },
    {
        title: 'second',
        text: `Marvel counts among its characters such well-known superheroes as Spider-Man, Iron Man, Captain America, Thor, Doctor Strange, Hulk, Wolverine, and Captain Marvel, as well as popular superhero teams such as the Avengers, the X-Men, the Fantastic Four, and the Guardians of the Galaxy. Its stable of well-known supervillains includes the likes of Doctor Doom, Magneto, Ultron, Thanos, Green Goblin, Galactus, Loki, and Kingpin. Most of Marvel's fictional characters operate in a single reality known as the Marvel Universe, with most locations mirroring real-life places; many major characters are based in New York City.[4] Additionally, Marvel has published several licensed properties from other companies.
         This includes Star Wars comics twice from 1977 to 1986 and again since 2015.`,
         
    },
    {
        title: 'third',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`
    },
    {

        title: 'fourth',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`
    },]
// const accordion = document.querySelectorAll('.accordion__wrap')
// accordion.forEach(el => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('accordion__active')
//     })
// })
const accordion = document.querySelector('.accordion')
data.forEach(el => {
    const accordion__wrap = document.createElement('div')
    const accordion__name  = document.createElement('div')
    const accordion__content = document.createElement('div')
    const image = document.createElement('img')
    const text = document.createElement('p')
    const title = document.createElement('p')

    title.textContent = el.title
    text.textContent = el.text
    image.src='./plus.png'

    accordion__wrap.className = "accordion__wrap"
    accordion__name.className = "accordion__name"
    accordion__content.className = "accordion__content"
    image.className = "plus"
    // accordion__wrap.classList.add

    accordion.append(accordion__wrap)
    accordion__wrap.append(accordion__name,accordion__content)
    accordion__name.append(title,image)
    accordion__content.append(text)
})
const accordion__wrap = document.querySelectorAll('.accordion__wrap')
// accordion__wrap.forEach(el => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('accordion__active')
//     })
// })

const activeButton = () => {
    accordion__wrap.forEach((el, parentIndex) => {
      el.addEventListener("click", () => {
        accordion__wrap.forEach((item, childIndex) => {
          if (parentIndex === childIndex) {
            item.classList.toggle("accordion__active");
          } else if (parentIndex !== childIndex) {
            item.classList.remove("accordion__active");
          }
        });
      });
    });
  };
  activeButton();

const accordion__content = document.querySelectorAll('.accordion__content')

accordion__content.forEach(el=>{
    el.addEventListener('click',(e)=>{
        e.stopPropagation()
    })
})




