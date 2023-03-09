const menu = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.59,
        img:'./images/item-1.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corporis.',
    },
    {
        id: 2,
        title: 'dinner double',
        category: 'dinner',
        price: 15.59,
        img:'./images/item-2.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corporis.',
    },
    {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 15.59,
        img:'./images/item-3.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corporis.',
    },
    {
        id: 4,
        title: 'muffin blueberry',
        category: 'breakfast',
        price: 15.59,
        img:'./images/my-1.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corporis.',
    },
    {
        id: 5,
        title: 'Tomato Pasta',
        category: 'lunch',
        price: 15.59,
        img:'./images/my-2.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corporis.',
    },
    {
        id: 6,
        title: 'steak',
        category: 'dinner',
        price: 15.59,
        img:'./images/my-3.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corporis.',
    }
]

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('btn-container');

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) =>{
        return `
        <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}buttermilk pancakes</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
           ${item.desc}
          </p>
        </div>
      </article> 
      `
    });
    console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

window.addEventListener('DOMContentLoaded',() => {
    displayMenuItems(menu);
});
