import React from 'react';
import { choice, remove } from './helpers';
import FRUITS from './foods';


const fruit = choice(FRUITS);
console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log("Delicious! May I have another?");

let left = remove(FRUITS, fruit);
console.log(`I'm sorry, we're all out. We have ${left.length} left.`);
