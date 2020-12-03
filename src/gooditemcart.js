class GoodItemInCart extends GoodItem {
    constructor(props) {
      super(props);
    }
  
    render(placeToRender) {
      if (placeToRender) {
        const block = document.createElement('div');
        block.classList.add('cart__good');
        block.innerHTML = `${this.name} ${this.model} = ${this.price} x ${this.counter}`;
        placeToRender.appendChild(block);
      }
    }
  }