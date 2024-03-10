import React, { Component, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../data/drinks.json"

const BarristaForm = () => {

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    })

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const onCheckAnswer = () => {
        console.log("boob")
    }

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });
        getNextDrink();
    }

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name)
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients)
    }

    const [currentDrink, setCurrentDrink] = useState('')
    const [trueRecipe, setTrueRecipe] = useState({
        "temp": '',
        "syrup": '',
        "milk": '',
        "blended": ''
    })


    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button
                    type="new-drink-button"
                    className="button newdrink"
                    onClick={onNewDrink}
                >
                    🔄
                </button>
            </div>

            <form action="">

            </form>

            <h3>Temperature</h3>
            <div className="answer-space">
                {inputs["temperature"]}
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="temperature"
                choices={ingredients['temperature']}
                checked={inputs['temperature']}
            />

            <h3>milk</h3>
            <div className="answer-space">
                {inputs["milk"]}
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="milk"
                choices={ingredients['milk']}
                checked={inputs['milk']}
            />

            <h3>syrup</h3>
            <div className="answer-space">
                {inputs["syrup"]}
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="syrup"
                choices={ingredients['syrup']}
                checked={inputs['syrup']}
            />

            <h3>blended</h3>
            <div className="answer-space">
                {inputs["blended"]}
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="blended"
                choices={ingredients['blended']}
                checked={inputs['blended']}
            />

            <button
                type="submit"
                className="button submit"
                onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button
                type="new-drink-button"
                className="button submit"
                onClick={onNewDrink}
            >
                New Drink
            </button>
        </div>
    );
};

export default BarristaForm