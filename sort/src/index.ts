import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort()
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Rzeczpospolita');
charactersCollection.sort()
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(0);
linkedList.add(6.283185);
linkedList.add(-40);
linkedList.add(3);
linkedList.sort();
console.log(linkedList.print());
