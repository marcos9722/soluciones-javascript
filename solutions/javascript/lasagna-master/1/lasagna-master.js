/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else if (remainingTime >0) {
    return 'Not done, please wait.';
  } else {
    return 'You forgot to set the timer.';
  }
}


export function preparationTime(layers, minsPerLayer = 2) {
  return layers.length * minsPerLayer;
}

export function quantities (layers) {
  const obj = {
    noodles: 0,
    sauce: 0,
  }
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') {
      obj.noodles += 50;
    }else if (layers[i] === 'sauce') {
      obj.sauce += 0.2;
    }
  }
  return obj;
}

export function addSecretIngredient(friendList,myList) {
  myList.push(friendList[friendList.length -1]);
}

export function scaleRecipe(recipe, portions) {
  let newRecipe = {};
  for (let key in recipe) {
    newRecipe[key] = recipe[key] * (portions/2); 
  }
  return newRecipe;
}