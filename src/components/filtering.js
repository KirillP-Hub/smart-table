import {createComparison, defaultRules} from "../lib/compare.js";

const compare = createComparison(defaultRules);
export function initFiltering(elements, indexes) {
    // @todo: #4.1 — заполнить выпадающие списки опциями
    Object.keys(indexes).forEach((elementName) => { 
        elements[elementName].append(
            ...Object.values(indexes[elementName]).map(name => {
                // Создаем элемент option
                const option = document.createElement('option');
                option.value = name;       // устанавливаем значение
                option.textContent = name; // устанавливаем текст
                return option;             // возвращаем для append
            })
        );
    });

    return (data, state, action) => {
        // @todo: #4.2 — обработать очистку поля
       if (action && action.name === 'clear') {
            const input = action.parentElement.querySelector('input, select');
            const fieldName = action.dataset.field; 

            if (input) {
                input.value = ''; 
            }чы

            if (fieldName && state[fieldName]) {
                state[fieldName] = ''; 
            }
        }
        // @todo: #4.5 — отфильтровать данные используя компаратор
        return data.filter(row => compare(row, state));
      return data;
   } 

}