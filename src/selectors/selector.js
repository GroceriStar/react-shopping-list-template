import { groceriStar } from "@groceristar/groceristar-fetch";

console.log(groceriStar);

//
// const getDepartments = () => {
//   return groceriStar.getAllDepartments();
// }


const getGroceryById = (id) => {
  return groceriStar.getGroceryById(id);
}

//by department name, but i don't want to make this name long
// @TODO change it later.
// "Fresh vegetables" we used
const getIngredients = (departmentName) => {
  return groceriStar.getAllIngredientsByOneDepartment(departmentName);
}


const getAllIngredients = () => {
  return groceriStar.getIngredients();
}

const getGroceryLists = () => {
  return groceriStar.getGrocery();
}

const getUsers = () => {
  return groceriStar.getUsers();
}

const getDepartments = (all = true) => {

  if( all ){
    return groceriStar.getAllDepartments();
  }

  return groceriStar.getDepartments();
}

export { getGroceryById, getIngredients, getAllIngredients, getGroceryLists, getUsers, getDepartments }
