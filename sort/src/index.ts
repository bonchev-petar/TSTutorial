import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

// const numbersCollection = new NumbersCollection([66, 10, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const characrerCollection = new CharacterCollection('Xayybr');
// characrerCollection.sort();
// console.log(characrerCollection.data);
