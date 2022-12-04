
const kitt = {
    nickName: "K.I.T.T",
    brand: "Pontiac",
    model: "Firebird Trans Am",
    maxSpeed: 250
};

const lightningMcQueen = {
    nickName: "Lightning McQueen",
    brand: "Custom-built",
    model: "Stock Car",
    maxSpeed: 360
};

const flux = {
    nickName: "Flux",
    brand: "DeLorean",
    model: " DMC-12",
    maxSpeed: 198
};

const herbie = {
    nickName: "Herbie",
    brand: "Volkswagen",
    model: "Beetle",
    maxSpeed: 120
};

const generalLee = {
    nickName: "Gerneral Lee",
    brand: "Dodge",
    model: "Charger",
    maxSpeed: 224
};

const batMobile = {
    nickName: "Batmobile",
    brand: "Wayne Industries",
    model: "Batmobile",
    maxSpeed: 524
};

const cars = [kitt, lightningMcQueen, flux, herbie, generalLee, batMobile];

function bubbleSortCarsWithIf(arr, sortingCriteria){

    let  j;
    let len = arr.length;

    let isSwapped = false;
    let biggestIndex = len-1;

    do {

        isSwapped = false;

        for(j = 0; j < biggestIndex; j++){

            if (sortingCriteria === "nickName")
            {
                if(arr[j].nickName > arr[j + 1].nickName){
                    let temp = arr[j]
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    isSwapped = true;
                }

            }
            else if (sortingCriteria === "brand")
            {
                if(arr[j].brand > arr[j + 1].brand){
                    let temp = arr[j]
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    isSwapped = true;
                }

            }
        }

        biggestIndex--;
        // If no elements were swapped by the inner loop then the array is sorted

    } while (isSwapped);

}

function bubbleSortCarsWithBracketNotation(arr, sortingCriteria){

    let  j;
    let len = arr.length;

    let isSwapped = false;
    let biggestIndex = len-1;

    do {

        isSwapped = false;

        for(j = 0; j < biggestIndex; j++){

            if(arr[j][sortingCriteria] > arr[j + 1][sortingCriteria]) {
                let temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }

        }

        biggestIndex--;
        // If no elements were swapped by the inner loop then the array is sorted

    } while (isSwapped);

}

function bubbleSortCarsWithFunction(arr, sortingFunction){
    let j, len = arr.length, isSwapped = false, biggestIndex = len - 1;

    do {

        isSwapped = false;

        for(j = 0; j < biggestIndex; j++){

            if(sortingFunction(arr[j], arr[j+1]) === 1){
                let temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }

        }

        biggestIndex--;
        // If no elements were swapped by the inner loop then the array is sorted

    } while (isSwapped);


}

function sortByNickName(car1 , car2) {
    if (car1.nickName > car2.nickName) {
        return 1;
    }
    else if (car1.nickName < car2.nickName) {
        return -1;
    }
    else {
        return 0;
    }

}

function displayCars(cars, carProperty, elementId)
{
    const sortedResult = document.getElementById(elementId);
    sortedResult.style.display = 'block';

    for (let i = 0; i < cars.length; i++) {
        let li = document.createElement('li');
        li.innerText = cars[i]["nickName"] + ": " + cars[i][carProperty];
        sortedResult.appendChild(li);
    }
}



