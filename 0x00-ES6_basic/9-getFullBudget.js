import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    // First way to declare a method in object
    getIncomeInDollars(income) { return `$${income}`; },
    // second way to declare a method in object
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
