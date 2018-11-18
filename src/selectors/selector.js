import { groceriStar } from "@groceristar/groceristar-fetch";


const getDepartments = () => {
  return groceriStar..getAllDepartments();
}

//we use number 3 here before
const getGroceryById = (id) => {
  return groceriStar.getGroceryById
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

export { getDish, getRecipeChickenKyiv }
