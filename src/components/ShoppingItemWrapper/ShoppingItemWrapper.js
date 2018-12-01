
class ShoppingItemWrapper extends Component {
  changeMode(){
    const modes = [
      'unpurchased',
      'edit',
      'checked'
    ]
  }

  options(){
    // main idea about this method related to understand - can we edit an ingredient or not.
    // if ingredient was cloned from main collection - then you cannot edit it, because you'll broke main collection
    // so you should create a new ingredient and replace it with old version of ingredient(and remove that id)
    const a = [
      'new',
      'protected'
    ]
  }
}

export default ShoppingItemWrapper;
