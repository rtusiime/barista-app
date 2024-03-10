import { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../data/drinks.json";

const BarristaForm = () => {

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    };

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']) {
            setTemp('wrong');
        }
        else {
            setTemp('correct');
        }
        if (trueRecipe.syrup != inputs['syrup']) {
            setSyrup('wrong');
        }
        else {
            setSyrup('correct');
        }
        if (trueRecipe.blended != inputs['blended']) {
            setBlended('wrong');
        }
        else {
            setBlended('correct');
        }
        if (trueRecipe.milk != inputs['milk']) {
            setMilk('wrong');
        }
        else {
            setMilk('correct');
        }
    };

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });
        setTemp('');
        setMilk('');
        setSyrup('');
        setBlended('');
        getNextDrink();
    };

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    };

    const [currentDrink, setCurrentDrink] = useState('');

    const [trueRecipe, setTrueRecipe] = useState({
        "temp": '',
        "syrup": '',
        "milk": '',
        "blended": ''
    });

    const [temp, setTemp] = useState('');
    const [milk, setMilk] = useState('');
    const [syrup, setSyrup] = useState('');
    const [blended, setBlended] = useState('');


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

            <form className="container">

            <div className="mini-container">
                <h3>Temperature</h3>
                <div className="answer-space" id={temp}>
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
            </div>

            <div className="mini-container">
                <h3>milk</h3>
                <div className="answer-space" id={milk}>
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
            </div>

            <div className="mini-container">
                <h3>syrup</h3>
                <div className="answer-space" id={syrup}>
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
            </div>

            <div className="mini-container">
            <h3>blended</h3>
            <div className="answer-space" id={blended}>
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
            </div>

            </form>

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